const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 2000;
const bountyRouter = require("./routes/bountyRoutes");

app.use(bodyParser.json());

app.use("/bounties", bountyRouter);


app.listen(port, () => {
  console.log(`server app is listening on ${port}!`);
});
