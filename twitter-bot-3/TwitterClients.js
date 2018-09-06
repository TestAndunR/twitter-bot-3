let SL_TWITTER = require('slappforge-sdk-twitter');
const twitter = new SL_TWITTER.Twitter();
module.exports = {

        'twClient': twitter.createClient({
            consumer_key: process.env.TWITTER_twClient_consumerKey,
            consumer_secret: process.env.TWITTER_twClient_consumerSecret,
            access_token: process.env.TWITTER_twClient_accessToken,
            access_token_secret: process.env.TWITTER_twClient_accessTokenSecret
        }),
};