const http = require('http')
const oauth = require('oauth')
require('dotenv').config()
var Twitters = {}
var twitterOauth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_TOKEN_URL,
  process.env.TWITTER_ACCESS_TOKEN_URL,
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  '1.0',
  null,
  'HMAC-SHA1'
)

Twitters.searchTweets = function (req, res) {
  twitterOauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.query,
    process.env.TWITTER_ACCESS_TOKEN, // test user token
    process.env.TWITTER_ACCESS_TOKEN_SECRET, // test user secret
    function (e, data, resOauth) {
      if (e) console.error(e)
      console.log(require('util').inspect(data))
      res.send(JSON.parse(data))
    })
// http.get('https://api.twitter.com/1.1/search/tweets.json?q=nodejs&src=typd', function (res) {
//   console.log(`Got response: ${res.statusCode}`)
//   res.resume()
// }).on('error', function (e) {
//   console.log(`Got error: ${e.message}`)
// })
}

module.exports = Twitters
