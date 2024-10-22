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
let ginCount = 0;
let absintheCount = 0;
let whiskyRareCount = 0;

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
document.getElementById('clicker-btn').addEventListener('mousedown', function() {
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
    document.getElementById('gin-count').innerText = `(${ginCount})`;
    document.getElementById('absinthe-count').innerText = `(${absintheCount})`;
    document.getElementById('whisky-rare-count').innerText = `(${whiskyRareCount})`;
}

// Gestion des achats d'améliorations avec coût évolutif
document.getElementById('beer-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 100 * Math.pow(1.1, beerCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        beerCount += 1;
        fedyPerSecond += 1;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('wine-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 200 * Math.pow(1.1, wineCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        wineCount += 1;
        fedyPerSecond += 2;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('whiskey-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 500 * Math.pow(1.1, whiskeyCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        whiskeyCount += 1;
        fedyPerSecond += 5;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('vodka-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 1000 * Math.pow(1.1, vodkaCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        vodkaCount += 1;
        fedyPerSecond += 10;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('rum-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 5000 * Math.pow(1.1, rumCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        rumCount += 1;
        fedyPerSecond += 25;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('tequila-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 10000 * Math.pow(1.1, tequilaCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        tequilaCount += 1;
        fedyPerSecond += 50;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('gin-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 20000 * Math.pow(1.1, ginCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        ginCount += 1;
        fedyPerSecond += 75;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('absinthe-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 50000 * Math.pow(1.1, absintheCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        absintheCount += 1;
        fedyPerSecond += 100;
        updateCoinCount();
        updateUpgradeCount();
    }
});

document.getElementById('whisky-rare-upgrade-btn').addEventListener('mousedown', function() {
    let cost = 100000 * Math.pow(1.1, whiskyRareCount);
    if (coinCount >= cost) {
        coinCount -= cost;
        whiskyRareCount += 1;
        fedyPerSecond += 150;
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
    if (coinCount >= 20000) {
        document.getElementById('gin-upgrade-btn').disabled = false;
    }
    if (coinCount >= 50000) {
        document.getElementById('absinthe-upgrade-btn').disabled = false;
    }
    if (coinCount >= 100000) {
        document.getElementById('whisky-rare-upgrade-btn').disabled = false;
    }
}

// Mise à jour des coins par seconde toutes les secondes
setInterval(addFedyPerSecond, 1000);
