import express from 'express'
import path from 'path'
import open from 'open'

const app = express()
const PORT = 9001

app.use(express.static(path.join(__dirname)))

app.listen(PORT, function(err) {
  if (err) {
    throw err
  }
  console.log(`Analyse server listening on ${PORT}`)
  open(`http://127.0.0.1:${PORT}`)
})
