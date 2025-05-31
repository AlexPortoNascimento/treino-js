        /*
         * Implementar uma fila do zero
         *
         * Crie uma classe Queue com os métodos: enqueue, dequeue, peek, isEmpty, size, print.
         */

        export class Queue {
            constructor() {
                this.items = [];
            }
            
            enqueue(element) {
                this.items.push(element);
            }

            isEmpty() {
                if (this.items.length === 0) {               
                    return true;
                }else 
                    return false;
            }
            
            dequeue(){
                if(this.isEmpty()){
                    console.log("A fila está vazia");
                    return null;
                }else
                    return this.items.shift();
            }

            peek() {
                if(this.isEmpty()){
                    console.log("A fila está vazia");
                    return null;
                }else
                    return this.items[0];
            }


            size() {
                return this.items.length;
            }

            print() {
                console.log(this.items.join(' -> '));
            }

        }
