const mongoose = require('mongoose')

const PlanetSchema = mongoose.Schema({
  nome: String,
  clima: String,
  terreno: String
}, 
{
    timestamps: true
})