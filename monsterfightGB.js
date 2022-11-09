class Witch {
    constructor() {
      this.health = 100;
      this.sound = "hehehehehe!";
      this.damage = 8;
      console.log ("New Witch created") ;
      console.log (this.sound);
    }
  }

  class Werewolf {
    constructor(){
        this.health = 100
        this.sound = "Awoooooo!"
        this.damage= 9
        this.attacksound = "rawwhh!";
        console.log ("New Werewolf created");
        console.log (this.sound);
    }
}

class Dice {
    constructor() {

    }

    rollDice() {
        
        this.face = Math.floor(Math.random() * 6) + 1; // randomly get number 1-6
        console.log ("rolling dice: " + "a " + this.face + "!");
        return this.face;
    }
}

//create the monsters
let jeff = new Werewolf();
jeff.name="jeff";
let sabrina = new Witch();
sabrina.name= "sabrina";
let cDice = new Dice();
let sDice = new Dice();

    
function fightMonsters(m1, m2) {
    // function to create the monsters who will fight
    // passing in two monster objects as parameters


    let m1Roll = cDice.rollDice();
    let m2Roll = sDice.rollDice();

    if (m1Roll === m2Roll ) {
        console.log("it's a tie, roll again.")
    } else if (m1Roll > m2Roll) {
        console.log(jeff.health - sabrina.damage)
        console.log(jeff.name + " wins!"); 
    } else {
        console.log(sabrina.health - jeff.damage)
        console.log(sabrina.name + " wins!")
    }


}
//replay untill health has been depleated, for some reason it will not loop
//in the output the damage should appear as following
//Sabrina wins roll, jeff's health depleated to ___ or vise versa
if(jeff.health >= 0 && sabrina.health >= 0){
fightMonsters(jeff, sabrina);}

