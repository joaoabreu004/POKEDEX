function loadpokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/172'; 
    fetch(url)
        .then((response) => {
            return response.json(); 
        })

        .then((dados) => {
            //O que vamos fazer com os dados em formato JSON
            console.clear(); 
            console.log(dados); 
            document.querySelector(".nome").innerHTML = dados["name"]; 
            //chave da api é "name"
            let img = dados['sprites']['front_default'];
            document.querySelector(".pokedex__left__tela__pic").setAttribute('src', img); 
            document.querySelector(".id").innerHTML = dados["id"]; 
        })

        .catch((erro) => {
            console.log("Erro " + erro); 
        }); 
    
}


document.querySelector(".carregar").onclick = loadpokemon;