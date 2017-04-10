/**
 * Created by mdeket on 4/6/17.
 */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

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

        var variables = {
            title: title,
            genre: genre,
            rating: rating,
            duration: duration,
            description: description,
            released_date: released_date
        }

        this.props.mutate({
            variables: variables
        })
        .then(({ data }) => {
            console.log('got data', data);
        }).catch((error) => {
            console.log('there was an error sending the query', error);
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

const newMovie = gql`
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


const NewMovieWithData = graphql(newMovie)(NewMovie);
export default NewMovieWithData;