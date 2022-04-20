import { Customer } from "../class/customer.class"

export class CustomerService {
  customerIdCounter: number;
  customerCollection: Customer[];

  constructor(customerIdCounter: number = 0, customerCollection: Customer[] = []){
    this.customerIdCounter = customerIdCounter;
    this.customerCollection = customerCollection;
  }
  
  get(id: number): Customer | undefined {
    return this.customerCollection.find(customer => customer.id === id)
  }

  new(name: string, surname: string, email: string, birthdate: string): Customer {
    this.customerIdCounter++
    const newCustomer = new Customer(this.customerIdCounter, name, surname, email, birthdate)
    this.customerCollection.push(newCustomer)
    return newCustomer
  }
  
  getAll(): Customer[] {
    return this.customerCollection
  }

  updateCustomer(id: number, name: string, surname: string, email: string, birthdate: string): Customer | undefined{
   let customerToUpdate = this.customerCollection.find((customer) => { // delete the first customer
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

  delete(id: number): Customer | undefined{
    let customerDeleted = this.customerCollection.find((customer, index) => {
      if(customer.id == id){
        return this.customerCollection.splice(index, 1);
      }
    })
    return customerDeleted
  }

}


