const express = require ('express');
const app = express();

require ('dotenv/config');

const api = process.env.API_URL;
app.get(api+'/products', (req, res) => {
  res.send('hello api')
})
app.listen(3000, () => {
  console.log('I am running on http://localhost:3000')
})