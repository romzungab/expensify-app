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

const book = {
    title:'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'Penguin'
    }
};

const {name:publisherName = 'Self-published'} = book.publisher;
console.log(publisherName)

//ARRAY destructuring