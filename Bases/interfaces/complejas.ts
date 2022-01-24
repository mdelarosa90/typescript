(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): void;
    }

    interface Address {
        id: number;
        zipCode: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 31,
        address: {
            id: 125,
            zipCode: 'KYX SUD',
            city: 'Ottawa'
        },
        getFullAddress() {
            return this.address.zipCode;
        }
    }

    const client2: Client = {
        name: "Juan",
        age: 25,
        address: {
            city: 'Quilla',
            zipCode: '2923 23',
            id: 126
        },
        getFullAddress() {
            return this.address.zipCode;
        }
    }
})()