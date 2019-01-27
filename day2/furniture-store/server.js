const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/route', function (request, response) {
    console.log("Server is up and running smoothly")
    response.send("Server is up and running smoothly")
})

app.get(`/priceCheck/:name`, function (request, response){
    let item = store.find(s => s.name === request.params.name)
    if(!item){
    response.send({price: null})}
    else{
response.send({price: item.price})
    }
})

app.get(`/buy/:name`, function (request, response){
    let item = store.find(s => s.name === request.params.name)
    if(!item){
        response.send(`Sorry we don't have that item in store`)
    }
    else{ item.inventory -= 1
        response.send(`Congratulations! You've just purchased one ${item.name} for ${item.price}! There are ${item.inventory} left in store. Thank you for your business and enjoy your new peice!`)
}})

// app.get(`/sale`, (request, response) => {
//     let params = request.query
//     if( params.admin ){
//    store.filter(s => s.inventory > 10).map(s => s.price/=2)
    
//     console.log(store)
//     response.end()   }}) 
 


const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]