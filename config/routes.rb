Rails.application.routes.draw do

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :users
  end

  get '*path', to: 'launchpads#show'
  root to: 'launchpads#show'
end

