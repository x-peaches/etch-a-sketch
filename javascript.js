
//initial declarations

let container = document.getElementById('container');
let clearButton = document.getElementById('clear');
let numOfDivs = 16; 
createGrid();


//popup asking for the size of the grid

clearButton.addEventListener('click', popupFunction);

function popupFunction() {
   numOfDivs = prompt('How many squares per side do you want your sketchpad to have?', 16);

   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');}

   console.log(numOfDivs)
   container.innerHTML = '';
   createGrid();
}

//function to create grid, add event listeners

function createGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    container.appendChild(square);
    // square.addEventListener('mouseover', colorFunction);
    square.addEventListener('mouseover', opacityFunction);
    }
}

//random rgb color generator

function randomRGB() {
    let r = Math.floor(Math.random() * 255)+1;
    let g = Math.floor(Math.random() * 255)+1;
    let b = Math.floor(Math.random() * 255)+1;
    return `rgb(${r}, ${g}, ${b})`;
}


//function to color squares

function colorFunction(e) {
// e.target.classList.add('colored-black');
// e.target.style.backgroundColor = randomRGB();
}

// opacity function for incremental coloring

// let n = 0;
 function opacityFunction(e) {
e.target.classList.add('shaded');

//         if (n < 1) {
//             n += 0.1;
//         } else if (n > 1){
//             n -= 0.1;
//         }
//         let o = e.target.style.opacity;
//         e.target.style.opacity = `${o + 0.1}`
//         // e.target.style.backgroundColor = `rgb(220, 220, 200, ${n})`
//         // alert(n)
        
}

//mislim da sam nasla potencijalno resenje na stackoverflow - moram da napravim css var za alpha channel i onda nekako da nadjem nacin da je targetujem u js