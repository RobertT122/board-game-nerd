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

  def quickSearch
    print 'searching'
    @games = Game.where("name LIKE (?)", "%#{params[:partial_name]}%").limit(10)
    if @games 
      render 'api/games/index'
    end
  end
end
