/*w i write all again  h*/
const mongoose = require("mongoose")
const connectDB = async () => {
  try {
    console.log("Connecting to DB...")
    const conn = await mongoose.connect(process.env.DB_STRING, {
      // you probably need those 2 things, do you remember what it was?
      // you forgot to export  WiIAtTTTTTHJADBUACIOA wait even if i didnt module.ex LINEEEEEEEEEports why would it crahs ?  
    }) 
    console.log("Connected to DB sssucccesssfully!")
  } catch (error) {
    console.log("unfornutaly ...",error)
  }
}

module.exports = connectDB