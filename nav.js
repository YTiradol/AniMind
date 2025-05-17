function ouvrirModal(person, index) {
    const contentnom = document.getElementById("modalContentNom");
    document.getElementById("preview").src = person.image;
    const contentnbEpisode = document.getElementById("modalContentnbEpisode");
    const contentnHistoire = document.getElementById("modalnHistoire");
    const contentnGraphisme = document.getElementById("modalnGraphisme");
    const contentnPerso = document.getElementById("modalnPerso");
    const contentnInteret = document.getElementById("modalnInteret");
    const contentMoyenne = document.getElementById("modalMoyenne");
    const contentAnimeType = document.getElementById("modalAnimeType");
    const contentAnimeStatus = document.getElementById("modalAnimeStatus");
    const indexContent = document.getElementById("indexContent");
    let moyenne = (Number(person.nHistoire) + Number(person.nGraphisme) + Number(person.nPerso) + Number(person.nInteret))/4;
    moyenne = parseFloat(moyenne.toFixed(2));
    contentnom.innerHTML = person.name;
    contentnbEpisode.innerHTML = "Nb épisode : " + person.nbEpisode;
    contentnHistoire.innerHTML = "Histoire : " + person.nHistoire;
    contentnGraphisme.innerHTML = "Graphisme : " + person.nGraphisme;
    contentnPerso.innerHTML = "Personnage : " + person.nPerso;
    contentnInteret.innerHTML = "Emotion : " + person.nInteret;
    contentMoyenne.innerHTML = moyenne;
    contentAnimeType.innerHTML = "Type : " + person.type;
    contentAnimeStatus.innerHTML = "Statu : " + person.status;
    indexContent.innerHTML = index;
    document.getElementById("modal").style.display = "block";
    document.getElementById("infoModal").style.display = "block";
}

function fermerModal() {
    document.getElementById("changeInfo").style.display = "none";
    document.getElementById("infoModal").style.display = "none";
    document.getElementById("modal").style.display = "none";
}
    
function modalChangeInfo() {
    document.getElementById("infoModal").style.display = "none";
    document.getElementById("changeInfo").style.display = "block";
    let index = document.getElementById("indexContent").textContent;
    
    document.getElementById('nomc').value = list[index].name;
    document.getElementById('nbEpisodec').value = Number(list[index].nbEpisode);
    document.getElementById('nHistoirec').value = Number(list[index].nHistoire);
    document.getElementById('nGraphismec').value = Number(list[index].nGraphisme);
    document.getElementById('nPersoc').value = Number(list[index].nPerso);
    document.getElementById('nInteretc').value = Number(list[index].nInteret);
    document.getElementById('animeTypec').value = list[index].type;
    document.getElementById('animeStatusc').value = list[index].status;
    
    // Initialiser les genres pour l'édition
    editSelectedGenres = [...list[index].genres];
    updateGenresEditDisplay();
}

function affAjouter() {
    document.getElementById("info").style.display = "block";
    document.getElementById("listdiv").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("statistique").style.display = "none";
    document.getElementById("export").style.display = "none";
    document.getElementById('recherche').style.display = 'none';
}

function affList() {
    document.getElementById("info").style.display = "none";
    document.getElementById("listdiv").style.display = "block";
    document.getElementById("modal").style.display = "none";
    document.getElementById("statistique").style.display = "none";
    document.getElementById("export").style.display = "none";
    document.getElementById('recherche').style.display = 'none';
}

function affStat() {
    document.getElementById("info").style.display = "none";
    document.getElementById("listdiv").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("statistique").style.display = "block";
    document.getElementById("export").style.display = "none";
    document.getElementById('recherche').style.display = 'none';
}

function affexp() {
    document.getElementById("info").style.display = "none";
    document.getElementById("listdiv").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("statistique").style.display = "none";
    document.getElementById("export").style.display = "block";
    document.getElementById('recherche').style.display = 'none';
}

function afficherRecherche() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('listdiv').style.display = 'none';
    document.getElementById('statistique').style.display = 'none';
    document.getElementById('export').style.display = 'none';
    document.getElementById('recherche').style.display = 'block';
}

function cleanInput() {
    document.getElementById('nom').value = '';
    document.getElementById('image').value = '';
    document.getElementById('nbEpisode').value = '';
    document.getElementById('nbEpisode').value = '';
    document.getElementById('nHistoire').value = '';
    document.getElementById('nGraphisme').value = '';
    document.getElementById('nPerso').value = '';
    document.getElementById('nInteret').value = '';
}


function cleanInputc() {
    document.getElementById('nomc').value = '';
    document.getElementById('nbEpisodec').value = '';
    document.getElementById('nbEpisodec').value = '';
    document.getElementById('nHistoirec').value = '';
    document.getElementById('nGraphismec').value = '';
    document.getElementById('nPersoc').value = '';
    document.getElementById('nInteretc').value = '';
    document.getElementById('animeTypec').value = 'anime';
    document.getElementById('animeStatusc').value = 'fini';
} 