import React, { useState } from "react";
import "./App.css";

const categorias = {
  Trailer: [
    { id: 1, nome: "Pizza Calabresa", preco: 49.9 },
    { id: 2, nome: "Pizza Marguerita", preco: 45.9 },
  ],
  Awards: [
    { id: 3, nome: "Refrigerante 2L", preco: 10.0 },
    { id: 4, nome: "Suco Natural", preco: 8.5 },
  ],
  Premiere: [],
  Celebrity: [],
  Cult: [],
  Sundance: [],
  "Cine Bijou": [],
  Bomboniere: [],
  Matinê: [],
  Lanterninha: [],
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

      {/* Menu de abas para escolher categoria */}
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

      {/* Itens da categoria ativa */}
      <div className="menu">
        {categorias[categoriaAtiva].length === 0 ? (
          <p className="vazio">Nenhum item nesta categoria.</p>
        ) : (
          categorias[categoriaAtiva].map((item) => (
            <div key={item.id} className="item">
              <div className="info">
                <span>{item.nome}</span>
                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
              <button
                className="botao adicionar"
                onClick={() => adicionarItem(item)}
              >
                <strong>Adicionar</strong>
              </button>
            </div>
          ))
        )}
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