// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
return array.length
   
}

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
    const reverteArray = array
    return reverteArray.reverse();
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrays = array
    
    return arrays.sort((a , b) => a - b);
  
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
let pares = []
    for (let i = 0; i <= array.length-1; i++) {
    if ( array [i] % 2 === 0) {
    pares.push(array [i])  
    }
} 
 return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevados = retornaNumerosPares (array)
    for (let i = 0; i <= arrayParesElevados.length-1; i++) {
    arrayParesElevados [i] =  arrayParesElevados[i] * arrayParesElevados[i]

    }

 return arrayParesElevados
    
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    // const arrayDeNumeros = array
    let maior = -Infinity
     for(let i = 0; i <= array.length-1; i++){
         if (array [i] > maior){
             maior = array [i];
         }
        }
return maior
    }
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i+=2) {
  if (i % 2 == 0) {
  numerosPares.push(i);
            }
        }
        return numerosPares;
    }
    
    console.log(retornaNNumerosPares(3));
   

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    // const assistirFilme = filme
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// console.log ()

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 
    const usuario = {
        ...pessoa,
        nome: 'ANÔNIMO',
    }
    return usuario
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}