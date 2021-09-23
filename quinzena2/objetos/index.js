//INTERPRETAÇÃO

// //EXERCICIO 1

// console.log (`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade})

// const filme = {
// nome: "Auto da Compadecida", 
// ano: 2000, 
//  	elenco: [
//  		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//  		"Virginia Cavendish"
//  		], 
//  	transmissoesHoje: [
//  		{canal: "Telecine", horario: "21h"}, 
//  		{canal: "Canal Brasil", horario: "19h"}, 
//  		{canal: "Globo", horario: "14h"}
//  		]
//  }

//  console.log(filme.elenco[0])
//  console.log(filme.elenco[filme.elenco.length - 1])
//  console.log(filme.transmissoesHoje[2])


// //RESPOSTA : Matheus Nachtergaele, Virginia Cavendish {canal: "Globo", horario: "14h"}



// //EXERCICIO 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // //RESPOSTA: 

// // nome: "Juca", 
// // idade: 3,
// // raca: "SRD" 

// // nome: "Juba", 
// // idade: 3, 
// // raca: "SRD" 

// // nome: "Jubo", 
// // idade: 3, 
// // raca: "SRD"

// A sintaxe de três pontos chama as informações do objeto anterior. 



// //EXERCÍCIO 3

// function minhaFuncao(objeto, propriedade) {
// return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//RESPOSTA: 

// // false
// // undefined

//Quando esquecemos de informar a propriedade e seu valor no objeto , 
//não podemos imprimir no console. Logo, o resultado é undefined.

//ESCRITA DE CÓDIGO

// //EXERCÍCIO 1

// const pessoa = {
//    nome:"Maria", 
//    apelidos: ["Mariazinha", "Mari","Ma"] 
// }

// function objetoPessoa(pessoa) {
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// }

// objetoPessoa(pessoa)

// const outrosApelidos = {
//     ...pessoa,
//     apelidos: ["Mar" , "Mia" , "Mama"]

// }

// objetoPessoa(outrosApelidos)

//EXERCÍCIO 2 - ESCRITA DE CÓDIGO

// const pessoaUm= {
//     nome: "Anne" ,
//     idade: 23
//     profissao: professora
// }

// const pessoaDois= {
//     nome: Milton 
//     idade: 75
//     profissao: geógrafo
// }

// Function minhaFuncao(pessoa) {
// return pessoa
// }

// console.log (minhaFuncao(pessoa, "nome"))
// console.log(minhaFuncao(pessoa, "idade"))
// console.log(minhaFuncao(pessoa, "profissao"))

// const pessoa = {
//     nome: "Lya",
//     genero: "feminino",  

//   }
  
//   function objetoPessoa (pessoa) {
//       console.log(`Bem vinda ${pessoa.nome}`)
//   }

//   objetoPessoa(pessoa)

let primeiroNumero = Number (promppt ("Digite um número"))
let segundooNumero = Number (promppt ("Digite um número"))

function compararNumeroscomElseIf(num1, num2) {
    if (num1 === num2) {
    console.log("Os n[umeros são iguais!")

} else {

    console.log("Os números são diferentes!")
} 
}

compararNumeroscomElse(primeiroNumero, segundooNumero)

  