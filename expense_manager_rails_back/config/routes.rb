Rails.application.routes.draw do
  
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
   devise_for :users, :controllers => {
					  sessions: 'sessions', 
					  registrations: 'registrations'
  }


  # get '/users' => "users#index"
  root to: "homes#index"

  resources :transactions, only:[:create,:index,:destroy]

end
