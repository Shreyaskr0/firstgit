const http = require('http');
const fs=require("fs")

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end(
            `<form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username">
                <button type="submit">Add</button>
            </form>`
        );
    } else if (url === '/message' && method === 'POST') {
        res.setHeader('Content-Type', 'text/html');

        let dataChunks=[];
        req.on('data',(chunks)=>{
            console.log(chunks)
            dataChunks.push(chunks);
        })
        req.on('end',()=>{
            let combinedBuffer=Buffer.concat(dataChunks)
            console.log(combinedBuffer.toString())
            let formValues=combinedBuffer.toString().split('=')[1];
            console.log(formValues)
            
            fs.writeFile('formValues.txt',formValues,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/')
                res.end();
            })
        })     
    }
    else{
        if(req.url=='/read'){
            fs.readFile('formvalues.txt',(err,data)=>{
                console.log(data.toString());
                res.end(`<h1>${data.toString()}</h1>`);
            })
        }
    }  
});

let port = 3000;
server.listen(port, () => {
    console.log("Server is running on port", port);
});
