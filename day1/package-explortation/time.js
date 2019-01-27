// let timeNow = new Date()
// console.log(timeNow)

// const moment = require(`moment`)

// let formattedTimeNow = moment().format(`MMMM Do, YYYY`)
// console.log((formattedTimeNow))


// const request = require('request')

// request('http://data.nba.net/10s/prod/v1/2016/players.json', function (err, response) {
//     console.log(response)
// })

const request = require(`request`)
request(`http://www.omdbapi.com/?i=tt3896198&apikey=2a108762`, function (err, response){
    console.log(response)
})