let userName = prompt("Enter you name");
if(userName == "Admin"){

  let password = prompt("Enter you password"); 

  if(password === "TheMaster"){
    alert("Welcome");
  } 
  else if(password == "" || password == "undefined") {
    alert("canceld");
  } else {
    alert("wrong password");
  }
  
}
else if(userName == "" || "undefined"){
  alert("canceld");
}
else{
  alert("i dont know you");
}