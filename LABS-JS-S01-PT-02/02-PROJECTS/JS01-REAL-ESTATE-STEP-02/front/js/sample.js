// Ejemplo 1
function showThis() {
    console.log(this);
}
showThis(); // window (en navegadores) o global (en Node.js)

// Ejemplo 2
const obj = {
    name: "Juan",
    showName: function() {
        console.log(this.name);
    }
};
obj.showName(); // "Juan"

// Ejemplo 3
const person = {
    name: "Maria",
    greet: function() {
        console.log(`Hola, ${this.name}`);
    }
};
const greet = person.greet;
greet(); // undefined (en modo estricto), window (en modo no estricto)

// Ejemplo 4
function Person(name) {
    this.name = name;
}
const p1 = new Person("Ana");
console.log(p1.name); // "Ana"

// Ejemplo 5
const anotherObj = {
    name: "Carlos",
    showThis: () => {
        console.log(this.name); // undefined, porque las arrow functions no tienen su propio `this`
    }
};
anotherObj.showThis();