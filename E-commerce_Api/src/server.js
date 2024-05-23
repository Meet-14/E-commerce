const app = require(".");
const {connectDb} = require("./config/db")
const PORT=3000
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("Server is Start on PORT",PORT);
})