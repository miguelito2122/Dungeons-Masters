import Player from './Player.js';
import Inventory from './Inventory.js';
import Combat from './Combat.js';
import Story from './Story.js';
import Dungeon from './Dungeon.js';
import City from './City.js';

console.log('Módulo Main carregado');

const startGameButton = document.getElementById('start-game');
const warriorButton = document.getElementById('warrior');
const mageButton = document.getElementById('mage');
const archerButton = document.getElementById('archer');

if (startGameButton) {
    startGameButton.addEventListener('click', () => {
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('class-selection').style.display = 'block';
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
    console.log(`Classe selecionada: ${className}`);
    document.getElementById('class-selection').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    try {
        const player = new Player(className); 
        const inventory = new Inventory(64); 
        const story = new Story(player);
        const dungeon = new Dungeon(player);
        const city = new City(player);

        console.log("Bem-vindo ao jogo!");

        story.start();
        dungeon.generateDungeon();
        dungeon.exploreDungeon();
        combat.startCombat();

        inventory.addItem("Escudo", 2,);

        console.log(inventory.listItems());
        inventory.equipItem("Espada");

        updateInventoryUI(inventory); 
    } catch (error) {
        console.error('Erro ao iniciar o jogo:', error);
    }
}

function updateInventoryUI(inventory) {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = '';

    inventory.slots.forEach((slot, index) => {
        const slotElement = document.createElement('div');
        slotElement.className = 'slot';
        
        if (slot) {
            const itemElement = document.createElement('div');
            itemElement.className = 'item-container';
            itemElement.style.backgroundImage = `url(assets/images/${slot.name.toLowerCase()}-image.png)`;
            slotElement.appendChild(itemElement);
        }

        inventoryDiv.appendChild(slotElement);
    });

    console.log("Inventário atualizado.");
}
