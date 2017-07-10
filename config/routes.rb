Rails.application.routes.draw do
  get 'podcast/index'

  get 'concept/index'

  get 'contact/index'

  get 'portfolio', to: 'portfolio#index'

  get 'welcome', to: 'welcome#index'

  get 'concept', to: 'concept#index'
  
  get 'podcast', to: 'podcast#index'

  get 'contact', to: 'contact#index'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
