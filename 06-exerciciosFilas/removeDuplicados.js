import { Queue } from './criaFila.js';
import { Pilha } from './criaPilha.js';

/* 
 * Remover elementos duplicados de uma fila
 * Dada uma fila com elementos repetidos, retorne uma nova fila com apenas os únicos (sem alterar a ordem de chegada).
 */

function removeDuplicados (fila) {
    let filaUnitaria = new Queue;
    let pilhaSuporte = new Pilha;

    while (!fila.isEmpty()) {
        if (fila.peek() == pilhaSuporte.peek()) {
            fila.dequeue();
        }else {
            filaUnitaria.enqueue(fila.peek());
            pilhaSuporte.push(fila.peek());
            fila.dequeue();
        }
    }

    return filaUnitaria;
}

let fila = new Queue;
fila.enqueue("A");
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");
fila.enqueue("C");
fila.enqueue("D");
fila.enqueue("E");
fila.enqueue("E");

let filaUni = new Queue;
filaUni = removeDuplicados(fila);
filaUni.print();