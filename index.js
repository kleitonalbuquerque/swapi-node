const express = require('express');
const swapi = require('swapi-node');

const app = express();

swapi.get('https://swapi.co/api/planets/').then((result) => {
    console.log(result);
    return result.nextPage();
}).then((result) => {
    console.log(result);
    return result.previousPage();
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
  res.json({"message": "Welcome to API Star Wars Planets."});
});

app.get('/planets/', (req, res) => {
  res.json({"message": "Welcome to API Star Wars Planets."});
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});