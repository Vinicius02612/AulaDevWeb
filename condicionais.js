//usando condicionais em JavaScript...
function idade(id) {
    if (id > 18) {
        console.log('ja pode sair...mas cuidado')
    } else {
        console.log('não pode ir...')
    }
}
idade(12)

//condições ternarias...
//verificando se o conteudo da variavel nome1 é igual  ao conteudo da variavel nome2...
var nome1 = "mermão"
var nome2 = "vinicius"
var res = nome1 == nome2 ? "sim " : "não"
console.log(res)
var nome1 = "vinicius"
var nome2 = "vinicius"
var res = nome1 === nome2 ? "sim " : "não"
console.log(res)