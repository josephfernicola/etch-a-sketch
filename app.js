const container = document.querySelector("#container");
const square = document.getElementsByClassName("squares");
const button = document.getElementById("clear");
const userInput = document.getElementById("quantity");
const wrongNumber = document.getElementById("wrongNumber")

for (let i = 0; i < 256; i++) {
    let squares = document.createElement('div');
    squares.className = "squares";
    container.appendChild(squares);
}

for (const value of square) {
    value.addEventListener('mouseover' , () => {
        value.style.backgroundColor = 'black';
    })
}

for (const number of square) {  
  button.addEventListener('click' , () => {
    number.style.backgroundColor = 'white';
  });
}

userInput.addEventListener("change" , updateGrid);

function updateGrid() {
    container.textContent = '';
    if (userInput.value > 0 && userInput.value <= 40) {
    container.style.setProperty("grid-template-columns" , `repeat(${userInput.value}, 2fr)`);
    container.style.setProperty("grid-template-rows" , `repeat(${userInput.value}, 2fr)`);

    for (i = 0; i < userInput.value * userInput.value; i++) {
        let updatedSize = document.createElement('div');
        updatedSize.className = "updatedSize";
        container.appendChild(updatedSize);
        updatedSize.style.borderStyle = "solid";
        updatedSize.style.borderColor = "black";    
    };

    const newList = document.getElementsByClassName("updatedSize");
    for (const updatedHover of newList ) {
        updatedHover.addEventListener('mouseover', () => {
            updatedHover.style.backgroundColor = 'black'    
        });
    }
    for (const clearing of newList) {  
        button.addEventListener('click' , () => {
          clearing.style.backgroundColor = 'white';
        });
      }
      wrongNumber.textContent = "";
  }
  else { 
    wrongNumber.textContent = "Please choose a number between 1 and 40.";
  }
} 