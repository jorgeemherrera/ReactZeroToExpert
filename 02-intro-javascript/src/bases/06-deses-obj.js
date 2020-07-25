// Desestructuración de objetos

const person = {
  name: 'Tony',
  age: 45,
  key:'Iroman',
};

// console.log(person.name);
// console.log(person.age);
// console.log(person.key);

// Asignación desestructurante de objetos

const { name, age, key } = person;

console.log(name);
console.log(age);
console.log(key);

const useContext = ({name, age, key}) => {
  // console.log(name, age, key);
  return {
    nameKey: key,
    anios: age,
    latlng: {
      lat: 14.1212,
      lng: -12.432
    }
  }
}

const {nameKey, anios, latlng} = useContext(person);
const { lat, lng } = latlng;

console.log(nameKey, anios);
console.log(latlng);
console.log(lat, lng);
