import React from "react";

const RatingIcon = ({avgRating}) => (
  <div className="review-icon">
    {renderHexIcon(avgRating)}
    <div>{averageRatingToString(avgRating)}</div>
  </div>
)


const averageRatingToString = (num) => {
  if(!num){
    return "NA"
  }
  return `${num.toFixed(1)}`
}

const renderHexIcon = (num) => {
  if(!num){
    return <img src={window.greyHexUrl}/>
  }
  if(num < 5){
    return <img src={window.redHexUrl}/>
  }else if(num < 7){
    return <img src={window.yellowHexUrl}/>
  }else{
    return <img src={window.greenHexUrl}/>
  }
}


export default RatingIcon