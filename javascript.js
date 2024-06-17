const table = document.querySelector('.table');
const colorPicker = document.querySelector('.input-color')
const clearButton = document.querySelector('.clear-button')
const sizeRange = document.querySelector('.size-range')
const sizeLabel = document.querySelector('.size-label')

let color = '#F3EFF5';
let size = 10;

table.addEventListener('mousedown', (e) => e.preventDefault())
colorPicker.addEventListener('change', setColor)
clearButton.addEventListener('click', () => buildTable(size));
sizeRange.addEventListener('change', setSize)

buildTable();

function paint(event){
    if (event.buttons){
        event.target.style.backgroundColor = color;
        event.target.classList.replace('clear', 'paint');
    }
}

function setColor(event) {
    color = event.target.value;
}

function setSize(event){
    size = event.target.value;
    buildTable();
    sizeLabel.textContent = size;
}

function buildTable(){
    while(table.firstChild){
        table.removeChild(table.firstChild);
    }
    let h = 700 / size * 0.9999;
    let w = 700 / size * 0.9999;
    for (let x = 0; x < size; x++){
        for (let y = 0; y < size; y++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('clear');
            cell.style.height = h + "px";
            cell.style.width = w + "px";
            cell.addEventListener('mouseover', paint)
            cell.addEventListener('mousedown', paint)
            table.append(cell);
        }
    }
    
}