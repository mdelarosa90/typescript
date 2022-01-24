// Funciones Básicas
function sumar(a: number,b:number):number{
    return a+b;
}

const contar = (heroes: string[]):number => {
    return heroes.length;
}

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

// Parámetros por defecto;
const llamarBatman = (llamar: boolean = false):void => {
    if(llamar) {
        console.log("Batiseñal activada");
    }
}

llamarBatman();

// Rest
const unirHeroes = (...personas: string[]): string => {
    return personas.join(",");
}

const noHacerNada = (numero: number, texto: string, booleano: boolean, arreglo: any[]): void => {};

let noHaceNadaTampoco: (n: number, t: string, b: boolean, a: any[]) => void;
noHaceNadaTampoco = noHacerNada;