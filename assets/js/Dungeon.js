console.log('Módulo Dungeon carregado');
class Dungeon {
    constructor(player) {
        this.player = player;
    }

    generateDungeon() {
        console.log("Gerando masmorras...");
    }

    exploreDungeon() {
        console.log("Explorando masmorras...");
    }
}

export default Dungeon;