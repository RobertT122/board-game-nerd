class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials( params[:user][:username], params[:user][:password] )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No User Signed In"], status: 404
    end
  end

  def currentUser
    @user = current_user
    if @user
      render "api/users/show"
    end
  end

end
