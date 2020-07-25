
import { getHeroesById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroesById(2);
//     resolve(heroe);
//     //reject('no se pudo encontrar el heroe');
//   }, 2000)
// });

// promesa.then((heroe) => {
//   console.log('Heroe:', heroe)
// })
// .catch(err => console.error(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('no se pudo encontrar el heroe');
      }
    }, 2000)
  });
}

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.error)