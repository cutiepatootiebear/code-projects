const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 2000;

app.use(bodyParser.json());

app.use("/bounties", bountyRouter);

app.listen(port, () => {
  console.log(`server app is listening on ${port}!`);
});







//GET endpoint that gets all bounties from the array and sends them to the client.
// app.get("/bounties", (req, res) => {
//   console.log("req.query", req.query);
//   const bountyQueryFor = bounties.filter(bounty => {
//     return bounty.living === true;
//   });
//   res.send(bountyQueryFor);
// });

// Get one
// app.get("/bounties/fName/:key", (req, res) => {
//     console.log('req.params', req.params);
//     res.send()
// })

//POST endpoint that adds a new bounty object to the array of bounties.
// app.post("/bounties/", (req, res) => {
//   console.log("req.body", req.body);
//   const newObj = req.body;
//   newObj.id = uuid();
//   bounties.push(newObj);
//   res.send(newObj);
// });

// Put
// app.put("/bounties/:id", (req, res) => {
//   console.log("req.params for put", req.params);
//   res.send(`PUT on /bounties/${req.params.id} endpoint`)
// });

// DELETE a bounty from the bounties array
// app.delete("/bounties/:id", (req, res) => {
//     console.log("req.params for put", req.params);
//     res.send(`DELETE on /bounties/${req.params.id} endpoint`)
// })
