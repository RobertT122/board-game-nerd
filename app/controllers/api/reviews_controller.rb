class Api::ReviewsController < ApplicationController
  def create
    # update average rating for game
    @review = Review.new(review_params)
    if @review.save
      update_game_rating!(@review[:game_id])
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
    # update average rating
    @review = Review.find_by(id: params[:id])
    if @review
      if @review.update(review_params)
        update_game_rating!(@review[:game_id])
        render "api/reviews/show"
      else
        render json: @review.errors.full_messages, status: 422
      end
    else
      render json: ['review does not exist'], status: 422
    end

  end

  def destroy
    # update average rating
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      update_game_rating!(@review[:game_id])
      render "api/reviews/show"
    end
  end

  def user
    @reviews = Review.where(user_id: params[:user_id])
    if @reviews
      render "api/reviews/index"
    end
  end
  
  def game
    @reviews = Review.where(game_id: params[:game_id])
    if @reviews
      render "api/reviews/index"
    end
  end
  
  private

  def review_params
    params.require(:review).permit(:rating, :user_id, :game_id, :body)
  end


end
