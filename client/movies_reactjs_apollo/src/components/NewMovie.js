/**
 * Created by mdeket on 4/6/17.
 */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import update from 'immutability-helper';
import { browserHistory } from 'react-router';

class NewMovie extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;
        if(title === '') {
            alert("You must enter title!");
            return;
        }
        let genre = this.refs.genre.value;
        let rating = this.refs.rating.value;
        let duration = this.refs.duration.value;
        let description = this.refs.description.value;
        let released_date = this.refs.released_date.value;

        let variables = {
            title: title,
            genre: genre,
            rating: rating,
            duration: duration,
            description: description,
            released_date: released_date
        }

        this.props.submit({
            variables: variables
        })
        .then(({ data }) => {
            browserHistory.push('/movies');
        }).catch((error) => {
            console.log('There was an error sending the query', error);
        });
    }

    render() {
        return (
            <div className="row" style={{margin: "20px"}}>
                <div className="col-md-3">
                    <h2>New Movie</h2>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="formGroup">
                            <label>Title</label>
                            <input className="form-control" type="text" ref="title" />
                        </div>
                        <div className="formGroup">
                            <label>Genre</label>
                            <input className="form-control" type="text" ref="genre" />
                        </div>
                        <div className="formGroup">
                            <label>Duration</label>
                            <input className="form-control" type="text" ref="duration" />
                        </div>
                        <div className="formGroup">
                            <label>Rating</label>
                            <input className="form-control" type="text" ref="rating" />
                        </div>
                        <div className="formGroup">
                            <label>Description</label>
                            <input className="form-control" type="text" ref="description" />
                        </div>
                        <div className="formGroup">
                            <label>Released Date</label>
                            <input className="form-control" type="date" ref="released_date" />
                        </div>
                        <br/>
                        <button className="btn btn-default" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const newMovieMutation = gql`
    mutation newMovie($title: String!, 
                        $genre: String, 
                        $duration: String, 
                        $rating: String, 
                        $description: String, 
                        $released_date: String){
                                newMovie(input: 
                                    {
                                        title: $title, 
                                        genre: $genre,
                                        duration: $duration,
                                        rating: $rating,
                                        description: $description,
                                        released_date: $released_date
                                    }
                                )
                                {
                                    movie {
                                        id 
                                        title 
                                        genre
                                    }
                                }
                        }
`;


const NewMovieWithData = graphql(newMovieMutation
    ,{
    props({ mutate }) {
        return {
           submit({ variables }) {
               return mutate({
                   variables: variables,
                   optimisticResponse: {
                       __typename: 'Mutation',
                       newMovie: {
                           __typename: 'Movie',
                           title: variables.title,
                           genre: variables.genre
                       }
                   },
                   updateQueries: {
                       MovieListQuery: (previousResult, { mutationResult }) => {
                           const newMovie = mutationResult.data.newMovie;
                           return update(previousResult, {
                               movies: {
                                   $unshift: [newMovie]
                               }
                           });
                       }
                   }
               });
           }
        };
    }
}
)(NewMovie);
export default NewMovieWithData;