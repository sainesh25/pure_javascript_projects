const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const numberIn = document.getElementById('numberIn');
    
let num = 0;
let numberVal = numberIn.value;
numberIn.value = num;

addBtn.addEventListener('click', (e) => {
    num++;
    numberIn.value = num;
});

subtractBtn.addEventListener('click', (e) => {
    (num <= 0) ? num = 0 : '';
    numberIn.value = num;
    num--;
});

