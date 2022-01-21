class Api::GamesController < ApplicationController
  def show 
    @game = Game.find_by(id: params[:id])
    if @game
      render 'api/games/show'
    end
  end

  def index 
    @games = Game.all
  end

  
  def create
    @game = Game.new(game_params)
    if @game.save
      render json: {message: "Game Created"}
    else
      render json: @game.errors.full_messages, status: 422
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
    
    def reviews
      @game = Game.find_by(id: params[:id])
      if @game
        render 'api/games/reviews'
      end
    end
  
    def quickSearch
      @games = Game.where("LOWER(name) LIKE LOWER(?)", "%#{params.require(:search).permit(:partial_name)[:partial_name]}%").limit(10)
      if @games 
        render 'api/games/index'
      end
    end
    
  end
  