console.log('Módulo Inventory carregado');

class Inventory {
    constructor(maxSlots) {
        this.maxSlots = maxSlots;
        this.slots = new Array(maxSlots).fill(null);
        this.equippedItems = {};
        console.log(`Inventário criado com ${maxSlots} slots.`);
        this.updateInventoryUI();
    }

    addItem(name, slotsOccupied, type) {
        console.log(`Tentando adicionar item: ${name}, Slots necessários: ${slotsOccupied}`);
        for (let i = 0; i <= this.maxSlots - slotsOccupied; i++) {
            if (this.slots.slice(i, i + slotsOccupied).every(slot => slot === null)) {
                for (let j = 0; j < slotsOccupied; j++) {
                    this.slots[i + j] = { name, type };
                }
                console.log(`Item ${name} adicionado com sucesso!`);
                this.updateInventoryUI();
                return `Item ${name} adicionado com sucesso!`;
            }
        }
        console.log('Espaço insuficiente para adicionar o item!');
        return 'Espaço insuficiente para adicionar o item!';
    }

    removeItem(name) {
        console.log(`Tentando remover item: ${name}`);
        const startIndex = this.slots.findIndex(slot => slot && slot.name === name);
        if (startIndex !== -1) { // Corrigido para -1
            const slotsOccupied = this.slots.slice(startIndex).findIndex(slot => slot === null || slot.name !== name);
            for (let i = startIndex; i < startIndex + slotsOccupied; i++) {
                this.slots[i] = null;
            }
            console.log(`Item ${name} removido com sucesso!`);
            this.updateInventoryUI();
            return `Item ${name} removido com sucesso!`;
        }
        console.log('Item não encontrado!');
        return 'Item não encontrado!';
    }

    listItems() {
        console.log('Listando itens no inventário:');
        let itemList = '';
        this.slots.forEach((slot, index) => {
            if (slot !== null) {
                itemList += `Slot ${index + 1}: ${slot.name} (${slot.type})\n`;
            }
        });
        console.log(itemList || 'Inventário vazio!');
        return itemList || 'Inventário vazio!';
    }

    equipItem(name) {
        console.log(`Tentando equipar item: ${name}`);
        const itemIndex = this.slots.findIndex(slot => slot && slot.name === name);
        if (itemIndex !== -1) {
            this.equippedItems[name] = this.slots[itemIndex].type;
            console.log(`${name} equipado!`);
            return `${name} equipado!`;
        }
        console.log('Item não encontrado!');
        return 'Item não encontrado!';
    }

    unequipItem(name) {
        console.log(`Tentando desequipar item: ${name}`);
        if (this.equippedItems[name]) {
            delete this.equippedItems[name];
            console.log(`${name} desequipado!`);
            return `${name} desequipado!`;
        }
        console.log('Item não encontrado!');
        return 'Item não encontrado!';
    }

    sortItemsByName() {
        console.log('Ordenando itens por nome.');
        const items = this.slots.filter(slot => slot !== null);
        items.sort((a, b) => a.name.localeCompare(b.name));
        
        this.slots.fill(null);
        let index = 0;
        items.forEach(item => {
            while (index < this.maxSlots && this.slots[index] !== null) index++;
            this.slots[index] = item;
            index += 1;
        });
        console.log('Itens ordenados por nome.');
        this.updateInventoryUI();
    }

    sortItemsByType() {
        console.log('Ordenando itens por tipo.');
        const items = this.slots.filter(slot => slot !== null);
        items.sort((a, b) => a.type.localeCompare(b.type));
        
        this.slots.fill(null);
        let index = 0;
        items.forEach(item => {
            while (index < this.maxSlots && this.slots[index] !== null) index++;
            this.slots[index] = item;
            index += 1;
        });
        console.log('Itens ordenados por tipo.');
        this.updateInventoryUI();
    }

    updateInventoryUI() {
        const inventoryDiv = document.getElementById('inventory');
        inventoryDiv.innerHTML = ''; 

        for (let i = 0; i < this.maxSlots; i++) {
            const slotElement = document.createElement('div');
            slotElement.className = 'slot';
            slotElement.dataset.index = i;

            // Adicione um evento de clique para cada slot
            slotElement.addEventListener('click', () => {
                const item = this.slots[i];
                const itemInfo = item ? `Nome: ${item.name}, Tipo: ${item.type}` : 'Slot vazio';
                alert(itemInfo);
            });

            if (this.slots[i]) {
                slotElement.style.backgroundImage = `url(assets/images/${this.slots[i].name.toLowerCase()}-image.png)`;
                slotElement.style.backgroundSize = 'cover';
            } else {
                slotElement.style.backgroundColor = '#f0f0f0'; // Cor de fundo para slots vazios
            }

i        }

        console.log("Inventário atualizado.");
    }
}

export default Inventory;
