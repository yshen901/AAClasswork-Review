Rails.application.routes.draw do
  # Your routes here!

  namespace :api, defaults: { format: :json } do
    resources :gifts, only: [:show]
    resources :parties, only: [:index, :show]
    resources :guests, only: [:index, :show]

    resources :guests do
      resources :gifts, only: [:index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
