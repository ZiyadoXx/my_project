const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors());


app.get('/',(req,res)=>{
    res.json({name : "Othmane",age:20});
})


app.listen(4000,()=>console.log("helloooo"));