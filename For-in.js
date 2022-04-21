// For..in

let person = {
	name: 'Jhonny',
	age: 30,
	weight: 70.6
}

for (let property in person) {
	console.log(property)
	console.log(person[property])
}