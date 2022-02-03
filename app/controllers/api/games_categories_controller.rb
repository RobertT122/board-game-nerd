class Api::GamesCategoriesController < ApplicationController

  def create
    @gc = GamesCategory.new(gc_params)
    if @gc.save
      render json: {message: 'success'}
    else
      render json: @gc.errors.full_messages, status: 422
    end
  end

  private

  def gc_params
    params.require(:categories).permit(:category_id, :game_id)
  end

end