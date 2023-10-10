import path from 'path';
import ProductModel from '../models/product.model.js'
export default class ProductController{
    getProducts(req,res){
      let product =ProductModel.get();
      // console.log(product);
      res.render("products",{products:product})
      // return res.sendFile(path.join(path.resolve(),"src","views",'products.html'))

    }
  

    getAddForm(req, res){
     return res.render("new-product")
    }

    addNewProduct(req, res){
      // access data from form
      console.log(req.body);
      ProductModel.add(req.body)
      let products =ProductModel.get();
     return res.render("products",{products}) 
    }
}
