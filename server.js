const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


let JayZ = {
  'age' : 51,
  'birthName' :'Shawn Corey Carter',
  'birthPlace' : 'New York City'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get("/api/rappers", (req, res) => {
  res.json(JayZ)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
