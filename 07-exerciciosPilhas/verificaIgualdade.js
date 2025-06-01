import { Stack } from './criaPilha.js';
import { copiaPilha } from './copiaPilha.js';

/*
 * Verificar se duas pilhas são iguais (elemento por elemento)
 * Compare duas pilhas e diga se possuem exatamente os mesmos elementos na mesma ordem.
 * Ao final, as pilhas devem continuar com o mesmo conteúdo.
 */

function verificaIgualdade (pilha1, pilha2) {
    let pilha1Aux = new Stack;
    let pilha2Aux = new Stack;

    copiaPilha(pilha1, pilha1Aux);
    copiaPilha(pilha2, pilha2Aux);


    if(pilha1Aux.size() != pilha2Aux.size()) {
        return false;
    }else {   
        while(!pilha1Aux.isEmpty() || !pilha2Aux.isEmpty()) {
            if(pilha1Aux.peek() === pilha2Aux.peek()) {
                pilha1Aux.pop();
                pilha2Aux.pop();
            }else {
                return false;
            }
        }
        
        return true;
    }
}



let pilha1 = new Stack;
let pilha2 = new Stack;

pilha1.push(1);
pilha1.push(2);
pilha1.push(3);
pilha2.push(1);
pilha2.push(2);
pilha2.push(3);


console.log("Pilha 1: ")
pilha1.print();

console.log();

console.log("Pilha 2: ");
pilha2.print();

if(verificaIgualdade(pilha1, pilha2)) {
    console.log("As pilhas são iguais.");
}else {
    console.log("As pilhas são diferentes.")
}

pilha1.print();
pilha2.print();
