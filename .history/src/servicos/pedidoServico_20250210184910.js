import AsyncStorage from '@react-native-async-storage/async-storage';

const PEDIDOS_KEY = '@pedidos';

/**
 * Adiciona um novo pedido ao AsyncStorage
 * @param {Object} pedido - O pedido a ser salvo
 */
export const adicionarPedido = async (pedido) => {
  try {
    const pedidos = await listarPedidos();
    pedidos.push(pedido);
    await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));
  } catch (error) {
    console.error('Erro ao salvar pedido:', error);
  }
};

/**
 * Lista todos os pedidos salvos
 * @returns {Array} Lista de pedidos
 */
export const listarPedidos = async () => {
  try {
    const pedidos = await AsyncStorage.getItem(PEDIDOS_KEY);
    return pedidos ? JSON.parse(pedidos) : [];
  } catch (error) {
    console.error('Erro ao recuperar pedidos:', error);
    return [];
  }
};

/**
 * Remove um pedido pelo ID
 * @param {string} id - ID do pedido a ser removido
 */
export const removerPedido = async (id) => {
  try {
    const pedidos = await listarPedidos();
    const pedidosAtualizados = pedidos.filter((pedido) => pedido.id_pedido !== id);
    await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidosAtualizados));
  } catch (error) {
    console.error('Erro ao remover pedido:', error);
  }
};

/**
 * Atualiza um pedido existente
 * @param {string} id - ID do pedido a ser atualizado
 * @param {Object} novoPedido - Dados atualizados do pedido
 */
export const atualizarPedido = async (id, novoPedido) => {
  try {
    const pedidos = await listarPedidos();
    const pedidosAtualizados = pedidos.map((pedido) =>
      pedido.id_pedido === id ? { ...pedido, ...novoPedido } : pedido
    );
    await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidosAtualizados));
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
  }
};