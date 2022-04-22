import { Customer } from "../class/customer.class"
import { nanoid } from 'nanoid'

export class CustomerService {
  customerCollection: Customer[];

  constructor(customerCollection: Customer[] = []){
    this.customerCollection = customerCollection;
  }
  
  get(id: string): Customer | undefined {
    return this.customerCollection.find(customer => customer.id === id)
  }

  new(name: string, surname: string, email: string, birthdate: string): Customer {
    const newCustomerId = nanoid()
    const newCustomer = new Customer(newCustomerId, name, surname, email, birthdate)
    this.customerCollection.push(newCustomer)
    return newCustomer
  }
  
  getAll(): Customer[] {
    return this.customerCollection
  }

  updateCustomer(id: string, name: string, surname: string, email: string, birthdate: string): Customer | undefined{
   let customerToUpdate = this.customerCollection.find((customer) => {
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

  delete(id: string): Customer | undefined{
    let customerDeleted = this.customerCollection.find((customer, index) => {
      if(customer.id == id){
        return this.customerCollection.splice(index, 1);
      }
    })
    return customerDeleted
  }

}


