// Función para realizar la consulta de la API
const cardNombre = document.getElementById("card-nombre");
//const cardPokemon = document.getElementById("card-pokemon");
//const pokemonName = document.getElementById("pokemon-name");
let bodyCards = document.getElementById("listaTodos");
//const namePoke = document.getElementById("pokemon-name").value;

const url = `https://pokeapi.co/api/v2/pokemon/`;

consultarPokemon();

async function consultarPokemon() {
  //const namePokemon = document.getElementById("pokemon-name").value;

  //debugger;
  for (let i = 0; i < 600; i++) {
    const response = await fetch(`${url}${i}`);
    //console.log(response);
    // Si la consulta fue exitosa, convertir la respuesta a JSON
    if (response.ok) {
      const pokemon = await response.json();
      //console.log(pokemon);
      mostrarPokemon(pokemon);
    }
  }

  function mostrarPokemon(pokemon) {
    let tiposs = pokemon.types.map(
      (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
    );
    tiposs = tiposs.join("");
    console.log(tiposs);
    console.log(pokemon);
    const sprite = pokemon.sprites.other;
    console.log(sprite);
    const { dream_world, home } = sprite;
    const div = document.createElement("div");
    div.classList.add("cardPokemon");
    div.innerHTML = `
    <div class="pokemon">
    <p class="pokemonIdBig">#${pokemon.id}</p>
    <div class="pokemonImagen">
      <img
        src="${home.front_default}"
        alt=""
      />
    </div>
    <div class="pokemonInfo">
      <div class="nombreContenedor">
        <p class="pokemonId">#${pokemon.id}</p>
        <h2 class="pokemonNombre">${pokemon.name}</h2>
      </div>
      <div class="pokemonTipos">
        ${tiposs}
      </div>
      <div class="pokemonStats">
        <p class="stat">${pokemon.height}M</p>
        <p class="stat">${pokemon.weight}KG</p>
      </div>
    </div>
    </div>`;
    const { stast, types } = pokemon;
    bodyCards.appendChild(div);
  }
}

{
  /* <div class="pokemon">
<p class="pokemonIdBig">#25</p>
<div class="pokemonImagen">
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    alt=""
  />
</div>
<div class="pokemonInfo">
  <div class="nombreContenedor">
    <p class="pokemonId">#25</p>
    <h2 class="pokemonNombre">Pikachu</h2>
  </div>
  <div class="pokemonTipos">
    <p class="Electric tipo">Electric</p>
    <p class="Fighting tipo">Fighting</p>
  </div>
  <div class="pokemonStats">
    <p class="stat">4M</p>
    <p class="stat">60KG</p>
  </div>
</div>
</div> */
}
