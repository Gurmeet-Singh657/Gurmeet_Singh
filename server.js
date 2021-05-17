const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=80;

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html");
});
app.post("/",(req,res)=>
{   
    var n1=Number(req.body.num1); //Type Conversion
    var n2=Number(req.body.num2);  // Type Conversion
    var result=n1/(n2*n2);
    res.send("The Answer is "+result);
})
app.listen(port,()=>
{
   console.log("Server started on port 80");
});