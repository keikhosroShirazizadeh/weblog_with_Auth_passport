require('dotenv').config()

var createError=require('http-errors')
var express=require('express')
var path =require('path')
var cookieParser=require('cookie-parser')
var logger=require("morgan")

var indexRouter=require('./routes/index')

var app=express()

app.locals.pluralize=require("pluralize")



module.exports=app