const http = require('http');
const fs= require('fs');
const _=require('lodash');


const server = http.createServer((req,res) =>
{
    console.log(req.url,req.method);
    //set  header content  type 
   // res.setHeader('Content-Type ' , 'text/html');

    let path='./views/';
  switch (req.url)
  {
      case '/':
          path+='index.html';
          res.statusCode=200;
          break;
          case '/about':
          path+='about.html';
          res.statusCode=200;
          break;
      case '/about-us ':
          res.statusCode=301;
          //res.setHeader('Location ', '/about');
          //res.end();
          break;
      default : 
          path+='404.html';
          res.statusCode=404;
          break;
  }
  fs.readFile(path,(err,data) =>
  {
      if(err)
      {
          console.log(err);
          res.end();
      }
      else{
          //res.write(data);
          
          res.end(data);   

      }
  })
    /* 
    res.write('<head><link rel ="stylesheet" href =" #"></head>')
    res.write('<p>hello ninjas</p>');
    res.write('<p>hello again , ninjas</p>');
    res.end();
    */
});


//const requestListener = function (req, res) {
 // res.writeHead(200);
 // res.end('Hello, World!');
//}

// const server = http.createServer(requestListener);
server.listen(8080, 'localhost', () =>
{
    console.log('listenin on port 8080');
});