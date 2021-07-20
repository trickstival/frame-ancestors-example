const express = require('express')

const app = express()
const port = 8091

app.get('/foo', (req, res) => {
  res.send(`
    <iframe src="http://localhost:8092/foo/bar">
    </iframe>
  `)
})

app.listen(port, () => {
  console.log('listening on ', port)
})

