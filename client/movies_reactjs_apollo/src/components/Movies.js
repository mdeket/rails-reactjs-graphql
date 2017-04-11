/**
 * Created by mdeket on 4/5/17.
 */
import React, { Component } from 'react';
import Movie from './Movie';
import { graphql } from 'react-apollo';
import movieListQuery from './MovieSchema';

class Movies extends Component {
    constructor(){
        super();
    }

    render() {
        if(this.props.data.loading) {

            return (<p>Loading</p>)
        } else {
            const MoviesItems = this.props.data.movies.map((data,i) => {
                return (<Movie key={i} index={i} data={data}></Movie>);
            });
            return (
                <div>
                    <h1>Movies</h1>
                    <table className="table table-striped table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Genre</th>
                            <th>Released Date</th>
                            <th>Rating</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        { MoviesItems }
                        </tbody>
                    </table>
                </div>
            );
        }

    }
}

const MoviesListWithData = graphql(movieListQuery)(Movies);
export default MoviesListWithData;