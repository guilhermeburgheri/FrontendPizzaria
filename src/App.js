import React, { useState, useEffect } from "react";
import Admin from "./Admin";

export default function App() {
  const [modoAdmin, setModoAdmin] = useState(false);
  const [pedidosAtualizados, setPedidosAtualizados] = useState(0);
  const [categorias, setCategorias] = useState({});
  const [carregando, setCarregando] = useState(true);
  const [carrinho, setCarrinho] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Trailer");
  const [modoMeia, setModoMeia] = useState(null);

  const categoriasEntradas = ["Trailer"];
  const categoriasDoces = ["Bomboniere"];
  const categoriasBebidas = ["Matinê", "Lanterninha"];

  useEffect(() => {
    fetch("http://localhost:5000/api/cardapio")
      .then((res) => res.json())
      .then((data) => {
        console.log("Cardápio carregado:", data); // isso deve aparecer
        setCategorias(data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar o cardápio:", err); // veja no console
        setCarregando(false);
      });
  }, []);

  const adicionarItem = (nome, preco) => {
    setCarrinho((prev) => [...prev, { nome, preco }]);
  };

  const removerItem = (index) => {
    setCarrinho((prev) => prev.filter((_, i) => i !== index));
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const enviarPedido = () => {
    const novoPedido = {
      itens: carrinho,
      total,
      horario: new Date().toISOString()
    };

    fetch("http://localhost:5000/api/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoPedido),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Pedido enviado! Total: R$ " + total.toFixed(2));
        setCarrinho([]);
        setPedidosAtualizados((prev) => prev + 1);
      })
      .catch((err) => {
        alert("Erro ao enviar pedido.");
        console.error(err);
      });
  };

  const iniciarMeiaMeia = (item, tamanho) => {
    const preco = tamanho === 'G' ? item.precoG : item.precoB;
    setModoMeia({ item, tamanho, preco });
  };

  const concluirMeiaMeia = (item2) => {
    if (!modoMeia) return;
    const preco2 = modoMeia.tamanho === 'G' ? item2.precoG : item2.precoB;
    const precoFinal = (modoMeia.preco + preco2) / 2;
    const nome = `${modoMeia.item.nome} + ${item2.nome} (${modoMeia.tamanho})`;
    adicionarItem(nome, precoFinal);
    setModoMeia(null);
  };

  const getBotaoTexto = (item, tipo) => {
    const preco = item[tipo];
    if (categoriasEntradas.includes(categoriaAtiva)) return `Adicionar entrada: R$ ${preco.toFixed(2)}`;
    if (categoriasDoces.includes(categoriaAtiva)) return `Adicionar itens: R$ ${preco.toFixed(2)}`;
    if (categoriasBebidas.includes(categoriaAtiva)) return `Adicionar bebidas: R$ ${preco.toFixed(2)}`;
    if (tipo === "precoG") return `Adic. Pizza Grande: R$ ${preco.toFixed(2)}`;
    if (tipo === "precoB") return `Adic. Pizza Broto: R$ ${preco.toFixed(2)}`;
    return `Adicionar: R$ ${preco.toFixed(2)}`;
  };

  const getNomeItem = (item, tipo) => {
    if ([...categoriasEntradas, ...categoriasDoces, ...categoriasBebidas].includes(categoriaAtiva)) {
      return item.nome;
    }
    return `${item.nome} ${tipo}`;
  };

  if (!modoAdmin && (carregando || !categorias[categoriaAtiva])) {
    return <div>Carregando cardápio...</div>;
  }


  return (
    <div className="container">
      <button onClick={() => setModoAdmin(!modoAdmin)} className="botao">
        {modoAdmin ? "Voltar para o cliente" : "Ir para o administrador"}
      </button>

      {modoAdmin ? (
        <Admin pedidosAtualizados={pedidosAtualizados} />
      ) : (
        <>
          <div className="container">
            <div className="logo">
              <img src="/LogoSuprema.png" alt="Suprema Pizza Cine Logo" className="logo-imagem" />
            </div>

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
                  <strong>{item.nome}</strong>
                  <p className="item-descricao">{item.descricao}</p>
                  <div className="botoes-item">
                    {item.precoG > 0 && (
                      <button
                        className="botao adicionar"
                        onClick={() => adicionarItem(getNomeItem(item, "G"), item.precoG)}
                      >
                        <strong>{getBotaoTexto(item, "precoG")}</strong>
                      </button>
                    )}
                    {item.precoB > 0 && (
                      <button
                        className="botao adicionar"
                        onClick={() => adicionarItem(getNomeItem(item, "B"), item.precoB)}
                      >
                        <strong>{getBotaoTexto(item, "precoB")}</strong>
                      </button>
                    )}
                    {item.preco > 0 && (
                      <button
                        className="botao adicionar"
                        onClick={() => adicionarItem(item.nome, item.preco)}
                      >
                        <strong>Adicionar: R$ {item.preco.toFixed(2)}</strong>
                      </button>
                    )}
                    {item.preco2G > 0 && (
                      <button className="botao adicionar" onClick={() => iniciarMeiaMeia(item, 'G')}>
                        <strong>Adic. 2Sabores G</strong>
                      </button>
                    )}
                    {item.preco2B > 0 && (
                      <button className="botao adicionar" onClick={() => iniciarMeiaMeia(item, 'B')}>
                        <strong>Adic. 2Sabores B</strong>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {modoMeia && (
              <div className="modal">
                <h3>Escolha o segundo sabor ({modoMeia.tamanho})</h3>
                <button className="fechar" onClick={() => setModoMeia(null)}>Cancelar</button>
                <div className="menu">
                  {categorias[categoriaAtiva].itens
                    .filter((i) => i.id !== modoMeia.item.id)
                    .map((item2) => (
                      <div key={item2.id} className="item">
                        <strong>{item2.nome}</strong>
                        <button className="botao adicionar" onClick={() => concluirMeiaMeia(item2)}>
                          Escolher este sabor
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            )}

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
        </>
      )}
    </div>
  );
}