const express = require("express")
const app = express()
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
const PORT = process.env.PORT || 8000

app.use(express.static("static")) 
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.get("/",(req,res) => { 
    res.sendFile(__dirname + "/views/index.html")
})
app.get("/add",(req,res) => {
  res.sendFile(__dirname + "/views/addWord.html")
})
app.post("/iWant",(req,res)=>{
  console.log(req.body)
  res.status(200)
})
app.post("/server", (req, res) => {
  console.log(req.body)
  if (req.body.phone.length !== 10) {
    res.status(404).json({
      reason: "not 10 characters bruh"
    })
  } else {
    
    res.status(200)
  }
  
})
app.listen(PORT,()=>{ 
  console.log(`listening to port ${PORT}`)
  connectDB()
})