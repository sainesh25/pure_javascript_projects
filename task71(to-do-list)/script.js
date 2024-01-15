const todoIn = document.getElementById('todoIn');
const todoBtn = document.getElementById('todoBtn');
const list = document.getElementById('list');
const delBtn = document.getElementById('delBtn')
const liDiv = document.getElementById('liDiv');

todoBtn.addEventListener('click', (e) => {
    const todoVal = todoIn.value;
    let liInfo = document.createElement('li');
    liInfo.innerHTML = `
                            ${todoVal} 

                        `;

    liInfo.classList.add('list-dec');
    liInfo.style.listStyle = 'none';
    list.appendChild(liInfo);
    todoIn.value = '';

    const buttons = document.createElement('div');
    buttons.classList.add('buttonDiv');

    const delBtn = document.createElement('button');
    delBtn.innerHTML = `<i class="fa fa-trash-o"></i>`;
    delBtn.classList.add('buttonDecoration');
    
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = `<i class="fa fa-check"></i>`;
    doneBtn.classList.add('buttonDecoration')

    liInfo.appendChild(buttons);
    buttons.appendChild(delBtn);
    buttons.appendChild(doneBtn);


    delBtn.addEventListener('click', (e) => {
        liInfo.remove();
    });
    
    doneBtn.addEventListener('click', (e) => {
        liInfo.classList.add('crossedLine');
    });
    
    // const buttons = document.getElementsByClassName('buttons');
    // const todoElement = document.getElementsByClassName('todo-element');
    
});

