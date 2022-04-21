// Throw

function sayMyName(name='') {
	if (name === '') {
		throw 'Nome é obrigatorio'
	}
}
// Try..catch
try {
	sayMyName()
} catch(e) {
	console.log(e)
}