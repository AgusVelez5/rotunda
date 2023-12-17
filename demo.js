const urlParser = require('./url-parser')
const { Lion, Tiger } = require('./zoo/animals')

console.log("Tiny demo\n")
console.log('Animals:\n')

const lion = new Lion()
const tiger = new Tiger()

console.log("Lion: I'm a lion")
console.log('Lion speak: ', lion.speak("I'm a lion"))
console.log('Tiger: Lions suck')
console.log('Tiger speak: ', tiger.speak("Lions suck"), '\n')

console.log('URL Parser:\n')

const format = "/:version/api/:collection/:id"
const url = "/6/api/listings/3?sort=desc&limit=10"
const response = urlParser.parse(format, url)

console.log('Format: ', format)
console.log('URL: ', url)
console.log('Response: ', response)