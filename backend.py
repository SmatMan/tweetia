import tweepy
from flask import Flask
from flask_cors import CORS
import config as cfg
from os import name, system

app = Flask(__name__)
CORS(app)

def tweet(api, content):
    try:
        api.update_status(content)
    except Exception as e:
        print(f"Could not send tweet for reason: {e}")

@app.route("/timeline/<count>", methods=["GET"])
def getTimeline(count):
    rawtl = api.home_timeline(count=count, tweet_mode="extended", exclude_replies="true")
    tl = {}
    for i,item in enumerate(rawtl):
        text = rawtl[i].full_text
        user = rawtl[i].user.name
        username = rawtl[i].user.screen_name
        date = rawtl[i].created_at
        tweet_id = rawtl[i].id_str
        rts = rawtl[i].retweet_count
        likes = rawtl[i].favorite_count
        image = rawtl[i].user.profile_image_url_https
        isLiked = rawtl[i].favorited
        isRetweeted = rawtl[i].retweeted
        color = rawtl[i].user.profile_background_color

        tl[i] = [user, text, username, date, tweet_id, likes, rts, image, isLiked, isRetweeted, color]
    return tl

@app.route("/like/<id>", methods=["GET"])
def like(id):
    try:
        api.create_favorite(id)
        return True
    except:
        return False

def reply(api, id, content):
    try:
        api.update_status(status=content, in_reply_to_status_id=id)
        return True
    except:
        return False



if __name__ == '__main__':
    auth = tweepy.OAuthHandler(cfg.apikey, cfg.apisecret)
    auth.set_access_token(cfg.at, cfg.ats)
    global api
    api = tweepy.API(auth)
    app.run()