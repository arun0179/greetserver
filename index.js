const express = require('express')
const app = express()
const port = 7700

app.get('/', (req, res) =>
  res.send('Greetings from Kana...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
