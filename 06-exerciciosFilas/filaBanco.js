import { Queue } from './criaFila.js';

/*
 * Crie uma simulação de atendimento em fila de banco.
 * Cada pessoa leva X minutos para ser atendida. Simule a fila e exiba o tempo total de espera para cada pessoa.
 */

function filaBanco(fila, X) {
    let tempoEspera = 0;

    while(!fila.isEmpty()) {
        console.log("Fila atual:")
        fila.print();
        
        console.log();

        console.log("Chamando primeiro da fila:");
        console.log(fila.peek())
        console.log("Tempo de espera: ",  tempoEspera);
        console.log();
        console.log("===============================================");
        console.log();
        fila.dequeue();
        tempoEspera = tempoEspera + X;
    }
}

let fila = new Queue;

fila.enqueue("Tonho");
fila.enqueue("Claire");
fila.enqueue("Amélie");
fila.enqueue("Jaskiel");
fila.enqueue("Marina");

filaBanco(fila, 15);