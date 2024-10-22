let coinCount = 0;
let coinsPerClick = 1;
let fedyPerSecond = 0;
let multiplier = 1;

// Compteurs d'améliorations
let beerCount = 0;
let wineCount = 0;
let whiskeyCount = 0;
let vodkaCount = 0;
let rumCount = 0;
let tequilaCount = 0;

// Mise à jour de l'affichage des Fedy coins
function updateCoinCount() {
    document.getElementById('coin-count').innerText = coinCount;
    document.getElementById('fedy-per-second').innerText = fedyPerSecond * multiplier;
}

// Incrément des coins par seconde
function addFedyPerSecond() {
    coinCount += fedyPerSecond * multiplier;
    updateCoinCount();
}

// Gestion du clic sur le bouton pour gagner des coins
document.getElementById('clicker-btn').addEventListener('click', function() {
    coinCount += coinsPerClick * multiplier;
    updateCoinCount();
    checkUpgradeAvailability();
});

// Fonction pour l'émoji cigarette dorée (bonus x3)
function createCigarette() {
    let cigarette = document.createElement('div');
    cigarette.innerHTML = '🚬';
    cigarette.classList.add('cigarette');
    document.body.appendChild(cigarette);
    cigarette.style.position = 'absolute';
    cigarette.style.top = Math.random() * window.innerHeight + 'px';
    cigarette.style.left = Math.random() * window.innerWidth + 'px';

    cigarette.addEventListener('click', function() {
        multiplier = 3;
        setTimeout(() => multiplier = 1, 10000);  // Bonus pendant 10 secondes
        cigarette.remove();
    });
}

// Faire apparaître la cigarette de manière aléatoire
setInterval(() => {
    if (Math.random() < 0.05) {  // 5% de chance toutes les 10 secondes
        createCigarette();
    }
}, 10000);

// Fonction pour afficher le nombre d'améliorations
function updateUpgradeCount() {
    document.getElementById('beer-count').innerText = `(${beerCount})`;
    document.getElementById('wine-count').innerText = `(${wineCount})`;
    document.getElementById('whiskey-count').innerText = `(${whiskeyCount})`;
    document.getElementById('vodka-count').innerText = `(${vodkaCount})`;
    document.getElementById('rum-count').innerText = `(${rumCount})`;
    document.getElementById('tequila-count').innerText = `(${tequilaCount})`;
}

// Gestion des achats d'améliorations
document.getElementById('beer-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 100) {
        coinCount -= 100;
        beerCount += 1;
        fedyPerSecond += 1;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('wine-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 200) {
        coinCount -= 200;
        wineCount += 1;
        fedyPerSecond += 2;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('whiskey-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 500) {
        coinCount -= 500;
        whiskeyCount += 1;
        fedyPerSecond += 5;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('vodka-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 1000) {
        coinCount -= 1000;
        vodkaCount += 1;
        fedyPerSecond += 10;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('rum-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 5000) {
        coinCount -= 5000;
        rumCount += 1;
        fedyPerSecond += 25;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('tequila-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 10000) {
        coinCount -= 10000;
        tequilaCount += 1;
        fedyPerSecond += 50;
        updateCoinCount();
        updateUpgradeCount();
    }
});

// Vérification de la disponibilité des améliorations
function checkUpgradeAvailability() {
    if (coinCount >= 100) {
        document.getElementById('beer-upgrade-btn').disabled = false;
    }
    if (coinCount >= 200) {
        document.getElementById('wine-upgrade-btn').disabled = false;
    }
    if (coinCount >= 500) {
        document.getElementById('whiskey-upgrade-btn').disabled = false;
    }
    if (coinCount >= 1000) {
        document.getElementById('vodka-upgrade-btn').disabled = false;
    }
    if (coinCount >= 5000) {
        document.getElementById('rum-upgrade-btn').disabled = false;
    }
    if (coinCount >= 10000) {
        document.getElementById('tequila-upgrade-btn').disabled = false;
    }
}

// Mise à jour des coins par seconde toutes les secondes
setInterval(addFedyPerSecond, 1000);
