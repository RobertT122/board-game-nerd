import React from "react";
import { connect } from "react-redux";
import TopTenContainer from "./top_ten";
import UserGamesContainer from "./user_games";
import UserReviewsContainer from "./user_reviews";
// import AllGamesListContainer from "../game/all_games_list";

// const Splash = () => <AllGamesListContainer />

const Splash = ({currentUser}) => {

  const extendedSplash = () => {
    if (currentUser){
      return (
        <div className="bonus-splash">
          <UserGamesContainer user={currentUser}/>
          <UserReviewsContainer user={currentUser}/>
        </div>
      )
    } else{
      return <></>
    }
  }
  
  return (
    <div className="splash-body">
      <TopTenContainer/>
      {/* <CategoryLinksContainer/> */}
      {extendedSplash()}
    </div>
  );
};

const mapSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const SplashContainer = connect(mapSTP, null)(Splash)




export default SplashContainer