const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3001;


app.get('/download', function(req, res){
  const url = 'http://62.182.86.140/fiction/738000/0ef1933bdc7eac4ed6f1b2aee912b599.epub/Murakami%2C%20Haruki%20-%20Norwegian%20wood.epub';

  // Set the response headers
  res.setHeader('Content-disposition', 'attachment; filename=book.epub');
  res.setHeader('Content-type', 'application/epub+zip');

  // Pipe the request to the response
  request(url).pipe(res);
});

app.listen(port, () => console.log(`App listening port ${port}`));
