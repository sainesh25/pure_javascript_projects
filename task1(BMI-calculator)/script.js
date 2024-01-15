const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const answer = document.getElementById('answer');
const range = document.getElementById('range');
const heightUnit = document.getElementById('heightUnit');
const weightUnit = document.getElementById('weightUnit');
const required = document.getElementById('required');
const required2 = document.getElementById('required2');

heightUnit.addEventListener('change', (e) => {
    let heightUnitVal = heightUnit.value;
    switch (heightUnitVal) {
        case 'meters':

            break;
        case 'cms':
            
            break;
    
        default:
            break;
    }
});
weightUnit.addEventListener('change', (e) => {
    let weightUnitVal = weightUnit.value;
    switch (weightUnitVal) {
        case 'kgs':

            break;
        case 'pounds':
            
            break;
    
        default:
            break;
    }
});


calculateBtn.addEventListener('click', (e) => {
    let weightKg = weight.value;
    let heightMeters = height.value ** 2;
    
    e.preventDefault();
    if(weight.value == ''){
        required.innerHTML = '*Fill this field';
        if(height.value == ''){
            required2.innerHTML = '*Fill this field';
        }
        else{

        }
    }
    else{
        const BMI = weightKg / heightMeters;
        answer.innerHTML = `Your BMI is ${BMI.toFixed(2)}.`;
        if(BMI <= 18.5){
            range.innerHTML = 'You are underweight!! Eat more.'
            range.style.color = '#ff8a9d';
        }
        else if(BMI >= 18.5 && BMI <= 25){
            range.innerHTML = 'You are healthy. Keep going!'
            range.style.color = 'green';
        }
        else if(BMI >= 25 && BMI <= 30){
            range.innerHTML = 'You are overweight. Have a balanced diet!';
            range.style.color = '#ff6b30';
        }
        else{
            range.innerHTML = 'You are obese. Eat less';
            range.style.color = '#ff0000';
        }

    }



    weight.value = '';
    height.value = '';
    
});

resetBtn.addEventListener('click', (e) => {
    weight.value = '';
    height.value = '';
    answer.style.display= 'none';
    range.style.display= 'none';
});


