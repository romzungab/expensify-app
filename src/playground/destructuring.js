//OBJECT destructuring

// const person = {
//     name: 'Roms',
//     age: 36,
//     location:{
//         city: 'Auckland',
//         temp: 88
//     }
// };
//  const { name: firstName ='Anonymous', age} = person;

// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`it's ${temperature} in ${city}`)
// }


//ARRAY destructuring

const address = ['1299 S Juniper Street', 'Philadelphia','Pennsylvania','19147'];

const [,city, state='New York',zip] = address;
console.log(`You are in ${city}, ${state}`);


const item =['Coffee (iced)','$3.00','$3.50', '3.75'];

const [itemName, ,medium] = item;
console.log(`A medium ${itemName} costs ${medium}`)