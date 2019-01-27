const validator = require(`validator`)

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const validMail = validator.isEmail(`shoobert@dylan`)

console.log(validMail)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const validPhone = validator.isMobilePhone(`786-329-9958`)
console.log(validPhone)

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"

const validText = validator.blacklist(text, blacklist)
console.log(validText)

// EXCERCISE 2 

const faker = require(`faker`)
const makeHuman = function (number) {
    let humans = []
    let i = 0
    while (i < number) {
        user = {
            name: faker.name.findName(),
            image: faker.image.avatar,
            company: faker.company.companyName
        }
        ++i
        humans.push(user)
    }
    return humans
}

const humans2 = makeHuman(2)
console.log(humans2.forEach(e=>console.log(`name: ${e. name} image: ${e.image} company: ${e.company}`)))

