const creatureID = document.getElementById('creature-id');
const creatureName = document.getElementById('creature-name');
const specialName = document.getElementById('special-name');
const specialDescription = document.getElementById('special-description');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const creatureContainer = document.getElementById("creature-container");
const searchBtn = document.getElementById("search-button");


////////// search for a creature
 const searchCreature = async (str) => {
  //const str = searchInput.value.toLowerCase();
  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${str}`);
    
    const data = await res.json();
    
  creatureName.textContent = `${data.name.toUpperCase()}`;
  creatureID.textContent = `#${data.id}`;
  weight.textContent = `Weight: ${data.weight}`;
  height.textContent = `Height: ${data.height}`;
  //specialName.textContent = data.special.name;
  specialDescription.textContent = data.special.description;

  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;

  types.innerHTML = data.types.map(obj => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join(', ');

  } catch (err) {
    console.log(err);
    alert("Creature not found");
    searchInput.value ='';
    reset();
    return;
  }


};

const reset = () => {
  creatureName.textContent = '';
  creatureID.textContent = '';
  height.textContent = '';
  weight.textContent = '';
  types.innerHTML = '';
  specialName.innerHTML = '';
  specialDescription.innerHTML = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};




searchBtn.addEventListener("click", () =>
{
  const str = searchInput.value.toLowerCase();
  
  searchCreature(str);
});