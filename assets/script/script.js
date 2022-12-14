const fetchPokemon = () => {
    const getPokemonUrl = (id) =>`https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = 1; i <= 150; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(res => res.json()))
    }
    
    Promise.all(pokemonPromises)
}

fetchPokemon()
