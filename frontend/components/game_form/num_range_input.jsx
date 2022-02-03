import React from "react";


const NumRangeInput = ({type, min, max, step, game, setGame, rangeBool, setRangeBool}) => {
  let safeType = type.split('-').join('_')
  let minStr =  `${type}_min`;
  let maxStr = `${type}_max`;

  const handleInput = (type) => (
    e => {
      setGame(Object.assign({}, game, {[type]: parseInt(e.currentTarget.value, 10)}))
    }
  )
  
  const toggle = e => {
    e.preventDefault();
    if(rangeBool) {
      setGame(Object.assign({}, game, {[maxStr]: null}));
      setRangeBool(false);
    } else {
      setRangeBool(true);
    }
  }
  const numRange = () => {
    if (rangeBool){
      return(
        <>
          <span> - </span>
          <input 
            id={`game-${safeType}-max-input`}
            type="number" 
            min={`${step + parseInt(game[minStr], 10)}`} 
            max={max} step={step}
            onChange={handleInput(maxStr)}
          />
        </>
      )
    } else {
      return <></>
    }
  }
  return(
    <div id={`game-${safeType}-input`}>
      <input 
        id={`game-${safeType}-min-input`}
        type="number" 
        min={min} max={max} step={step}
        onChange={handleInput(minStr)}
      />
      {
        numRange()
      }
      <button onClick={toggle} className="range-button">{rangeBool? "absolute" : "range"}</button>
    </div>
  )
}

export default NumRangeInput
