const request = require('supertest');
const app = require('../src/index');

describe('index.ts', () => {
    describe('GET /customers', () => {
        it('should return all users', async () => {
            const response = await request(app).get('/customers')
        
            expect(response.error).toBe(false)
            expect(response.status).toBe(200)
            expect(response.body).toStrictEqual([])
        })
    })
})