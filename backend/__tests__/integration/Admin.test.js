const supertest = require('supertest')
const truncate = require('../utils/truncate')
const app = require('../../src/app')
const {Admin} = require('../../src/models/')
const request = supertest(app)
describe('Admin', ()=>{
    beforeEach(async ()=>{
        await truncate()
    })
    it('should test a GET', async ()=>{
        const response = await request.get('/admin')
        expect(response.status).toBe(200)
    })
    it('should test a POST', async ()=>{
        const user = {name: 'Vinícius Ferreira Bispo', email: 'vini.bispo015@gmail.com', pass: '123456'}
        const response = await request.post('/admin').send(user)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('email')
    })
    it('should test a PUT request', async () =>{
        const adm = await Admin.create({name: "Vinícius", email: 'vini.bispo015@gmail.com', pass: '123'})
        const response = await request.put(`/admin/${adm.id}`).send({name: 'Vini', email: 'vini.bispo@gmail.com', pass: '12345'})
        expect(response.status).toBe(204)
    })
    it('should test a DELETE request', async () =>{
        const adm = await Admin.create({name: 'Vinícius', email: 'vini.bispo015@gmail.com', password: '123456'})
        const response = await request.delete(`/admin/${adm.id}`)
        expect(response.status).toBe(204)
    })
    it('should test login', async () =>{
        await Admin.create({name:'Vini', email: 'vini.bispo015@gmail.com', password: '12345'})
        const response = await request.post('/admin/login').send({email: 'vini.bispo015@gmail.com', pass: '12345'})
        expect(response.status).toBe(200)
    })
})