const submitBtn = document.getElementById('submitBtn');
const phone = document.getElementById('phone');
const mail = document.getElementById('mail');
const loginForm = document.getElementById('loginForm');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const mailError = document.getElementById('mailError');
const phoneError = document.getElementById('phoneError');


const mailRegex = /^([a-zA-z0-9._]{1,30})([\@]{1})([a-z]{2,10})([\.]{1})([a-z]{2,6})$/;
const phoneRegex = /^([0-9]{10})$/;

loginForm.addEventListener('submit', (e) => {
    
    let phoneVal = phone.value;
    let mailVal = mail.value;
    e.preventDefault();
    if(mailRegex.test(mailVal) == true){
        error.style.display = 'none';
        console.log(true);
    }
    if(mailRegex.test(mailVal)){
        if(phoneRegex.test(phoneVal)){
            loginForm.submit();
        }
        else{
            error2.style.display = 'block';
            phoneError.innerHTML = `Phone number is not valid`;    
        }
    }
    else{
        error.style.display = 'block';
        mailError.innerHTML = `Email Invalid`;
    }
});









// const charsMail = [];
// const charsPhone = [];
// mail.addEventListener('keydown', (e) => {
//     e.preventDefault();
//     let a = e.key;
//     let b = e.key;
//     charsMail.push(a);
//     charsPhone.push(b);

//     if(charsMail.length >= 2 || charsMail.length <= 30){
//         if(charsPhone.length == 0 && charsPhone.length == 10){
//             loginForm.submit();
//         }
//         else{
//             error2.style.display = 'block';
//             phoneError.innerHTML = `Phone number is not valid`;
//         }
//     }
//     else{
//         error.style.display = 'block';
//         mailError.innerHTML = `Email Invalid`;
//     }
// });



