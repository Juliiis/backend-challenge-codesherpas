import { Customer } from "../class/customer.class"

export const customerCollection: Customer[] = []
let customerIdCounter = 0

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
}

const newCustomer = CustomerService.new('Julieta', 'Martin', 'jumartinnob@gmail.com', '03-09-1990')
console.log(newCustomer.id)

