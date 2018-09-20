const express = require("express");
console.dir("express".express);
const app = express();
console.dir("app", app);
// recieve
app.get('/', (req, res) => {
    res.send('hello  world')
}) 

// app.post('', (req, res))


app.listen(5858, () => {
  console.log("listening on port 5858");
});
