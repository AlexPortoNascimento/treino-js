import { Queue } from './criaFila.js';
import { Pilha } from './criaPilha.js';

let fila = new Queue;
let pilhaSuporte = new Pilha;

while (!fila.isEmpty()) {
    pilhaSuporte.push(fila.peek());
    fila.dequeue();
}

while (!pilhaSuporte.isEmpty()) {
    fila.enqueue(pilhaSuporte.peek());
    pilhaSuporte.pop();
}