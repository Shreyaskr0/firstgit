const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("server is created");
 
    res.setHeader('content-type','text/html');
    if(req.url=='/home'){
        res.statusCode=200;
        res.end("<h1>Welcome home</h1>")
    }else{
        if(req.url=='/about'){
            res.statusCode=200;
            res.end("<h1>Welcome to About Us</h2>")
        }
        else if(req.url=='/node'){
            res.statusCode=200;
            res.end("<h1>Welcome to my Node Js project</h2>")
        }
        else{
            res.statusCode=404;
            res.end("<h1>Page Not Found</h1>")
        }
    }


})

let port=3000;
server.listen(port,()=>{
    console.log("server is running")
});