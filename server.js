// const http =require('http'); //provides server


// const server = http.createServer((req, res) => {
// res.writeHead(200, {'Content-Type' : 'text/plain'});
// res.write("hello");
// res.end();
// console.log(`${req.method} request for ${req.url}`);
// });


// look into port numbers wiki

// server.listen(3000);
// console.log("running node server at port 3000");

//common port number 3000 and 5000

//beula's code

//core modules
 const http = require('http'); //provides server
 const fs = require('fs'); //use this for file transaction
 const path = require('path');
 const qs = require('querystring');

 const server = http.createServer((req, res)=>{
   // res.writeHead(200 , {'Content-Type' : 'text/plain'})
   // res.write("Hello");
   // res.end();
   console.log(`${req.method} request for ${req.url} `);

   if (req.method === 'GET'){
     if (req.url === '/') {
       fs.readFile('./public/index.html','UTF-8', (err,data)=>{
         if (err) throw err;
         res.writeHead(200, {'Content-Type' : 'text/html'});
         res.end(data);
       })
     } else if (req.url === '/index.html') {
          fs.readFile('./public/index.html','UTF-8', (err,data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
          })
        } else if (req.url === '/about.html') {
             fs.readFile('./public/about.html','UTF-8', (err,data)=>{
               if (err) throw err;
               res.writeHead(200, {'Content-Type' : 'text/html'});
               res.end(data);
             })
           } else if (req.url === '/contact.html') {
                fs.readFile('./public/contact.html','UTF-8', (err,data)=>{
                  if (err) throw err;
                  res.writeHead(200, {'Content-Type' : 'text/html'});
                  res.end(data);
                })
              } else if (req.url.match('/node_modules/')) {

                const nodePath = path.join(__dirname, req.url);
                fs.readFile(nodePath,'UTF-8', (err,data)=>{
                  if (err) throw err;
                  res.writeHead(200, {'Content-Type' : 'text/css'});
                  res.end(data);
                })

              } else if (req.url.match('/node_modules/')) {

                const nodePath = path.join(__dirname, req.url);
                fs.readFile(nodePath,'UTF-8', (err,data)=>{
                  if (err) throw err;
                  res.writeHead(200, {'Content-Type' : 'text/js'});
                  res.end(data);
                })

              } else if (req.url.match('public/css/')) {

                const cssPath = path.join(__dirname, req.url);
                fs.readFile(cssPath,'UTF-8', (err,data)=>{
                  if (err) throw err;
                  res.writeHead(200, {'Content-Type' : 'text/css'});
                  res.end(data);
                })
            } else if (req.url.match('public/js/')) {

              const jsPath = path.join(__dirname, req.url);
              fs.readFile(jsPath,'UTF-8', (err,data)=>{
                if (err) throw err;
                res.writeHead(200, {'Content-Type' : 'text/js'});
                res.end(data);
              })
          } else if (req.url.match(/.jpg/)) {

            const imagePath = path.join(__dirname, 'public', req.url);
            fs.readFile(imagePath, (err,data)=>{
              if (err) throw err;

              res.writeHead(200, {'Content-Type' : 'image/jpg'});
              res.end(data);
            })
        }

      }else if (req.method === 'POST') {
          if (req.url === '/sendForm'){
          console.log('form Submitted');
            let body = '';

            req.on('data', function(data){
              body +=data;
            });
            req.on('end', function(){
              console.log('form data ends');
              console.log(body.toString());
              const formData = qs.parse(body.toString());
              console.log(formData);
            })

          }
        }

 });

 server.listen(3000);
 console.log("running node server at port 3000");
