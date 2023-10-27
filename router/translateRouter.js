const express = require("express")
const {
  addWord,
  getWords,
  
} = require("../controller/translateController") 
const router = express.Router()
// good now
router.post("/words", addWord);

router.get("/", getWords);
module.exports = router;