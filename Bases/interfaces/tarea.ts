// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelear():void;
}

const conducirBatimovil = ( auto: Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }
  
  const batimovil = {
    encender:false,
    velocidadMaxima:0,
    acelear(){
      console.log("...... gogogo!!!");
    }
  }
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Guason {
      reir?: boolean;
      comer?: boolean;
      llorar?: boolean;
  }
  
  const guason = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( guason: Guason ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion

  interface CiuddadGoticaFm {
        (citizens: string[]):number;
  };
  
  const ciudadGotica: CiuddadGoticaFm = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  interface Person {
      nombre: string;
      edad: number;
      sexo: string;
      estadoCivil: string;
      imprimirBio():void;
  }
  
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona implements Person {
      sexo: string;
      edad: number;
      estadoCivil: string;
      nombre: string;

      constructor(sexo: string, edad: number, estadoCivil: string, nombre: string) {
        this.sexo = sexo;
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.nombre = nombre;
      }

      imprimirBio(): void {
          console.log('Ejemplo ')
      }
  }