class Ninja {
    constructor(name, health) {
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = health;
    }

    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.strength, this.speed,this.health)
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health)
    }
}

const blueNinja = new Ninja("Leonardo", 100);
blueNinja.sayName();
blueNinja.showStats();
blueNinja.drinkSake();


class Sensei extends Ninja {
    constructor( name, health, wisdom) {
        super(name, health)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        this.drinkSake
        console.log("A very wise quote")
    }
    
}
const wiseSensei = new Sensei(wisdom,"Master Splinter", health);
wiseSensei.sayName();