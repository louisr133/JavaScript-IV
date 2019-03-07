/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

class GameObject {
	constructor(attributes){
		
		this.createdAt = attributes.createdAt;
		this.name = attributes.name;
		this.dimensions = attributes.dimensions;
		this.x = attributes.x;
		this.y = attributes.y;
		this.show = attributes.show;
		this.alive = attributes.alive;
	}
	
	destroy() {
		console.log(`${this.name} was destroyed`);
		if(this.healthPoints <= 0){
			this.show = false;
		}
	
	}
	
	display() {
		
		if(this.show == true){
			
			
			noStroke();
			if(this.healthPoints <= 1){
				fill(color(255,0,0));
				circle(this.x + (this.dimensions.width)/2,this.y  - 25 ,this.dimensions.width * .9);
				rect(this.x,this.y,this.dimensions.width,this.healthPoints * 10);
			} else {
				circle(this.x + (this.dimensions.width)/2,this.y  - 25 ,this.dimensions.width * .9);
				rect(this.x,this.y,this.dimensions.width,this.healthPoints * 10);
			}
			
			
			
			fill(color(0));
			circle(this.x + 10,this.y-20,10);
			circle(this.x + 40,this.y-20,10);
		} 
	}
	
	gravity() {
		if(this.y < (400 - this.dimensions.height) ){
			this.y += 2;
		} else {
			
		}
	}

}


class CharacterStats extends GameObject {
	constructor(status){
		super(status);
		
		this.healthPoints = status.healthPoints;
	}
	
	takeDamage() {
		console.log(`${this.name} took damame}`);
		if(this.healthPoints > 0){
			this.healthPoints -= 1
		}
	}
}

class Humanoid extends CharacterStats {
	constructor(character){
		super(character);
		
		this.team = character.team;
		this.weapons = character.weapons;
		this.language = character.language;
		
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}`
	}
	
}



  var mage = new Humanoid({
    createdAt: new Date(),
    show: true,
    x: 400,
    y: 100,
    dimensions: {
      length: 7,
      width: 50,
      height: 100,
    },
    healthPoints: 10,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  var swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 40,
      height: 150,
    },
    show: true,
    x: 240,
    y: 100,
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  var archer = new Humanoid({
    createdAt: new Date(),
    show: true,
    dimensions: {
      length: 1,
      width: 55,
      height: 120,
    },
    x: 70,
    y: 200,
    healthPoints: 12,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  

  //Added new functions for a strech project that will return undefined
  //when called if not paired with other files.

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.