module Graph
  Graph::MovieSchema = GraphQL::Schema.define do
    query Graph::Query::MovieQuery
    mutation Graph::Mutations::MovieMutation
  end
end
