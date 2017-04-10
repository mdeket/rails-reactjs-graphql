module Graph
  module Mutations
    NewMovieMutation = GraphQL::Relay::Mutation.define do
      name 'NewMovieMutation'
      description 'Mutation for creating a new movie'

      input_field :title, !types.String
      input_field :rating, types.String
      input_field :genre, types.String
      input_field :duration, types.String
      input_field :description, types.String
      input_field :released_date, types.String

      return_field :movie, Graph::Types::MovieType

      resolve(->(_, input, ctx){
        inputs = input.to_h
        if input[:rating]
          inputs['rating'] = input[:rating].to_f
        end
        movie = Movies.create(inputs)
        { movie: movie }
      })

    end
  end
end
