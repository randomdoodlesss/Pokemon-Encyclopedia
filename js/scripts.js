//wrapping pokemonList in IIFE format
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Jigglypuff',
      height: 0.5,
      weight: 5.5,
      type: ['fairy', 'normal']
    },
    {
      name: 'Butterfree',
      height: 1.1,
      weight: 32,
      type: ['bug', 'flying']
    },
    {
      name: 'Nidoqueen',
      height: 1.3,
      weight: 60,
      type: ['ground', 'poison']
    }
  ]

  //added get all function to return pokemonList
  function getAll () {
    return pokemonList;
  }

  //added function to call single items
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  //returning the above getAll and add functions
  return {
    getAll: getAll,
    add: add
  }

})();

//created a new forEach loop to list all pokemons on the list
pokemonRepository.getAll().forEach (function(pokemon) {
  document.write("<p>" + "Name:  " + pokemon.name + " Height: " + pokemon.height + " Weight: " + pokemon.weight + " Type: " + pokemon.type + "<p>");

});
