const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var redis = require('redis');
var client = redis.createClient();

/*
app.get('/api/balance', (req, res) => {  
  client.get('rep_position-deri', function(error, result) {
    if (error) throw error;
    console.log('GET result ->', result)
    res.send({ balance: result });
  });
});

app.get('/api/orders', (req, res) => {  
  client.get('rep_orders-deri', function(error, result) {
    if (error) throw error;
    console.log('GET result ->', result)
    res.send({ orders: result });
  });
});
*/

app.get('/api/balance', (req, res) => {  
  client.get('rep_position-bitmex', function(error, result) {
    if (error) throw error;
    console.log('GET result ->', result)
    res.send({ balance: result });
  });
});

app.get('/api/orders', (req, res) => {  
  client.get('rep_orders-bitmex', function(error, result) {
    if (error) throw error;
    console.log('GET result ->', result)
    res.send({ orders: result });
  });
});



app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});



app.listen(port, () => console.log(`Listening on port ${port}`));
