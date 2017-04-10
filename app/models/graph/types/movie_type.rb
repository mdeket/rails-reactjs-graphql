module Types
  Graph::Types::MovieType = GraphQL::ObjectType.define do
    name 'Movies'
    description 'A single movie.'

    field :id, !types.ID
    field :title, types.String
    field :rating, types.Float
    field :genre, types.String
    field :duration, types.String
    field :description, types.String
    field :released_date, types.String
  end
end
