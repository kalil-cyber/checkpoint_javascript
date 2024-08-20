// Calcul de Factorielle
function factorielle(n) {
    if (n < 0) {
        throw new Error('La factorielle n\'est pas définie pour les nombres négatifs');
    }
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

// Exemple d'utilisation
console.log(factorielle(5)); // Affiche 120

// Verification des nombres premiers
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    if (nombre <= 3) {
        return true;
    }
    if (nombre % 2 === 0 || nombre % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= nombre; i += 6) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Exemple d'utilisation
console.log(estPremier(11)); // Affiche true
console.log(estPremier(25)); // Affiche false

// Suite de Fibonacci
function suiteFibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

// Exemple d'utilisation
console.log(suiteFibonacci(5)); // Affiche [0, 1, 1, 2, 3]
