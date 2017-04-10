module Graph
  module Mutations
    EditMovieMutation = GraphQL::Relay::Mutation.define do
      name 'EditMovieMutation'
      description 'Mutation for editing an existing movie'

      input_field :id, !types.ID
      input_field :title, !types.String
      input_field :rating, types.Float
      input_field :genre, types.String
      input_field :duration, types.String
      input_field :description, types.String

      return_field :movie, Graph::Types::MovieType

      resolve(->(_, input, ctx){
        movie = Movies.find(input[:id])
        movie.update(input.to_h)
        { movie: movie }
      })
    end
  end
end
