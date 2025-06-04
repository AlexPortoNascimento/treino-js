//Árvore binária é uma estrutura de dados onde existem nós, sendo o primeiro deles o nó raiz
//que apontam (arestas) para um filho na esquerda e outro na direita

//Teremos uma classe nó, que é o elemento básico da árvore. Ela recebe um valor e possui um ponteiro para esquerda e para direita.

export class Node {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

//E temo também a própria estrutura da árvore com seus métodos próprios. A árvore começa com a raiz recebendo null.
//A raiz é o primeiro elemento a receber uma inserção.
export class BinaryTree {
    constructor() {
        this.raiz = null;
    }
    //O método de inserir recebe um valor, se a raiz estiver vazia, insere na raiz, se não, chama o algorítmo de inserção nas folhas.
    inserir(valor) {
        const novoNo = new Node(valor);
        if (this.raiz === null) {
            this.raiz = novoNo;
        }else {
            this.inserirFolhas(this.raiz, novoNo);
        }
    }

    //O método para inserir nas folhas da árvore recebe o nó atual que estamos tentando inserir.
    //Se o valor do novo nó for menor que o nó atual, tenta inserir o valor na esquerda. Se for maior, na direita.
    //Se a esquerda ou a direita já estiver ocupada, assume o nó (esquerda ou direita) e roda o algorítmo novamente até a folha desejada estar vazia.
    inserirFolhas(no, novoNo){
        if(novoNo.valor < no.valor) {
            if(no.esquerda === null) {
                no.esquerda = novoNo;
            }else {
                this.inserirFolhas(no.esquerda, novoNo);
            }
        }else {
            if(no.direita === null) {
                no.direita = novoNo;
            }else {
                this.inserirFolhas(no.direita, novoNo);
            }
        }
    }
    
    //No percurso preOrder a árvore é percorrida partindo da raiz, então toda a subarvore da esquerda e depois a subárvore da direita.
    preOrder(no = this.raiz) {
        if (no !== null) {
            console.log(no.valor);
            this.preOrder(no.esquerda);
            this.preOrder(no.direita);
        }
    }

    //No percurso inOrder, ele percorre a árvore em órdem crescente, sendo primeiro o nó da esquerda, depois o nó atual e então o nó da direita.
    inOrder(no = this.raiz) {
        if(no !== null) {
            this.inOrder(no.esquerda);
            console.log(no.valor);
            this.inOrder(no.direita);
        }
    }
    
    //No percurso postOrder, primeiro percorre os nós filhos, passando pela esquerda primeira, depois então passar pelo nó atual.
    postOrder(no = this.raiz) {
        if(no !== null) {
            this.postOrder(no.esquerda);
            this.postOrder(no.direita);
            console.log(no.valor);
        }
    }
}

const arvore = new BinaryTree;

arvore.inserir(1);
arvore.inserir(2);
arvore.inserir(3);
arvore.inserir(4);
arvore.inserir(5);
arvore.inserir(6);
arvore.inserir(7);
arvore.inserir(8);
arvore.inserir(9);
arvore.inserir(10);
arvore.inserir(11);

console.log("Pré-ordem:");
arvore.preOrder();

console.log("Em Ordem: ");
arvore.inOrder();

console.log("Pós-Ordem: ");
arvore.postOrder();
