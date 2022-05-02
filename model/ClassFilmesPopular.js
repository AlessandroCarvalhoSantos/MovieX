import {Requisicao} from './ClassRequisicao.js';


export class FilmesPopular extends Requisicao{

    constructor(){
        super(false)
    }
    async getFilmesPopular(quantidade = 1){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=5ed507b6ef8b3258de0c2e948b1c2d79&language=pt-BR"
        const pages = Math.ceil((quantidade/20));
        var resultado = new Array();
        for(let i=1; i<=pages; i++){
            this.URL = url+'&page='+ i;
            let dados = await this.getFilmes();
            for (let item of dados.results) {
                resultado.push(item);
            }
        }
        const filmes = new Set();
        do{
            filmes.add(resultado[Math.ceil(Math.random() * (resultado.length-1 - 0) + 0)]);
        }while(filmes.size != quantidade);
           
        return filmes;
    }
}