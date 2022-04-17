import { CustomerService } from "./service/customer.service"
import { Request, Response } from "express"

const express = require('express')
const app = express()
app.use(express.json());


app.get('/customer/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const customer = CustomerService.get(id)

  return res.json(customer)
})

app.post('/customer', (req: Request, res: Response) => {
  const loQueMeManda = req.body
  return res.json(loQueMeManda);
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})