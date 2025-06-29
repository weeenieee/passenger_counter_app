// INCREMENT
// initialise the count = 0
// listen for clicks
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

let count = 0
let countEl = document.getElementById("count-el") 
let saveEl = document.getElementById("save-el") 

function increment() {
    count += 1
    countEl.textContent = count 
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
}

