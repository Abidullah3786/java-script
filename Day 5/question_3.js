function checkAngle(angle){
  if(angle > 0 && angle < 90){
    return "acute";
  }
  else if(angle == 90){
    return "right";
  }
  else if(angle > 90 && angle < 270){
    return "obtuse";
  }
  else if(angle == 270){
    return "straight";
  }
  else{
    return "none of them";
  }
}

console.log(checkAngle(0));
console.log(checkAngle(45));