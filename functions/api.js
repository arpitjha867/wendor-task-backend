const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const cors = require('cors');
const routes = require('../Routes/routes');
const PORT = 8080;

//Express app init
const app = express();

//Middlewares
app.use(cors({
    origin: '*' // Update this to the specific origin you want to allow
  }));
app.use(bodyParser.json());

//Routing
app.use("/.netlify/functions/api", routes);

//Server listens
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
module.exports.handler = serverless(app);