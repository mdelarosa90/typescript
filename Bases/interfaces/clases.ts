(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: string):string;
    }

    interface Human {
        age: number
    }

    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        constructor(name: string, age: number, realName: string) {
            this.name = name;
            this.age = age;
            this.realName = realName;
        }

        mutantPower(id: string): string {
            return this.name + ' ' + this.realName;
        }
    }
})()