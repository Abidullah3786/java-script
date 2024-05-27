const signInBtn = document.getElementById("sign-in");
const signUpBtn = document.getElementById("sign-up");

const person = {

  userName: "",
  accNo: 0,
  pin: 0,
  curBalance: 0,
  lastTran: 0,
  tranHistory: {},
  phNumber: 0

}

let users = []

let tranHistory = {
  sndrOrRcrName: "",
  amount: "",
  tranFlage: false // if true then recived, else sent
}


signInBtn.addEventListener("click", signIn);

function signIn(e){
  person.userName = prompt("Enter user name", "john doe");
  person.pin = +prompt("Enter your pin no", "1234");

  for(let i = 0;  i < users.length;  i++){
    if(users[i].userName === person.userName && users[i].pin === person.pin){
      location.replace("signedIn.html");
    } 
    else {
      alert("Error: User name or pin is incorrect!");
    }
  }
}