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
  
  static getAll(): Customer[] {
    return customerCollection
  }

  static updateCustomer(id: number, name: string, surname: string, email: string, birthdate: string): Customer | undefined{
   let customerToUpdate = customerCollection.find((customer) => { // delete the first customer
      if(customer.id == id){
        customer.name = name
        customer.surname = surname
        customer.email = email
        customer.birthdate = birthdate
        return true
      }
    })
    return customerToUpdate
  }

  static delete(id: number): void {
    customerCollection.find((customer, index) => {
      if(customer.id == id){
        return customerCollection.splice(index, 1);
      }
    })
  }

}

