const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
app.get('/css', (req, res) => (
    res.sendFile(path.join(__dirname, './public/main.css'))
))

const {home} = require("./controllers/pageCtrl.js")

app.get('/', home)

const { PORT } = process.env

app.listen(PORT, () => console.log(`every day im opening on port ${PORT}`))