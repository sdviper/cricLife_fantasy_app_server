module.exports = (app) => {
    const topPlayers = require('../controllers/topPlayers.controller.js');

    // Create a new topPlayers
    app.post('/topPlayers', topPlayers.create);

    // Retrieve all topPlayers
    app.post('/topPlayers1', topPlayers.findAll);

    app.post('/top', topPlayers.postMatch);

    // Retrieve a single topPlayers with topPlayersId
    app.get('/topPlayers/:topPlayersId', topPlayers.findOne);

    // Update a topPlayers with topPlayersId
    app.put('/topPlayers/:topPlayersId', topPlayers.update);

    // Delete a topPlayers with topPlayersId
    app.delete('/topPlayers/:topPlayersId', topPlayers.delete);
}