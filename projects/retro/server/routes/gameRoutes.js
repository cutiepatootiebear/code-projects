const express = require("express");
const gameRouter = express.Router();
const gameData = require("../models/gameData");

gameRouter
  .route("/")
  .get((req, res) => {
    gameData.find((err, games) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(games);
    });
  })
  .post((req, res) => {
    // Create a new Todo in you db collection using the Schema and the req.body the user sent you
    const newGame = new gameData(req.body);
    newGame.save((err, newSavedGame) => {
      if (err) return res.status(500).send(err);
      return res.status(201).send(newSavedGame);
    });
  });

// :id is a request Param.  The id the user sends for all of these routes
// will be found in req.params.id

gameRouter
  .route("/:id")
  .get((req, res) => {
    gameData.findOne({ _id: req.params.id }, (err, foundGame) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(foundGame);
    });
  })
  .put((req, res) => {
    gameData.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, updateGame) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(updateGame);
      }
    );
  })
  .delete((req, res) => {
    gameData.findOneAndRemove({ _id: req.params.id }, (err, deleteGame) => {
      if (err) return res.status(500).send(err);
      return res
        .status(202)
        .send({ deleteGame: deleteGame, msg: "Game successfully deleted" });
    });
  });

module.exports = gameRouter;
