import express from 'express'
import {randomUUID} from 'crypto'

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express()
app.use(express.json())

app.get('/hello', (req, res) => {
    console.log('Got a GET /hello request')
    res.send('Hello World!')
})

app.get('/uuid', (req, res) => {
    console.log('Got a GET /uuid request')
    res.send(randomUUID())
})

app.post('/print', (req, res) => {
    console.log('Got a POST /print request: ' + req.body)
    res.json(req.body)
})

app.listen(PORT, HOST, () => {
    console.log(`Express sample server is now listening on port ${PORT}`)
})
