Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cats, only: [:index, :show, :new, :create, :edit, :update]

  resources :cat_rental_requests, only: [:new, :create]

  resources :cat_rental_requests do
    member do
      get 'approve'
      get 'deny'
    end
  end
end
