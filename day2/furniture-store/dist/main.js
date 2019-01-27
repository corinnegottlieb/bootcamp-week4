const fetchFurnData = function (){
    let input = $(`#inpt`).val()
    $.get(`/priceCheck/${input}`, function(furnData){
        
       $(`body`).append(`<div>Price: ${furnData.price}</div>`)
    
})}


const buy = function(){
    let input = $(`#buyinpt`).val()
    $.get(`priceCheck/${input}`, function(data){
        cash > data.price ?
    $.get(`/buy/${input}`, function(data){
$(`body`).append(`<div>${data}`)
    })
    : $(`body`).append(`<div> Your don't have enough money </div>`)
    })
}

const cash = $(`#money`).data().money