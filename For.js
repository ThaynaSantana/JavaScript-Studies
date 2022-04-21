// Estrutura de repetição
// For
// break - stop a execução do loop
// continue - pula a execução do momento

for (let i = 0; i < 10; i++){
	console.log(i)
}

// o numero 5 nao vai aparecer
for (let i = 10; i > 0; i--) {
	if(i === 5) {
		continue;
	}
	console.log(i)
}