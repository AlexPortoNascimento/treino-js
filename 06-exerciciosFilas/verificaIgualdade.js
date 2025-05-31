/*
 * Compare duas filas e diga se elas tem os mesmos elementos na mesma ordem.
 */


import { Queue } from './criaFila.js';


function verificaIgualdade(fila1, fila2) {

    if (fila1.size() != fila2.size()) {
        return false;
    }else {
        while (!fila2.isEmpty()) {
            if (fila1.peek() === fila2.peek()) {
                fila1.dequeue();
                fila2.dequeue();
            }else {
                return false;
            }
        }
    return true;
    }
}


let fila1 = new Queue;
let fila2 = new Queue;

fila1.enqueue(1);
fila2.enqueue(1);
fila1.enqueue(2);
fila2.enqueue(2);

if(verificaIgualdade(fila1, fila2)){
    console.log("As filas são iguais");
}else 
    console.log("As filas são diferentes");
