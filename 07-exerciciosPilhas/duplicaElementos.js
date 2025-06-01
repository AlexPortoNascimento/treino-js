import { Stack } from './criaPilha.js';
import { inverteElementos } from './inverteElementos.js';

/*
 * Duplicar os elementos de uma pilha
 * Para cada elemento, empilhe-o duas vezes.
 */

function duplicaElementos (pilha) {
    let pilhaAux = new Stack;

    while(!pilha.isEmpty()) {
        pilhaAux.push(pilha.peek());
        pilhaAux.push(pilha.pop());
    }

    pilhaAux = inverteElementos(pilhaAux);

    return pilhaAux;
}

let pilha = new Stack;

pilha.push(1);
pilha.push(2);
pilha.push(3);

console.log("Pilha original:");
pilha.print();

console.log();

console.log("Pilha Duplicada:");
pilha = duplicaElementos(pilha);
pilha.print();