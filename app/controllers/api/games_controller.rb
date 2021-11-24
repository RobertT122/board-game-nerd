class Api::GamesController < ApplicationController
  def show 
    @game = Game.find_by(id: params[:id])
    if @game
      render 'api/games/show'
    else
      render json: {id: nil}
    end
  end

  def index 
    @games = Game.all
  end
end
