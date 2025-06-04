import { Stack } from "./criaPilha.js";

/* 
 * Calcular a média dos valores de uma pilha (sem alterar a pilha original)
 * Use pilhas auxiliares para calcular a média e devolver os elementos à pilha original.
 */

function calculaMedia(pilha) {
    let somador = 0;
    let iterador = 0;

    let pilhaAux = new Stack;

    while(!pilha.isEmpty()) {
        somador = somador + pilha.peek();
        pilhaAux.push(pilha.pop());
        iterador++;
        console.log(iterador, somador);
    }

    while(!pilhaAux.isEmpty()) {
        pilha.push(pilhaAux.pop());
    }

    let media = somador / iterador;

    return media;
}


let pilha = new Stack;

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log("Pilha:");
pilha.print();

console.log();
console.log("Média dos elementos da pilha: ", calculaMedia(pilha), ".");
