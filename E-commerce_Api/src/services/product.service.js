const Category = require("../models/category.model.js");
const Product = require("../models/product.model");


async function createProduct(reqData) {
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory });
    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1
        })

        await topLevel.save()
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
    })

    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2
        })

        await secondLevel.save()
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id
    })

    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3
        })

        await thirdLevel.save()
    }
    const defaultSizes = [
        { name: "S", quantity: 50 },
        { name: "M", quantity: 50 },
        { name: "L", quantity: 50 }
    ];

    const product = new Product({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountPersent: reqData.discountPersent,
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.sizes || defaultSizes, 
        quantity: reqData.quantity,
        category: thirdLevel._id
    })

    return await product.save();
}

async function deleteProduct(productId) {
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);

    return "Product Deleted successfully"
}

async function updateProduct(productId, reqData) {
    return await Product.findByIdAndUpdate(productId, reqData)

}

async function findProductById(id) {
    const product = await Product.findById(id).populate('category').exec();

    if (!product) {
        throw new Error("Product not found with id" + id);
    }

    return product
}

async function getAllProduct(reqQuery) {
    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;
    pageSize = pageSize || 10;

    let query = Product.find().populate("category");

    if (category) {
        const existCategory = await Category.findOne({ name: category });
        if (existCategory) {
            query = query.where("category").equals(existCategory._id);
        }
        else {
            return { content: [], currentPage: 1, totalPages: 0 }
        }
    }

    if (color && color.length > 0) {
        const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
        const colorRegex = new RegExp([...colorSet].join("|"), "i");
        query = query.where("color").regex(colorRegex);
    }

    if (sizes && sizes.length > 0) {
        const sizesSet = new Set(sizes);
        query = query.where("sizes.name").in([...sizesSet]);
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        query = query.where('discountedPrice').gte(minPrice).lte(maxPrice);
    }

    if (minDiscount !== undefined) {
        query = query.where("discountPersent").gte(minDiscount);
    }    

    if (stock) {
        if (stock === "in_stock") {
            query = query.where("quantity").gt(0);
        }
        else if (stock === "out_of_stock") {
            query = query.where("quantity").lt(1);
        }
    }

    if (sort) {
        const sortDirection = sort === "price_high" ? -1 : 1;
        query = query.sort({ discountedPrice: sortDirection });
    }

    const totalProduct = await Product.countDocuments(query);

    const skip = (pageNumber - 1) * pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();

    const totalPages = Math.ceil(totalProduct / pageSize);

    return { content: products, currentPage: pageNumber, totalPages };
}


async function createMultipleProduct(products) {
    for (let product of products) {
        await createProduct(product)
    }
}

module.exports = { createProduct, deleteProduct, updateProduct, getAllProduct, findProductById, createMultipleProduct }