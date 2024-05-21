let count = 0;
let entriesCount = "Prevous Entries: ";
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("entries");

saveEl.textContent = entriesCount;
function increment(){
  count++;
  countEl.textContent = count;
}

function save(){
  saveEl.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}