const bountyData = require("../models/bountyData");

class Bounty {
  // static used to declare method for class
  //  POST
  static createBounty(req, res) {
    console.log("this is body", req.body);

    //   destructor
    const { fName, lName, living, age, bountyAmount, type } = req.body;
    // create a new instance of Bounty with new data coming from postman or react app
    bountyData
      .create({
        fName,
        lName,
        living,
        age,
        bountyAmount,
        type
      })
      .then(newBounty => {
        return res.status(201).json({
          message: "bounty instance created",
          newBounty
        });
      });
  }

  //   GET
  static getAllBounties(req, res) {
    bountyData.find().then(bounty => {
      return res.status(200).json({
        message: "got all bounties",
        bounty
      });
    });
  }

  //   GET ONE BY ID
  static getOneBounty(req, res) {
    bountyData.findById(req.params.id).then(bounty => {
      return res.status(200).json({
        message: "got one bounties",
        bounty
      });
    });
  }

  //   PUT
  static updateBounty(req, res) {
    const { fName, lName, living, age, bountyAmount, type } = req.body;
    const bountyUpdates = { fName, lName, living, age, bountyAmount, type };
    bountyData.findByIdAndUpdate(req.params.id, bountyUpdates).then(bounty => {
      return res.status(200).json({
        message: "updated one bounties",
        bounty
      });
    });
  }

  //   DELETE
  static deleteOneBounty(req, res) {
    bountyData.findByIdAndDelete(req.params.id).then(bounty => {
      return res.status(200).json({
        message: "delete one bounties",
        bounty
      });
    });
  }
}

module.exports = Bounty;
