import React from "react";

const CategoryList = ({categories, buttonAction}) => {
  //categories will be an object with category names as keys and bools as values
  //button action will involve using setCategories to change the categories state
  return (
    <ul className="category-list">
      {
        Object.keys(categories).map((category)=> {
          <li key={i}>
            <button onClick={buttonAction(category)} className={`category-button ${categories[category]? 'active': 'inactive'}`}>
              {category}
            </button>
          </li>
        })
      }
    </ul>
  )
}

export default CategoryList