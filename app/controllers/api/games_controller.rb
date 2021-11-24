class Api::GamesController < ApplicationController
  def show {
    @game = Game.find_by(id: params[:game_id])
  }

  def index {
    @games = Game.all
  }
end
