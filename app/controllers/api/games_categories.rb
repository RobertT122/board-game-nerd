class Api::GamesCategoriesController < ApplicationController

  def create
    @gc = GamesCategory.new(gc_params)
    if @gc.save
      render json: {message: "connection created"}
    else
      render json: @gc.errors.full_messages, status: 422
    end

  end

  def destroy
  end

  def gc_params
    params.require(:gc).permit(:game_id, :category_id)
  end

end