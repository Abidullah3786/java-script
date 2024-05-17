// this code is basicaly for objects and switch statement

var person = {
  "name": "Abid",
  "age" : 21, 
  "proffesion": "student",
  "countery": "pakistan",
  "degree": "computer science"
}

function info(question){
  
  switch(question){
    case "name":
          return person.name;
    
    case "age":
          return person.age;
        
    case "proffesion":
          return person.proffesion;

    case "countery":
          return person.countery;

    case "degree": 
          return person.degree;

    case "health":
          return person.health;
  }

}

// we can aslo add properties to objects

person.health = "good";

console.log(info("name"));
console.log(info("age"));
console.log(info("proffesion"));
console.log(info("countery"));
console.log(info("degree"));
console.log(info("health"));


// also we can access the object as an array
var players = {
  1: "babar azam",
  2: "saim ayub",
  3: "muhammad rizwan",
  4: "fakhar zaman",
  5: "iftikhar ahmad",
  6: "irfan khan niazi",
  7: "shadab khan",
  8: "shaheen shah afridi",
  9: "muhammad amir",
  10: "imad wasim",
  11: "nasim shah"
}

function printPlayerName(playerNumber){
  console.log(players[playerNumber]);
}

// we can aslo add new properties to objects outside
players[12] = "wasim jr";

printPlayerName(1);
printPlayerName(9);
printPlayerName(8);
printPlayerName(12);