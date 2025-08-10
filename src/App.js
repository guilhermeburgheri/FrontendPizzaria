import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import "./App.css";

export default function App() {
  const [modoAdmin, setModoAdmin] = useState(false);
  const [pedidosAtualizados, setPedidosAtualizados] = useState(0);
  const [categorias, setCategorias] = useState({});
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [carrinho, setCarrinho] = useState([]);
  const [mesa, setMesa] = useState('');
  const [confirmandoMesa, setConfirmandoMesa] = useState(false);
  const [observacoes, setObservacoes] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState("Trailer");
  const [menu2, setMenu2] = useState(null);
  const [modoMeia, setModoMeia] = useState(null);

  const categoriasEntradas = ["Trailer"];
  const categoriasDoces = ["Bomboniere"];
  const categoriasBebidas = ["Matinê", "Lanterninha"];

  useEffect(() => {
    fetch("/api/cardapio")
      .then((res) => res.json())
      .then((data) => {
        setCategorias(data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar o cardápio:", err);
        setCarregando(false);
      });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "q") {
        e.preventDefault();
        setModoAdmin((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const adicionarItem = (nome, preco) => {
    setCarrinho((prev) => [...prev, { nome, preco }]);
  };

  const removerItem = (index) => {
    setCarrinho((prev) => prev.filter((_, i) => i !== index));
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  /* Pesquisar sem acentos */
    const normalizar = (s) =>
      (s || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    const resultadosBusca =
      busca.trim().length >= 2
        ? Object.entries(categorias).flatMap(([cat, data]) =>
          (data?.itens || [])
            .filter(
              (it) =>
                normalizar(it.nome).includes(normalizar(busca)) ||
                normalizar(it.descricao).includes(normalizar(busca))
            )
            .map((it) => ({ ...it, __categoria: cat }))
        )
        : [];


  const enviarPedido = () => {
    if (!confirmandoMesa) {
      setConfirmandoMesa(true);
      return;
    }

    if (!mesa.trim()) {
      alert("Por favor, informe o número da mesa antes de enviar o pedido.");
      return;
    }

    const novoPedido = {
      cliente: `Mesa ${mesa}`,
      itens: carrinho,
      total,
      mesa,
      observacoes
    };

    fetch("/api/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoPedido),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Pedido enviado! Total: R$ " + total.toFixed(2));
        setCarrinho([]);
        setMesa('');
        setConfirmandoMesa(false);
        setObservacoes('');
        setPedidosAtualizados((prev) => prev + 1);
      })
      .catch((err) => {
        alert("Erro ao enviar pedido.");
        console.error(err);
      });
  };

  const iniciarMeiaMeia = (item, tamanho) => {
    const preco = tamanho === "G" ? item.precoG : item.precoB;
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
    if (categoriasEntradas.includes(categoriaAtiva))
      return `Adicionar entrada: R$ ${preco.toFixed(2)}`;
    if (categoriasDoces.includes(categoriaAtiva))
      return `Adicionar itens: R$ ${preco.toFixed(2)}`;
    if (categoriasBebidas.includes(categoriaAtiva))
      return `Adicionar bebidas: R$ ${preco.toFixed(2)}`;
    if (tipo === "precoG") return `Adic. Pizza Grande: R$ ${preco.toFixed(2)}`;
    if (tipo === "precoB") return `Adic. Pizza Broto: R$ ${preco.toFixed(2)}`;
    return `Adicionar: R$ ${preco.toFixed(2)}`;
  };

  const getNomeItem = (item, tipo) => {
    if (
      [...categoriasEntradas, ...categoriasDoces, ...categoriasBebidas].includes(
        categoriaAtiva
      )
    ) {
      return item.nome;
    }
    return `${item.nome} ${tipo}`;
  };

  if (!modoAdmin && (carregando || !categorias[categoriaAtiva])) {
    return <div>Carregando cardápio...</div>;
  }

  const renderItemCard = (item) => (
    <div key={`${item.__categoria || categoriaAtiva}-${item.id}`} className="item">
      <strong>{item.nome}</strong>
      {item.__categoria && (
        <span className="chip-categoria">{item.__categoria}</span>
      )}
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
          <button className="botao adicionar" onClick={() => iniciarMeiaMeia(item, "G")}>
            <strong>Adic. 2Sabores G</strong>
          </button>
        )}
        {item.preco2B > 0 && (
          <button className="botao adicionar" onClick={() => iniciarMeiaMeia(item, "B")}>
            <strong>Adic. 2Sabores B</strong>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="container">
      {modoAdmin ? (
        <Admin pedidosAtualizados={pedidosAtualizados} />
      ) : (
        <>
          <div className="container">
            <div className="logo">
              <img
                src="/LogoSuprema.png"
                alt="Suprema Pizza Cine Logo"
                className="logo-imagem"
              />
            </div>

            <div className="busca">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar item por nome ou descrição..."
                aria-label="Campo de busca de itens"
              />
              {busca && (
                <button className="botao limpar" onClick={() => setBusca('')}>
                  Limpar
                </button>
              )}
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

            {busca.trim().length >= 2 && (
              <h3 className="resultado-titulo">
                Resultados da busca ({resultadosBusca.length})
              </h3>
            )}

            <div className="menu">
              {(busca.trim().length >= 2 ? resultadosBusca : categorias[categoriaAtiva].itens)
                .map(renderItemCard)}
            </div>

            {modoMeia && (
              <div className="modal">
                <h3>Escolha o segundo sabor ({modoMeia.tamanho})</h3>
                <button
                  className="fechar"
                  onClick={() => {
                    setModoMeia(null);
                    setMenu2(null);
                  }}
                >
                  Cancelar
                </button>

                {!menu2 ? (
                  <>
                    <h4>Escolha o menu</h4>
                    {Object.entries(categorias)
                      .filter(([nomeMenu]) =>
                        [
                          "Awards",
                          "Premiere",
                          "Celebrity",
                          "Cult",
                          "Sundance",
                          "CineBijou",
                        ].includes(nomeMenu)
                      )
                      .map(([nomeMenu, dados]) => (
                        <button
                          key={nomeMenu}
                          className="botao"
                          onClick={() => setMenu2(dados)}
                        >
                          {nomeMenu}
                        </button>
                      ))}
                  </>
                ) : (
                  <div className="menu">
                    {menu2.itens
                      .filter((i) => i.id !== modoMeia.item.id)
                      .map((item2) => (
                        <div key={item2.id} className="item">
                          <strong>{item2.nome}</strong>
                          <button
                            className="botao adicionar"
                            onClick={() => {
                              concluirMeiaMeia(item2);
                              setMenu2(null);
                            }}
                          >
                            Escolher este sabor
                          </button>
                        </div>
                      ))}
                  </div>
                )}
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

            {confirmandoMesa && (
              <div className="campo-mesa" style={{ marginBottom: '1rem' }}>
                <label htmlFor="mesa">
                  <strong>Número da Mesa:</strong>
                </label>
                <input
                  id="mesa"
                  type="text"
                  value={mesa}
                  onChange={(e) => setMesa(e.target.value)}
                  placeholder="Ex: 12"
                  style={{
                    marginLeft: "0.5rem",
                    padding: "0.3rem",
                    width: "80px",
                  }}
                />
                <div className="campo-observacoes" style={{ marginTop: '1rem' }}>
                  <label htmlFor="obs">
                    <strong>Observações:</strong>
                  </label>
                  <textarea
                    id="obs"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    placeholder="Ex: Nome do produto + observação"
                    rows={3}
                    style={{
                      display: 'block',
                      width: '100%',
                      marginTop: '0.5rem',
                      padding: '0.4rem',
                    }}
                  />
                </div>
              </div>
            )}

            <div className="total">
              <div className="valor-total">Total: R$ {total.toFixed(2)}</div>
              <button
                className="botao enviar"
                onClick={enviarPedido}
                disabled={carrinho.length === 0}
              >
                <strong>
                  {confirmandoMesa ? "Confirmar Pedido" : "Enviar Pedido"}
                </strong>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
