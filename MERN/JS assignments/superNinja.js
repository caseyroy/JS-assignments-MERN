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

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
        
    }
    speakWisdom = () => {
        console.log("Dont go ninj'in no one don't need ninj'in");
        super.drinkSake();
    }
}
const sensei = new Sensei("Diamond Dave");
sensei.sayName();
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();

const ninja1 = new Ninja("Ninja-Rella");
ninja1.sayName();
ninja1.showStats();

