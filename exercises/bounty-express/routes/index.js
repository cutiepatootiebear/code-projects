const express = require("express");
const bounty = require("../controller/bounty");
const router = express.Router();

// Create POST
router.post("/bounties", bounty.createBounty);
router.get("/bounties", bounty.getAllBounties);
router.get("/bounties/:id", bounty.getOneBounty);
router.put("/bounties/:id", bounty.updateBounty);
router.delete("/bounties/:id", bounty.deleteOneBounty);

module.exports = router;
