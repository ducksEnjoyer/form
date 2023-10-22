const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000



app.use(express.static("static"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})




