class Pedido {
    constructor(idPedido, produtos, cliente, status, pagamento, data) {
        this.idPedido = idPedido;
        this.produtos = produtos; // Array de produtos
        this.cliente = cliente;
        this.status = status; // "Pendente", "Pago", "Entregue"
        this.pagamento = pagamento; // "Total", "Parcial"
        this.data = data;
    }
}