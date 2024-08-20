function inverserChaine(chaine) {
    // Convertir la chaîne en tableau de caractères
    let tableau = chaine.split('');
    
    // Inverser le tableau
    tableau.reverse();
    
    // Rejoindre les caractères du tableau pour reformer une chaîne
    let chaineInverse = tableau.join('');
    
    return chaineInverse;
}

// Exemple d'utilisation
console.log(inverserChaine('Bonjour')); // Affiche 'ruojnoB'

// compter les caracteres
function compterCaracteres(chaine) {
    // La propriété 'length' retourne le nombre de caractères dans la chaîne
    return chaine.length;
}

// Exemple d'utilisation
console.log(compterCaracteres('Bonjour')); // Affiche 7
 
// Mettre les mots en majuscule
function mettreEnMajuscule(phrase) {
    // Diviser la phrase en mots
    let mots = phrase.split(' ');
    
    // Transformer chaque mot
    let motsModifies = mots.map(mot => {
        // Mettre en majuscule la première lettre et garder le reste en minuscules
        return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
    });
    
    // Rejoindre les mots modifiés pour reformer la phrase
    return motsModifies.join(' ');
}

// Exemple d'utilisation
console.log(mettreEnMajuscule('bonjour le monde')); // Affiche 'Bonjour Le Monde'

