// funciones en JS

const saludar = function(nombre) {
  return `Hola, ${nombre}`
}
console.log(saludar('Jorge Eliécer'));

// funciones flecha - lambda

const saludarArrow = nombre => `Hola, ${nombre}`;

console.log(saludarArrow('Jorge Eliécer'));

const getUser = () => ({uid: 'ABC123', username: 'El_User1234'});

console.log(getUser());

// Tarea

const user = (name) => ({
    uid: 'ABC123',
    username: name
});


const activeUser = user('Jorge');
console.log(activeUser)
