Mutations::MovieMutation = GraphQL::ObjectType.define do
  name 'MovieMutation'
  field :newMovie, field: Mutations::NewMovieMutation.field
  field :editMovie, field: Mutations::EditMovieMutation.field
end
