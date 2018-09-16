const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 2000;
const index = require("./routes/index");
require("./config");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", index);

// app.use("/bounties", bountyRouter);
app.listen(port, () => {
  console.log(`server app is listening on ${port}!`);
});

// testing data
// bountyData.create({
//   fName: "testing first name",
//   lName: "testing last name",
//   living: true,
//   age: 23,
//   bountyAmount: 324,
//   type: "Sith"
// });
