const supertest = require('supertest')
const app = require('../../src/app')
const {Car} = require('../../src/models/')
const truncate = require('../utils/truncate')
const request = supertest(app)

describe('Authentication', ()=>{
    beforeEach(async()=>{
        await truncate()
    })
    it('should be able to register a car', async ()=>{
        const response = await request.post('/car').send({
          board: "CRE-4898", password: "123456"
        })
        expect(response.status).toBe(201)
    })
    it('should be able to register a car and recieve token', async ()=>{
        const response = await request.post('/car').send({
            board: "CRE-4898", password: "123456"
          })
          expect(response.body).toHaveProperty('token')
          
    })
    it('should not be able to register a car when is missing information', async ()=>{
        const response = await request.post('/car')
        expect(response.status).toBe(400)
    })
    it('should be able to login when user has valid credentials', async ()=>{
        const response = await request.post('/car/login').set('token', 'token').send({
            board: "CRE-4898",
            password: "12345"
        })
        expect(response.status).toBe(200)
    })
})