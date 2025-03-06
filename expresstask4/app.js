const express = require('express');
const fs = require('fs');


const bodyParser =require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat exists'
        }
        res.send(`
            ${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <br/>
                <button type="submit">Send</button>
            </form>
        `);
    })
    
});

app.post("/", (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>
    err ? console.log(err) : res.redirect("/")
    );
});

app.get("/login", (req, res) => {
    res.send(`
        <form id="loginForm">
            <input type="text" id="username" placeholder="Enter your username" required>
            <br/>
            <button type="submit">Login</button>
        </form>

        <script>
            document.getElementById("loginForm").addEventListener("submit", function(event) {
                event.preventDefault();
                localStorage.setItem("username", document.getElementById("username").value);
                window.location.href = "/";
            });
        </script>
    `);
});
app. listen (3000);
