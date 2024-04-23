const mongo=require("mongoose");

const connection=mongo.createConnection(`mongodb://127.0.0.1:27017/codeblitz`).on('open',()=>{
    console.log("MONGODB CONNECTED");
}).on('error',()=>{
    console.log("CONNECTION ERROR");
})

module.exports=connection;