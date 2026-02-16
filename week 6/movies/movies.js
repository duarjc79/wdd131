const movies = [
    {

    }
]


const movieList = document.getElementById('movie-List');


    movies.forEach(movie => {

        const article = document.createElement('article');
        article.className = 'movie';

        let html = `
            <h2>${movie.title}</h2>
            <img src=${movie.imgSrc} alt=${movie.imgAlt}>`

        });

    movieList.innerHTML = html