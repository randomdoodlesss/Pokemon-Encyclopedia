let pokemonList = [
  { name: 'Jigglypuff', height: 0.5, weight: 5.5, type: ['fairy', 'normal'] },
  {name: 'Butterfree', height: 1.1, weight: 32, type: ['bug', 'flying'] },
  {name: 'Nidoqueen', height: 1.3, weight: 60, type: ['ground', 'poison'] },
];

//this is the for loop I created to display the name and weight of the Pokemon on a loop, it includes a conditional for the weight value)
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].weight >= 35){
    document.write("<p>" + pokemonList[i].name + ' ' + 'weight: ' + pokemonList[i].weight + ' - The big boss is here' + "</p>");
  }
  else
  document.write("<p>" + pokemonList[i].name + ' ' + 'weight: ' + pokemonList[i].weight + "</p>");
}
