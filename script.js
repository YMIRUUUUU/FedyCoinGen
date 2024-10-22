let coinCount = 0;
let coinsPerClick = 1;
let fedyPerSecond = 0;

// Mise à jour de l'affichage des Fedy coins
function updateCoinCount() {
    document.getElementById('coin-count').innerText = coinCount;
    document.getElementById('fedy-per-second').innerText = fedyPerSecond;
}

// Incrément des coins par seconde
function addFedyPerSecond() {
    coinCount += fedyPerSecond;
    updateCoinCount();
}

// Gestion du clic sur le bouton pour gagner des coins
document.getElementById('clicker-btn').addEventListener('click', function() {
    coinCount += coinsPerClick;
    updateCoinCount();
    checkUpgradeAvailability();
});

// Améliorations classiques
document.getElementById('beer-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 100) {
        coinCount -= 100;
        fedyPerSecond += 1;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Bière: 1 FED¤/seconde</p>";
        document.getElementById('beer-upgrade-btn').disabled = true;
    }
});

document.getElementById('wine-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 200) {
        coinCount -= 200;
        fedyPerSecond += 2;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Vin: 2 FED¤/seconde</p>";
        document.getElementById('wine-upgrade-btn').disabled = true;
    }
});

document.getElementById('whiskey-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 500) {
        coinCount -= 500;
        fedyPerSecond += 5;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Whisky: 5 FED¤/seconde</p>";
        document.getElementById('whiskey-upgrade-btn').disabled = true;
    }
});

document.getElementById('vodka-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 1000) {
        coinCount -= 1000;
        fedyPerSecond += 10;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Vodka: 10 FED¤/seconde</p>";
        document.getElementById('vodka-upgrade-btn').disabled = true;
    }
});

document.getElementById('rum-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 5000) {
        coinCount -= 5000;
        fedyPerSecond += 25;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Rhum: 25 FED¤/seconde</p>";
        document.getElementById('rum-upgrade-btn').disabled = true;
    }
});

document.getElementById('tequila-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 10000) {
        coinCount -= 10000;
        fedyPerSecond += 50;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Tequila: 50 FED¤/seconde</p>";
        document.getElementById('tequila-upgrade-btn').disabled = true;
    }
});

// Améliorations permanentes (GPT, Burger King, Roblox)
document.getElementById('gpt-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 50000) {
        coinCount -= 50000;
        fedyPerSecond += 100;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>GPT: 100 FED¤/seconde</p>";
        document.getElementById('gpt-upgrade-btn').disabled = true;
    }
});

document.getElementById('burger-king-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 100000) {
        coinCount -= 100000;
        fedyPerSecond += 250;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Burger King: 250 FED¤/seconde</p>";
        document.getElementById('burger-king-upgrade-btn').disabled = true;
    }
});

document.getElementById('roblox-upgrade-btn').addEventListener('click', function() {
    if (coinCount >= 200000) {
        coinCount -= 200000;
        fedyPerSecond += 500;
        updateCoinCount();
        document.getElementById('active-upgrades').innerHTML += "<p>Roblox: 500 FED¤/seconde</p>";
        document.getElementById('roblox-upgrade-btn').disabled = true;
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
    if (coinCount >= 50000) {
        document.getElementById('gpt-upgrade-btn').disabled = false;
    }
    if (coinCount >= 100000) {
        document.getElementById('burger-king-upgrade-btn').disabled = false;
    }
    if (coinCount >= 200000) {
        document.getElementById('roblox-upgrade-btn').disabled = false;
    }
}

// Mise à jour des coins par seconde toutes les secondes
setInterval(addFedyPerSecond, 1000);
