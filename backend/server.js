const express = require('express')
const app = express()
const port = 8182

app.get('/gremlin', (req, res) => {
  res.send('?gremlin=g.V()')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})