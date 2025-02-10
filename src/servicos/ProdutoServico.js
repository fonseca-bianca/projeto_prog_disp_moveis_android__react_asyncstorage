import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'PRODUTOS'; //chave usada no AsyncStorage pra salvar e recuperar produtos

// Adicionar um NOVO produto ao AsyncStorage:
export const adicionarProduto = async (produto) => {
    try {
        const produtos = await buscarProdutos();
        produtos.push(produto);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
    }
};

// Buscar todos os produtos armazenados:
export const buscarProdutos = async () => {
    try {
        const produtosJson = await AsyncStorage.getItem(STORAGE_KEY);
        return produtosJson ? JSON.parse(produtosJson) : [];
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return [];
    }
};

// Remover um produto pelo SKU:
export const removerProduto = async (sku) => {
    try {
        let produtos = await buscarProdutos();
        produtos = produtos.filter(produto => produto.sku !== sku);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
    } catch (error) {
        console.error('Erro ao remover produto:', error);
    }
};
