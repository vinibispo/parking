require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? '.env.test' : '.env'
  })
const {errors} = require('celebrate')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',require('./routes'))
app.use(errors())

module.exports = app