//using twitter module to interact with the twitter apis
var Twitter = require('twitter');

var twitterConf = {
	consumer_key: 'CZMVIyYeSUfaVtxufGhUHLDHh',
	consumer_secret: 'zO6rMDzXeUq80C7Z5rHmOJSJwKF0RzLFcwbp6Q9qiHFyp38ZsT',
	access_token_key: '	349542597-K48InpclYDXwSrhkKRbnPKuduGOnYtlp2cOJqlKT',
	access_token_secret: '134CiXUB4Tn11qUd17mrtiYbmcGfVCQ3s1FI5sYI7RmPF'
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





