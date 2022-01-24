import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject('Hola Mundo');

// console.log(genericFunction(3.221313123).toFixed(2));
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase());

const deadPool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadPool).dangerLevel);