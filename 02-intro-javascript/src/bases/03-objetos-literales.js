const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zipCode: 550505050,
    lat: 14.010101,
    lng: 34.929292,
  }
};

// console.table({person});

const person2 = { ...person };

person2.name = 'Peter';

console.log(person);
console.log(person2)