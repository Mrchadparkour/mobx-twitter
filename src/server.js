import express from 'express';
import path from 'path';
import Twitter from 'twitter';
import http from 'http';


require('dotenv').config();

const app = express();

var client = new Twitter({
  consumer_key:process.env.CONSUMER_KEY,
  consumer_secret:process.env.CONSUMER_SECRET,
  access_token_key:process.env.ACCESS_TOKEN,
  access_token_secret:process.env.ACCESS_TOKEN_SECRET
});

var tweet;

var stream = client.stream('statuses/filter', {track: 'a', language: 'en'}, function (stream){
  stream.on('data', function(response) {
    tweet = response;
  });

  stream.on('error', function(error) {
    throw error;
  });
});

app.get('/stream', (req, res) => {
  res.send(tweet);
});

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000, ()=> console.log('listening'));
