import {getPokemon} from './generics/get-pokemon';
import { Pokemon } from './decorators/pokemon-class';

getPokemon(1)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.log(error))
    .finally(() => console.log('Fin de getPokemon'));

const charmander = new Pokemon('Charmander')

console.log(charmander);

//(Pokemon.prototype as any).custoName = 'Pikachu';

// console.log(charmander);

console.log(charmander.savePokemonToDB(900))