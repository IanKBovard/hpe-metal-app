const express = require('express');
const cors = require('cors');

const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

router.get('/ping', (req, res) => {
  res.send('pong!');
});

module.exports = app;
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);