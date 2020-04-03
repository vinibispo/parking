const supertest = require('supertest')

const app = require('../../src/app')
const {Car} = require('../../src/models/')
const request = supertest(app)

describe('Authentication', ()=>{
    beforeEach(async()=>{
    })
    it('should to be able to register a car', async()=>{
        const response = await request.post('/car').send({
          board: "CRE-4898"
        })
        expect(response.status).toBe(201)
    })
})