Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post 'api/users' => 'users#create_user'
  
  get 'api/users/:user_id' => 'users#get_by_id'
  post 'api/users/:user_id' => 'users#update_by_id'
  delete 'api/users/:user_id' => 'users#delete_by_id'

  post 'api/auth/get_token' => 'users#get_token'

end
