const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
const PORT = process.env.PORT || 8000
const apiRouter = require("./router/translateRouter") // it cant find controller
app.use(cors()) // if we just do cors() it will disable cors for everything and everyone will be able to make request lets try it
app.use(express.static("static")) 
app.use(express.json()) // lets remove start command from scripts we re getting there xD i already got this error
app.use(express.urlencoded({ extended: true })) 
//has been so long hpe u guys are all still fine npm install cors did you do it?i guess i cant see terminal
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})
app.get("/addWords",(req,res)=>{
  res.sendFile(__dirname + "/views/addWord.html")
})
app.use("/api", apiRouter)
app.listen(PORT,()=>{ 
  console.log(`listening to port ${PORT}`)
  connectDB()
})