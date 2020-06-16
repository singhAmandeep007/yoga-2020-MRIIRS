const yoga = require('./yoga.json')
//request required to get data from api

console.log(yoga)
const fs = require('fs')

fs.readFile('./yoga.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const data = JSON.parse(jsonString)
        console.log("Customer address is:", data) // => "Customer address is: Infinity Loop Drive"
} catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})