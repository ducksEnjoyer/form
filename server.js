const express = require("express")
const app = express()
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
const PORT = process.env.PORT || 8000
const routerWord = require("./router/translateRouter") // it cant find controller
app.use(express.static("static"))
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/add", routerWord)

app.listen(PORT,()=>{ 
  console.log(`listening to port ${PORT}`)
  connectDB()
})