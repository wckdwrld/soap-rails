Rails.application.routes.draw do
  get 'portfolio', to: 'portfolio#index'

  get 'welcome/index'

  get 'hello_world', to: 'hello_world#index'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
