var rollNum = 20
var intro = "My name is "
var name = "Abid "
var outro = "and my roll no is "

var introduction = intro + name + outro + rollNum

// console.log(introduction)


// length of a string

var name = "Abid"
console.log(name.length);

var firstCharOfName = name[0]
// console.log(firstCharOfName)

// All summary

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = ""
  result += "The " + myAdjective + " " + myNoun + " " +  myVerb + " " + myAdverb
  return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))


