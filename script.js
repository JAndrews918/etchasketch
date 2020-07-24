//setup initial document selector for grid
const box2 = document.querySelector('.box2');

//setup starting grid row/height
let pixelHeight = 16;

//create grid of i height and j width
function createGrid(pixelHeight) {
    for (let i = 0; i < pixelHeight; i++) {
        let div = document.createElement('div');
        div.className = "flex-row";
        div.style.height = (100 / pixelHeight) + "%";
        box2.appendChild(div);
        for (let j = 0; j < pixelHeight; j++) {
            let div2 = document.createElement('div');
            div2.className = "pixel";
            div.appendChild(div2);
        }
    }
}


// initialize first grid
createGrid(pixelHeight);


// function to reset event listeners
function resetListener () {
    let pixelCell = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixelCell.length; i++) {
        pixelCell[i].addEventListener('mouseover', function() {
            blackFunction(pixelCell[i]);
        });
    } 
}

// function to reset event listeners for color
function resetListenerColor () {
    let pixelCell = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixelCell.length; i++) {
        pixelCell[i].addEventListener('mouseover', function() {
            colorFunction(pixelCell[i]);
        });
    } 
}


// clear screen and prompt for new number of grid rows
function clearScreen() {
    let numPixel = prompt("Please enter grid size");
    if (numPixel != null) {
        let parent = document.querySelector(".box2");
        while (parent.firstChild) {
            parent.firstChild.remove();
        }
        createGrid(numPixel);
        resetListener();
    }
}


//initialize event listeners
resetListener();

// style cells on mouseover with black background
function blackFunction (cell) {
    cell.style.backgroundColor = "black";
}

// style cells on mouseover with random background
function colorFunction (cell) {
    let rgbtRed = getRandomInt(0, 255);
    let rgbtGreen = getRandomInt(0, 255);
    let rgbtBlue = getRandomInt(0, 255);
    let ranColor = "rgb("+ rgbtRed + "," + rgbtGreen +"," + rgbtBlue +")"
    cell.style.backgroundColor = ranColor;
}

// random function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }