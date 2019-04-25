const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema({
    nome: String,
    clima: String,
    terreno: String,
    filmes: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Planets', PlanetSchema);