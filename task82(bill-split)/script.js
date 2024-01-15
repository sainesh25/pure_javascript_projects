const amountIn = document.getElementById('amountIn');
const noOfPersonIn = document.getElementById('noOfPersonIn');
const calculateBtn = document.getElementById('calculateBtn');
const answer = document.getElementById('answer');


calculateBtn.addEventListener('click', (e) => {
    const amountVal = amountIn.value;
    const people = noOfPersonIn.value;

    const answerVal = amountVal / people; 
    

    answer.innerHTML= `Each Person has to pay Rs. ${answerVal}`;


});