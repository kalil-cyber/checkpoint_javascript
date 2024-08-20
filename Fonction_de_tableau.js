// rechercher le max
function trouverMaximum(tableau) {
    if (tableau.length === 0) {
        throw new Error('Le tableau est vide');
    }
    // Utiliser Math.max avec l'opérateur de déstructuration
    return Math.max(...tableau);
}

// Exemple d'utilisation
console.log(trouverMaximum([3, 5, 7, 2, 8])); // Affiche 8
 
// Trouvons le minimum
function trouverMinimum(tableau) {
    if (tableau.length === 0) {
        throw new Error('Le tableau est vide');
    }
    // Utiliser Math.min avec l'opérateur de déstructuration
    return Math.min(...tableau);
}

// Exemple d'utilisation
console.log(trouverMinimum([3, 5, 7, 2, 8])); // Affiche 2
 
// Somme d'un tableau
function sommeTableau(tableau) {
    // Utiliser reduce pour calculer la somme
    return tableau.reduce((accumulateur, valeurActuelle) => accumulateur + valeurActuelle, 0);
}

// Exemple d'utilisation
console.log(sommeTableau([1, 2, 3, 4])); // Affiche 10

// Filtrer le tableau
function filtrerTableau(tableau, condition) {
    // Utiliser filter avec la fonction de condition
    return tableau.filter(condition);
}

// Exemple d'utilisation
const tableau = [1, 2, 3, 4, 5, 6];
const condition = (element) => element % 2 === 0; // Filtrer les nombres pairs

console.log(filtrerTableau(tableau, condition)); // Affiche [2, 4, 6]
