import { CustomerService } from '../src/service/customer.service'
import { Customer } from '../src/class/customer.class'

describe('index.ts', () => {
    
    const name = 'new user'
    const surname = 'surname new user'
    const email = "newuser@gmail.com"
    const birthDate = "03/09/1990"

    
    describe('POST /customer', () => {
        it('creates a new customer', () => {
            const customerCollection = []
            const customerService = new CustomerService(customerCollection)
        
            const customer = customerService.new(name, surname, email, birthDate)
        
            expect(customerCollection.length).toEqual(1)
            expect(customerCollection[0]).toEqual(customer)
          })
    })

    describe('GET /customer/:id', () => {
        it('should return one customer', () => {
            const myId = ""
            const customer = new Customer(myId, name, surname, email, birthDate)

            const customerCollection = [customer]
            const customerService = new CustomerService(customerCollection)

            const expectedCustomer = customerService.get(myId)

            expect(expectedCustomer).toEqual(customer)
        })
    })

    describe('GET /customers', () => {
        it('should return all customers', () => {
            const myId = ""
            const customer = new Customer(myId, name, surname, email, birthDate)

            const customerCollection = [customer]
            const customerService = new CustomerService(customerCollection)

            const expectedCustomers = customerService.getAll(customerCollection)

            expect(expectedCustomers).toEqual(customerCollection)
        })
    })

    describe('PUT /customer/:id', () => {
        it('should update a customer', () => {
            const customerCollection = []
            const customerService = new CustomerService(customerCollection)
        
            const customer = customerService.new(name, surname, email, birthDate)
        
            expect(customerCollection.length).toEqual(1)
            expect(customerCollection[0]).toEqual(customer)
          })
    })

    describe('DELETE /customer/:id', () => {
        it('should delete a customer', () => {
            const myId = ""
            const customer = new Customer(myId, name, surname, email, birthDate)

            const customerCollection = [customer]
            const customerService = new CustomerService(customerCollection)

            const expectedCustomer = customerService.delete(myId)

            expect(expectedCustomer).toEqual(customer)
          })
    })
})