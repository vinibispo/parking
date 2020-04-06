const supertest = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
const {Parking} = require('../../src/models/')
const request = supertest(app)

describe('Creation of Parking', ()=>{
	beforeEach(async ()=>{
		await truncate()
	})
	it('should be able to create a parking', async()=>{
		const response = await request.post('/parking').send({
			name: 'The Best Parking'
		})
		expect(response.status).toBe(201)
	})
	it('should be able to create a parking and recieve price_per_hour and total_money', async ()=>{
		const response = await request.post('/parking').send({
			name: 'The Best Parking'
		})
		expect(response.body.parking).toHaveProperty('price_per_hour')
		expect(Number(response.body.parking.price_per_hour)).toBe(10)
		expect(response.body.parking).toHaveProperty('total_money')
		expect(Number(response.body.parking.total_money)).toBe(0)
	})
	it('should be able to create a parking with custom price_per_hour and total_money', async ()=>{
		const response = await request.post('/parking').send({
			name: 'The best parking ever',
			price_per_hour: 20,
			total_money: 2000
		})
		expect(response.status).toBe(201)
		expect(response.body.parking).toHaveProperty('price_per_hour')
		expect(Number(response.body.parking.price_per_hour)).toBe(20)
		expect(response.body.parking).toHaveProperty('total_money')
		expect(Number(response.body.parking.total_money)).toBe(2000)

	})
})