const express = require('express');
const bodyParser =require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/product" method="POST">' +
             '<input type="text" name="title" placeholder="Product Name">' +
             '<br><br>'+
             '<input type="text" name="size" placeholder="Product Size">' +
             '<br><br>'+
             '<button type="submit">Add Product</button>' +
             '</form></body></html>');
});

app.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    });

app.use('/',(req, res, next) => {
res. send('<h1>Hello from Express!</h1>');
});

app. listen (3000);