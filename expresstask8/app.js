const express = require('express');
const app = express();

const addUserMiddleware = (req, res, next) => {
    req.user = "Guest";  // Adding req.user property
    next();  // Pass control to the next handler
};

app.use((req,res,next)=>{
    console.log("Authentication middleware called.")
    next();
})

app.use("/library-2",(req,res,next)=>{
    console.log("Book Recomendations")
    next();
})

app.use("/library-3",(req,res,next)=>{
    console.log("Special access to research paper from professors and seniors")
    next();
})

app.get("/library-2",(req,res)=>{
    res.send("<h1>Library 2 entered")
})

app.get("/library-3",(req,res)=>{
    res.send("<h1>Library 3 Entered</h1>")
})

app.get("/welcome", addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
