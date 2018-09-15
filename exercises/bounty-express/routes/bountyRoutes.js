const express = require("express");
const bountyRouter = express.Router();
const bounties = require("../models/bountyData.js");
const uuid = require('uuid')

bountyRouter
  .route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newObj = req.body;
    newObj.id = uuid()
    bounties.push(newObj)
    res.send(bounties);
  });

bountyRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`GET on /bounties/${req.params.id} endpoint`);
  })
  .put((req, res) => {
    res.send(`PUT on /bounties/${req.params.id} endpoint`);
  })
  .delete((req, res) => {
    res.send(`DELETE on /bounties/${req.params.id} endpoint`);
  });

module.exports = bountyRouter;
