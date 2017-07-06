Query::MovieQuery = GraphQL::ObjectType.define do
  name 'MovieQuery'
  description 'The query root for this schema'

  field :movies, types[Types::MovieType] do
    resolve(->(_, _, _) {
      Movies.all
    })
  end

  field :movie do
    type Types::MovieType
    argument :id, !types.ID
    resolve (->(_, args, _) {
      Movies.find(args[:id])
    })
  end
end
