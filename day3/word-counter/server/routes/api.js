const express = require('express')
const router = express.Router()


const wordCounter = {}

router.get(`/sanity`, function (req, res) {
    res.send(`Server up and running`)
})

router.get(`/word/:word`, function (req, res) {
    let word = req.params.word
    if (wordCounter[word]) {
        res.send(`count: ${wordCounter[word]}`)
    }
    else {
        res.send(`{count: 0}`)
    }
})

router.post(`/word/:word`, function(req, res){
    let word = req.params.word
    if (wordCounter[word]) {
        wordCounter[word]++
        res.send(`text: "Added ${word}", currentCount: ${wordCounter[word]}`)
    }
    else {
        wordCounter[word] = 1
        res.send(`text: "Added ${word}", currentCount: ${wordCounter[word]}`)
    }
})

router.post(`/words/`, function(req, res){
    let sentence = req.body.sentence
    let words = sentence.split(` `)
   let newWords = 0
   let oldWords = 0
    words.forEach( w => { 
        if (wordCounter[w]) {
            wordCounter[w]++
            oldWords++
        }
        else {
            wordCounter[w] = 1
            newWords++
        }})
        res.send(`{text: "Added ${newWords} words, ${oldWords} already existed", currentCount: -1}`)
})

router.get(`/total`, function (req, res) {
  let total = 0
  for( let w in wordCounter){
      total += wordCounter[w]
  }
 
    res.send({text: "Total count", count: {total} })
    
})
module.exports = router