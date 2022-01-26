var addButton; var subtractButton; var number;
function init(){
    addButton = document.getElementById('add');
    subtractButton = document.getElementById('subtract');
    number = document.getElementById('myNumber');
}

function add(){
    addButton.addEventListener('click', ()=>{
        var tmp = parseInt(number.innerText);
        tmp += 1;
        console.log('tmp', tmp);
        number.innerText = tmp;
    });
}

function subtract(){
    subtractButton.addEventListener('click', ()=>{
        var tmp = parseInt(number.innerText);
        tmp -= 1;
        console.log('tmp', tmp);
        number.innerText = tmp;
    });
}

window.onload=()=>{
    init();
    add();
    subtract();
}