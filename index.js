const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;

app.use(express.static('./'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

app.listen(port, () => {
  console.log("Listening on port : " + port);
});
