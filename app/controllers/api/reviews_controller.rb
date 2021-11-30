class Api::ReviewsController < ApplicationController
  def create
    # update average rating for game
    @review = Review.new(review_params)
    if @review.save
      update_game_rating!(@review[:game_id])
      
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    # update average rating
    @review = Review.find_by(id: params[id])

    if @review
      update_game_rating!(@review[:game_id])
    else

    end

  end

  def destroy
    # update average rating
  end
end
