import React from "react";

const ReviewAnalitics = ({reviews}) => {
  let ratingCount = {[1]:0, [2]:0, [3]:0, [4]:0, [5]:0, [6]:0, [7]:0, [8]:0, [9]:0, [10]:0}

  reviews.forEach(review => ratingCount[review.rating] += 1)
  return(
    <div>
      <ol className="review-Counts">
        <li>
          <span>1:</span>
          <div style={{backgroundColor: 'red', height: 10, width: (ratingCount[1]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>2:</span>
          <div style={{backgroundColor: 'red', height: 10, width: (ratingCount[2]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>3:</span>
          <div style={{backgroundColor: 'red', height: 10, width: (ratingCount[3]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>4:</span>
          <div style={{backgroundColor: 'red', height: 10, width: (ratingCount[4]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>5:</span>
          <div style={{backgroundColor: 'gold', height: 10, width: (ratingCount[5]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>6:</span>
          <div style={{backgroundColor: 'gold', height: 10, width: (ratingCount[6]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>7:</span>
          <div style={{backgroundColor: 'gold', height: 10, width: (ratingCount[7]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>8:</span>
          <div style={{backgroundColor: 'green', height: 10, width: (ratingCount[8]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>9:</span>
          <div style={{backgroundColor: 'green', height: 10, width: (ratingCount[9]/reviews.length)*400 }}></div>
        </li>

        <li>
          <span>10:</span>
          <div style={{backgroundColor: 'green', height: 10, width: (ratingCount[10]/reviews.length)*400 }}></div>
        </li>
      </ol>
    </div>
  )

}

export default ReviewAnalitics