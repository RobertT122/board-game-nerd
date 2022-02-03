class Api::GamesController < ApplicationController
  def show 
    @game = Game.find_by(id: params[:id])
    if @game
      render 'api/games/show'
    end
  end

  def index 
    # this will become a depreciated path
    #delete this path once a new splash page is created
    @games = Game.all
  end

  
  
  def create
    @game = Game.new(game_params)
    if @game.save
      render json: {game_id: @game.id}
    else
      render json: {errors: @game.errors.full_messages}, status: 422
    end
  end
  
  
  def update
    @game = Game.find_by(id: params[:id])
    if @game
      if @game.update(game_params)
        render json: {message: "Game Updated"}
      else
        render json: @game.errors.full_messages, status: 422
      end
    else
      render json: ["No game found"], status: 422
    end
  end
  
  
  def destroy
    @game = Game.find_by(id: params[:id])
    if @game
      if @game.destroy
        render json: {message: "Game Destroyed"}
      else
        render json @game.error.full_messages, status: 422
      end
    else
      render json: ["No game found"], status: 422
    end
  end

  def quickSearch
    @games = Game.where("LOWER(name) LIKE LOWER(?)", "%#{params.require(:search).permit(:partial_name)[:partial_name]}%").limit(10)
    if @games
      render 'api/games/list'
    end
  end
  
  def topTen
  # returns a sorted list of the top 10 games by rating on the sit
    @games = Game.order('avg_rating DESC NULLS LAST').limit(10)
    render 'api/games/list'
  end

  def user
    @games = Game.where(uploader_id: params[:user_id])
    if @games
      render 'api/games/list'
    end
  end

  private
  
  def game_params
    params.require(:game).permit(
      :artist,
      :description,
      :designer,
      :name,
      :player_count_min,
      :player_count_max,
      :playtime_min,
      :playtime_max,
      :tag_line,
      :year,
      :uploader_id,
      :photo
    )
  end
  

end
