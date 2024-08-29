console.log('Módulo Main carregado');

import Player from './Player.js';
import Inventory from './Inventory.js';

const startGameButton = document.getElementById('start-game');
const warriorButton = document.getElementById('warrior');
const mageButton = document.getElementById('mage');
const archerButton = document.getElementById('archer');

if (startGameButton) {
    startGameButton.addEventListener('click', () => {
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('class-selection').style.display = 'flex';
    });

} else {
    console.error('Elemento "start-game" não encontrado.');
}

if (warriorButton) {
    warriorButton.addEventListener('click', () => startGame('Guerreiro'));
} else {
    console.error('Elemento "warrior" não encontrado.');
}

if (mageButton) {
    mageButton.addEventListener('click', () => startGame('Mago'));
} else {
    console.error('Elemento "mage" não encontrado.');
}

if (archerButton) {
    archerButton.addEventListener('click', () => startGame('Arqueiro'));
} else {
    console.error('Elemento "archer" não encontrado.');
}

function startGame(className) {
    document.getElementById('class-selection').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';

    const classImageDiv = document.querySelector('#classe-image');

    let imageUrl;

    if (className === 'Arqueiro') {
        imageUrl = 'assets/images/arqueiro-image.jpg';
    } else if (className === 'Mago') {
        imageUrl = 'assets/images/mago-image.jpg';
    } else if (className === 'Guerreiro') {
        imageUrl = 'assets/images/guerreiro-image.jpg';
    }

    if (imageUrl) {
        classImageDiv.src = imageUrl; 
        classImageDiv.alt = className; 

    const playerName = document.getElementById('nome-player').value;

    new Inventory(64,);
    // const player = new Player(playerName, className); //



    }


}



