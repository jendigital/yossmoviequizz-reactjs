import { API_KEY, API_URL } from '../constants'

export function fetchPopularMovie(page) {
    return fetch(API_URL + '/discover/movie?page=' + page + '&sort_by=popularity.desc&api_key=' + API_KEY).then(res => {
        if(!res.ok) {
            return(Promise.reject(res.statusText))
        }
        return res.json()
    }).then(res => {
        return res
    })
}

export function fetchPopularActor(page) {
    return fetch(API_URL + '/person/popular?page=' + page + '&api_key=' + API_KEY).then(res => {
        if(!res.ok) {
            return(Promise.reject(res.statusText))
        }
        return res.json()
    }).then(res => {
        return res
    })
}

export function fetchActorMovies(id) {
    return fetch(API_URL + '/discover/movie?with_people=' + id + '&api_key=' + API_KEY).then(res => {
        if(!res.ok) {
            return(Promise.reject(res.statusText))
        }
        return res.json()
    }).then(res => {
        return res
    })
}
