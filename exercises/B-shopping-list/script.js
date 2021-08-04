function shoppingList(arrayOfPeople) {
  // Write your code here...
  let list = document.createElement("ul");
  for(var i =0; i < shopping.length; i ++ ){
     liEl = list.createElement("li");
     liEl.innerHTML = arrayOfPeople[i];
     ul.appendChild("li");


  }
}
document.getElementById("content").appendChild(ul);

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
