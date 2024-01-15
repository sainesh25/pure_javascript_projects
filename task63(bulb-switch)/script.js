const switchBtn = document.getElementById('switchBtn');
const bulb = document.getElementById('bulb');
const bodyT = document.getElementById('bodyT');

bodyT.style.backgroundColor = '#171716';
switchBtn.addEventListener('click', function(e){
    
    if(bulb.getAttribute('src') == 'off.png'){
        bulb.setAttribute('src', 'on.png')
        switchBtn.innerHTML = 'Switch OFF';
    }
    else{
        bulb.setAttribute('src', 'off.png')
        switchBtn.innerHTML = 'Switch ON';
    }
});