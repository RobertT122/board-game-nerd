Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "api/games/quickSearch", to: "api/games#quickSearch"
  get "api/games/topTen", to: "api/games#topTen"
  get "api/games/user/:user_id", to: "api/games#user"
  # get "api/games/fullSearch", to: "api/games#fullSearch"

  get "api/reviews/user/:user_id", to: "api/reviews#user"
  get "api/reviews/game/:game_id", to: "api/reviews#game"
  
  get "api/session/currentuser", to: "api/sessions#currentUser"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:show, :create, :update, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
    resources :categories, only: [:index]
    resources :games_categories, only: [:create]
  end
  
  delete "/api/games_categories", to: "api/games_categories#searchAndDestroy"

  root to: "static_pages#root"
end
