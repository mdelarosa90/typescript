(() => {
    class Avenger {
        //private name: string;
        //private team: string;
        //realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        constructor( private name: string, private team: string, realName?: string) {
        }

        public bio() {
            return `${this.name} (${this.team})!!`
        }

    }

    const antMan: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antMan);
    // console.log(antMan.bio());
    // console.log(Avenger.getAvgAge());
})()