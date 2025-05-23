const btn = document.getElementById("btn")
const listaPokemons = document.getElementById("listaPokemons")




btn.addEventListener("click", () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20").then(res => res.json()).then(resposta =>{
        const lista = resposta.results

        listaPokemons.innerHTML = ''

        lista.forEach(pokemon => {
            fetch(pokemon.url).then(resposta => resposta.json()).then(resposta =>{
                listaPokemons.innerHTML += `
                <div class="pokemon">
                    <h3>${resposta.name}</h3>
                    <img src="${resposta.sprites.front_default}"></img>
                    <img src="${resposta.sprites.back_default}"></img>
                    <p>${resposta.types.map(t => t.type.name).join(", ")}</p>
                </div>
                `
            })
        });

    }).catch(error => console.log(error))

})

