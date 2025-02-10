class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    darBaixa(sku, quantidade) {
        const produto = this.produtos.find(prod => prod.sku === sku);
        if (produto) {
            produto.quantidade -= quantidade;
        }
    }
}