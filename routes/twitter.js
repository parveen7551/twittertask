//using twitter module to interact with the twitter apis
var Twitter = require('twitter');
var twitterConf = {
	consumer_key: 'twiiterdetial',
	consumer_secret: 'scetconsuumer',
	access_token_key: 'accesstoken-key',
	access_token_secret: 'scret'
}
var client = new Twitter(twitterConf);

//implementation for getting the tweets fromm twiteer api.
exports.getTwitts = function (keyword, cb) {
	console.log(keyword);
    client.get('search/tweets', { q: keyword }, function (error, tweets, response) {
		console.log("error", error);
		//console.log("tweets", tweets);
		console.log("response", response);
		if (error) {
			cb(error, null);
		} else {
			var tweetData =  tweets.statuses;			
			cb(null, tweetData)
		}
	});
}





