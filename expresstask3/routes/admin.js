const express=require('express');

const router=express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/admin/product" method="POST">' +
             '<input type="text" name="title" placeholder="Product Name">' +
             '<br><br>'+
             '<input type="text" name="size" placeholder="Product Size">' +
             '<br><br>'+
             '<button type="submit">Add Product</button>' +
             '</form></body></html>');
});

router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    });

module.exports=router;
