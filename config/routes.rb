Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/graphql' do
    post '/mutations', to: 'graphql#mutations'
    post '/query', to: 'graphql#query'
  end

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql/query"
  end
end
