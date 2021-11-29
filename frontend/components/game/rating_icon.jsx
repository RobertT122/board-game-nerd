import React from "react";

const RatingIcon = ({avgRating}) => (
  <div className="review-icon">
    <img src={hexColor} className="hex-icon"/>
    <div>{averageRatingToString(avgRating)}</div>
  </div>
)


const averageRatingToString = (num) => {
  if(!num){
    return "NA"
  }
  return `${num.toFixed(1)}`
}

const hexColor = (num) => {
  if(!num){
    return "assets/ui_images/hexagon-grey.svg"
  }
  if(num < 5.1){

  }else if(num < 7.1){

  }else{
    
  }
}

export default RatingIcon