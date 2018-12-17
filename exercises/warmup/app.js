const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const uuid = require("uuid-v4");
// const bountyRouter = express.Router();

const mockData = [
  {
    fName: "first Name 1 ",
    lName: "last Name 1",
    living: true,
    bountyAmount: 300,
    type: "coder",
    id: "1234"
  },
  {
    fName: "first Name 2 ",
    lName: "last Name 2",
    living: true,
    bountyAmount: 300,
    type: "non-coder",
    id: "1234"
  }
];
console.table(mockData);

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello world1");
// });

app.get("/", (req, res) => {
  res.send(mockData);
});

app.post("/", (req, res) => {
  const newObj = req.body;
  newObj.id = uuid();
  mockData.push(newObj);
  res.send(mockData);
});



// app.use("/mockData");

app.listen(3000, () => {
  console.log("server app is listening on port 3000!");
});
