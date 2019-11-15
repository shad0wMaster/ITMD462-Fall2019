/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 10-31-2019
 */
//server to get it up and running using nodejs
const http=require('http');
const app=require('./app');
const port=process.env.PORT||3000;
const server=http.createServer(app);
server.listen(port);
