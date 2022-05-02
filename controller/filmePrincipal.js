import {Requisicao} from '../model/ClassRequisicao.js';
import {FilmesPopular} from '../model/ClassFilmesPopular.js';


// const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=5ed507b6ef8b3258de0c2e948b1c2d79&language=pt-BR&page=1"
// const requisitar = new Requisicao(BASE_URL);
// console.log( await requisitar.getFilmes());


const filmes= new FilmesPopular();
let filmePrincipal = await filmes.getFilmesPopular(1);
filmePrincipal = filmePrincipal.values().next().value;
console.log(filmePrincipal)


document.getElementById('film-title').innerText = filmePrincipal.title;
document.getElementById('film-description').innerText = filmePrincipal.overview;
document.getElementsByClassName('filme-principal')[0].style = `background:linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 1)), 
url(https://image.tmdb.org/t/p/original//${filmePrincipal.backdrop_path});
background-size: cover; 
min-height: 100vh;
background-position:center;`;

document.getElementById('film-title').innerText = filmePrincipal.title;

// https://www.youtube.com/watch?v=HJv4LQxbVEA






