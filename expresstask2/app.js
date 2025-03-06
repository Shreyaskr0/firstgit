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

app.post('/auth', (req, res) => {
    console.log("User logged in:", req.body.username);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
res. send('<h1>Hello from Express!</h1>');
});

app. listen (3000);