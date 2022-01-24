(() => {
    const hero: string = "Flash";

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñal Activada!';
    }

    const heroName = returnName();

    console.log({heroName});
})();