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

//Have to study this logic
//New things learned .map, regex, Number
//Understanding the complexity of applying cell from addHoverColor() to colorChanger(cell)
function colorChanger(cell){
    let color = cell.style.background || 'rgb(255,255,255)';
    let [red, green, blue] = color.match(/\d+/g).map(Number);
    if(!cell.colored){
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        cell.colored = true;
    }else{
        let darken = 0.1;
        red = Math.max(Math.floor(red - (red * darken)),0);
        green = Math.max(Math.floor(green - (green * darken)),0);
        blue = Math.max(Math.floor(blue - (blue * darken)),0);
    }
    return `rgb(${red},${green},${blue})`;
}

function addHoverColor(){
    hColor = document.querySelectorAll('.grid-cell');
    hColor.forEach(cell => {
        cell.colored = false;
        cell.addEventListener('mousedown', () =>{
            isMouseDown = true;
            cell.style.background = colorChanger(cell);
        });
        cell.addEventListener('mouseover', () =>{
            if(isMouseDown){
                cell.style.background = colorChanger(cell);
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