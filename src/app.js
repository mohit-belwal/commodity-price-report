const express = require('express')
require('./database/mongoose.js')
const Router = require('./routers/routes')

const app = express()

// To disable API for maintainance uncomment below function
// app.use((req, res, next)=>{
//     res.status(503).send('API is under maintainance')
// })

app.use(express.json())     
app.use(Router)

module.exports = app