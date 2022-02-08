import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveTopTen } from "../../actions/game_actions";
import GameListItem from "../game/game_list_item";


const TopTen = ({games, retrieveTopTen, categories}) => {
  const [search, setSearch] = useState({categoryId: 0, pageIndex: 0, listSize: 10})
  useEffect(()=>retrieveTopTen(search), [search])

  const [activeCategory, setActiveCategory] = useState(0)

  const pageUp = e =>{
    setSearch(Object.assign({}, search, {pageIndex: search.pageIndex+1}))
  }
  const pageDown = e =>{
    setSearch(Object.assign({}, search, {pageIndex: search.pageIndex-1}))
  }
  const setCategory = categoryId => (
    e => {
      setSearch(Object.assign({}, search, {categoryId, pageIndex: 0}))
      setActiveCategory(categoryId)
    }
  )
  const showMore = e =>{
    setSearch(Object.assign({}, search, {listSize: 25, pageIndex: 0}))
  }
  const showLess = e =>{
    setSearch(Object.assign({}, search, {listSize: 10, pageIndex: 0}))
  }


  return (
    <div className="splash-top">
      <div>
        <h2 className="splash-games splash-title">{activeCategory>0?`${categories[activeCategory].name.toUpperCase()} GAMES`:'ALL GAMES'}</h2>
        {games.length<1?<p className="no-games-error">Sorry... no games found</p>:<></>}
        <div className="game-list">
          <ul>
            {
              games.map( (game, rank) =>(
                <li key={game.id}>
                  <GameListItem game={game} rank={rank+1+(search.pageIndex*search.listSize)}/>
                </li>
              ))
            }
          </ul>
          
        </div>
        <div className="nav-buttons">
          {search.pageIndex > 0? <button onClick={pageDown}>&#x2190;</button> : <></>}
          <div>{search.pageIndex + 1}</div>
          {games.length >= search.listSize?<button onClick={pageUp}>&#x2192;</button>:<></>}
        </div>
        <div className="resize-list">
          {search.listSize === 10 ?<button onClick={showMore}>Show More</button>: <button onClick={showLess}>Show Less</button>}
        </div>
      </div>
      <div className="category-select">
        <ul>
          <li><button  onClick={setCategory(0)} className={`category-button ${activeCategory===0?"active": ""}`}>all</button></li>
          {
          Object.keys(categories).map((category_key, i)=> (
          <li key={i}>
            <button className={`category-button ${category_key===activeCategory?"active": ""}`}
              onClick={setCategory(category_key)}
            >
              {categories[category_key].name}
            </button>
          </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

const mapSTP = ({entities}) =>({
  games: entities.lists.topTen.map(id => entities.games[id] ),
  categories: entities.categories
});

const mapDTP = dispatch =>({
  retrieveTopTen: search => dispatch(retrieveTopTen(search))
});

const TopTenContainer = connect(mapSTP, mapDTP)(TopTen);

export default TopTenContainer;