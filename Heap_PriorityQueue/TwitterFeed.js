class twitter {
    constructor() {
        this.tweets = [];
        this.users = new Map();
    }
    postTweet(userId, tweetId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, new Set());
        }
        this.tweets.push({ userId, tweetId });
    }

    getNewsFeed(userId) {
        let user = this.users.get(userId);
        let RecentTweets = [];
        for (
            let i = this.tweets.length - 1;
            i >= 0 && RecentTweets.length < 10;
            i--
        ) {
            if (
                user.has(this.tweets[i].userId) ||
                this.tweets[i].userId === userId
            ) {
                RecentTweets.push(this.tweets[i].tweetId);
            }
        }
        return RecentTweets;
    }

    follow(FollowerId, FolloweeId) {
        const user = this.users.get(FollowerId) || new Set();
        user.add(FolloweeId);
        this.users.set(FollowerId, user);
    }
    unfollow(FollowerId, FolloweeId) {
        this.users.get(FollowerId)?.delete(FolloweeId);
    }
}
let tweet = new twitter();
tweet.postTweet(1, 5);
console.log(tweet.getNewsFeed(1));
tweet.follow(1, 2);
tweet.postTweet(2, 6);
console.log(tweet.getNewsFeed(1));
tweet.unfollow(1, 2);
console.log(tweet.getNewsFeed(1));
