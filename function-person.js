/*
	function() constructor
	
	* expressao new
	* criar um novo objeto
	* this keyword
 */

function Person(name) {
	this.name = name
	this.walk = function() {
		return 'andando'
	}
}
const maicon = new Person('maicon')
const joao = new Person('joao')
console.log(maicon.walk())
console.log(joao.walk())