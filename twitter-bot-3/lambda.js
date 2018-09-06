let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

let count = 10;
exports.handler = function (event, context, callback) {
    twitter.searchTweets({
        "searchParams": {
            "q": "#starwars",
            "count": "10"
        },
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        // console.log(data)
        for (let i = 0; i < count; i++) {
            console.log(data["statuses"][i]["id"])
            let twitterID = data["statuses"][i]["id_str"]
            twitter.createRetweet({
                "tweetID": twitterID,
                "clientName": "twClient"
            }).then(response => {
                let data = response.data;
                console.log(data)
            }).catch(err => {
                console.log(err);
            });
            twitter.createLike({
                "tweetID": twitterID,
                "clientName": "twClient"
            }).then(response => {
                let data = response.data;
            }).catch(err => {
                console.log(err);
            });
        }
    }).catch(err => {
        console.log(err);
    });


    callback(null, 'Successfully executed');
}