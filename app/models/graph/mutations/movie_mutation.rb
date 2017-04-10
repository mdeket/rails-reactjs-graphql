module Mutations
  Graph::Mutations::MovieMutation = GraphQL::ObjectType.define do
    name 'MovieMutation'
    field :newMovie, field: Graph::Mutations::NewMovieMutation.field
    field :editMovie, field: Graph::Mutations::EditMovieMutation.field
  end
end
