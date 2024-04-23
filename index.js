const app=require("./app");
const db=require("./config/db");
const port=3002;
app.listen(port,()=>{
    console.log(`Server listening on port:${port}`);
});