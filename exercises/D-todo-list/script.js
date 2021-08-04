function todoList(todos) {
  // Write your code here...
  let newList = document.createElement("ol");
  for( var i =0; i < todos.length; i++){
    let newLi = document.createElement("li");
    newLi.addEventListener("onclick", changColor);
    function changColor(){
      document.newLi.style.backgroundColo = "red";
       newLi.addEventListener("onclick", changColoragain);
       function changColoragain(){
         if ( document.newLi.style.backgroundColo = "red" ){
            document.newLi.style.backgroundColo = "white";
         }
       }

    }
  }
  ol.appendChild("li");
  document.getElementById("content").appendChild(ol);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);