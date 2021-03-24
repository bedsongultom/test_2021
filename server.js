const express = require('express');
const app = express();


var bodyParser = require('body-parser');

global.__basedir = __dirname;

const db    = require('./app/config/db.config.js');
const Tasks = db.Tasks;
const Users = db.Users;
const viewTasks = db.viewTasks;

let router = require('./app/routers/router.js');




const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

// Create a Server
const server = app.listen(3000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
});