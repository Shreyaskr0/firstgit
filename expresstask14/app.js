const express =require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRouter=require('./routes/home');
const studentsRouter=require('./routes/students');
const coursesRouter=require('./routes/courses');

app.use("/",homeRouter);
app.use("/students",studentsRouter);
app.use("/courses",coursesRouter);
app.use((req, res) => {
    res.status(404).send("Page not found");
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});