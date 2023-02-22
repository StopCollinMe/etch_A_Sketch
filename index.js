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

function addHoverColor(){
    hColor = document.querySelectorAll('.grid-cell');
    hColor.forEach(cell => {
        cell.addEventListener('mousedown', () =>{
            isMouseDown = true;
            cell.style.background = '#FFD580';
        });
        cell.addEventListener('mouseover', () =>{
            if(isMouseDown){
                cell.style.background = '#FFD580';
            }
        });
        cell.addEventListener('mouseup', ()=>{
            isMouseDown = false;
        });
    });
}

makeContainers(16,16);
addHoverColor();