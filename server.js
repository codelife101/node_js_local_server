const http =require('http'); //provides server


const server = http.createServer((req, res) => {


res.write("hello");
res.end();



});


// look into port numbers wiki

server.listen(3000);
console.log("running node server at port 3000");

//common port number 3000 and 5000
