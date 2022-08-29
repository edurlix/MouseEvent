let itemOne = document.getElementById('itemOne');
let itemTwo = document.getElementById('itemTwo');
let itemThree= document.getElementById('itemThree');
let itemFour = document.getElementById('itemFour');
let itemFive = document.getElementById('itemFive');
let resetButton = document.getElementById('reset-button');

let reset = () =>{
    itemOne.style.width = '';
    itemTwo.style.backgroundColor = '';
    itemThree.innerHTML = 'The mouse must leave the box to change the text';
    itemFive.style.display = 'none';
}

resetButton.onclick = reset;

let increaseWidth = () =>{
    itemOne.style.width = '700px';
}

let changeColor = () =>{
    let random = Math.floor(Math.random()*256);
    let random2 = Math.floor(Math.random()*256);
    let random3= Math.floor(Math.random()*256);
    let color = 'rgb(' + random + ',' + random2 + ',' + random3 + ')';
    // console.log(color);
    itemTwo.style.backgroundColor = color;
}

let changeText = () =>{
    itemThree.innerHTML = 'The mouse has left the element'
}

let fifthboxappear = () =>{
    itemFive.style.display = 'block';
}

itemOne.addEventListener('mouseover',increaseWidth);
itemTwo.addEventListener('mouseup',changeColor);
itemThree.addEventListener('mouseout',changeText);
itemFour.addEventListener('click',fifthboxappear);


