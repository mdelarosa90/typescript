import {Pokemon} from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = 'Pikachu';
//charmander.savePokemonToDB(850);

charmander.publicApi = 'https://fernando-herrera.com'
console.log(charmander);