let list = []
class Elementlist {
    constructor(name, image, nbEpisode, nHistoire, nGraphisme, nPerso, nInteret, type, status, genres) {
        this.name = name;
        this.image = image;
        this.nbEpisode = nbEpisode;
        this.nHistoire = nHistoire;
        this.nGraphisme = nGraphisme;
        this.nPerso = nPerso;
        this.nInteret = nInteret;
        this.type = type;
        this.status = status;
        this.genres = genres;
    }
}  

function ajouter() {
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            let imageData = e.target.result; // image en base64

            let name= document.getElementById("nom").value;
            let nbEpisode = document.getElementById("nbEpisode").value;
            let nHistoire = document.getElementById("nHistoire").value;
            let nGraphisme = document.getElementById("nGraphisme").value;
            let nPerso = document.getElementById("nPerso").value;
            let nInteret = document.getElementById("nInteret").value;
            let type = document.getElementById("animeType").value;
            let status = document.getElementById("animeStatus").value;

            let person = new Elementlist(name, imageData, nbEpisode, nHistoire, nGraphisme, nPerso, nInteret, type, status, [...selectedGenres]);
            list.push(person);
            selectedGenres = []; 
            updateGenresDisplay();
            console.log(person)
            cleanInput();
        };
        reader.readAsDataURL(file);
    } else {
        alert("Veuillez choisir une image valide.");
    }
    console.log(list);
    afficherList();
    affStatistique();
}

function afficherList() {
    document.getElementById("list").innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const moyenne = ((Number(list[i].nHistoire) + Number(list[i].nGraphisme) + Number(list[i].nPerso) + Number(list[i].nInteret)) / 4).toFixed(2);
        let parent = document.getElementById("list");
        let enfant = document.createElement("li");
        
        enfant.classList.add("list-item");
        
        enfant.innerHTML = `
            <div class="item-name">${list[i].name}</div>
            <div class="item-rating">${moyenne}</div>
        `;
        
        const note = parseFloat(moyenne);
        if (note >= 9) {
            enfant.style.color = "gold";
        } else if (note >= 8.5) {
            enfant.style.color = "rgb(165, 165, 165)";
        } else if (note >= 8) {
            enfant.style.color = "rgba(212, 127, 16, 0.8)";
        }
        
        parent.appendChild(enfant);
        enfant.onclick = () => ouvrirModal(list[i], i);
    }
}

function afficherListOrdre() {
    document.getElementById("list").innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const moyenne = ((Number(list[i].nHistoire) + Number(list[i].nGraphisme) + Number(list[i].nPerso) + Number(list[i].nInteret)) / 4).toFixed(2);
        let parent = document.getElementById("list");
        let enfant = document.createElement("li");
        
        enfant.classList.add("list-item");
        
        enfant.innerHTML = list[i].name;
        
        const note = parseFloat(moyenne);
        if (note >= 9) {
            enfant.style.color = "gold";
        } else if (note >= 8.5) {
            enfant.style.color = "rgb(165, 165, 165)";
        } else if (note >= 8) {
            enfant.style.color = "rgba(212, 127, 16, 0.8)";
        }
        
        parent.appendChild(enfant);
        enfant.onclick = () => ouvrirModal(list[i], i);
    }
}

function changeInfo() {
    const indexContent = document.getElementById("indexContent").textContent;
    let name = document.getElementById("nomc").value;
    let nbEpisode = Number(document.getElementById("nbEpisodec").value);
    let nHistoire = Number(document.getElementById("nHistoirec").value);
    let nGraphisme = Number(document.getElementById("nGraphismec").value);
    let nPerso = Number(document.getElementById("nPersoc").value);
    let nInteret = Number(document.getElementById("nInteretc").value);
    let type = document.getElementById("animeTypec").value;
    let status = document.getElementById("animeStatusc").value;
    
    list[indexContent].name = name;
    list[indexContent].nbEpisode = nbEpisode;
    list[indexContent].nHistoire = nHistoire;
    list[indexContent].nGraphisme = nGraphisme;
    list[indexContent].nPerso = nPerso;
    list[indexContent].nInteret = nInteret;
    list[indexContent].type = type;
    list[indexContent].status = status;
    list[indexContent].genres = [...editSelectedGenres]; // Mettre à jour les genres
    
    fermerModal();
    trierParMoyenne();
    cleanInputc();
    affStatistique();
}

function supprimer() {
    let index = parseInt(document.getElementById("indexContent").textContent);
    list.splice(index, 1);
    fermerModal();
    afficherList();
    affStatistique();
}

function trierParName () {
    list.sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));
    console.log(list);
    afficherListOrdre();
}

function trierParMoyenne() {
    list.sort((a, b) => {
    const moyenneA = (Number(a.nHistoire) + Number(a.nGraphisme) + Number(a.nPerso) + Number(a.nInteret)) / 4;
    const moyenneB = (Number(b.nHistoire) + Number(b.nGraphisme) + Number(b.nPerso) + Number(b.nInteret)) / 4;
    return moyenneB - moyenneA;
    });
    console.log(list);
    afficherList();
}

// Gestion de l'aperçu de l'image
document.getElementById('image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.getElementById('imagePreview');
            preview.src = event.target.result;
            document.querySelector('.image-preview-container').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Drag and drop pour l'image
const fileInput = document.getElementById('image');
const dropArea = document.querySelector('.file-input-label');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    dropArea.style.borderColor = 'var(--primary-color)';
    dropArea.style.backgroundColor = 'rgba(248, 165, 255, 0.1)';
}

function unhighlight() {
    dropArea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    dropArea.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    const event = new Event('change');
    fileInput.dispatchEvent(event);

}
