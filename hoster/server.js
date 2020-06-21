const express = require('express');
const path = require('path');

const port = process.env.PORT || 8089;

const indexTmplPath = path.join(__dirname, '../build/index.html');

function setCustomCacheControl(res, path) {
  const hashRegExp = new RegExp('\\.[0-9a-f]{8}\\.');

  if (path.endsWith('.html')) {
    // Never cache index.html or other .html files
    res.setHeader('Cache-Control', 'no-cache');
  } else if (hashRegExp.test(path)) {
    // Always cache files with "fingerprint", they will never change
    // like 0.c2572769.chunk.js
    res.setHeader('Cache-Control', 'max-age=31536000');
  }
}

async function init() {
  const app = express();

  app.use(express.static(path.join(__dirname, '../build/'), {
    etag: true,
    lastModified: true, 
    setHeaders: setCustomCacheControl,
  }));

  app.get('*', (req, res) => {
    res.sendFile(indexTmplPath);
  });

  app.listen(port);
}

init()
  .then(() => console.info(`Listening on port ${port}`))
  .catch(err => console.error('Something went wrong', err));
