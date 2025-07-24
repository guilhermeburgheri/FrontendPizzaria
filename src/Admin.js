import React, { useState, useEffect } from "react";

export default function Admin() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pedidos")
      .then((res) => res.json())
      .then(setPedidos)
      .catch((err) => console.error("Erro ao carregar pedidos:", err));
  }, []);

  const atualizarItem = (pedidoIndex, itemIndex, campo, valor) => {
    const novosPedidos = [...pedidos];
    novosPedidos[pedidoIndex].itens[itemIndex][campo] = valor;
    setPedidos(novosPedidos);
  };

  const excluirItem = (pedidoIndex, itemIndex) => {
    const novosPedidos = [...pedidos];
    novosPedidos[pedidoIndex].itens.splice(itemIndex, 1);
    setPedidos(novosPedidos);
  };

  const excluirPedido = (pedidoIndex) => {
    const novosPedidos = [...pedidos];
    novosPedidos.splice(pedidoIndex, 1);
    setPedidos(novosPedidos);
  };

  return (
    <div className="admin-container">
      <h1>Administração de Pedidos</h1>
      {pedidos.length === 0 ? (
        <p>Nenhum pedido recebido ainda.</p>
      ) : (
        pedidos.map((pedido, pIndex) => (
          <div key={pIndex} className="pedido-card">
            <h2>Pedido #{pIndex + 1}</h2>
            <ul>
              {pedido.itens.map((item, iIndex) => (
                <li key={iIndex}>
                  <input
                    type="text"
                    value={item.nome}
                    onChange={(e) =>
                      atualizarItem(pIndex, iIndex, "nome", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    value={item.preco}
                    onChange={(e) =>
                      atualizarItem(pIndex, iIndex, "preco", parseFloat(e.target.value))
                    }
                  />
                  <button onClick={() => excluirItem(pIndex, iIndex)}>Remover item</button>
                </li>
              ))}
            </ul>
            
            <p><strong>Total:</strong> R$ {pedido.total?.toFixed(2)}</p>

            <button onClick={() => excluirPedido(pIndex)}>Excluir Pedido</button>
          </div>
        ))
      )}
    </div>
  );
}
