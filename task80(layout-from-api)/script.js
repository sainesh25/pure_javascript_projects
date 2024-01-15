const showDetailsBtn = document.getElementById('showDetailsBtn');
const main = document.querySelector('main');

showDetailsBtn.addEventListener('click', (e) => {

    showDetailsBtn.style.display = 'none';    
    fetch('https://mocki.io/v1/9b0dbdf6-83d8-4297-ad79-7cdb249e767c')
    .then((response) => {

        return response.json();
    })
    .then((data) => {
        displayData(data);
    })
});

function displayData(data){
    data.forEach((employees) => {
        let layout = `
        <div class="card">
        <div class="upper-border">
            <div class="headshot-img">
                <img src="${employees.pic}">
            <div class="age-info">${employees.age}</div>
        </div>
    </div>

    <div class="emp-name">
        <h2 class="emp-name-text">${employees.name}</h2>
    </div>
    
    <div class="emp-company">
        <p class="company-name">${employees.company}</p> 
        <p class="profession">${employees.designation}</p>
    </div>
    
    <div class="gender">
        <h2 class="emp-gender">${employees.gender}</h2>
    </div>
    
    <div class="emp-info">
        <div class="email">
            <img src="./icons/email-icon.svg">
            <p class="emp-info-txt">${employees.email}</p>
        </div>
        <div class="phone">
            <img src="./icons/phone-icon.svg">
            <p class="emp-info-txt">${employees.phone}</p>
        </div>
        <div class="salary">
            <img src="./icons/dollar-circle-icon.svg">
            <p class="emp-info-txt">${employees.salary}</p>
        </div>
    </div>

    <div class="lower-border"></div>
    </div>
        `;

       main.insertAdjacentHTML('beforeend', layout); 

    });

    
}
