Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do 
    resources :todos, only: [:index, :show, :create, :update, :destroy]

    resources :steps, only: [:show, :index, :create, :destroy, :update]

    resources :tags, only: [:index, :create]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
