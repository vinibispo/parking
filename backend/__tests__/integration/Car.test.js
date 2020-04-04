const supertest = require('supertest')
const app = require('../../src/app')
const {Car} = require('../../src/models/')
const request = supertest(app)

describe('Authentication', ()=>{
    beforeEach(async()=>{
       await Car.truncate({where: {}, truncate: true})
    })
    it('should be able to register a car', async ()=>{
        const response = await request.post('/car').send({
          board: "CRE-4898", password: "123456"
        })
        expect(response.status).toBe(201)
    })
    it('should be able to register a car and recieve token', async ()=>{
        const response = await request.post('/car').send({
            board: "CER-4898", password: "123456"
          })
          expect(response.body).toHaveProperty('token')
          
    })
    it('should not be able to register a car when is missing information', async ()=>{
        const response = await request.post('/car')
        expect(response.status).toBe(400)
    })
    it('should be able to login when user has valid credentials', async ()=>{
        const response = await request.post('/car/login').set('token', 'token').send({
            board: "REC-4898",
            password: "12345"
        })
        expect(response.status).toBe(200)
    })
})