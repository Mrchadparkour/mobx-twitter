import React from 'react';
import {observer} from 'mobx-react';
import Search from './search';


const Main = observer(({twitterStore})=> {
  let arr = twitterStore.getTweets.map((twit, i) => {
    if (twit !== undefined && twit.user !== undefined) {
      return(
      <div key={i} className ="TweetBox">
      <img src={twit.user.profile_image_url} />
         <h3>{twit.user.name} says:</h3>
         <p>{twit.text}</p>
      </div>);
    }
  });
  return (
    <div>{arr}</div>
  );
});
export default Main;
