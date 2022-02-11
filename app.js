const express = require('express')
require('dotenv').config()
const app = express()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log ('Conexión a MongoDB establecida'))
  .catch(err => console.log (err))


app.use('/api/v1', require('./src/routers/routers'));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

