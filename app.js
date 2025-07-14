alert('Seja bem vindo ao meu primeiro projeto de JavaScript!');
let valueRandom = 200; // Mensagem de boas-vindas
const secretvalue = parseInt(Math.random() * valueRandom + 1); // Gera um número aleatório entre 1 e valueRandom
let attempt = 1; // Começa em 1, pois o usuário fará pelo menos uma tentativa
let valuereceived = parseInt(prompt(`Digite um número de 0 a ${valueRandom}:`)); // Solicita ao usuário um numero

while (valuereceived !== secretvalue) {
    if (valuereceived > secretvalue) {
        alert('O número é menor que ' + valuereceived + '. Tente novamente!');
    } else {
        console.log(secretvalue)
        alert('O número é maior que ' + valuereceived + '. Tente novamente!');
    }
    attempt++;
    valuereceived = parseInt(prompt(`Digite um número de 0 a ${valueRandom}:`)); // Solicita novamente um número
}

let palavraTentativa = attempt > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${secretvalue} com ${attempt} ${palavraTentativa}.`);

let palavraPessoa = quantidadePessoas > 1 ? "pessoas" : "pessoa";

if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
}