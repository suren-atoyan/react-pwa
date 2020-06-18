const express = require('express');
const path = require('path');

const port = process.env.PORT || 8089;

const indexTmplPath = path.join(__dirname, '../build/index.html');

async function init() {
  const app = express();

  app.use(express.static(path.join(__dirname, '../build/')));

  app.get('*', (req, res) => {
    res.sendFile(indexTmplPath);
  });

  app.listen(port);
}

init()
  .then(() => console.info(`Listening on port ${port}`))
  .catch(err => console.error('Something went wrong', err));
