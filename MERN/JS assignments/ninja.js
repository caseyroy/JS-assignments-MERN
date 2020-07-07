class Ninja {
    constructor(name, health = 25, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`Name:${this.name}`)
    }
    showStats(){
        console.log(`Health:${this.health}\nSpeed:${this.speed}\nStrength:${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Diamond Dave");
ninja1.sayName();
ninja1.showStats();