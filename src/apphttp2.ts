import http2 from 'http2'
import fs from 'fs'

const server = http2.createSecureServer({ 
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt')
 },
  (req, res) => {

  console.log(req.url)

  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write('<h1>Hola mundo con nodeJS</h1>');
  // res.end();

  // const data ={name: 'laureano', age: 21, city: 'BSAS'}
  // res.writeHead(200, {'Content-Type': 'application/json'});
  // res.end(JSON.stringify(data))

  if (req.url === '/') {
    const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/' });
    res.end(htmlFile)
    return;
  }
  if (req.url?.endsWith('.js')){}
})


server.listen(8080, () => {
  console.log('server running server 8080')
})