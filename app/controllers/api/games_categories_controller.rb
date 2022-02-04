class Api::GamesCategoriesController < ApplicationController

  def create
    @gc = GamesCategory.new(gc_params)
    if @gc.save
      render json: {message: 'success! gc created'}
    else
      render json: @gc.errors.full_messages, status: 422
    end
  end

  def delete
    @gc = GamesCategories.where(category_id: gc_params.category_id, game_id: gc_params.game_id )
    if(@gc)
      if @gc.destroy
        render json: {message: 'success! gc deleted'}
      else
        redner json: @gc.errors.full_messages, status: 422
      end
    else
      render json ["Game's Category not fond"]
    end
  end


  private

  def gc_params
    params.require(:categories).permit(:category_id, :game_id)
  end

end