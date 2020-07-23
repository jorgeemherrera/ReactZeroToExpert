// Variables y Constantes

const nombre = 'Jorge Eliecer';
const apellido = 'Muñoz Herrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Scope

if (true) {
  const nombre = 'Peter';
  let valorDado = 6;
  console.log('if', valorDado, nombre);
}

console.log('scope: ', valorDado);