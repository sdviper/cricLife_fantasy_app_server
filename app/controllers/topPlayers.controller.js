const TopPlayersSchema = require("../models/topPlayers.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body.playersPredictions[0].top_batsman);
  let predictionDetails = req.body.playersPredictions;
  let matchDetails = TopPlayersSchema.find();
  console.log(JSON.stringify(matchDetails));

  // TopPlayersSchema.find({})
  //     .then(players => {
  //         // res.send(players);
  //         matchDetails=players
  //         console.log(players);
  //     }).catch(err => {
  //         res.status(500).send({
  //             message: err.message || "Some error occurred while retrieving notes."
  //         });
  //     });

  //     console.log(matchDetails);

  const prediction = new TopPlayersSchema({
    match_no: req.body.match_no,
    game_name: req.body.game_name,
    playersPredictions: [{
      player_name: req.body.playersPredictions[0].player_name,
      top_batsman: {
        name: req.body.playersPredictions[0].top_batsman.name,
        points: req.body.playersPredictions[0].top_batsman.points,
      },
    }, ],
  });

  // Save Note in the database
  // prediction.save()
  //     .then(data => {
  //         res.send(data);
  //     }).catch(err => {
  //         res.status(500).send({
  //             message: err.message || "Some error occurred while creating the Note."
  //         });
  //     });
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  // let matchDetails;
  // console.log(req.body);
  let predictionDetails = req.body.playersPredictions;
  await TopPlayersSchema.findOne({
      match_no: req.body.match_no,
      game_name: req.body.game_name,
      // 'playersPredictions.player_name':req.body.playersPredictions.player_name
    })
    .then((count) => {
      console.log(count);
      if (count != null) {
        if (count.playersPredictions.length > 0) {
          count.playersPredictions.forEach((element) => {
            console.log(element);
            if (element.player_name !== predictionDetails.player_name) {
              console.log("welcome");
            }
          });
        } else {
          console.log(1);
          const matchCollection = new TopPlayersSchema({
            match_no: req.body.match_no,
            game_name: req.body.game_name,
            playersPredictions: predictionDetails,
          });

          var objFriends = predictionDetails;
          // console.log(matchCollection);
          matchCollection.findOneAndUpdate({
              match_no: req.body.match_no,
              // game_name: req.body.game_name,
            },
            $set({
                playersPredictions: objFriends,
              },
              function (error, success) {
                if (error) {
                  console.log(error);
                } else {
                  console.log(success);
                }
              }
            )
          );
          // ))
          // .then(data => {
          //     res.send(data);
          // }).catch(err => {
          //     // res.status(500).json({
          //     //     message: "Error"
          //     // });
          // });
        }
      }
      // if (count > 0) {
      // res.status(400).json({
      //     message: 'Match already saved!'
      // });
      // } else {
      // const matchCollection = new TopPlayersSchema({
      //     match_no: req.body.match_no,
      //     game_name: req.body.game_name,
      //     // playersPredictions: req.body.playersPredictions
      // });
      // matchCollection.save()
      //     .then(data => {
      //         // res.send(data);
      //     }).catch(err => {
      //         // res.status(500).json({
      //         //     message: "Error"
      //         // });
      //     });
      // }
    })
    .catch((err) => {
      // console.error(err);
      // res.status(500).json({
      //     error: 'Something went wrong'
      // });
    });

  // await TopPlayersSchema.findOne({
  //     'match_no': req.body.match_no,
  //     'game_name': req.body.game_name,
  //     // 'player_name': req.body.playersPredictions.player_name
  // }).then(prediction => {
  //     const predict = new TopPlayersSchema({
  //         match_no: req.body.match_no,
  //         game_name: req.body.game_name,
  //         playersPredictions: req.body.playersPredictions
  //     });
  //     console.log(1111111);
  //     console.log(prediction);
  //     console.log(1111111);
  //     predict.updateOne()
  //         .then(data => {
  //             console.log('********');
  //             console.log(data);
  //             console.log('********');
  //             // res.send(data);
  //         }).catch(err => {
  //             // res.status(500).json({
  //             //     message: "Error"
  //             // });
  //         });
  // })

  // await TopPlayersSchema.fin

  // await TopPlayersSchema.findOne({
  //     'match_no': req.body.match_no,
  //     'game_name': req.body.game_name
  // }).then(findDoc => {
  //     const matchCollection = new TopPlayersSchema({
  //         match_no: req.body.match_no,
  //         game_name: req.body.game_name,
  //         // playersPredictions: req.body.playersPredictions
  //     });
  //     // const a = new TopPlayersSchema(req.body);
  //     // console.log(a);
  //     // console.log(matchCollection);
  //     // if (findDoc.length === 0) {
  //         matchCollection.save()
  //             .then(data => {
  //                 res.send(data);
  //             }).catch(err => {
  //                 res.status(500).send({
  //                     message: "Error"
  //                 });
  //             });
  //     // } else {
  //     //     res.status(500).send({
  //     //         message: err.message || "Match already exists"
  //     //     });
  //     // }

  //     // console.log("*********");
  //     // console.log(matchCollection);
  //     // console.log("*********");
  //     // res.send(data);
  // }).catch(err => {
  //     res.status(500).send({
  //         message: err.message || "Error"
  //     });
  // });

  // TopPlayersSchema.find({
  //     'playersPredictions.player_name': req.body.playersPredictions.player_name
  // }).then(playerName => {
  //     // console.log(playerName);
  // })

  // console.log(req.body);
  // console.log(findMatch.length);

  // const matchCollection = await new TopPlayersSchema({
  //     match_no: req.body.match_no,
  //     game_name: req.body.game_name,
  // });
  // if (findMatch.length === 0) {
  //     await matchCollection.save()
  //         .then(data => {

  //             res.send(data);
  //         }).catch(err => {
  //             res.status(500).send({
  //                 message: err.message || "Some error occurred while creating the Note."
  //             });
  //         });
  // }

  // console.log(findMatch);

  // await TopPlayersSchema.findOne({
  //         'match_no': req.body.match_no,
  //         'game_name': req.body.game_name
  //     }, {
  //         match_no: req.body.match_no,
  //         game_name: req.body.game_name,
  //         playersPredictions: {
  //             player_name: req.body.playersPredictions.player_name,
  //             top_batsman: {
  //                 name: req.body.playersPredictions.top_batsman.name,
  //                 points: req.body.playersPredictions.top_batsman.points
  //             }
  //         }
  //     })
  //     .then(players => {
  //         matchDetails = players
  //         res.send(players);
  //     }).catch(err => {
  //         res.status(500).send({
  //             message: err.message || "Some error occurred while retrieving notes."
  //         });
  //     });
  // console.log(matchDetails);
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};

