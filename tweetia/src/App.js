import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tweets, setTweets] = useState([
    {
      name: "🌸",
      content:
        "there's also so much more to this in things like homophobia, transphobia, antisemitism and even ableism\n\nthe ableism is just the most surprising for me since HES A FUCKING CHILDREN'S DOCTOR",
      username: "ibtiprivxoxo",
      date: "Tue, 01 Jun 2021 00:35:42 GMT",
      tweet_id: "1399525024604864512",
      likes: 0,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1394696793586348035/2deswKGY_normal.jpg",
      isLiked: true,
      isRetweeted: false,
      color: "F5F8FA",
    },
    {
      name: "Hank Green",
      content: "Bean Me https://t.co/DP4CjASZnA",
      username: "hankgreen",
      date: "Tue, 01 Jun 2021 00:32:55 GMT",
      tweet_id: "1399524322557923329",
      likes: 365,
      retweets: 15,
      image:
        "https://pbs.twimg.com/profile_images/1362176488003436545/i5MOl6Io_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "4DB3C8",
    },
    {
      name: "🌸",
      content:
        "i bet if someone called him out he'd just be like \nwhaaatt 😱😱 noo  😡😡 I'm not bigoted 🙄🙄 i don't use slurs and do hate crimes🙄🙄😒😒\nas if hate crimes and slurs are the only two things that go into this",
      username: "ibtiprivxoxo",
      date: "Tue, 01 Jun 2021 00:31:17 GMT",
      tweet_id: "1399523915093979138",
      likes: 0,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1394696793586348035/2deswKGY_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "F5F8FA",
    },
    {
      name: "emmie ☀️",
      content: "@keiahnotsinning dakkydoodle15",
      username: "emmisaurxd",
      date: "Tue, 01 Jun 2021 00:29:17 GMT",
      tweet_id: "1399523410707898371",
      likes: 0,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1395549119394029568/8phjXDY8_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "C0DEED",
    },
    {
      name: "keiahnotsinning",
      content: "@emmisaurxd what's the user",
      username: "keiahnotsinning",
      date: "Tue, 01 Jun 2021 00:29:04 GMT",
      tweet_id: "1399523355951259649",
      likes: 0,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1383521914392506368/-YdBPpxb_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "000000",
    },
    {
      name: "emmie ☀️",
      content: "hey besties add my new snapchat https://t.co/zmvd0d3rFy",
      username: "emmisaurxd",
      date: "Tue, 01 Jun 2021 00:28:18 GMT",
      tweet_id: "1399523163336237061",
      likes: 1,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1395549119394029568/8phjXDY8_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "C0DEED",
    },
    {
      name: "🌸",
      content:
        "Thinking back to me interacting w my family n my father and just realizing all of the racist, mysognistic shit he's told me over the years.\nThings like shaming a LITTLE GIRL for wearing a baggy shirt and shorts to telling me that all indians/southeast asians are dirty.\n\nyikes",
      username: "ibtiprivxoxo",
      date: "Tue, 01 Jun 2021 00:27:20 GMT",
      tweet_id: "1399522920834162690",
      likes: 1,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1394696793586348035/2deswKGY_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "F5F8FA",
    },
    {
      name: "keiahnotsinning",
      content: "bringing this back https://t.co/tbZD73D8LD",
      username: "keiahnotsinning",
      date: "Tue, 01 Jun 2021 00:27:03 GMT",
      tweet_id: "1399522846058110977",
      likes: 2,
      retweets: 1,
      image:
        "https://pbs.twimg.com/profile_images/1383521914392506368/-YdBPpxb_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "000000",
    },
    {
      name: "sage/ivy !",
      content: "RT @tmmyHugs: sorry bout this one https://t.co/3S0Ka2WqW3",
      username: "elrapidsisdead",
      date: "Tue, 01 Jun 2021 00:25:20 GMT",
      tweet_id: "1399522417794498563",
      likes: 0,
      retweets: 721,
      image:
        "https://pbs.twimg.com/profile_images/1399391534924107779/F0-4gXxZ_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "F5F8FA",
    },
    {
      name: "jarvis johnson",
      content:
        "i've been meaning to do this since youtube got rid of community captions but i have problems doing things when i mean to. thanks for being patient w/ me!",
      username: "jarvis",
      date: "Tue, 01 Jun 2021 00:19:29 GMT",
      tweet_id: "1399520941948825601",
      likes: 198,
      retweets: 0,
      image:
        "https://pbs.twimg.com/profile_images/1323429702401339393/f_LiEB-J_normal.jpg",
      isLiked: false,
      isRetweeted: false,
      color: "000000",
    },
  ]);
  /*useEffect(() => {
    fetchData();
  }, []);*/

  async function fetchData() {
    var parsedData = [];
    await fetch("http://127.0.0.1:5000/timeline/10")
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

  async function likeTweet(tweet_id) {
    console.log(tweet_id);
    await fetch(`http://127.0.0.1:5000/like/${tweet_id}`);
    return;
  }

  return (
    <div className="App">
      <div className="tweets">
        {tweets.map((tweet, index) => (
          <div className="tweetBox">
            <p>{tweet["name"]}</p>
            <p>{tweet["content"]}</p>
            <p>
              <a
                href="#"
                onClick={() => {
                  likeTweet(tweet["tweet_id"]);
                }}
              >
                <i
                  class={tweet["isLiked"] ? "fa fa-heart liked" : "fa fa-heart"}
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
              {tweet["retweets"]}
            </p>
            </div>
            {tweet["image"] ? (
              <a href={tweet["image"]} target="_blank">
                <img className="image" src={tweet["image"]}></img>
              </a>
            ) : (
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
        ))}
      </div>
    </div>
  );
}

export default App;
