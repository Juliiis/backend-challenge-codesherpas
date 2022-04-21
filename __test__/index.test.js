const request = require('supertest');

const app = require('../src/routes/index');

describe('index.ts', () => {

    const user = {
        name: 'new user',
        surname:'surname new user',
        email: 'newuser@gmail.com',
        birthdate: '03/09/1990'
    }

    describe('POST /customer', () => {
        it('should post a new user', async () => {
            const response = await request(app).post('/customer').send(user)

            expect(response.error).toBe(false)
            expect(response.status).toBe(200)
            expect(response.body).toMatchObject(user)
        })
    })

    describe('GET /customers', () => {
        it('should return all users', async () => {
            const response = await request(app).get('/customers')
        
            expect(response.error).toBe(false)
            expect(response.status).toBe(200)
            expect(response.body.length).toBe(1)
            expect(response.body[0]).toMatchObject(user)
        })
    })
})