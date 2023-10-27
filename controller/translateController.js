
const path = require("path");
const resolve = path.resolve
const FrenchToEnglish = require("../model/frenchToEnglish.js");//so this is the model 
const addWord = async (req, res) => {
  console.log(req.body);
  
  const { french, english } = req.body;
  const newWord = new FrenchToEnglish({ //we create 
    french,
    english,
  });

  await newWord.save();
  

  
};
//indexpage of what ? of the whole site ?    
// im dead brained asf, you know everything you need, do it, im confused asf what pages you want where  ? just addW ord where will be index page then everything ye
const getWords = async (req, res) => {
    
        res.sendFile(resolve(__dirname,"../views/addWord.html"))
     //we re good ?
};
module.exports = {
  addWord,
  getWords,
  
};
