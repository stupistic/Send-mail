const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const email = require('./send_email')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:from/:to/:sub/:text', (req,res) => {
  const from = req.params.from;
  const to = req.params.to;
  const sub = req.params.sub;
  const text = req.params.text;
  email(from,to,sub,text);
  res.send(text)
})

const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to ${Port}`))
