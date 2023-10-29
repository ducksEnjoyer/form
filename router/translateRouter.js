const express = require("express")
const {
  addWord,
  getWords,
  
} = require("../controller/translateController") 
const router = express.Router()

router.post("/words", addWord);
router.get("/words", getWords);
module.exports = router;