const express =require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const orderRouter=require('./routes/orders');
const userRouter=require('./routes/users');

app.use("/orders",orderRouter);
app.use("/users",userRouter);


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});