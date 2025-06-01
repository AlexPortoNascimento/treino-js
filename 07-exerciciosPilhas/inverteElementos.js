import { Stack } from './criaPilha.js';

/*
 * Inverter os elementos de uma pilha
 * Use uma pilha auxiliar para inverter os elementos de outra pilha.
 */



export function inverteElementos (pilha) {

    let pilhaAux = new Stack;

    while(!pilha.isEmpty()) {
        pilhaAux.push(pilha.peek());
        pilha.pop();
    }

    return pilhaAux;
}
