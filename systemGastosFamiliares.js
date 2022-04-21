/*	### Sistema de gastos familiar

	Crie um objeto que possuirá duas propriedades,
	ambas do tipo array:
		* rendas
		* despesas
		
	Agora, crie uma função que irá calcular o total de receitas
	e despesas e irá mostrar uma mensagem se a familai esta com saldo
	positivo ou negativo, seguido do valor do saldo
*/

let family ={
	rendas: [1200, 5000, 100]
	despesas: [100, 100, 400]
}

function sum(array) {
	let total = 0;
	
	for (let value of array) {
		total += value
	}
	
	return total
}

function calculateCosts() {
	const calculateRendas = sum(family.rendas)
	const calculateDespesas = sum(family.despesas)
	
	const total = calculateRendas - calculateDespesas
	const itsPositivo = total >= 0
	let status = 'negativo'
	if (itsPositivo) {
		status = 'positivo'
	}
	
	console.log('Com todos os gatos seu saldo está ${status} => R$${total.toFixed(2)}')
}