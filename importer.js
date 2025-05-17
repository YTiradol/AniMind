// Télécharger la liste au format JSON
function telechargerJSON() {
    const donneesJSON = JSON.stringify(list, null, 2);
    const blob = new Blob([donneesJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const lien = document.createElement("a");
    lien.href = url;
    lien.download = "list.json";
    lien.click();
    URL.revokeObjectURL(url);
  }
   
  // Importer un fichier JSON et mettre à jour la liste
  function importerJSON(event) {
    const fichier = event.target.files[0];
    if (!fichier) return;
  
    const lecteur = new FileReader();
    lecteur.onload = function(e) {
      try {
        const contenu = e.target.result;
        const donnees = JSON.parse(contenu);
  
        if (Array.isArray(donnees)) {
          list = donnees;
          console.log("Liste importée :", list);
          alert("Import réussi !");
          affStatistique();
          afficherList()
        } else {
          throw new Error("Format incorrect");
        }
      } catch (erreur) {
        console.error("Erreur lors de l'import :", erreur);
        alert("Échec de l'import : le fichier n'est pas valide.");
      }
    };
    lecteur.readAsText(fichier);
  };