// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })

// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })


    // $.get(`/randomWord`)
    //     .then(function(word){
        
    //         console.log(word)
    //        return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)

    //     })
    //     .then(function(book){
            
    //         console.log(book.items[0])
    //     })


    $.get(`/randomWord`)
        .then(function(word){
        let bookPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
        let gifPromise = $.get(`http://api.giphy.com/v1/gifs/translate?s=${word}&api_key=gx0hJqcPeQubGhGYH6DsxTfF2bT886l2`)
        Promise.all([bookPromise, gifPromise])
        .then(function(results){
           console.log(results)
            printResults(word, results[0], results[1])
        })

        })

        const printResults = function (word, book, gif){
            console.log(gif.data.embed_url)
            $(`body`).append(`<div id="word"> Word: ${word} </div> <div id="book">Book: ${book.items[0].volumeInfo.title} </div><iframe src="${gif.data.embed_url}">`)
        }