
export class Requisicao{

    constructor(url=false){
        this._URL = url;
    }

    get URL(){
        return  this._URL
    }

    set URL(url){
        this._URL = url
    }


    async getFilmes(){

        try{

            if(this._URL != false){
                const data = await fetch(this._URL)
                const json = await data.json();
                return json;
            }
            else{
                throw new Error('URL não definida');
            }

        }catch(e){
            console.log(e.message)
        }

    }
}