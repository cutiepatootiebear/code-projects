const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const gameRoutes = require("./routes/gameRoutes");


// Middlwares to be used on every request that comes into the server
app.use(morgan("dev"));
app.use(express.json());


// Connects to Mongodb on your local hard drive to save your db
mongoose
  .connect(
    "mongodb://localhost:27017/gamesapp",
    { useNewUrlParser: true },
    () => {
      console.log("Connected to the database");
    }
  )
  .catch(err => {
    console.log(err);
  });

// // We tell express where to find static assets
// app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// The first argument is the endpoint that triggers this middleware
// The second argument is what routes to use when the endpoint is
// requested by a front end
app.use("/games", gameRoutes);

// // ...For all the other requests just sends back the Homepage
// app.route("*").get((req, res) => {
// 	res.sendFile('client/dist/index.html', { root: __dirname });
// });

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
