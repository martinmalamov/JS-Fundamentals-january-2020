// class Bank {
//     constructor(bankName) {
//         this.bankName = bankName;
//         this.allCustomers = []
//         this.orderList = []
//     }

//     newCustomer(customer) {

//         if (!this.allCustomers.includes(customer.firstName, customer.lastName)) {
//             this.allCustomers.push(customer)
//             return customer

//         } else {
//             throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
//         }
//     }

//     depositMoney(personalId, amount) {

//         const search = personalId => this.allCustomers.find(element => element.personalId === personalId);
//         let obj = this.allCustomers.find(x => x.personalId === personalId);
//         let index = this.allCustomers.indexOf(obj);
//         if (search(personalId)) {

//             if (this.allCustomers[index].money === undefined) {
//                 this.allCustomers[index].money = amount
//             } else {
//                 this.allCustomers[index].money += amount
//             }
//         } else {
//             throw new Error('We have no customer with this ID!')
//         }

//         return this.allCustomers[index].money + '$'
//     }

//     withdrawMoney(personalId, amount) {
//         const search = personalId => this.allCustomers.find(element => element.personalId === personalId);
//         let obj = this.allCustomers.find(x => x.personalId === personalId);
//         let index = this.allCustomers.indexOf(obj);
//         if (search(personalId)) {
//             if (this.allCustomers[index].money > amount) {
//                 this.allCustomers[index].money -= amount
//             } else {
//                 throw new Error(`${this.allCustomers.firstName} ${this.allCustomers.last} does not have enough money to withdraw that amount!`)
//             }
//         } else {
//             throw new Error('We have no customer with this ID!')
//         }

//         return this.allCustomers[index].money + '$'
//     }

//     customerInfo(personalId) {
//         let str = ''
//         let obj = this.allCustomers.find(x => x.personalId === personalId);
//         let index = this.allCustomers.indexOf(obj);

//         const search = personalId => this.allCustomers.find(element => element.personalId === personalId);
//         if (search(personalId)) {
//             str = `Bank name: ${this.bankName}\n` +
//                 `Customer name: ${this.allCustomers[index].firstName} ${this.allCustomers[index].lastName}\n` +
//                 `Customer ID: ${this.allCustomers[index].personalId}\n` +
//                 `Total Money: ${this.allCustomers[index].money}$\n` +
//                 `Transactions:`

//             return str
//         } else {
//             throw new Error('We have no customer with this ID!')
//         }
//     }
// }
// -------------------- 36 / 100 ---------------------------------------------------------------------------------------------------------------

// let bank = new Bank('SoftUni Bank');
// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));






// ------------------------------- 100 / 100 ------------------------------------------------------------------------------------------------
// class Bank {
//     constructor(bankName) {
//         this._bankName = bankName;
//         this.allCustomers = []
//     }

//     newCustomer(customer) {

//         if (this.allCustomers.find(c => c.firstName == customer.firstName && c.lastName == customer.lastName !== undefined)) {
//             throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
//         } else {
//             customer.totalMoney = 0;
//             customer.transactions = [];

//             this.allCustomers.push(customer)
//             return customer;
//         }
//     }

//     depositMoney(personalId, amount) {
//         const customer = this.allCustomers.find(c => c.personalId === personalId)

//         if (customer === undefined) {
//             throw new Error('We have no customer with this ID!');
//         } else {
//             customer.totalMoney += amount;
//             customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)

//             return `${customer.totalMoney}$`
//         }
//     }

//     withdrawMoney(personalId, amount) {
//         const customer = this.allCustomers.find(c => c.personalId === personalId)

//         if (customer === undefined) {
//             throw new Error('We have no customer with this ID!')
//         } else if (customer.totalMoney < amount) {
//             throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
//         } else {
//             customer.totalMoney -= amount
//             customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)

//             return `${customer.totalMoney}$`;
//         }
//     }

//     customerInfo(personalId) {
//         const customer = this.allCustomers.find(c => c.personalId === personalId)

//         if (customer === undefined) {
//             throw new Error('We have no customer with this ID!')
//         } else {
//             return [
//                 `Bank name: ${this._bankName}`,
//                 `Customer name: ${customer.firstName} ${customer.lastName}`,
//                 `Customer ID: ${personalId}`,
//                 `Total Money: ${customer.totalMoney}$`,
//                 'Transactions:'
//             ].concat(customer.transactions).join('\n')
//         }
//     }
// }




// let bank = new Bank('SoftUni Bank');
// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));


class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity
        this.clients = []
        this.totalProfit = 0
        this.currentWorkload = 0

    }

    newCustomer(ownerName, petName, kind, procedures) {
        kind.toLowerCase();

        if (this.capacity < this.clients.length) {
            throw new Error("Sorry, we are not able to accept more patients!")
        } else if (this.clients.find(p => p.petName == petName && p.ownerName == ownerName !== undefined)) {
            let proceduresOfPet = procedures.forEach(pet => {
                pet.join(', ')
            });
            throw new Error(`This pet is already registered under ${this.clients.ownerName} name! ${this.clients.petName} is on our lists, waiting for ${procedures}.`)
        } else {
            this.clients.push({ ownerName: ownerName, petName: petName, kind: kind, totalProfit: this.totalProfit, currentWorkload: this.currentWorkload })
            this.currentWorkload++
            return `Welcome ${petName}!`;
        }
    }

    onLeaving(ownerName, petName) {
        if (!this.clients.find(own => own.ownerName === ownerName)) {
            throw new Error("Sorry, there is no such client!")
        } else if (this.clients.find(c => c.ownerName === ownerName && c.petName === petName === undefined)
            && this.currentWorkload.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        } else {
            let clientBills = 0
            this.currentWorkload--

            return `Goodbye ${petName}. Stay safe!`
        }
    }



    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId)

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            customer.totalMoney += amount;
            customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)

            return `${customer.totalMoney}$`
        }
    }

    toString() {
        let percentage = this.currentWorkload * 10;
        return `"${this.clinicName} is ${percentage}% busy today!" `
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId)

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!')
        } else if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        } else {
            customer.totalMoney -= amount
            customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)

            return `${customer.totalMoney}$`;
        }
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId)

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!')
        } else {
            return [
                `Bank name: ${this._bankName}`,
                `Customer name: ${customer.firstName} ${customer.lastName}`,
                `Customer ID: ${personalId}`,
                `Total Money: ${customer.totalMoney}$`,
                'Transactions:'
            ].concat(customer.transactions).join('\n')
        }
    }
}


let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());
