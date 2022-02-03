import React from "react"


const MultiLineInput = ({type, arr, setArr, game, setGame}) => {
  let args = [type, arr, setArr, game, setGame]
  
  return (
    <div className={`game-${type}-input`}>
      <ul>
        {
          arr.map( (ele, index) => (
            <li key={index}>
              <input type="text" onChange={handleMLI(...args, index)}/>
            </li>
          ))
        }
      </ul>
  
      {arr.length > 0 ? <button onClick={removeInputToArr(...args)} className="remove-button"> - </button> : <p className="unknown-placeholder">unknown</p>}
      <button onClick={addInputToArr(...args)} className="add-button" > + </button>
  
    </div>
  )
}


const createList = (arr) => {
  let strList = "";
  arr.forEach((ele, i) => {
    if(i > 0){
      strList += (', ' + `${ele}`)
    } else{
      strList += `${ele}`
    }
  })
  return strList
}

const addInputToArr = (type, arr, setArr, game, setGame) => (
  // the effect when a button is pushed
  e => {
    e.preventDefault()
    let tempArr = [...arr];
    tempArr.push('');
    setArr(tempArr)
    let string = createList(tempArr)
    setGame(Object.assign({}, game, {[type]: string}))
  }
)


const removeInputToArr = (type, arr, setArr, game, setGame) => (
  // the effect when a button is pushed
  e => {
    e.preventDefault()
    let tempArr = [...arr];
    tempArr.pop();
    setArr(tempArr)
    if (tempArr.length > 0){
      let string = createList(tempArr)
      setGame(Object.assign({}, game, {[type]: string}))
    } else{
      console.log('less than 1')
      setGame(Object.assign({}, game, {[type]: 'unknown'}))
    }
  }
)

const handleMLI = (type, arr, setArr, game, setGame, index) => (
  e => {
    let tempArr = [...arr]
    tempArr[index] = e.currentTarget.value
    console.log(e.currentTarget.value)
    setArr(tempArr)
    let string = createList(tempArr)
    setGame(Object.assign({}, game, {[type]: string}))
  }
)

export default MultiLineInput