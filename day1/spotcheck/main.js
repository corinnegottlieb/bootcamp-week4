// $(`div`).click(function(){
//     $(`div`).css("background-color","#f39c12")
// })


// $.get(`http://data.nba.net/10s/prod/v1/2016/players.json`, function(results){
//     console.log(results)
// })


const request = require('request')

request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response)
})