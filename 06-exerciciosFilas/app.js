import { Queue } from './criaFila.js';

    //Testando a classe fila
    console.log("Questão 1: testando a classe fila e seus métodos:"); 
    let f1 = new Queue;
    f1.print();
    console.log("Adicionando elementos:");
    f1.enqueue(1);
    f1.print();
    f1.enqueue(2);
    f1.print();
    f1.enqueue(3);
    console.log("Fila atual:");
    f1.print();
    console.log("Retirando o primeiro elemento:");
    f1.dequeue();
    f1.print();
    console.log("Olhando o primeiro elemento:", f1.peek());
    console.log("Tamanho da fila:", f1.size());
    console.log();
    console.log("---------- FIM DO TESTE ----------");
    console.log();
    console.log();
    