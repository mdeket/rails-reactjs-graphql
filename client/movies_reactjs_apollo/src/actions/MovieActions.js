/**
 * Created by mdeket on 4/4/17.
 */
import dispatcher from '../dispatcher';

export function createMovie(title) {
    dispatcher.dispatch({
        type: "CREATE_MOVIE",
        title
    });
}

export function deleteMovie(id) {
    dispatcher.dispatch({
        type: "DELETE_MOVIE",
        id
    });
}


export function reloadMovies() {
    // axios("http://someurl.com/somedataendpoint").then((data) =>{
    //    console.log()
    // });
    dispatcher.dispatch({
        type: "RELOAD_MOVIES"
    });

    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVED_MOVIES",
            data: [
                {
                    title: 'The Dark Knight',
                    released_date: '2008-7-18',
                    genre: 'Action, Crime, Drama',
                    duration: 152,
                    rating: 9.0,
                    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the Dark Knight must come to terms with one of the greatest psychological tests of his ability to fight injustice.'
                },
                {
                    title: '12 Angry Men',
                    released_date: '1957-4-1',
                    genre: 'Crime, Drama',
                    duration: 96,
                    rating: 8.9,
                    description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.'
                }
            ]
        });
    }, 1500)
}
