import React, { useEffect, useState } from "react";


const NumRangeInput = props => {
  let {type, min, max, step, defaultMin} = props;

  const [defaultMax, setDefaultMax] = useState(props.defaultMax)

  const {game, setGame, rangeBool, setRangeBool} = props;

  let safeType = type.split('-').join('_')
  let minStr =  `${type}_min`;
  let maxStr = `${type}_max`;

  useEffect(() =>{
    if(props.defaultMax){
      setRangeBool(true)
    }
  }, [])

  const handleInput = (type) => (
    e => {
      setGame(Object.assign({}, game, {[type]: parseInt(e.currentTarget.value, 10)}))
    }
  )
  
  const toggle = e => {
    e.preventDefault();
    if(rangeBool) {
      setGame(Object.assign({}, game, {[maxStr]: null}));
      setDefaultMax(null)
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
            defaultValue={defaultMax}
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
        defaultValue={defaultMin}
      />
      {
        numRange()
      }
      <button onClick={toggle} className="range-button">{rangeBool? "absolute" : "range"}</button>
    </div>
  )
}

export default NumRangeInput
