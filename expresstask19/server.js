const express =require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes=require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes');
const cartRoutes=require('./routes/cartRoutes');

app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use((req, res) => {
    res.status(404).send("Page not found");
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});