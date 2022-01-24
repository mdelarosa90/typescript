(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: string | number | Hero = 'Fernando';
    
    myCustomVariable = 20;
    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Juan',
        powers: ["Super Herore"]
    }
    console.log(myCustomVariable);
})()