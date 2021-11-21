class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    # redirect_to new_session_url unless logged_in?
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end


end
