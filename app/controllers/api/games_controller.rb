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

  def reviews
    @game = Game.find_by(id: params[:id])
    if @game
      render 'api/games/reviews'
    end
  end
end
