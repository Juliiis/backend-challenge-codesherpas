import { Customer } from "../class/customer.class"

export const customerCollection: Customer[] = [] // this is my "db"
let customerIdCounter = 0 // this is the ID

export class CustomerService {
  static get(id: number): Customer | undefined {
    return customerCollection.find(customer => customer.id === id)
  }

  static new(name: string, surname: string, email: string, birthdate: string): Customer {
    customerIdCounter++
    const newCustomer = new Customer(customerIdCounter, name, surname, email, birthdate)
    customerCollection.push(newCustomer)
    return newCustomer
  }

  static delete(id: number): any {
    customerCollection.find((customer, index) =>{
      if(customer.id == id){
        return customerCollection.splice(index, 1);
      }
    })
  }

}

// ¡¡¡ delete at the end !!! 
const newCustomer = CustomerService.new('Julieta', 'Martin', 'jumartinnob@gmail.com', '03-09-1990')
console.log(newCustomer.id)

const newCustomer2 = CustomerService.new('Mami', 'Martin', 'mamiprrr@gmail.com', '05-09-1990')
console.log(newCustomer2.id)
