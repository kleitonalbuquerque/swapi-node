module.exports = (app) => {

  const planets = require('../controllers/plantes.controller.js')

  // Create a new Planet
  app.post('/planets', planets.create)

  // Retrieve all Planets
  app.get('/planets', planets.findAll)

  // Retrieve a single Planet with planetId
  app.get('/planets', planets.findOne)

  // Update a Planet with planetId
  app.put('/planets', planets.update)

  // Delete a Planet with planetId
  app.delete('/planets', planets.delete)

}