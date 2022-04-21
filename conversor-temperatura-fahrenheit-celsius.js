/* ### Celsius em Fahrenheit

	Crie uma funçao que receba uma string em celsius ou fahrenheit e faça a
	transformação de uma unidadade para outra.
	
	C = (F - 32) * 5/9
	
	F = C* 9/5 + 32

*/

function converter(graus, opcao) {
	
	if (opcao == 'F') {
		graus = graus * 1.8 + 32 
	} else if (opcao == 'C') {
		graus = (graus - 32)/ 1.8
	}
	
	return graus.toFixed(3)
}