const palindromeIn = document.getElementById('palindromeIn');
const checkBtn = document.getElementById('checkBtn');
const answer = document.getElementById('answer');


checkBtn.addEventListener('click', (e) => {
    let text = palindromeIn.value;    
    let arr1 = [];
    let arr2 = [];
    
    for(let i = 0; i < text.length; i++){
        arr1.push(text[i]);
    }
    for(let i = text.length-1 ; i >= 0; i--){
        arr2.push(text[i]);   
    }


    for(let i=0, j=100; (i< 100 && j >0 ) ; i++, j--)
    {

    }

    // let j =100;
    // for(i=0; i<=100; i++)
    // {


    //     j--;
    // }

    if(arr1.toString() == arr2.toString()){
        answer.innerHTML = `The given word - ${text} is a palindrome`;
    }
    else{
        answer.innerHTML = `The given word - ${text} is not a palindrome`;
    }
    palindromeIn.value = '';
});
