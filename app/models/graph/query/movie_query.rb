module Query
  Graph::Query::MovieQuery = GraphQL::ObjectType.define do
    name 'MovieQuery'
    description 'The query root for this schema'

    field :movies, types[Graph::Types::MovieType] do
      resolve(->(_, _, _) {
        Movies.all
      })
    end

    field :movie do
      type Graph::Types::MovieType
      argument :id, !types.ID
      resolve (->(_, args, _) {
        Movies.find(args[:id])
      })
    end
  end
end
