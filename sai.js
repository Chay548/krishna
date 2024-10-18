const exp=require('express');
const ap=express();
const port=3000;
ap.get("/",(req,res)=>{
    res.send("hk");
});
ap.listen(port,()=>{
    console.log('pk is doing ${port}');
});