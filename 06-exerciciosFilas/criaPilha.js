//A pilha é baseada no princípio Last in First Out, ou seja o ultimo elemento a entrar é o primeiro que sai. Assim como uma pilha de pratos
export class Pilha {
    constructor() {
        this.items = [];
    }

    //O método push() adiciona um elemento no topo da pilha
    push(element) {
        this.items.push(element);
    }

    //O método pop() verifica se a pilha está vazia, se não estiver, remove o elemento do topo.
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }else 
            return this.items.pop(); 
    }

    //O método peek() retorna o elemento que está no topo da pilha, para isso ele pega o tamanho da pilha e reduz 1 pois os índices começam do 0.
    peek() {
        if (this.isEmpty()) {
            return "A pilha está vazia.";
        }else
            return this.items[this.items.length - 1];
    }

    //O método isEmpty() retorna verdadeiro se o tamanho da fila for zero.
    isEmpty() {
        return this.items.length === 0;
    }
}