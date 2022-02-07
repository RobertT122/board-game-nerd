import React from "react";
import { useState } from "react";
import MultiLineInput from "./multi_line_input";
import NumRangeInput from "./num_range_input";
import CategoryInput from "./category_input";
import ErrorsContainer from "../errors/errors";
import { resetSuccess, showDeleteForm } from "../../actions/ui_actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


const GameForm = (props) =>{
  let [game, setGame] = useState(props.game);

  let [categorySet, setCategorySet] = useState(new Set(props.categoryArr))
  let [artistArr, setArtistArr] = useState(props.artistArr)
  let [designerArr, setDesignerArr] = useState(props.designerArr);
  
  let [timeRange, setTimeRange] = useState(false);
  let [countRange, setCountRange] = useState(false);
  
  let history = useHistory()
  useEffect(()=>{
    if(props.success){
      history.push('/spash')
      props.resetSuccess()
    }
  }, [props.success])

  const handleInput = (type) => (
    e => {
      setGame(Object.assign({}, game, {[type]: e.currentTarget.value}))
    }
  )

  const deleteButton = <button
    className="delete-launcher"
    onClick={e => {
      e.preventDefault()
      props.showDeleteForm(props.game.id)
    }}
  >Delete</button>


  
  const handlePhoto = e => {
    return setGame(Object.assign({}, game, {photo: e.currentTarget.files[0]}))
  }
  
  const resetPhoto = e => {
    return setGame(Object.assign({}, game, {photo: null}))
  }

  const photoResetButton = () =>{
    if (game.photo){
      return <button className="photo-reset" onClick={resetPhoto}>RESET</button>
    }
    return <></>
  }

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(game).forEach(key => {
      if(game[key] !== null){
        formData.append(`game[${key}]`, game[key])
      }
    });

    let addCategories = new Set(categorySet);
    let deleteCategories = new Set(props.categoryArr);
    for(let id of categorySet){
      if(addCategories.has(id) && deleteCategories.has(id)){
        addCategories.delete(id);
        deleteCategories.delete(id);
      }
    }

    props.submitAction(formData, [...addCategories], [...deleteCategories]);
    // props.submitAction(formData, [...addCategories], [...deleteCategories]);
  }


  return(
    <form onSubmit={handleSubmit} className="game-form">

      <div className="image-container">
        <label htmlFor="game-photo-input" className="game-photo-input-label" >Choose game image:</label>
        <input 
          type="file"
          accept="image/png, image/jpeg"
          id="game-photo-input"
          onChange={handlePhoto}
        />
        <img src={game.photo? URL.createObjectURL(game.photo) : props.defaultPhoto}  className="preview-image"/>
        {photoResetButton()}
      </div>

      <div className="game-form-top">
        <label htmlFor="game-name-input"> Title: </label>
        <input 
          id="game-name-input"
          type="text" 
          onChange={handleInput('name')}
          defaultValue={props.game.name}
        />

        <label htmlFor="game-year-input"> Year: </label>
        <input 
          id="game-year-input"
          type="number" 
          step="1"
          onChange={handleInput('year')}
          defaultValue={props.game.year}
        />
      </div>

      <label htmlFor="game-designer-input"> Designer(s): </label>
      <MultiLineInput
        type="designer"
        arr={designerArr}
        setArr={setDesignerArr}
        game={game}
        setGame={setGame}
      />

      <label htmlFor="game-artist-input"> Artist(s): </label>
      <MultiLineInput
        type="artist"
        arr={artistArr}
        setArr={setArtistArr}
        game={game}
        setGame={setGame}
      />

      

      <label htmlFor="game-tagline-input"> Tagline: <span className="extra-info">(limit 280 characters)</span></label>
      <textarea
        maxLength={280}
        id="game-tagline-input"
        onChange={handleInput('tag_line')}
        placeholder="Add a quick description of the game!"
        defaultValue={props.game.tag_line}
      />
      <label htmlFor="game-description-input"> Description: </label>
      <textarea 
        id="game-description-input"
        onChange={handleInput('description')}
        placeholder="Give a detailed description of game mechanics, theme, history, etc."
        defaultValue={props.game.description}
      />

      <label htmlFor="game-player-count-input ">Player Count</label>

      <NumRangeInput
        type="player_count"
        min={1} max={100} step={1}
        rangeBool={countRange}
        setRangeBool={setCountRange}
        game={game}
        setGame={setGame}
        defaultMin={props.game.player_count_min}
        defaultMax={props.game.player_count_max}
        />


      <label htmlFor="game-playtime-input">Play Time (minutes) </label>
      <NumRangeInput
        type="playtime"
        min={0} max={10000} step={15}
        rangeBool={timeRange}
        setRangeBool={setTimeRange}
        game={game}
        setGame={setGame}
        defaultMin={props.game.playtime_min}
        defaultMax={props.game.playtime_max}
      />

      <label htmlFor="game-category-input">Categories</label>
      <CategoryInput
        categorySet={categorySet}
        setCategorySet={setCategorySet}
      />
      <ErrorsContainer/>

      <button type="submit" className="submit-button">{props.submitName}</button>
      {
        (props.submitName === "Update Game")?deleteButton:<></>
      }

    </form>

  )
}


const mapSTP = state =>({
  success: state.ui.success
})
const mapDTP = dispatch =>({
  resetSuccess: ()=>dispatch(resetSuccess()),
  showDeleteForm: gameId=>dispatch(showDeleteForm(gameId))
})

const GameFormContainer = connect(mapSTP, mapDTP)(GameForm)
export default GameFormContainer;

