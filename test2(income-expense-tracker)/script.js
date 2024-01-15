const amount = document.getElementById('amount');
const typeOfExpIn = document.getElementById('typeOfExpIn');
const dropdownList = document.getElementById('dropdownList');
const totalSavingHead = document.getElementById('totalSavingHead');
const totalSavingHead2 = document.getElementById('totalSavingHead2');
const incomeTable = document.getElementById('incomeTable');
const totalIncome = document.getElementById('totalIncome');
const expenseTable = document.getElementById('expenseTable');
const totalExpense = document.getElementById('totalExpense');
const entrybtn = document.getElementById('entrybtn');


let numberingIncome = 0;
let numberingExpense = 0;

let expenseSum = 0;
let incomeSum = 0;

amount.value = '';
typeOfExpIn.value = '';

entrybtn.addEventListener('click', (e) => {
    let amountVal = amount.value;
    let typeOfExpInVal = typeOfExpIn.value;
    let dropdownListVal = dropdownList.value;
    
    
    if(dropdownListVal == 'income'){
        
        let row = incomeTable.insertRow (-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        
        cell1.innerHTML = `${numberingIncome += 1}`;
        cell2.innerHTML = `${amountVal}`;
        cell3.innerHTML = `${typeOfExpInVal}`;
        
        cell1.classList.add('sr-no');
        cell2.classList.add('amtval');
        cell3.classList.add('item-des');
        row.classList.add('trGap');

        incomeSum += +amountVal;
        totalIncome.innerHTML = incomeSum;
        totalS();
        
    }
    else if(dropdownListVal == 'expense'){
        let row = expenseTable.insertRow (-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        
        cell1.innerHTML = `${numberingExpense += 1}`;
        cell2.innerHTML = `${amountVal}`;
        cell3.innerHTML = `${typeOfExpInVal}`;
        
        cell1.classList.add('sr-no');
        cell2.classList.add('amtval');
        cell3.classList.add('item-des');
        row.classList.add('trGap');
        
        expenseSum += +amountVal;
        totalExpense.innerHTML = +expenseSum;
        totalS();
                
    }
    amount.value = '';
    typeOfExpIn.value = '';
    dropdownList.value = 'select';
});

function totalS(){
    let totalSaves = +incomeSum - +expenseSum;
    if(totalSaves <= 1000){
        totalSavingHead.innerHTML = ` ${totalSaves} <span>Need to save more</span>`;
        totalSavingHead.style.backgroundColor = 'red'; 
        totalSavingHead2.style.backgroundColor = 'red'; 
    }
    else if(totalSaves >= 1001){
        totalSavingHead.innerHTML = `${totalSaves} <span>Savings look good</span>`
        totalSavingHead2.style.backgroundColor = '#5CAD19'; 
        totalSavingHead.style.backgroundColor = '#5CAD19'; 
    }
}