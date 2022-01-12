require('dotenv').config()
const assert = require('assert')
const fetch = require('node-fetch')
const users = require('../models/users')

const urlAPI = "http://localhost:" + process.env.EXPRESS_PORT ;

describe('#register()', function () {
	it(`The email is in use`, async () => { //ingreso un email ya usado 
		await fetch(urlAPI + "/register", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"name": "juan",
				"email": "admin@gmail.com", 
				"phoneNumber": 12345,
				"addressBook": [
					{
						"shippingAddress": "rivadavia"
					},
					{
						"shippingAddress": "avenida"
					}
				],
				"password": "admin"
			})
		})
			.then(response => response.json())
			.then(data => {
				assert.equal(data.msg, 'The email is in use')
			})
	})

	it(`Fill in all the fields`, async () => { //no ingreso algunos datos
		const url = `http://localhost:3000/register` 
		await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": "", 
				"name": "",
				"email": "",
				"phone": "",
				"addressBook": [
					{
						"shippingAddress": "rivadavia"
					},
					{
						"shippingAddress": "avenida"
					}
				],
				"password": "admin"
			})
		})
			.then(response => response.json())
			.then(data => {
				assert.equal(data.msg, 'Fill in all the fields')
			})
	})
	it(`The email has invalid characters`, async () => { //ingreso caracteres invalidos para un email
		const url = `http://localhost:3000/register` 
		await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": "juan",
				"name": "juan",
				"email": "4/%$74!#$(%&()%", 
				"phone": 12345,
				"addressBook": [
					{
						"shippingAddress": "rivadavia"
					},
					{
						"shippingAddress": "avenida"
					}
				],
				"password": "admin"
			})
		})
			.then(response => response.json())
			.then(data => {
				assert.equal(data.msg, 'The email has invalid characters')
			})
	})
	it(`Bad Request`, async () => { //ingreso datos de diferente tipo
		const url = `http://localhost:3000/register`	
		await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": 222,
				"name": 142,
				"email": "email@gmail.com",
				"phone": "number",
				"addressBook": [
					{
						"shippingAddress": "test"
					},
				],
				"password": "mocha"
			})
		})
			.then(response => response.json())
			.then(data => {
				assert.equal(data.message, 'Unable to insert data')
			})
	})
})
