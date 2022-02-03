class Api::GamesCategoriesController < ApplicationController

  def create
    render json: {message: gc_params}
  end

  private

  def gc_params
    params.require(:categories).permit(:category_id, :game_id)
  end

end