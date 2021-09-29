//EXERCÍCIO 1 - INTERPRETAÇÃO

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")

// }

// RESPOSTA:

// A) O código % é usado para achar o resto dentro do comando, ou seja, neste cenário quando o número digitado 
// pelo usuário for divisível por 2 a respota será "passou no teste" e quando não for, será "não passou no teste ".

// B) Quando são digitados pelo usuário números pares

// C) Quando são digitados pelo usuário números ímpares.

//EXERCÍCIO 2 - INTERPRETAÇÃO

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":

//     preco = 5.5
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//RESPOSTA:

     //A) O switch serve para selecionar a classe (fruta) e o case serve para mostrar 
     //o item (laraja) e o preco o valor.

     //B) O preço da fruta  Maçã  é  R$  2.25

     //C) A respota impressa no console  seroa "O preço da fruta  Pêra  é  R$  5" , referindo - se ao default pois 
    //  o break fecha o valor colocado acima dele, possibilitando rodar e seguir os comandos que classificam
    //  o bloco com as propriedades dentro do comando.  

    //EXERCÍCIO 3 - INTERPRETAÇÃO

//     const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
//   let mensagem = "Essa mensagem é secreta!!!" 
//     console.log(mensagem)
   
//     }


// console.log(mensagem)

//RESPOSTA:

// A) Liberando comandos para solicitar um número ao usuário no console.

// B) Seria impresso no console se fosse 10 "Esse número passou no teste", se fosse -10 daria 
//erro porque faltou o else./

// C) Daria erro, pois o console.log(mensagem) está no escopo global, ou seja, fora do bloco delimitado pelas chaves.
// Outra possibilidade de erro dentro desta questão seria pela ausência do comando else if, que serviria para 
// apresentar a outra opção "-10", contrapondo o comando acima. 


// EXERCÍCIO 1 - ESCRITA DE CÓDIGO


//  let respostaDoUsuario = Number(prompt("Digite a sua idade?"))
// let numero = (respostaDoUsuario)

// if (numero > 17) {
//   console.log("você pode dirigir")
// } 

// else if (numero < 18) {
//   console.log("você não pode dirigir")
// }

let turno = prompt ("qual turno você estuda? ")
let matutino = (respostadoUsuario)

if (matutino === M) {
   console.log ("Bom dia!") 
}