var elPokemonNameInput = document.querySelector('.pokemon__name-input');
var elPokemonSearchButton = document.querySelector('.pokemons-search-button');
var elPokemon = document.querySelector('.pokemons');
var elPokemonTemplate =document.querySelector('#template').content;
var elSearchForm = document.querySelector('.search-form');

var moviesFragment = document.createDocumentFragment();

var results = pokemons.filter(function (pokemon) {
    var movieClon = document.importNode(elPokemonTemplate, true);
    movieClon.querySelector('.pokemon__images').src = pokemon.img;
    movieClon.querySelector('.pokemon__name').textContent = pokemon.name;
    moviesFragment.appendChild(movieClon);
    elPokemonNameInput.value= "";

    elPokemonNameInput.focus();
    elPokemon.InnerHTML = "";
    elPokemon.appendChild(moviesFragment);
});

elPokemonSearchButton.addEventListener('click', function(){
    elPokemon.innerHTML = "";
    // eve.preventDefault();
    if(!elPokemonNameInput.value){
     elPokemonNameInput.value = "";
     elPokemonNameInput.focus();
     alert('Pokemon nomini kiriting.');
     return;

 }
 var pokemonQuery = new RegExp(elPokemonNameInput.value, 'gi');
 var results = pokemons.filter(function (pokemon) {
    elPokemonNameInput.value = "";
    elPokemonNameInput.focus();
    return pokemon.name.toString().match(pokemonQuery);

});
    if(!results.length){
        alert('Bunday pokemon yuq.');
        return;
    }
    var pokemonFragment = document.createDocumentFragment();


    results.filter(function (pokemon) {
    var movieClon = document.importNode(elPokemonTemplate, true);
    movieClon.querySelector('.pokemon__images').src = pokemon.img;
    movieClon.querySelector('.pokemon__name').textContent = pokemon.name;
    moviesFragment.appendChild(movieClon);
    elPokemonNameInput.focus();
    elPokemon.InnerHTML = "";
});
    elPokemon.appendChild(moviesFragment);
});


