import React from "react";

const CategoryList = ({categories, buttonAction}) => {
  //categories will be an object with category names as keys and bools as values
  //button action will involve using setCategories to change the categories state
  return (
    <ul className="category-list">
      {
        Object.keys(categories).map((category_key)=> {
          <li key={i}>
            <button onClick={buttonAction(category_key)} className={`category-button`}>
              {categories[category_key].name}
            </button>
          </li>
        })
      }
    </ul>
  )
}

export default CategoryList