// CODE here for your Lambda Classes
 
class Person {
	constructor(attr){
		this.name = attr.name;
		this.age = attr.age;
		this.location = attr.location;
		this.gender = attr.gender;
	}
	
	speak() {
		console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends Person{
	constructor(attr){
		super(attr);
		
		this.specialty = attr.specialty;
		this.favLanguage = attr.favLanguage;
		this.catchPhrase = attr.catchPhrase;
	}
	
	demo(subject){
		console.log(`Today we are learning about ${subject}`);
	}
	grade(student, subject){
		console.log(`${student.name} gets a perfect score on ${subject}! `);
	}
}

class Student extends Person {
	constructor(attr){
		super(attr);
		
		this.previousBackground = attr.previousBackground;
		this.className = attr.className;
		this.favSubjects = attr.favSubjects;
		
	}
	
	listsSubjects(){
		for(let i = 0; i < this.favSubjects.length; i++){
			console.log(this.favSubjects[i]);
		}
	}
	
	PRAssignment(subject){
		console.log(`{this.name} has submitted a pull request for ${subject} `);
		
	}
	
	sprintChallenge(subject){
		console.log(`{this.name} has begun a sprint challenge for ${subject} `);
		
	}
}

class ProjectManagers extends Person {
	constructor(attr){
		super(attr);
		
		this.gradClassName = attr.gradClassName;
		this.favInstructor = attr.favInstructor;
		
	}
	
	standUp(channel){
		console.log(`${this.name} annouces to ${channel}, @channel standy times! `);
	}
	
	debugsCode(student){
		console.log(`${this.name} debugs ${student.name}'s code`);
	}
}














