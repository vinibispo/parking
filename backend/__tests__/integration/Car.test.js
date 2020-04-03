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
          board: "CRE-4898", password_hash: "123456"
        })
        expect(response.status).toBe(201)
    })
    it('should not be able to register a car when is missing information', async ()=>{
        const response = await request.post('/car')
        expect(response.status).toBe(400)
    })
})