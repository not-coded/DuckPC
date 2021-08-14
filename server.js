const express = require('express');
const server = express();
const favicon = require('serve-favicon');
const path = require('path')
const app = express()

server.all('/', (req, res) => {
  // app.use("/public", express.static('public'));
  // app.use(favicon(path.join(__dirname, 'public', 'duckdupes.ico')))
  res.sendFile(__dirname + "/index.html");
})
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!") });
}
module.exports = keepAlive;