
function listOfNames(arrayOfPeople) {
  let content = document.getElementById("content");
  var ol = document.createElement ("ol")
  for( var i =0; i < arrayOfPeople.length; i++ ){
   let li = document.createElement ("li") ; 
   li .innerHTML = `<h1> ${arrayOfPeople[i].name } </h1>`;
    
    li.innerHTML += `<h2> ${arrayOfPeople[i].job} </h2>`;
    ol.appendChild(li);

}
content.appendChild(ol)
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
