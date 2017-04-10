module Mutations
  Graph::Mutations::NewMovieMutation = GraphQL::Relay::Mutation.define do
    name 'NewMovieMutation'
    description 'Mutation for creating a new movie'

    input_field :title, !types.String
    input_field :rating, types.Float
    input_field :genre, types.String
    input_field :duration, types.String
    input_field :description, types.String

    return_field :movie, Graph::Types::MovieType

    resolve(->(_, input, ctx){
      movie = Movies.create(input.to_h)
      { movie: movie }
    })

  end
end
