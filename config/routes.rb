Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "api/games/quickSearch", to: "api/games#quickSearch"
  get "api/games/topTen", to: "api/games#topTen"
  get "api/games/user/:user_id", to: "api/games#user"
  get "api/reviews/user/:user_id", to: "api/reviews#user"
  # get "api/games/fullSearch", to: "api/games#fullSearch"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
    resources :categories, only: [:index]
    resources :games_categories, only: [:create, :destroy]
  end

  get "api/games/:id/reviews", to: "api/games#reviews"
  get "api/session/currentuser", to: "api/sessions#currentUser"

  root to: "static_pages#root"
end
