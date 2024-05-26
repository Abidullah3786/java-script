let myLeads = []
const inputEl = document.getElementById("input-el")
const bkmLst = document.getElementById("bkm-lst")
const dltBtn = document.getElementById("delete-items")
const saveBtn = document.querySelector("#save-btn")
const saveTabBtn = document.getElementById("save-tab")


myLeads = JSON.parse(localStorage.getItem("myLeads"))
console.log(myLeads);


if(myLeads == null){
  myLeads = [];
}
else{
renderLeads();
}


saveTabBtn.addEventListener("click", function(){

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
  })

})

saveBtn.addEventListener("click", function () {
  if(inputEl.value !== ""){
    myLeads.push(inputEl.value);
  }  
  renderLeads();

  // pushing the array to browser local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  // after saving clear the input field
  inputEl.value = ""
})


dltBtn.addEventListener("click", function (){
  myLeads = []
  bkmLst.innerHTML = ""
  localStorage.clear();
});

function renderLeads(){
  let lstItm = ""
  for(let x = 0; x < myLeads.length; x++){
    // bkmLst.innerHTML += "<li>" + myLeads[x] + "</li>";
    // lstItm += "<li><a target=\"_blank\" href=\""  + myLeads[x] + "\">" + myLeads[x] + "</li>";
    lstItm += `<li>
                  <a href="${myLeads[x]}">${myLeads[x]}</a>
              </li>`
  }

  bkmLst.innerHTML = lstItm
}





