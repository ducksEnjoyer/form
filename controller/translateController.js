
const path = require("path");
const resolve = path.resolve
const FrenchToEnglish = require("../model/frenchToEnglish.js");
const addWord = async (req, res) => {
  console.log(req.body);
  
  const { french, english } = req.body;
  const newWord = new FrenchToEnglish({ 
    french,
    english,
  });

  await newWord.save();
  res.status(200)
  res.json("all goodie doodie") //its so fasttt omgggg theapi did itin one second even less btw now you can do all else i dont know how to get my array with react we have a route already getWords look by yourself, you just need to
  // me too so i suggest we stop on that, also cuz my friend calling me to play warframe
  

  
};
const getWords = async (req, res) => {
  // const words = await FrenchToEnglish.find({ english: "lets see" }); 
  const words = await FrenchToEnglish.find(); 
  console.log(words);
  res.json(words);
};
module.exports = {
  addWord,
  getWords,
  
};
 