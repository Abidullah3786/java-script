const person = {
  name: "Abid",
  age: 22,
  country: "Pakistan"
}

function logData(obj){
  console.log(`${obj.name} is ${obj.age} years old and lives in ${obj.country}`);
}

logData(person);