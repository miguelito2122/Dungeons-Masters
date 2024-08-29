console.log('Módulo Inventory carregado');


class Inventory {
    constructor(maxSlots, slots, items, inventoryDiv) {
        this.maxSlots = maxSlots;
        this.slots = new Array(maxSlots).fill(null);
        this.items = {};
        this.inventoryDiv = document.getElementById('inventory');
        this.updateInventoryUI ();
    }

    updateInventoryUI() {
        this.inventoryDiv.innerHTML = '';

        for (let i = 0; i < this.slots.length; i++) {
            const slotElement = document.createElement('p');
            slotElement.className = 'slot';
            slotElement.dataset.index = i;
            this.inventoryDiv.appendChild(slotElement);
        }



    }   
}

export default Inventory



