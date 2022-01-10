Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "api/games/quickSearch", to: "api/games#quickSearch"
  get "api/games/fullSearch", to: "api/games#fullSearch"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:index, :show]
    resources :reviews, only: [:create, :update, :destroy]
  end

  get "api/games/:id/reviews", to: "api/games#reviews"
  get "api/session/currentuser", to: "api/sessions#currentUser"

  root to: "static_pages#root"
end
