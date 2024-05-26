//  default values
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

function anotherFunction(){
  return "Hello there";
}


// this last function will be called it does not matter from where its called.
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
  alert(text + " " + from);
}



showMessage("Abid");





// Default parameters in old js code
function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}

// or
function showMessage(from, text) {
  text ?? "there is no text";
  // text = text || "there is no text";  this line works same as the above

  alert( from + ": " + text );
}





// alternative default parameters

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unkn
