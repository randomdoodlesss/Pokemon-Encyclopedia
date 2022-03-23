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
];

//this is to display the name of the app; it still needs proper styling
document.write('<h1>Pokemon Encyclopedia</h1>');

//this is to create an unordered list of the items in pokemonList
document.write('<ul class="ul">')

//this is the for loop I created to display the name and height of the Pokemon on a loop)
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<li class="listitem"> ' + pokemonList[i].name + ' ' + 'Height: ' + pokemonList[i].height + '</li>');
}

if (pokemonList => 35){
  document.write(' - The big boss is here!')
}

document.write('</ul>')
