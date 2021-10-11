 let blueButton = document.getElementById("blueBtn");

 function makeBlue(){ 
  const jumbotron = document.getElementsByClassName("jumbotron")[0];
   
   jumbotron.style.backgroundColor = "#588fbd";
   const buttonsDiv = document.getElementsByClassName("buttons")[0];
   const buttons = buttonsDiv.children
   console.log(buttons);
   buttons[0].style.backgroundColor = "#ffa500";
    buttons[1].style.backgroundColor = "black";
    buttons[1].style.color ="white";
 }
   blueButton.addEventListener("click", makeBlue);

   let orangeButton = document.getElementById("orangeBtn");

   function makeOrange() {
     const jumbotron = document.getElementsByClassName("jumbotron")[0];

     jumbotron.style.backgroundColor = "#f0ad4e";
     const buttonsDiv = document.getElementsByClassName("buttons")[0];
     const buttons = buttonsDiv.children;
    
     buttons[0].style.backgroundColor = "#5751fd";
     buttons[1].style.backgroundColor = "#31b0d5";
     buttons[1].style.color = "white";
   }
   orangeButton.addEventListener("click", makeOrange);

   let greenButton = document.getElementById("greenBtn");

   function makeGreen() {
     const jumbotron = document.getElementsByClassName("jumbotron")[0];

     jumbotron.style.backgroundColor = `#87ca8a`;
     const buttonsDiv = document.getElementsByClassName("buttons")[0];
     const buttons = buttonsDiv.children;
     console.log(buttons);
     buttons[0].style.backgroundColor = `#87ca8a`;
     buttons[1].style.backgroundColor = "black";
     buttons[1].style.color = `#8c9c08`;
   }
   greenButton.addEventListener("click", makeGreen);





//  const nameInput = document.getElementById("example-text-input");
//   nameInputBgrd = nameInput.addEventListener("keyup",(e)=>{
//     if (e.target.value == 0){
//       nameInput.style.backgroundColor = red;
//     } else {
//        nameInput.style.backgroundColor = "null";
//     }
//  });

//   const textArea = document.getElementById("exampleTextarea");

// textAreaBgrd = nameInput.addEventListener("keyup", (e) => {
//   if (e.target.value == 0) {
//    textArea.style.backgroundColor = red;
//   } else {
//     textArea.style.backgroundColor = "null";
//   }
// });

   function submission(event){
   event.preventDefault();
    const email = document.getElementById("exampleInputEmail1");
    const nameInput = document.getElementById("example-text-input")
   const textArea = document.getElementById("exampleTextarea");
    if (email.value.length === 0 ){
       email.style.backgroundColor =" red";
    } else if (nameInput.value.length === 0) {
    nameInput.style.backgroundColor = " red";
    } else if (textArea.value.length === 0) {
     textArea.style.backgroundColor = " red";
    }
    

  }
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit",submission);
  