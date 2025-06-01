import { Queue } from './criaFila.js';

/*
 * Intercalar duas filas:
 * Dadas duas filas, crie uma nova intercalando os elementos delas (ex: [A, C] e [B, D] → [A, B, C, D]).
 */

function intecalaFilas (fila1, fila2) {
    let filaIntercalada = new Queue;

    fila1.print();
    fila2.print();
    
    if(fila1.size() > fila2.size()) {
        while (!fila1.isEmpty()) {
            if(!fila2.isEmpty()) {
                filaIntercalada.enqueue(fila1.peek());
                fila1.dequeue();
                filaIntercalada.enqueue(fila2.peek());
                fila2.dequeue();
            }else {
                filaIntercalada.enqueue(fila1.peek());
                fila1.dequeue();
            }
        }
    }else {
        while (!fila2.isEmpty()) {
            if(!fila1.isEmpty()) {
                filaIntercalada.enqueue(fila1.peek());
                filaIntercalada.enqueue(fila2.peek());
                fila1.dequeue();
                fila2.dequeue();

            }else {
                filaIntercalada.enqueue(fila2.peek());
                fila2.dequeue();
            }
        }   
    }
    filaIntercalada.print(); 
}

let fila1 = new Queue;
let fila2 = new Queue;

fila1.enqueue("A");
fila2.enqueue("B");
fila1.enqueue("C");
fila2.enqueue("D");
fila2.enqueue("E");

intecalaFilas(fila1, fila2);