const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  // const { method, url } = request;
  let headers = defaultCorsHeader;

  if(request.method === 'OPTIONS'){
    response.writeHead(200, headers);
    response.end();
  }
  if(request.method === 'POST'){
    let body = [];
    request
    .on("data", chunk => {
      body.push(chunk);
      console.log(chunk);
    })
    .on("end", () => {
      console.log(data);
      body = Buffer.concat(body).toString();
      response.writeHead(200, headers);
      if(request.url === '/upper'){
        response.end(body.toUpperCase());
        // console.log(body);
      }else if(request.url === '/lower'){
        response.end(body.toLowerCase());
        // console.log(body);
      }
    })
  }else{
    response.writeHead(404, headers);
    response.end();
  }
  
  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
  // response.writeHead(200, headers);
  // response.end('hello mini-server sprints');
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};
