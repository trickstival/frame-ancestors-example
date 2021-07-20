const express = require('express')

const app = express()
const port = 8092

app.get('/foo/bar', (req, res) => {
  res.setHeader(
    'Content-Security-Policy',
    'frame-ancestors http://localhost:8091/foo'
  )
  res.send('Hey world')
})

app.listen(port, () => {
  console.log('listening on ', port)
})

