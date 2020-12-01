let express = require('express')
let app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to my file")
})

app.listen(3000,()=>{
    console.log("App is running sucessfully on port 3000")
})