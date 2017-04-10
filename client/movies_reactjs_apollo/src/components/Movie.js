/**
 * Created by mdeket on 4/3/17.
 */
import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.duration} min</td>
                <td>{this.props.data.genre}</td>
                <td>{this.props.data.released_date}</td>
                <td>{this.props.data.rating}</td>
                <td>{this.props.data.description}</td>
            </tr>
        );
    }
}

export default Movie;