const container = document.getElementById('container');

function makeContainers(rows,cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < rows * cols; i++){
        let cell = document.createElement('div');
        //cell.innerText = (i + 1);
        container.appendChild(cell).classList.add('grid-cell');
    };
};

let isMouseDown = false;

function colorChanger(){
    let red, green, blue;
        red = (Math.floor(Math.random() * 256));
        green = (Math.floor(Math.random() * 256));
        blue = (Math.floor(Math.random() * 256));
    return `rgb(${red},${green},${blue})`;
}

function addHoverColor(){
    hColor = document.querySelectorAll('.grid-cell');
    hColor.forEach(cell => {
        cell.addEventListener('mousedown', () =>{
            isMouseDown = true;
            cell.style.background = colorChanger();
        });
        cell.addEventListener('mouseover', () =>{
            if(isMouseDown){
                cell.style.background = colorChanger();
            }
        });
        cell.addEventListener('mouseup', ()=>{
            isMouseDown = false;
        });
    });
}

function buttonPrompt(){
    button = document.querySelector('.button');
    button.addEventListener('click', ()=>{
        number = prompt('How many ? x ? squares would you like?');
        if(number <= 100 && number >= 1){
        container.innerHTML = '';
        makeContainers(number,number);
        addHoverColor();
        }
        else{
            alert('Must be more than 0 and less than or equal to 100.');
        }
    });
}

buttonPrompt();
makeContainers(16,16);
addHoverColor();