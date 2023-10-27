const mongoose = require("mongoose")
const FrenchToEnglishSchema = mongoose.Schema({  
      french: {
        type: String,
        required: true, 
      },
      english: {
        type: String,
        required: true,
      }
    })  //how do i call it addWordController.js --WATCH DOESNT WORK LOOKit restart in loop bruhh its werd 1s? ?hmm 
const FrenchToEnglish = mongoose.model("FrenchToEnglish", FrenchToEnglishSchema);
module.exports = FrenchToEnglish;