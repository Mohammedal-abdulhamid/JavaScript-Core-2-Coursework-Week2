
function listOfNames(arrayOfPeople) {
  let content = document.getElementById("#content");
  var ol = document.creatElement ("ol")
  for( var i =0; i < arrayOfPeople.length; i++ ){
   let li = document.creatElement ("li") ; 
   li .innerHTML = "<h(1)> arrayOfPeople[i].name </h(1)>";
    
    li.innerHTML = "<h2> arrayOfPeople[i].job </h2>";
    ol.appendChild(li);

}
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
