(() => {
    const addNumber = (a: number, b: number) => a+b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
   
    let myFunction: () => string;

    // myFunction = addNumber;
    // console.log(myFunction(1, 5));
    
    //? myFunction = greet;
    //? console.log(myFunction('Cami'));
    
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})()