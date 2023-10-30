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
    }) 
const FrenchToEnglish = mongoose.model("FrenchToEnglish", FrenchToEnglishSchema); //so FrenchToEnglish is the name of the collection right ? yeah hmm ok ok so now we ll just need on game side to fetch this and we ll have our beautiful array
module.exports = FrenchToEnglish;