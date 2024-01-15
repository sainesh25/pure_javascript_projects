const getDataBtn = document.getElementById('getDataBtn');
const main = document.getElementById('main');

// https://mocki.io/v1/d619a5e1-b970-4468-bcb9-e4c2d0fed8bf
getDataBtn.addEventListener('click', (e) => {
    fetch('https://mocki.io/v1/d619a5e1-b970-4468-bcb9-e4c2d0fed8bf')
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data.Search);
        let a = data.Search;
        displayData(a);
    });
    
});

function displayData(a){
    a.forEach(users => {
        let layout = `
                        <div class="layoutForApi">
                        <div class="image">
                            <img src=${users.Poster}>
                        </div>

                        <div class="filmInfo">
                            <h2 class="titleMovie">Title of Film: ${users.Title}</h2>
                            <h3 class="releaseYear">Release Year: ${users.Year}</h3>
                            <h5 class="imdbId">Imdb ID: ${users.imdbID}</h5>
                        </div>
                    </div>

                    `;

    main.insertAdjacentHTML('afterbegin', layout);        
        
    });

}