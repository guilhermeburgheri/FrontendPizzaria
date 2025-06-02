import React, { useState } from "react";
import "./App.css";

const menu = [
  { id: 1, nome: "Pizza Calabresa", preco: 49.9 },
  { id: 2, nome: "Pizza Marguerita", preco: 45.9 },
  { id: 3, nome: "Refrigerante 2L", preco: 10.0 },
  { id: 4, nome: "Suco Natural", preco: 8.5 },
];

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarItem = (item) => {
    setCarrinho((prev) => [...prev, item]);
  };

  const removerItem = (index) => {
    setCarrinho((prev) => prev.filter((_, i) => i !== index));
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const enviarPedido = () => {
    alert("Pedido enviado! Total: R$ " + total.toFixed(2));
    setCarrinho([]);
  };

  return (
    <div className="container">
      <h1 className="titulo">Suprema Pizza Cine</h1>
      <div className="menu">
        {menu.map((item) => (
          <div key={item.id} className="item">
            <div className="info">
              <span>{item.nome}</span>
              <span>R$ {item.preco.toFixed(2)}</span>
            </div>
            <button className="botao adicionar" onClick={() => adicionarItem(item)}>
              Adicionar
            </button>
          </div>
        ))}
      </div>

      <h2 className="subtitulo">Carrinho</h2>
      <ul className="carrinho">
        {carrinho.map((item, index) => (
          <li key={index} className="item-carrinho">
            <span>{item.nome}</span>
            <div className="acoes">
              <span>R$ {item.preco.toFixed(2)}</span>
              <button className="remover" onClick={() => removerItem(index)}>
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="total">
        <div className="valor-total">Total: R$ {total.toFixed(2)}</div>
        <button
          className="botao enviar"
          onClick={enviarPedido}
          disabled={carrinho.length === 0}
        >
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}