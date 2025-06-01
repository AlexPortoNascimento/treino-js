import { Stack } from './criaPilha.js';
import { inverteElementos } from './inverteElementos.js'

/*
 * Remover todos os elementos pares de uma pilha
 * Dada uma pilha de inteiros, retorne outra contendo apenas os ímpares, mantendo a ordem original.
 */

function removePares (pilha) {
    let pilhaAux = new Stack;

    while (!pilha.isEmpty()) {
        if (pilha.peek() % 2 != 1) {
            pilha.pop();
        }else {
            pilhaAux.push(pilha.pop());
        }
    }

    pilhaAux = inverteElementos(pilhaAux);

    return pilhaAux;
}

let pilha = new Stack;

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.push(6);

pilha.print();

pilha = removePares(pilha);
pilha.print();
