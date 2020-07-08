class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    showStats = () => {
        console.log(`Name:${this.name}\nCost:${this.cost}\nResilience:${this.res}\nPower:${this.power}`)
    }
    attack = (target) => {
        target.res -= this.power;
        console.log(`${this.name} attacks ${target.name} and reduces their resilience by ${this.power}!`)
    }
}
class Effect extends Card {
    constructor(name, cost, text, power, res){
        super(name, cost);
        this.text = text
        this.power = power;
        this.res = res
    }
    play = (target) => {
        if (this.power > 0) {
            target.power += this.power;
            console.log(`${this.name}'s effect has raised ${target.name}'s power by ${this.power}!`)
        }
        else if (this.power < 0) {
            target.power += this.power;
            console.log(`${this.name}'s effect has lowered ${target.name}'s power by ${this.power}!`)
        }
        else if (this.res > 0) {
            target.res += this.res;
            console.log(`${this.name}'s effect has raised ${target.name}'s resilience by ${this.res}!`)
        }
        else if (this.res < 0) {
            target.res += this.res;
            console.log(`${this.name}'s effect has lowered ${target.name}'s resilience by ${this.res}!`)
        }
    }
    showStats = () => {
        console.log(`Name:${this.name}\nCost:${this.cost}\nEffect:${this.text}`)
    }
}

const rbn = new Unit("Red Belt Ninja", 3, 3, 4)
const bbn = new Unit("Black Belt Ninja", 4, 5, 4)

const ha = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 0, 3)
const upr = new Effect("Unhandled Promise Rejection", 1, "reduce targets resilience by 2", 0, -2)
const pp = new Effect("Pair Programming", 3, "increase target's power by 2", 2, 0)

console.log(`Player 1 summons ${rbn.name}!`)
rbn.showStats()
console.log(`Player 1 plays ${ha.name} on ${rbn.name}`)
ha.play(rbn)
rbn.showStats()
console.log(`Player 2 summons ${bbn.name}!`)
bbn.showStats()
console.log(`Player 2 plays ${upr.name} on ${rbn.name}!`)
upr.play(rbn)
rbn.showStats()
console.log(`Player 1 plays ${pp.name} on ${rbn.name}!`)
pp.play(rbn)
rbn.showStats()
console.log(`Player 1 sends ${rbn.name} to attack ${bbn.name} with windmill shuriken! `)
rbn.attack(bbn)
bbn.showStats()
console.log(`${bbn.name} has been killed!, what will Player 2 do now?`)