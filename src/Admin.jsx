import React, { useEffect, useState } from "react";

export default function Admin({ pedidosAtualizados }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pedidos")
      .then((res) => res.json())
      .then((data) => {
        // Garantindo o formato correto dos itens
        const pedidosTratados = data.map((p) => ({
          ...p,
          itens: typeof p.itens === "string" ? JSON.parse(p.itens) : p.itens,
        }));
        setPedidos(pedidosTratados);
      })
      .catch((err) => console.error("Erro ao carregar pedidos:", err));
  }, [pedidosAtualizados]);

  const removerItem = (pedidoId, itemIndex) => {
    const pedido = pedidos.find((p) => p.id === pedidoId);
    if (!pedido) return;

    const novosItens = [...pedido.itens];
    novosItens.splice(itemIndex, 1);
    const novoTotal = novosItens.reduce((acc, item) => acc + item.preco, 0);

    // Atualiza no backend
    fetch(`http://localhost:5000/api/pedidos/${pedidoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itens: novosItens, total: novoTotal }),
    })
      .then((res) => res.json())
      .then(() => {
        // Atualiza localmente somente após sucesso
        setPedidos((prev) =>
          prev.map((p) =>
            p.id === pedidoId ? { ...p, itens: novosItens, total: novoTotal } : p
          )
        );
      })
      .catch((err) => console.error("Erro ao atualizar pedido:", err));
  };

  const excluirPedido = (id) => {
    fetch(`http://localhost:5000/api/pedidos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setPedidos((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((err) => console.error("Erro ao excluir pedido:", err));
  };

  // Agrupa pedidos por mesa
  const pedidosAgrupados = pedidos.reduce((acc, pedido) => {
    const key = pedido.mesa || "Sem mesa";
    if (!acc[key]) acc[key] = [];
    acc[key].push(pedido);
    return acc;
  }, {});

  return (
    <div>
      <h1>Pedidos Recebidos</h1>
      {Object.keys(pedidosAgrupados).length === 0 ? (
        <p>Nenhum pedido até o momento.</p>
      ) : (
        Object.entries(pedidosAgrupados).map(([mesa, lista]) => (
          <div
            key={mesa}
            style={{
              border: "2px solid #999",
              margin: "1.5rem 0",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Mesa {mesa}</h2>

            {lista.map((pedido) => (
              <div
                key={pedido.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "0.8rem 0",
                  padding: "0.8rem",
                  borderRadius: "6px",
                }}
              >
                {lista.length > 1 && (
                  <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                    Pedido #{pedido.id}
                  </p>
                )}
                {pedido.observacoes && (
                  <p style={{ margin: '0.3rem 0' }}>
                    <strong>Observações:</strong> {pedido.observacoes}
                  </p>
                )}
                <ul>
                  {pedido.itens.map((item, idx) => (
                    <li key={idx}>
                      {item.nome} - R$ {item.preco.toFixed(2)}{" "}
                      <button onClick={() => removerItem(pedido.id, idx)}>Remover item</button>
                    </li>
                  ))}
                </ul>
                <button onClick={() => excluirPedido(pedido.id)}>Excluir pedido</button>
              </div>
            ))}

            <p style={{ marginTop: "1rem", fontWeight: "bold", fontSize: "1.1rem" }}>
              Total da Mesa {mesa}: R$ {lista.reduce((acc, p) => acc + p.total, 0).toFixed(2)}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
