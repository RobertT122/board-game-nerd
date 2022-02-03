import React from "react";
import { connect } from "react-redux";

const CategoryInput = ({categorySet, setCategorySet, categories}) => {

  const toggleCategory = category_id => (
    e => {
      e.preventDefault()
      let tempSet = new Set(categorySet);
      if(tempSet.has(category_id)){
        tempSet.delete(category_id)
      }else{
        tempSet.add(category_id)
      }
      setCategorySet(tempSet)
    }
  )

  return (
    <ul className="category-input">
      {
        Object.keys(categories).map((category_key)=> (
          <li key={category_key}>
            <button 
              onClick={toggleCategory(category_key)} 
              className={`category-button ${categorySet.has(category_key)? 'active': ''}`}
            >
              {categories[category_key].name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

const mapSTP = ({entities: {categories}}) => ({
  categories
})



const CategoryInputContainer = connect(mapSTP)(CategoryInput);
export default CategoryInputContainer