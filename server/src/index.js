const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

console.log('starting');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.cert')),
    minVersion: 'TLSv1',
    maxVersion: 'TLSv1',
  },
  app
);

const port = 3000;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
