require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const clientId = process.env.SLACK_CLIENT_ID;
const clientSecret = process.env.SLACK_CLIENT_SECRET;
const verification = process.env.SLACK_VERIFICATION_TOKEN;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello Dashlight!'));

app.get('/auth'), (req, res) => {};

app.post('/events', (req, res) => {
  const { type, challenge } = req.body;

  if (type === 'url_verification') {
    return res.json({ challenge });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
