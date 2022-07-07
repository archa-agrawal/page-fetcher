const request = require('request')
const fs = require('fs')

const result = process.argv
result.splice(0, 2)

request(result[0], (error, response, body) => {
  fs.writeFile(result[1], body, () => {
    fs.stat(result[1], (err, stats) => {
      console.log(`Downloaded and saved ${stats.size} bytes to ${result[1]}`)
    })
  })  
})
