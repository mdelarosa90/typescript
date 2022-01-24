(() => {
    class Avenger {
        constructor(public name: string, public realName: string){
            //console.log('Constructor Avenger Llamado');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName);
            //console.log('Constructor X-men llamado');
        }

        get fullName(): string {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if(name.length < 3) {
                throw Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }

        getFullnameDesdeXmen() {
            return super.getFullName();
        }
    }

    const wolverine  = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // console.log(wolverine.getFullnameDesdeXmen());
    // wolverine.fullName = 'Fernando';

    // console.log(wolverine.fullName);
    
})();