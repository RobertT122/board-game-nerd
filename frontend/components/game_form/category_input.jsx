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
        Object.keys(categories).map((categoryKey)=> {
          let categoryInt = parseInt(categoryKey, 10)
          return(
            <li key={categoryInt}>
              <button 
                onClick={toggleCategory(categoryInt)} 
                className={`category-button ${categorySet.has(categoryInt)? 'active': ''}`}
              >
                {categories[categoryKey].name}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

const mapSTP = ({entities: {categories}}) => ({
  categories
})



const CategoryInputContainer = connect(mapSTP)(CategoryInput);
export default CategoryInputContainer