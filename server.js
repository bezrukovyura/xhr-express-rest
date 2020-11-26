/**
 * API
 * 
 * PUT => {title: 'string'}
 * GET => ['string', ...]
 * DELETE => {title: 'string'}
 */

var items = [];

var express = require('express');
var app = express();

const jsonParser = express.json();

function resolveCors(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
}

app.use('/item', jsonParser, function (req, res) {
  resolveCors(res);

  switch (req.method) {
    case 'GET':
      break;
    case 'PUT':
      items.push(req.body.title);
      break;
    case 'DELETE':
      items = items.filter(item => item !== req.body.title);
      break;
    default:
      console.log('error request', req.method, req.url);
  }
  console.log('items: ', items);
  res.json(items);  
});

app.listen(3000, function () {
  console.log('ExpressJs server run on 3000 port');
});
