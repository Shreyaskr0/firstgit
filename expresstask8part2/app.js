const express = require('express');
const app = express();

app.use(express.json());

let users=[
    {id:1,name:'Alice'},
    {id:2,name:'Bob'},
];

const addUsersMiddleware = (req, res, next) => {
    req.users = "Guest"; 
    next(); 
};

app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/users',(req,res)=>{
    const{name}=req.body;
    const newUser ={id: users.length +1,name};
    users.push(newUser);
    res.status(201).json(newUser);
})

app.get('/welcome', addUsersMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.users}!</h1>`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
