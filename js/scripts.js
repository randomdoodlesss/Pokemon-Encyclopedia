//wrapping pokemonList in IIFE format
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Jigglypuff',
      height: 0.5,
      weight: 5.5,
      type: ['fairy', ' normal']
    },
    {
      name: 'Butterfree',
      height: 1.1,
      weight: 32,
      type: ['bug', ' flying']
    },
    {
      name: 'Nidoqueen',
      height: 1.3,
      weight: 60,
      type: ['ground', ' poison']
    },
  ];
 function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon &&
     "height" in pokemon &&
     "weight" in pokemon &&
     "types" in pokemon
   ) {
     pokemonList.push(pokemon);
   } else {
     console.log("pokemon not found");
   }
 }
 function getAll() {
   return pokemonList;
 }
 function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let pokemonitem = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("pokemon-list-button");
   pokemonitem.appendChild(button);
   pokemonList.appendChild(pokemonitem);
   addEvent(button, pokemon);
 }
 function addEvent(button,pokemon) {
   button.addEventListener('click', function() {
     showDetails(pokemon);
   });
 }
   function showDetails(pokemon) {
       console.log(pokemon);
   }
 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem
 };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);
});
