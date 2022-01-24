(() => {
    const number:number[] = [1,2,3,4,5,6,7,8,9,10];
    number.push(11);

    const villians = ["Omega Rojo", "Dormamu", "Duende Verde"]
    console.log(number);
    villians.forEach(v => console.log(v.toUpperCase()));

    number.forEach(v => console.log(v));
})();