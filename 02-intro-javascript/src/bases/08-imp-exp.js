import heroes, {owners} from '../data/heroes';

// const getHeroesById = (id) => {
//   return heroes.find((heroes) => {
//     if (heroes.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// }

// console.log(owners);

export const getHeroesById = (id) => heroes.find( heroe => heroe.id === id);

// console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));