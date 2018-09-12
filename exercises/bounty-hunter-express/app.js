const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const uuid = require("uuid-v4");
const myUUID = uuid();
uuid.isUUID(myUUID);
const bountyRouter = express.Router();

const bounties = [
  {
    fName: "first Name 1 ",
    lName: "last Name 1",
    living: true,
    bountyAmount: 300,
    type: "Sith",
    id: "1234"
  },
  {
    fName: "first Name 2",
    lName: "last Name 2",
    living: true,
    bountyAmount: 300,
    type: "Jedi",
    id: "2345"
  }
];
console.table(bounties)

app.use(bodyParser.json());

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
app.post("/bounties/", (req, res) => {
  console.log("req.body", req.body);
  const newObj = req.body;
  newObj.id = uuid();
  bounties.push(newObj);
  res.send(newObj);
});

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

bountyRouter.route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
      req.body
    res.send("POST on /bounties endpoint");
  });

bountyRouter
  .route("/:id")
  .get((req, res) => {
      ç
    res.send(`GET on /bounties/${req.params.id} endpoint`);
  })
  .put((req, res) => {
    res.send(`PUT on /bounties/${req.params.id} endpoint`);
  })
  .delete((req, res) => {
    res.send(`DELETE on /bounties/${req.params.id} endpoint`);
  });

  app.use("/bounties", bountyRouter)

app.listen(3000, () => {
  console.log("server app is listening on port 3000!");
});
