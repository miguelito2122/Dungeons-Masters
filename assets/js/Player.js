console.log('Módulo Player carregado');

import Inventory from './Inventory.js';

class Player {
    constructor(name = 'Jogador', className = '', hp = '100', xp = '100', Mana = '10', Stamina = '10') {
        this.class = className;
        this.hp = hp;
        this.xp = xp;
        this.Mana = Mana;
        this.Stamina = Stamina;
        this.inventory = {};
        this.equippedItems = {};
        this.name = document.getElementById('nome-player');
        console.log(`Jogador criado: ${this.name}, Classe: ${this.class}`);
    }
}

export default Player