const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
}


const PlayerPredictionSchema = mongoose.Schema({
    'player_name': reqString,
    total_points: String,
    predictionInnings1: {
        top_batsman: {
            name: String,
            points: String
        },
        top_bowler: {
            name: String,
            points: String
        }
    },
    predictionInnings2: {
        top_batsman: {
            name: String,
            points: String
        },
        top_bowler: {
            name: String,
            points: String
        }
    },
    winning_team: {
        name: String,
        points: String
    }
})

const MainSchema = mongoose.Schema({
    match_no: {
        type: String,
        unique: true
    },
    game_name: reqString,
    playersPredictions: [
        PlayerPredictionSchema
    ]
}, {
    timestamps: false
});

module.exports = mongoose.model('top_performers_collection', MainSchema);