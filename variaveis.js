//Mostrando exemplos de variáveis, operadores, condicionais, laços de repetição, vetores e objetos em JavaScript
// variaveis...uma variavel do tipo const não pode ser alterada pois seu valor permanesce constante 
//mostrando erro...
const r = 100
    //r = 500 + 1
    //ao executar esta parte, ira mostrar um erro pois ela permanecerar com valor 100 mesmo que eu tente mudar...
console.log(r)
    // a let e var podem ser alteradas quando necessário...
let v = 'Vinicius...'
v = 'não é mais vinicius...'
console.log(v)

var pessoa = {
        nome: 'vincius',
        peso: 2.90,
        dataNasc: "20 / 02 / 1999"
    }
    //mudando atributo do objetos
pessoa.nome = "fernanda"

//mostrando atributos do objeto
console.log(pessoa.nome)
console.log(pessoa.peso)
console.log(pessoa.dataNasc)
    //Atribuições

let i = 40
let a = i + 1
console.log(a)

//opradores...

let c = 50
const b = 100
console.log(c + b)
console.log(c - b)
console.log(c * b)
console.log(c / b)

//Concatenação de strings

const x = "A"
const y = "B"
console.log(x + y)

const vc = "Estou estudando..."
const no = "Eu acho que nao..."
const res = no + vc
console.log(res)