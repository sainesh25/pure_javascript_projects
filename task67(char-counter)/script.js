const textbox = document.getElementById('textbox');
const chars = document.getElementById('chars');

let sum = 0;
textbox.addEventListener('keyup', (e) => {
    
    if(e.key === 'Backspace'){
        sum -= 1;
    }
    else if(e.key == 'ArrowRight' || e.key == 'ArrowLeft'|| e.key == 'ArrowDown'|| e.key == 'ArrowUp' ){
        sum += 0;
    }
    else{
        sum += 1;
    }
    if( sum < 0 ){
        sum = 0;
        chars.innerHTML = `You typed ${sum} characters`;
    }    
    chars.innerHTML = `You typed ${sum} characters`;
});

// first use a event listener keyup for keeping track of users input
// so when user presses a key the number should be incremented by one
// and if backspace is pressed it should get decremented by 1
