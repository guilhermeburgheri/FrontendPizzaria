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
    const pedido = novosPedidos[pedidoIndex];

    // Remove o item
    pedido.itens.splice(itemIndex, 1);

    // Atualiza o total
    pedido.total = pedido.itens.reduce((acc, item) => acc + item.preco, 0);

    // Atualiza o pedido no backend
    fetch(`http://localhost:5000/api/pedidos/${pedido.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itens: pedido.itens,
        total: pedido.total,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setPedidos(novosPedidos);
      })
      .catch((err) => {
        console.error("Erro ao atualizar pedido:", err);
      });
  };

  const excluirPedido = (id) => {
    fetch(`http://localhost:5000/api/pedidos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setPedidos((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((err) => {
        console.error("Erro ao excluir pedido:", err);
      });
  };

  return (
    <div>
      <h1>Pedidos Recebidos</h1>
      {pedidos.length === 0 ? (
        <p>Nenhum pedido até o momento.</p>
      ) : (
        pedidos.map((pedido, i) => (
          <div
            key={pedido.id}
            style={{
              border: "1px solid #ccc",
              margin: "1rem",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>Pedido #{pedido.id}</h3>
            <p><strong>Mesa:</strong> {pedido.mesa || "Não informado"}</p>
            <ul>
              {pedido.itens.map((item, idx) => (
                <li key={idx}>
                  {item.nome} - R$ {item.preco.toFixed(2)}{" "}
                  <button onClick={() => removerItem(i, idx)}>Remover</button>
                </li>
              ))}
            </ul>
            <p>
              <strong>Total do pedido:</strong> R$ {pedido.total?.toFixed(2)}
            </p>
            <button onClick={() => excluirPedido(pedido.id)}>
              Excluir pedido
            </button>
          </div>
        ))
      )}
    </div>
  );
}
