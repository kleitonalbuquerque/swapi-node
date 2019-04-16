const Planets = require('../models/planets.model');

// Create and Save a new Planet
exports.create = (req, res) => {
  // Validate request
  if(!req.body.content) {
    return res.status(400).send({
      message:"Planet content can not be empty"
    })
  }
  // Create a Planet
  const planet = new Planet({
    nome: String,
    clima: String,
    terreno: String
  })
  // Save Planet in the database
  planet.save()
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Planet."
    })
  })
}

// Retrieve and return all planets from the database
exports.findAll = (req, res) => {
  Planet.find()
  .then(planets => {
    res.send(planets)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving planets."
    })
  })
}

// Find a single planet with a planetId
exports.findOne = (req, res) => {
  Planet.findOne(req.params.planetId)
  .then(planet => {
    if(!planet) {
      return res.status(404).send({
        message: "Planet not found with id " + req.params.planetId
      })
    }
    res.send(planet)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Planet not found with id " + req.params.planetId
      })
    }
    return res.status(500).send({
      message: "Error retrieving planet with id " + req.params.planetId
    })
  })
}

// Update a planet identified by the planetId in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.body.content) {
    return res.status(400).send({
      message: "Planet content can not be empty"
    })
  }
  // Find planet and update it with the request body
  Planet.findByIdAndUpdate(req.params.planetId, {
    nome: String,
    clima: String,
    terreno: String
  }, {new: true})
  .then(planet => {
    if(!planet) {
      return res.status(404).send({
        message: "Planet not found with id " + req.params.planetId
      })
    }
    res.send(planet)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Planet not found with id " + req.params.planetId
      })
    }
    return res.status(500).send({
      message: "Error updating planet with id " + req.params.planetId
    })
  })
}

// Delete a planet with the specified planetId in the request
exports.delete = (req, res) => {
  Planet.findByIdAndRemove(req.params.planetId)
  .then(planet => {
    if(!planet) {
      return res.status(404).send({
        message:  "Planet not found with id " + req.params.planetId
      })
    }
    res.send({message: "Planet deleted successfully!"})
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === "NotFound") {
      return res.status(404).send({
        message: "Planet not found with id " + req.params.planetId
      })
    }

    return res.status(500).send({
      message: "Could not delete planet with id " + req.params.planetId
    })
  })
}