class GraphqlController < ApplicationController
  # before_filter 'authenticate_request!'

  def mutations
    query_string = params[:mutation]
    query_variables = ensure_hash(params[:variables])
    result = Schema.execute(query_string, variables: query_variables)
    puts(result.to_s)
    render json: result
  end

  def query
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    result = Schema.execute(query_string, variables: query_variables)
    puts(result.to_s)
    render json: result
  end

  def ensure_hash(variables)
    if variables.blank?
      {}
    elsif variables.is_a?(String)
      JSON.parse(variables)
    else
      variables
    end
  end
end
