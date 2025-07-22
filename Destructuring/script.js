//Object Destructuring
const person = {
  fname: "Himmanu",
  age1: 25,
};

var { fname, age1 } = person;

console.log(fname);
console.log(age1);
console.log(person);

// String Destructuring

var lastname = "Naveenkumar";

let [char1, char2, char3, ...balanceChars] = lastname;

console.log(char1);
console.log(char2);
console.log(char3);
console.log(balanceChars);
console.log(lastname);

//Nested Object Destructuring

const person_nested_data = {
  name: "Himmanu",
  age: 25,
  address: {
    city: "Delhi",
    pincode: 110001,
    location: {
      lat: 28.61,
      long: 77.23,
    },
  },
};

let {
  name,
  age,
  address: {
    city,
    pincode,
    location: { lat, long },
  },
} = person_nested_data;

console.log(name);
console.log(age);
console.log(address);
console.log(city);
console.log(pincode);
console.log(location);
console.log(lat);
console.log(long);
