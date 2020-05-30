//Criando um objeto carro

const Carro = {
    marca: 'ferrari',
    modelo: 'não definida',
    anoDeFabric: '2017',

    acelerar() {
        console.log("passa marcha...")
    },

    desacelerar() {
        console.log("volta marcha...")
    }
}

console.log(Carro.anoDeFabric)
console.log(Carro.modelo)
console.log(Carro.acelerar())
    // retora um Arrey com chaves valores do objeto Carro
console.log(Object.entries(Carro))
    // retorna as chaves do Objeto Carro
console.log(Object.keys(Carro))
// retorna apenas os valores do objeto carro
console.log(Object.values(Carro))

const pessoa = new Object()
pessoa.nome = 'vincius'
pessoa.dataNasc
