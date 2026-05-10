const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Message from Render Project wk9GIT - 11-5-2026 | HELLO!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})