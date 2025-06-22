(()=>{

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client1: Client = {
        name: 'Barry Allen',
        age: 24,
        address: {
            id: 100,
            zip: 'YVEKE - 123',
            city: 'Viajar en el tiempo'
        },
        getFullAddress(id: string): string {
            return this.address.city
        }
    }
    const client2: Client = {
        name: 'Manuel',
        age: 37,
        address: {
            id: 1,
            zip: 'VE 5001',
            city: 'San Cristóbal'
        },
        getFullAddress(id: string): string {
            return this.address.city
        }
    }

})()