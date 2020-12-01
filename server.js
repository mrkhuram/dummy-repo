let express = require('express')
let app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Welcome here</h1>")
})

app.listen(3100,()=>{
    console.log("App is running sucessfully on port 3100")
})