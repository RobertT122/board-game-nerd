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
    @games = Game.where("LOWER(name) LIKE LOWER(?)", "%#{params.require(:search).permit(:partial_name)[:partial_name]}%").limit(10)
    if @games 
      render 'api/games/index'
    end
  end

  # def fullSearch
  #   @games = Game.where("LOWER(name) LIKE LOWER(?)", "%#{params[:partial_name]}%")
  #   if @games 
  #     render 'api/games/index'
  #   end
  # end

end
