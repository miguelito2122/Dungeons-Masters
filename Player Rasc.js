import Inventory from './Inventory.js';
console.log('Módulo Player carregado');
class Player {
    constructor(name = 'Jogador', selectedClass = Player) {
        this.name = name;
        this.class = selectedClass;
        this.health = 100;
        this.inventory = new Inventory(64);
        this.equippedItems = {};
        console.log(`Jogador criado: ${this.name}, Classe: ${this.class}`);
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.name} foi derrotado!`);
        } else {
            console.log(`${this.name} tomou ${amount} de dano!`);
        }
    }

    heal(amount) {
        this.health += amount;
        if (this.health > 100) {
            this.health = 100;
        }
        console.log(`${this.name} recuperou ${amount} de vida!`);
    }

    equipItem(itemName) {
        const result = this.inventory.equipItem(itemName);
        console.log(result);
    }

    unequipItem(itemName) {
        const result = this.inventory.unequipItem(itemName);
        console.log(result);
    }

    addItemToInventory(itemName, slotsOccupied, itemType) {
        const result = this.inventory.addItem(itemName, slotsOccupied, itemType);
        console.log(result);
    }

    removeItemFromInventory(itemName) {
        const result = this.inventory.removeItem(itemName);
        console.log(result);
    }

    listInventory() {
        const itemList = this.inventory.listItems();
        console.log(itemList);
    }
}

export default Player;
