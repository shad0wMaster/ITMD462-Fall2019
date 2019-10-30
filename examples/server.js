//making an online server

const http=require('http');
const app=require('./app');
const port=process.env.PORT || 3000;
const server=http.createserver(app);
server.listen(port);
