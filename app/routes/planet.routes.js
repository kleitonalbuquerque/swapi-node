module.exports = (app) => {
  const planets = require('../controllers/planet.controller.js');

  // Create a new Planet
  app.post('/planets', planets.create);

  // Retrieve all Planets
  app.get('/planets', planets.findAll);

  // Retrieve a single Planet with planetId
  app.get('/planets/:planetId', planets.findOne);

  // Update a Planet with planetId
  app.put('/planets/:planetId', planets.update);

  // Delete a Planet with planetId
  app.delete('/planets/:planetId', planets.delete);
}