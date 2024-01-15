const hrs = document.getElementById('hrs'); 
const mins = document.getElementById('mins'); 
const secs = document.getElementById('secs'); 


// Timer Code 
let sum = 0;
let sum2 = 0;
let sum3 = 0;

    function display(){    
        sum += 1;
        secs.innerHTML = `${sum}`;
        if(sum < 10){
            secs.innerHTML = `${'0' + sum}`;
        }
        if(sum == 59){
            sum = 0;
            display2();
        }
    }
    function display2(){
        sum2 += 1;
        mins.innerHTML = `${sum2}`;
        if(sum2 < 10){
            mins.innerHTML = `${'0' + sum2}`;
        }
        if(sum2 == 59){
            sum2 = 0;
            display3();
        }
    }
    function display3(){
        sum3 += 1;
        hrs.innerHTML = `${sum3}`;
        if(sum3 < 10){
            hrs.innerHTML = `${'0' + sum3}`;
        }
        if(sum3 == 23){
            sum3 = 0;
        }
    }
    setInterval(display, 1000);
    

const time = new Date();
hrs.innerHTML =  time.getHours();
mins.innerHTML = time.getMinutes();
secs.innerHTML = time.getSeconds();

