import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tweets, setTweets] = useState([
    {
      name: "Placeholder Name",
      content: "Placeholder Content",
      username: "Placeholder Username",
      date: "Tue, 01 Jun 2021 02:43:08 GMT",
      tweet_id: "00000000000000000000000",
      likes: 101,
      retweets: 55,
      userimage:
        "https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png",
      isLiked: false,
      isRetweeted: false,
      color: "FF0000",
      image: "",
    },
  ]);
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchData();
    selfProfile();
  }, []);

  async function fetchData() {
    var parsedData = [];
    await fetch("http://127.0.0.1:5000/timeline/150")
      .then((response) => response.json())
      .then((response) => {
        for (var i in response) {
          parsedData.push({
            name: response[i][0],
            content: response[i][1],
            username: response[i][2],
            date: response[i][3],
            tweet_id: response[i][4],
            likes: response[i][5],
            retweets: response[i][6],
            userimage: response[i][7],
            isLiked: response[i][8],
            isRetweeted: response[i][9],
            color: response[i][10],
            image: response[i][11],
          });
        }
        console.log(parsedData);
        return parsedData;
      })
      .then((parsedData) => {
        setTweets(parsedData);
        console.log(parsedData);
      })
      .catch((e) => {
        console.log(e);
        setTweets([]);
      });
  }

  async function selfProfile() {
    var parsedData = [];
    await fetch("http://127.0.0.1:5000/profile/")
      .then((response) => response.json())
      .then((response) => {
        for (var i in response) {
          parsedData.push({
            name: response[i][0],
            username: response[i][1],
            followers: response[i][2],
            pfp: response[i][3],
          });
        }
        console.log(parsedData);
        return parsedData;
      })
      .then((parsedData) => {
        setProfile(parsedData);
        console.log(parsedData);
      })
      .catch((e) => {
        console.log(e);
        setProfile([]);
      });
  }

  async function likeTweet(tweet_id) {
    console.log(tweet_id);
    await fetch(`http://127.0.0.1:5000/like/${tweet_id}`);
    alert("Liked!");
    return;
  }

  return (
    <div className="App">
      <div className="header">
        <img className="pfp" src={profile[3]}></img>
        <p className="profileinformation">
          <b>{profile[0]}</b> <i>(@{profile[1]})</i> - {profile[2]} followers
        </p>
        <a className="refreshButton" onClick={() => fetchData()}>
          <i className="fa fa-refresh fa-lg"></i>
        </a>
      </div>
      <div className="tweets">
        {tweets.map((tweet, index) => (
          <div className="tweetBox">
            <p>
              <b>{tweet["name"]}</b> <i>(@{tweet["username"]})</i>
            </p>
            <p>{tweet["content"]}</p>
            <div className="interact">
              <p>
                <a
                  href="#"
                  onClick={() => {
                    likeTweet(tweet["tweet_id"]);
                  }}
                >
                  <i
                    class={
                      tweet["isLiked"] ? "fa fa-heart liked" : "fa fa-heart"
                    }
                  ></i>{" "}
                  {tweet["likes"]}
                </a>
                <i
                  class={
                    tweet["isRetweeted"]
                      ? "fa fa-retweet retweeted"
                      : "fa fa-retweet"
                  }
                ></i>{" "}
                {tweet["retweets"]} - <i class="date">{tweet["date"]}</i>
              </p>
            </div>
            {tweet["image"] ? (
              <a href={tweet["image"]} target="_blank">
                <img className="image" src={tweet["image"]}></img>
              </a>
            ) : (
              ""
            )}

            <a
              href={
                "https://twitter.com/" +
                tweet["username"] +
                "/status/" +
                tweet["tweet_id"]
              }
              target="_blank"
            >
              <img className="tweetpfp" src={tweet["userimage"]}></img>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
