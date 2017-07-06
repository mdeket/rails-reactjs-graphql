Schema = GraphQL::Schema.define do
  query Query::MovieQuery
  mutation Mutations::MovieMutation
end
