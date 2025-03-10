const express =require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const booksRouter=require('./routes/books');


app.use("/books",booksRouter);


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});