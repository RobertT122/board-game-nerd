import React from "react";
import { connect } from "react-redux";
import TopTenContainer from "./top_ten";
import UserGamesContainer from "./user_games";
import UserReviewsContainer from "./user_reviews";
import Help from "./help";

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
      return <Help/>
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