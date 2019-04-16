const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello DevOps Midwest!!! Manager Approved!!!'));

if (module.parent === null) {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} else {
  // Export our app for testing purposes
  exports.app = app;
}

