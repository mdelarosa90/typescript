(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Betanny',
        activo: true,
        poder: 1500
    };

    //const {nick, poder} = avengers;
    //console.log(poder.toFixed(2), nick.toUpperCase());

    const printAvenger = ({ironman, ...resto}: Avengers) => {
        console.log(ironman, resto);
    }

    // printAvenger(avengers);

    const avengersArr: string[] = ["Cap. America", "Ironman", "Hulk"];
    
    const [capi, ironman, ] = avengersArr;
    // console.log({ironman, capi});

})()