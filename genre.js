let selectedGenres = [];

function addGenre() {
    const genreInput = document.getElementById('genreInput');
    const genre = genreInput.value.trim();
    
    if (genre && !selectedGenres.includes(genre)) {
        selectedGenres.push(genre);
        updateGenresDisplay();
        genreInput.value = '';
    }
}

function removeGenre(genreToRemove) {
    selectedGenres = selectedGenres.filter(genre => genre !== genreToRemove);
    updateGenresDisplay();
}

function updateGenresDisplay() {
    const genresDisplay = document.getElementById('genresDisplay');
    genresDisplay.innerHTML = '';
    
    selectedGenres.forEach(genre => {
        const tag = document.createElement('div');
        tag.className = 'genre-tag';
        tag.innerHTML = `
            ${genre}
            <button onclick="removeGenre('${genre}')">×</button>
        `;
        genresDisplay.appendChild(tag);
    });
}

let searchSelectedGenres = [];

function addSearchGenre() {
    const genreInput = document.getElementById('searchGenreInput');
    const genre = genreInput.value.trim();
    
    if (genre && !searchSelectedGenres.includes(genre)) {
        searchSelectedGenres.push(genre);
        updateSearchGenresDisplay();
        genreInput.value = '';
        genreInput.focus();
    }
}

function removeSearchGenre(genreToRemove) {
    searchSelectedGenres = searchSelectedGenres.filter(genre => genre !== genreToRemove);
    updateSearchGenresDisplay();
}

function updateSearchGenresDisplay() {
    const genresDisplay = document.getElementById('searchGenresDisplay');
    genresDisplay.innerHTML = '';
    
    searchSelectedGenres.forEach(genre => {
        const tag = document.createElement('div');
        tag.className = 'genre-tag';
        tag.innerHTML = `
            ${genre}
            <button onclick="removeSearchGenre('${genre}')" aria-label="Supprimer">
                <i class="fas fa-times"></i>
            </button>
        `;
        genresDisplay.appendChild(tag);
    });
}

// Permettre l'ajout avec la touche Entrée
document.getElementById('searchGenreInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addSearchGenre();
    }
});

// Modifier la fonction de filtrage
function filterByGenres() {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    
    if (searchSelectedGenres.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">Veuillez ajouter au moins un genre</p>';
        return;
    }
    
    const filteredAnimes = list.filter(anime => {
        return searchSelectedGenres.every(genre => anime.genres.includes(genre));
    });
    
    if (filteredAnimes.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">Aucun anime trouvé pour les genres sélectionnés</p>';
        return;
    }
    
    filteredAnimes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'search-item';
        animeCard.innerHTML = `
            <h3>${anime.name}</h3>
            <div class="details">
                <p>Épisodes: ${anime.nbEpisode}</p>
                <p>Note: ${((anime.nHistoire + anime.nGraphisme + anime.nPerso + anime.nInteret) / 4).toFixed(1)}/10</p>
            </div>
            <div class="genres">
                ${anime.genres.map(genre => `<span class="genre-badge">${genre}</span>`).join('')}
            </div>
        `;
        resultsContainer.appendChild(animeCard);
    });
}
let editSelectedGenres = [];

function addGenreEdit() {
    const genreInput = document.getElementById('genreInputEdit');
    const genre = genreInput.value.trim();
    
    if (genre && !editSelectedGenres.includes(genre)) {
        editSelectedGenres.push(genre);
        updateGenresEditDisplay();
        genreInput.value = '';
    }
}

function removeGenreEdit(genreToRemove) {
    editSelectedGenres = editSelectedGenres.filter(genre => genre !== genreToRemove);
    updateGenresEditDisplay();
}

function updateGenresEditDisplay() {
    const genresDisplay = document.getElementById('genresDisplayEdit');
    genresDisplay.innerHTML = '';
    
    editSelectedGenres.forEach(genre => {
        const tag = document.createElement('div');
        tag.className = 'genre-tag';
        tag.innerHTML = `
            ${genre}
            <button onclick="removeGenreEdit('${genre}')">×</button>
        `;
        genresDisplay.appendChild(tag);
    });
}