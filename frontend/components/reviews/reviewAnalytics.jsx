import React from "react";

const ReviewAnalitics = ({reviews}) => {
  let ratingCount = {[1]:0, [2]:0, [3]:0, [4]:0, [5]:0, [6]:0, [7]:0, [8]:0, [9]:0, [10]:0}

  reviews.forEach(review => ratingCount[review.rating] += 1)

  let ratingJSX = {}
  Object.keys(ratingCount).forEach(key => {
    if (ratingCount[key]) {
      ratingJSX[key] = <li key={key}>
        <span className="numberKey">{key}</span>

        <div style={{backgroundColor: 'blue', height: 10, width: (ratingCount[key]/reviews.length)*100 }}></div>
        <span>{(ratingCount[key]/reviews.length).toFixed(3) * 100} %</span>
      </li>
    } else {
      ratingJSX[key] = <></>
    }
  })
  return(
    <div>
      <ol className="review-Counts">
        {ratingJSX[1]}
        {ratingJSX[2]}
        {ratingJSX[3]}
        {ratingJSX[4]}
        {ratingJSX[5]}
        {ratingJSX[6]}
        {ratingJSX[7]}
        {ratingJSX[8]}
        {ratingJSX[9]}
        {ratingJSX[10]}
      </ol>
    </div>

  )

}

export default ReviewAnalitics