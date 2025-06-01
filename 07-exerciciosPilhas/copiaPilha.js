import { Stack } from './criaPilha.js';
import { inverteElementos } from './inverteElementos.js';

/*
 * Copiar uma pilha para outra mantendo a ordem original.
 * Sem usar métodos de array (como .reverse()), copie os elementos de uma pilha para outra mantendo a ordem.
 */


export function copiaPilha(pilha1, pilha2) {

    let pilhaAux = new Stack;
    let pilha2Aux = new Stack;

    while(!pilha2.isEmpty()) {
        pilha2.pop();
    }

    while(!pilha1.isEmpty()) {
        pilha2Aux.push(pilha1.peek());
        pilhaAux.push(pilha1.pop());
    }

    while(!pilhaAux.isEmpty()) {
        pilha2.push(pilha2Aux.pop());
        pilha1.push(pilhaAux.pop())
    }

}