//function listOfColours(colours) {
  // Write your code here...
  //const content = document.querySelector("#content");

  function displayChosenColour(colour) {
    const colourInfo = document.querySelector("p");
    const chosenColourMessage = `You have chosen the colour ${colour}`;
    colourInfo.innerText = chosenColourMessage;
    colourInfo.style.color = colour;
  }

  function listOfColours(colours) {
    const colourSelectMenu = document.createElement("select");
    const colourInfo = document.createElement("p");

    colours.forEach((colour) => {
      const colourOption = document.createElement("option");

      colourOption.innerText = colour;
      colourOption.addEventListener("click", () => displayChosenColour(colour));
      colourSelectMenu.appendChild(colourOption);
    });

    content.appendChild(colourSelectMenu);
    content.appendChild(colourInfo);
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
