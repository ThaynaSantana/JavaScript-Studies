/* ### Transformar notes escolares

	Crie um algoritmo que transforme as notes do sistema numerico
	para sistema de notes em caracteres tipo A B C

	* de 90 para cima	A
	* entre 80 - 90		B
	* entre 70 - 80		C
	* entre 60 - 70		D
	* menor que 60		F
*/

function systemNotes(note) {
	let noteA = note > 90
	let noteB = note >= 80 && note < 90
	let noteC = note >= 70 && note < 80
	let noteD = note >= 60 && note < 70
	let noteF = note < 60
	
	if (noteA) {
		console.log('note A!')
	} else if (noteB) {
		console.log('note B!')
	} else if (noteC) {
		console.log('note C!')
	} else if (noteD) {
		console.log('note D!')
	} else if (noteF) {
		console.log('note F!')
	} else {
		console.log('note indefinida')
	}
}
