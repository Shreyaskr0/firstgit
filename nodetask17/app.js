const http = require('http');
const routes=require("./routes")

routes.testFunction();
const server = http.createServer(routes.handler);

let port = 3000;
server.listen(port, () => {
    console.log("Server is running on port", port);
});
