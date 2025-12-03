 class Greeter {

    
    public greet(): void {
        console.log("Greetings from the Greeter class!");
    }

    public hola(hola: string): void {
        console.log(hola);
    }
}

const greeter = new Greeter();
greeter.greet();   
greeter.hola("¡Hola, Mundo!");

class Person {
    private name: string;
  
    constructor(name: string) {
        this.name = name;
    }
    public get getname(): string {
        return this.name;
    }
    public set setname(newName: string) {
        this.name = newName;
    }
}

const person = new Person("Alice");
console.log(`Person's name is: ${person.getname}`);

person.setname = "Bob";
console.log(`Person's new name is: ${person.getname}`);


