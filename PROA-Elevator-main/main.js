import Elevator from './elevator.js';

let floor = 5;
let capacity = 10;

let elevator = new Elevator(capacity, floor);
let elevator_e = document.querySelector(".elevator");

let section = document.querySelector("#MyElevatorSection")
for(let i = 0 ;i < floor; i++){
    let floor = document.importNode( document.querySelector('.floor'), true);
    section.appendChild(floor);
}
let elevHeight = elevator_e.getBoundingClientRect().height;
let altitude = section.getBoundingClientRect().height;
elevator_e.style.transform = `translateY(${altitude - elevHeight}px)`;
console.log(altitude - elevHeight)

const updateDOM = () => {
    
    elevator_e.style.transform = `translateY(-${elevator.elevPosition.level * elevHeight}px)`;
    console.log(altitude)
}

updateDOM();

document.querySelector("#goUp").onclick = () => {
    let quantity = Number(document.querySelector("#inputValue").value);
    let resp = elevator.GoUp(quantity);
    
    if(resp){
        updateDOM()
    }
}

document.querySelector("#goDown").onclick = () => {
    let quantity = Number(document.querySelector("#inputValue").value);
    let resp = elevator.GoDown(quantity);
    console.log(resp)

    if(resp){
        updateDOM()
    }
}
