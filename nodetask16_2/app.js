const http = require('http');
const fs=require("fs")

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const body=[];

    if (url === '/') {

        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            console.log(`data from file`+data);
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(`<body>${data}</body>`);
            res.write(
                `<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button>
                    </form>
                </body>`
            );
            res.write("</html>");
            return res.end();
        });

        
    
    }else if(url=="/message" && method == "POST"){
        req.on("data",(chunk)=>{
        body.push(chunk);
        });

        return req.on("end",()=>{
            const parsedBody= Buffer.concat(body).toString();
            console.log('parsedbody>>>>>',parsedBody)
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt",message,(err)=>{
                if(err){
                    console.log(err)
                }
                console.log(`indise fs.writefile`);
                res.statusCode=302;
                res.setHeader("Location","/");
                return res.end();
                });
        });
    }
    else{
        res.setHeader("content-Type","text/html");
        res.write("<html>");
        res.write("<head><title>my first page</title></head>");
        res.write("<body><h1>Hello from node js</h1></body>");
        res.write("</html>");
        res.end();
    }
});
        

let port = 3000;
server.listen(port, () => {
    console.log("Server is running on port", port);
});