exports.getPredictions = async (req, res) => {
  await TopPlayersSchema.find({
    'match_no': req.params.match_no,
    'game_name': req.params.game_name,
  }).limit(1).then(result => {
    res.status(200).send(result)
  }, err => {
    res.status(500).send({
      message: "Some error occurred",
    });
  })
}
exports.postPredictions = async (req, res) => {
  const matchCollection = await new TopPlayersSchema({
    'match_no': req.body.match_no,
    'game_name': req.body.game_name,
    'playersPredictions': req.body.playersPredictions,
  });

  await TopPlayersSchema.find({
    'match_no': req.body.match_no,
    'game_name': req.body.game_name,
  }).then(
    (obj) => {
      if (obj.length === 0) {
        matchCollection.save()
        res.json('Match Document created')
      } else {
        TopPlayersSchema.find({
          'match_no': req.body.match_no,
          'game_name': req.body.game_name,
          "playersPredictions.player_name": req.body.playersPredictions.player_name,
        }).then((result) => {
          if (result.length === 0) {
            TopPlayersSchema.updateOne({
              'match_no': req.body.match_no,
              'game_name': req.body.game_name,
            }, {
              '$addToSet': {
                'playersPredictions': req.body.playersPredictions
              }
            }).then(result => {
              res.json('New Prediction inserted')
            }, err => {
              res.json('New Prediction insertion failed')
            })
          } else {
            TopPlayersSchema.updateOne({
              'match_no': req.body.match_no,
              'game_name': req.body.game_name,
              "playersPredictions.player_name": req.body.playersPredictions.player_name,
            }, {
              '$set': {
                'playersPredictions.$.predictionInnings1': req.body.playersPredictions.predictionInnings1,
                'playersPredictions.$.predictionInnings2': req.body.playersPredictions.predictionInnings2,
                'playersPredictions.$.winning_team': req.body.playersPredictions.winning_team,
              }
            }).then(result => {
              res.json('Existing Prediction updated')
            }, err => {
              res.json('Existing Prediction updation failed')
            })
          }
        });
      }
    },
    (err) => {
      res.status(500).send({
        message: "Some error occurred",
      });
    }
  );
};