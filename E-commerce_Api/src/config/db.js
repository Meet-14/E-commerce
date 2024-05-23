const mongoose = require("mongoose");

const api = "mongodb+srv://Meet:MeetAkbari@cluster0.68owkke.mongodb.net/"

const connectDb=()=>{
    return mongoose.connect(api);
}
module.exports={connectDb}