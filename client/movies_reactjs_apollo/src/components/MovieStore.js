/**
 * Created by mdeket on 4/4/17.
 */
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class MovieStore extends EventEmitter {

    constructor() {
        super();
        this.movies = [
            {
                title: 'The Shawshank Redemption',
                released_date: '1994-10-14',
                genre: 'Crime, Drama',
                duration: 142,
                rating: 9.3,
                description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
            },
            {
                title: 'The Godfather',
                released_date: '1972-3-24',
                genre: 'Crime, Drama',
                duration: 175,
                rating: 9.2,
                description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
            },
            {
                title: 'The Godfather: Part II',
                released_date: '1974-12-20',
                genre: 'Crime, Drama',
                duration: 202,
                rating: 9.0,
                description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.'
            }
        ];
    }

    createMovie(title){
        const id = Date.now();
        this.movies.push({
            id: id,
            title: title
        });

        this.emit("change");
    }

    getAll() {
        return this.movies;
    }

    handleActions(action) {
        console.log("Movie store received an action", action);
        switch(action.type) {
            case "CREATE_MOVIE": {
                this.createMovie(action.title);
                break;
            }
            case "RECEIVED_MOVIES": {
                this.movies = this.movies.concat(action.data);
                this.emit("change");
                break;
            }
            default: {
                break;
            }
        }

    }
}

const movieStore = new MovieStore();
dispatcher.register(movieStore.handleActions.bind(movieStore))
window.movieStore = movieStore;

window.dispatcher = dispatcher;
export default movieStore;