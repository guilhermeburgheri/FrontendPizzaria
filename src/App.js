import React, { useState } from "react";
import "./App.css";

const categorias = {
  Trailer: {
    descricao: "Sabores clássicos com visual irresistível.",
    itens: [
      { id: 1, nome: "Pizza Calabresa", preco: 49.9, descricao: "Calabresa fatiada, cebola roxa e orégano." },
      { id: 2, nome: "Pizza Marguerita", preco: 45.9, descricao: "Muçarela, tomate e manjericão fresco." },
    ],
  },
  Awards: {
    descricao: "Bebidas premiadas para acompanhar seu pedido.",
    itens: [
      { id: 3, nome: "Refrigerante 2L", preco: 10.0, descricao: "Coca-Cola, Guaraná ou Fanta." },
      { id: 4, nome: "Suco Natural", preco: 8.5, descricao: "Sabores variados, 100% natural." },
    ],
  },
  Premiere: { descricao: "Sabores de estreia especial.", itens: [] },
  Celebrity: { descricao: "Preferidas dos famosos.", itens: [] },
  Cult: { descricao: "Pizzas e acompanhamentos únicos.", itens: [] },
  Sundance: { descricao: "Edições especiais e alternativas.", itens: [] },
  CineBijou: { descricao: "Um toque retrô no cardápio.", itens: [] },
  Bomboniere: { descricao: "Doces e guloseimas irresistíveis.", itens: [] },
  Matinê: { descricao: "Menu infantil e divertido.", itens: [] },
  Lanterninha: { descricao: "Clássicos que iluminam o paladar.", itens: [] },
};

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Trailer");

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

      <div className="abas">
        {Object.keys(categorias).map((cat) => (
          <button
            key={cat}
            className={`aba ${cat === categoriaAtiva ? "ativa" : ""}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="descricao">
        <p>{categorias[categoriaAtiva].descricao}</p>
      </div>

      <div className="menu">
        {categorias[categoriaAtiva].itens.map((item) => (
          <div key={item.id} className="item">
            <div className="info">
              <strong>{item.nome}</strong>
              <p className="item-descricao">{item.descricao}</p>
              <span className="preco">R$ {item.preco.toFixed(2)}</span>
            </div>
            <button
              className="botao adicionar"
              onClick={() => adicionarItem(item)}
            >
              <strong>Adicionar</strong>
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
                <strong>Remover</strong>
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
          <strong>Enviar Pedido</strong>
        </button>
      </div>
    </div>
  );
}