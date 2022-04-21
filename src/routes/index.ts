import { CustomerService } from "../service/customer.service"
import { Request, Response } from "express"

const express = require('express')
const app = express()
app.use(express.json());

const customerService = new CustomerService();

app.post('/customer', (req: Request, res: Response) => {
  const name = req.body.name
  const surname = req.body.surname
  const email = req.body.email
  const birthdate = req.body.birthdate
  
  const newCustomer = customerService.new(name, surname, email, birthdate)
  if(newCustomer){
    return res.status(200).send(newCustomer);
  } 
  return res.status(404).send('Failed creation. Please check the information to send and try again'); 
})

app.get('/customer/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const customer = customerService.get(id)
  if(customer){
    return res.status(200).send(customer);
  } 
  return res.status(404).send('The customer does not exist. Please try again'); 
})

app.get('/customers', (req:Request, res: Response) => {
  const customers = customerService.getAll()

  if(customers){
    return res.status(200).send(customers);
  } 
  return res.status(404).send('The customers does not exist'); 
})

app.put('/customer/:id', (req:Request, res:Response) => {
  const id = req.params.id
  const name = req.body.name
  const surname = req.body.surname
  const email = req.body.email
  const birthdate = req.body.birthdate

  const customerUpdated = customerService.updateCustomer(id, name, surname, email, birthdate)
  if(customerUpdated){
    return res.status(200).send(customerUpdated);
  } 
  return res.status(404).send('Update failed. The customer does not exist'); 
})

app.delete('/customer/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const customer = customerService.delete(id)

  if(customer){
    return res.status(200).send(customer);
  } 
  return res.status(404).send('Update failed. The customer does not exist');
})

module.exports = app