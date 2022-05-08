function carregarPokemon(){
    let valorUsuario = document.querySelector('.barradepesquisa');
    let value = valorUsuario.value; 
    console.log(value)
    let url = 'https://pokeapi.co/api/v2/pokemon/' + value ;

    fetch(url)
        .then((response) => {
            return response.json(); 
        })

        .then((dados) => {
            //O que vamos fazer com os dados em formato JSON
            console.clear(); 
            console.log(dados); 
            document.querySelector("#nome").innerHTML = dados["name"]; 
            //chave da api é "name"
            let img = dados['sprites']['other']['official-artwork']['front_default'];
            document.querySelector("#pic").setAttribute('src', img); 
            document.querySelector(".id").innerHTML = dados["id"]; 
        })

        .catch((erro) => {
            console.log("Erro " + erro); 
        }); 
    
}


document.querySelector(".btnPesquisa").onclick = carregarPokemon;