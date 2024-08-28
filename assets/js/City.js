console.log('Módulo City carregado');
class City {
    constructor(player) {
        this.player = player;
    }

    visit() {
        console.log("Visitando a cidade...");
    }
}

export default City;