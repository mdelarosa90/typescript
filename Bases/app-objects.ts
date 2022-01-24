(() => {
    type HeroCar = {
        carroceria: string;
        modelo: string;
        antibalas: boolean;
        pasajeros: number;
        disparar?: () => void;
    }

    const batimovil: HeroCar = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4
    }

    console.log(batimovil);

    const bumblebee: HeroCar = {
        carroceria: 'Amarillo con Negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('disparando')
        }
    }

    // VILLANOS
    type Villanos = {
        nombre: string;
        edad: number;
        mutante: boolean;
    }

    const villanos: Villanos[] = [{
        nombre: 'Lex Luthor',
        edad: 54,
        mutante: false
    }, {
        nombre: 'James Logan',
        edad: 49,
        mutante: true
    }];

    // MULTIPLES TIPOS
    type Charles = {
        poder: string;
        estatura: number;
    };

    type Apocalipsis = {
        lider: boolean;
        miembros: string[]
    };

    const charles: Charles = {
        poder: 'psiquico',
        estatura: 1.78
    }

    const apocalipis: Apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke"]
    }

    let mystique: Charles | Apocalipsis;

    mystique = charles;
    mystique = apocalipis;

    console.log(mystique);
})

