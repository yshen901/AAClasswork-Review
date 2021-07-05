Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :update, :create, :destroy]

  resources :artworks, only: [:show, :update, :create, :destroy]
  resources :users do
    resources :artworks, only: [:index]
  end

  resources :artwork_shares, only: [:create, :destroy]
end
