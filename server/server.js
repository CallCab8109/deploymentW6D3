const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())


const {home, css} = require("./controllers/pageCtrl.js")

app.get('/', home)
app.get('/css', css)

const { PORT } = process.env

app.listen(PORT, () => console.log(`every day im opening on port ${PORT}`))