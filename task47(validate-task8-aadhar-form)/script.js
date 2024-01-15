const aadharForm = document.getElementById('aadharForm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const fatherN = document.getElementById('fatherN');
const motherN = document.getElementById('motherN');
const age = document.getElementById('age');
const date = document.getElementById('date');
const pan = document.getElementById('pan');
const license = document.getElementById('license');
const add = document.getElementById('add');
const pin = document.getElementById('pin');
const bankN = document.getElementById('bankN');
const bankNo = document.getElementById('bankNo');
const btnSubmit = document.getElementById('btnSubmit');
const termsconds = document.getElementById('termsconds');
const genderName = document.getElementsByClassName('G');
const error = document.getElementById('error');


const fnameRegex = /^([A-Z{1}])([a-z]{2,30})$/;
const lnameRegex = /^([A-Z{1}])([a-z]{2,30})$/;
const fatherNRegex = /^([A-Z{1}])([a-z]{2,30})$/;
const motherNRegex = /^([A-Z{1}])([a-z]{2,30})$/;
// const ageRegex = /^([0-9]{1})()$/;
const panRegex = /^([A-Z0-9]{10})$/;
const licenseRegex = /^([\DL]{2})([\-]{1})([0-9]{13})$/;
const addRegex = /^([a-zA-Z0-9\,\_\/]{10,50})$/;
const pinRegex = /^([0-9]{6})$/;
const bankNRegex = /^([A-za-z]{2,20})$/;
const bankNoRegex = /^([0-9]{9,15})$/;
// const genderRegex = /^([\bMale\b])$/;


aadharForm.addEventListener('submit', function(e){
    let firstName = fname.value;
    let lastName = lname.value;
    let motherName = motherN.value;
    let fatherName = fatherN.value;
    let panNo = pan.value;
    let licenseNo = license.value;
    let address = add.value;
    let pinCode = pin.value;
    let bankName = bankN.value;
    let bankNumber = bankNo.value;
    // let genderName2 = genderName.value;


    error.innerHTML='';

    // console.log(genderName2);
    e.preventDefault();

    // if(genderRegex.test(genderName2)){
    //     console.log('OKAY');
    // }   
    // else{
    //     console.log('ERROR');
    // }
    
    if(fnameRegex.test(firstName)){
        if(lnameRegex.test(lastName)){
            if(fatherNRegex.test(fatherName)){
                if(motherNRegex.test(motherName)){
                    if(panRegex.test(panNo)){
                        if(licenseRegex.test(licenseNo)){
                            if(addRegex.test(address)){
                                if(pinRegex.test(pinCode)){
                                    if(bankNRegex.test(bankName)){
                                        if(bankNoRegex.test(bankNumber)){
                                            if(termsconds.checked){
                                                aadharForm.submit();
                                                errorText('SUCCESSFULLY SUBMITTED!!!')
                                            }   
                                            else{
                                                errorText('YOU SHOULD FIRST AGREE TO TERMS AND CONDITIONS!!!');
                                            }                                            
                                        }
                                        else{
                                            errorText('*Invalid Bank number');
                                        }
                                    }
                                    else{
                                        errorText('*Invalid Bank Name');            
                                    }
                                }
                                else{
                                    errorText('*Invalid Pincode');        
                                }
                            }
                            else{
                                errorText('*Wrong Address');    
                            }
                        }
                        else{
                            errorText('*Invalid Driving License number');
                        }
                    }
                    else{
                        errorText('*Invalid Pan number');
                    }
                }
                else{
                    errorText('*Invalid Mothers name');
                }
            }
            else{
                errorText('*Invalid Fathers name');
            }
        }
        else{
            errorText('*Invalid Last name');
        }
    }
    else{
        errorText('*Invalid First name');
    }
});

function errorText(text){
    const x = document.createElement('p');
    x.style.color = 'rgb(255, 54, 54)';
    x.innerText = text;
    error.appendChild(x);
}
