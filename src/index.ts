import { CustomerService } from "./service/customer.service"
import { Request, Response } from "express"

const express = require('express')
const app = express()
app.use(express.json());

app.post('/customer', (req: Request, res: Response) => {
  const name = req.body.name
  const surname = req.body.surname
  const email = req.body.email
  const birthdate = req.body.birthdate
  
  const newCustomer = CustomerService.new(name, surname, email, birthdate)
  return res.json(newCustomer);
})

app.get('/customer/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const customer = CustomerService.get(id)

  return res.json(customer)
})

app.get('/customers', (req:Request, res: Response) => {
  const customers = CustomerService.getAll()

  return res.json(customers);
})

app.put('/customer/:id', (req:Request, res:Response) => {
  const id = Number(req.params.id)
  const name = req.body.name
  const surname = req.body.surname
  const email = req.body.email
  const birthdate = req.body.birthdate

  const customerUpdated = CustomerService.updateCustomer(id, name, surname, email, birthdate)
  return res.json(customerUpdated); 
})

app.delete('/customer/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const customer = CustomerService.delete(id)

  return res.json(customer)
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})