Rails.application.routes.draw do
  get 'welcome/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  
  namespace :api do
    get '/greetings/random', to: 'greetings#random'
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
