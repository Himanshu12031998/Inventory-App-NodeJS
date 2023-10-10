// const express = require('express');
import  express from 'express';
import ejsLayouts from 'express-ejs-layouts'
import ProductController from './src/controllers/product.controllers.js';
import path from "path"

const server=express();

// parse form data
server.use(express.urlencoded({extended:true}))

//setup view engine setting
server.set("view engine", "ejs")
server.set('views',path.join(path.resolve(),"src","views",))

server.use(ejsLayouts)

//create an instance of ProductController

const productController=new ProductController()

server.get('/',productController.getProducts)
server.get('/new', productController.getAddForm)
server.post('/', productController.addNewProduct)

server.get('/',(req,res)=>{
    return res.end('Welcome to inventory App');
})


server.listen(8000,()=>{
    console.log('Server is running on PORT 8000');
})
