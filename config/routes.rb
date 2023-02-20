Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  
  namespace :api do
    resources :greetings
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
