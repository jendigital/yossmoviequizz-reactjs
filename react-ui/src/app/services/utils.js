import { IMG_URL } from '../constants'

//Avoir un chiffre entre 1 et 10 de façon aléatoire
export function getRandomInt() {
    return Math.floor((Math.random() * 10) + 1);
}

//Avoir un 0 ou 1 aléatoirement
export function getRandomBoolean() {
    let random = Math.random()
    if(random<0.5) {
        return Math.floor(random)
    } else {
        return Math.ceil(random)
    }
}

export function imgPath(path) {
    return IMG_URL + path;
}

export function isHighscore(highscores, score) {
    if(score >= (highscores[9] && highscores[9].correct)) {
        return true;
    }

    return false;
}
