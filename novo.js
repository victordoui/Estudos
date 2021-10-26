var texto ="Alguma das respostas resolveu sua dúvida? Acha que pode aceitar uma delas? Veja o tour como fazer isso, se ainda não o fez. Você ajudaria a comunidade identificando qual foi a melhor solução para você. Pode aceitar apenas uma delas. Mas pode votar em qualquer pergunta ou resposta que achar útil no site todo";
//"papepipopu"
const teste = []

var ind = 0

let quantidadeCarateres = 2;

for (var i=0; i <texto.length/quantidadeCarateres; i++){
    let parteDoTexto = texto.substring(ind,ind+quantidadeCarateres);
    teste.push(parteDoTexto);
    ind+=quantidadeCarateres;
}

console.log(teste);
console.log(teste.length);
//console.log(teste);