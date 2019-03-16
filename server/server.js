const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(app.get('port'), () => {
  console.log({ message: `app running on port ${app.get('port')}` });
});
