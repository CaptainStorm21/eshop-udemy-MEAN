const express = require ('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello api')
})
app.listen(3000, () => {
  console.log('I am running on http://localhost:3000')
})