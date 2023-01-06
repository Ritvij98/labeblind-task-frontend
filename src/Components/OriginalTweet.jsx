import React, { useEffect, useState } from "react";
import moment from "moment";
// ORIGINAL TWEET PAGE COMPONENT
export default function OriginalTweet({ tweetData }) {
 
 const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const savedTweets = JSON.parse(localStorage.getItem("likedTweets"));
//     savedTweets.forEach((id) => {
//       if (tweetData._id === id) liked = true;
//       console.log(id)
//     });
//   }, [liked]);

  // STORING TWEET IN LOCALSTORAGE ON LIKING ORIGINAL TWEET
  let likedTweets = localStorage.getItem("likedTweets");
  let likedTweetsArray = likedTweets ? JSON.parse(likedTweets) : [];
  const likeTweet = (tweetData) => {
      likedTweetsArray.push(tweetData._id);
      localStorage.setItem("likedTweets", JSON.stringify(likedTweetsArray));
      setLiked(true);
  };

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={tweetData.imageUrl} alt="" />
      </div>
      <div className="tweet-body">
        <a className="author" href={tweetData.url}>
          {tweetData.author}
        </a>
        <p className="text">{tweetData.text}</p>
        <img className="tweet-image" src={tweetData.imageUrl} alt="" />
        <p className="text">{moment(tweetData.publishedDate).format("LLL")}</p>
        <div className="tweet-actions">
          <div className="tweet-action">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <div className="tweet-action">
            <i className="fa-regular fa-comment"></i>
            {tweetData.replies}
          </div>
          <div className="tweet-action">
            <i className="fa-solid fa-retweet"></i>
            {tweetData.retweets}
          </div>
          <div className="tweet-action" onClick={likeTweet}>
             
            <i
              className={
                liked
                  ? "fa-solid fa-heart like-button liked"
                  : "fa-solid fa-heart like-button"
              }
            ></i>
            {tweetData.likes}
          </div>
          <div className="tweet-action">
            <i className="fa-solid fa-upload"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
