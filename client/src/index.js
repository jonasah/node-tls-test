const axios = require('axios');
const https = require('https');

console.log('starting');

setInterval(() => {
  axios
    .get('https://localhost:3000', {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
    .then(({ data }) => {
      console.log(`${new Date()}: ${data}`);
    })
    .catch((e) => {
      console.error(`${new Date()}: Failed: ${e}`);
    });
}, 1000);
