const http= require('http'); 
const db =require('./dt')
http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(" My server: " +db.date());
  res.end();
}).listen(8000);