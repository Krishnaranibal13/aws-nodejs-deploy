const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"Krishna",
            age:24,
            contact:12254
        },env:process.env.NAME
    })
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on ${PORT}`);
})

})
