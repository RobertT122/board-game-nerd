import React, { useState } from "react";

const CategoryInput = ({categoriesObj}) => {
  let categoriesProto = {}
  Object.values(categoriesObj).forEach((category) =>(
    Object.assign(categoriesProto, {[category.name]: false })
  ))
  let [categories, setCategories] = useState(categoriesProto)
}