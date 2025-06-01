import { Queue } from './criaFila.js';

/*
 * Fila com prioridade simples:
 * Implemente uma fila onde elementos com prioridade "alta" são atendidos antes dos normais.
 */

function prioridade (fila) {
    let filaPrio = new Queue;
    let filaNormal = new Queue;
    
    console.log("Fila sem prioridades: ");
    fila.print();
    console.log("");
    console.log("==============================");
    console.log("");

    while (!fila.isEmpty()) {
        if (fila.peek() === "Alta") {
            filaPrio.enqueue(fila.peek());
            fila.dequeue();
        }else {
            filaNormal.enqueue(fila.peek());
            fila.dequeue();
        }
    }

    while(!filaNormal.isEmpty()) {
        filaPrio.enqueue(filaNormal.peek());
        filaNormal.dequeue();
    }

    console.log("Fila com prioridades:");
    filaPrio.print();
}

let fila = new Queue;

fila.enqueue("Alta");
fila.enqueue("Normal");
fila.enqueue("Normal")
fila.enqueue("Normal")
fila.enqueue("Alta");
fila.enqueue("Alta");
fila.enqueue("Normal")
fila.enqueue("Normal")
fila.enqueue("Alta");

prioridade(fila);
