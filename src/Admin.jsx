import React, { useEffect, useState } from "react";

export default function Admin({ pedidosAtualizados }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pedidos")
      .then((res) => res.json())
      .then((data) => setPedidos(data))
      .catch((err) => console.error("Erro ao carregar pedidos:", err));
  }, [pedidosAtualizados]);

  const removerItem = (pedidoIndex, itemIndex) => {
    const novosPedidos = [...pedidos];
    novosPedidos[pedidoIndex].itens.splice(itemIndex, 1);
    setPedidos(novosPedidos);
  };

  const excluirPedido = (index) => {
    const novosPedidos = pedidos.filter((_, i) => i !== index);
    setPedidos(novosPedidos);
  };

  return (
    <div>
      <h1>Pedidos Recebidos</h1>
      {pedidos.length === 0 ? (
        <p>Nenhum pedido até o momento.</p>
      ) : (
        pedidos.map((pedido, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              margin: "1rem",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>Pedido #{i + 1}</h3>
            <p><strong>Horário:</strong> {new Date(pedido.horario).toLocaleString()}</p>
            <ul>
              {pedido.itens.map((item, idx) => (
                <li key={idx}>
                  {item.nome} - R$ {item.preco.toFixed(2)}{" "}
                  <button onClick={() => removerItem(i, idx)}>Remover</button>
                </li>
              ))}
            </ul>
            <p><strong>Total do pedido:</strong> R$ {pedido.total?.toFixed(2)}</p>
            <button onClick={() => excluirPedido(i)}>Excluir pedido</button>
          </div>
        ))
      )}
    </div>
  );
}
