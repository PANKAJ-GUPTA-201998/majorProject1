const express = require('express');
const app = express();
const port=8000;
app.listen(port,(err)=>{
    if (err){
        console.log("error found")
    }
    console.log(`server is running ${port}`)
    
})