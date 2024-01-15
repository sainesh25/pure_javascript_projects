const passwordIn = document.getElementById('passwordIn');
const ptag = document.getElementById('ptag');

// const chars = [];
// passwordIn.addEventListener('keydown', function(e){
//     let a = e.key;
//     chars.push(a);
//     if(chars.length <= 4){
//         redAlert();
//     }
//     else if(chars.length >= 5 && chars.length <= 10){
//         yellowAlert();
//     }

//     else if(chars.length >= 11 && chars.length <= 30){
//         greenAlert();
//     }
    

// });

passwordIn.addEventListener('input', (e) => {

    const pass = passwordIn.value; 
    if(pass.length <= 4){
        redAlert();
    }  
    else if(pass.length >= 5 && pass.length <= 10){
        yellowAlert();
    }
    else if(pass.length >= 11 && pass.length <= 30){
        greenAlert();
    }
});

function redAlert(){
    ptag.innerText = 'Weak Password';
    ptag.style.color = 'red';
}
function yellowAlert(){
    ptag.innerText = 'Partially strong Password';
    ptag.style.color = '#fac000';
}
function greenAlert(){
    ptag.innerText = 'Strong Password';
    ptag.style.color = '#12bd06';
}


// 0 to 4 character - red
// 5 to 10 character - yellow
// above 11 characters - green

// pseudocode
// when user enters characters less than 4 then red alert 
// p tag should get displayed in div likewise it should get removed when user properly enters password
// when user enters characters more than 4 and less than 10 then yellow alert.
// p tag should get displayed in div likewise it should get removed when user properly enters password
// when user enters characters above 11 then green
// p tag should get displayed in div 
