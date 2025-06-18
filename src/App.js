import React, { useState } from "react";
import "./App.css";

const categorias = {
  Trailer: {
    descricao: "Entradas/Porções",
    itens: [
      {
        id: 1,
        nome: "Bumblebee",
        descricao: "Saborosos palitos de muçarela empanados.",
        precoG: 32.0
      },
      { id: 2, nome: "Coppola", preco: 28, descricao: "Calabresa fatiada ao forno e limão em fatias." },
      { id: 3, nome: "Insustentável Leveza do Ser", preco: 32, descricao: "Salada de rúcula, palmito, tomate cereja e azeitonas pretas." },
      { id: 4, nome: "Perdido em Marte", preco: 27, descricao: "Batata rústica frita, crocante por fora e macia por dentro." },
      { id: 5, nome: "Senhor dos Anéis", preco: 26, descricao: "Deliciosos anéis de cebola empanados e fritos." },
      { id: 6, nome: "Stallone", preco: 26, descricao: "Casquinha de massa crocante, acompanha nosso molho de tomates." },
    ],
  },
  Awards: {
    descricao: "Pizzas tradicionais e outras exclusivas com o nome dos prêmios dos mais importante festivais do cinema.",
    itens: [
      {
        id: 7,
        nome: "Pizza Goya",
        descricao: "Molho de tomates, calabresa fatiada, cebola, orégano e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 8,
        nome: "Pizza Bafta",
        descricao: "Molho de tomates, muçarela, provolone, catupiry, parmesão, orégano e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 9,
        nome: "Pizza Globo de Ouro",
        descricao: "Molho de tomates, muçarela, tomate triturado ricamente temperado, alho moído, parmesão, orégano e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 10,
        nome: "Pizza Kikito",
        descricao: "Molho de tomates, Milho, Catupiry original e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 11,
        nome: "Pizza Leão de Ouro",
        descricao: "Molho de tomates, muçarela, tomate em rodelas, parmesão, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 12,
        nome: "Pizza Oscar",
        descricao: "Molho de tomates, muçarela, tomate em rodelas, lombo, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 13,
        nome: "Pizza Palma de Ouro",
        descricao: "Molho de tomates, muçarela, orégano e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      },
      {
        id: 14,
        nome: "Pizza Urso de Ouro",
        descricao: "Molho de tomates, calabresa fatiada, muçarela, orégano e azeitonas pretas.",
        precoG: 49.9,
        precoB: 39.9,
        preco2G: 52.9,
        preco2B: 42.9
      }
    ],
  },
  Premiere:
    { descricao: "Pizzas com o nome de filmes da atualidade que conquistaram as platéias do mundo todo.", itens: [
      { id: 15, nome: "Pizza Casa de Papel", preco: 26, descricao: "Molho de tomates, cheddar, alho poró, peperoni, orégano e azeitonas pretas." },
      { id: 16, nome: "Pizza Crepúsculo", preco: 26, descricao: "Molho de tomates, muçarela, orégano, manjericão fresco, alho frito e azeitonas pretas." },
      { id: 17, nome: "Pizza Divergente", preco: 26, descricao: "Molho de tomates, lombo, cebola, bacon, catupiry ou muçarela, orégano e azeitonas pretas." },
      { id: 18, nome: "Pizza Escolha Perfeita", preco: 26, descricao: "Molho de tomates, berinjela refogada, catupiry, orégano e azeitonas pretas." },
      { id: 19, nome: "Pizza Forrest Gump", preco: 26, descricao: "Molho de tomates, camarão refogado, catupiry, orégano, salsinha e azeitonas pretas." },
      { id: 20, nome: "Pizza Hanami", preco: 26, descricao: "Molho de tomates, muçarela, shimeji, tomate cereja, orégano, manjericão fresco e azeitonas pretas." },
      { id: 21, nome: "Pizza Máfia no Divã", preco: 26, descricao: "Molho de tomates, berinjela refogada, catupiry, orégano e azeitonas pretas." },
      { id: 22, nome: "Pizza Magia ao Luar", preco: 26, descricao: "Molho de tomates, palmito fatiado, catupiry, orégano, manjericão fresco e azeitonas pretas." },
      { id: 23, nome: "Pizza Match Point", preco: 26, descricao: "Molho de tomates, peito de peru, cebola, muçarela, tomate cereja, orégano, manjericão fresco e azeitonas pretas." },
      { id: 24, nome: "Pizza Procurando Nemo", preco: 26, descricao: "Molho de tomates, atum, cebola, tomate em rodelas, orégano e azeitonas pretas." },
      { id: 25, nome: "Pizza Reino de Fogo", preco: 26, descricao: "Molho de tomates, carne bovina refogada, muçarela, cebola, pimenta biquinho, orégano e azeitonas pretas." },
    ],
  },
  Celebrity: { descricao: "Pizzas com o nome de Atores e Diretores do cinema mundial.", itens: [
      { id: 26, nome: "Pizza Akira Kurosawa", preco: 26, descricao: "Molho de tomates, muçarela, shitake, alho poró, orégano e azeitonas pretas." },
      { id: 27, nome: "Pizza Al Pacino", preco: 26, descricao: "Molho de tomates, muçarela, cebola, pepperoni, orégano e azeitonas pretas." },
      { id: 28, nome: "Pizza Kevin Bacon", preco: 26, descricao: "Molho de tomates, muçarela, bacon, orégano, salsinha e azeitonas pretas." },
      { id: 29, nome: "Pizza Robert De Niro", preco: 26, descricao: "Molho de tomates, presunto, ovos fatiados, cebola, catupiry, orégano e azeitonas pretas." },
      { id: 30, nome: "Pizza Sob o Sol da Toscana", preco: 26, descricao: "Molho de tomates, muçarela de búfala, cebola, orégano, tomate seco, rúcula e azeitonas pretas." },
      { id: 31, nome: "Pizza Tim Burton", preco: 26, descricao: "Molho de tomates, abobrinha refogada, alho poró, muçarela, orégano e azeitonas pretas." },
      { id: 32, nome: "Pizza Wagner Moura", preco: 26, descricao: "Molho de tomates, brócolis refogado, alho frito, catupiry, orégano e azeitonas pretas." },
    ],
  },
  Cult: { descricao: "Pizzas com o nome de filmes consagrados pelo cinema.", itens: [
      { id: 33, nome: "Pizza Bons Companheiros", preco: 26, descricao: "Molho de tomates, calabresa pré assada, catupiry cebola roxa e azeitonas pretas." },
      { id: 34, nome: "Calzone Enigma da Pirâmide", preco: 26, descricao: "Calzone de Calabresa, Frango e Presunto. Todos são recheados com muçarela, catupiry e azeitonas verdes sem caroço" },
      { id: 35, nome: "Pizza Glauber Rocha", preco: 26, descricao: "Molho de tomates, calabresa moída, coentro, cebola, muçarela, orégano e azeitonas pretas." },
      { id: 36, nome: "Pizza Lavoura Arcaica", preco: 26, descricao: "Molho de tomates, escarola refogada, palmito, milho, cebola, orégano, tomate cereja e azeitonas pretas." },
      { id: 37, nome: "Pizza Poderoso Chefão", preco: 26, descricao: "Molho de tomates, carne seca, champignon Paris, muçarela, pimenta biquinho, orégano, salsinha e azeitonas pretas." },
      { id: 38, nome: "Pizza Pulp Fiction", preco: 26, descricao: "Molho de tomates, muçarela, calabresa fatiada, alho poró, orégano e azeitonas pretas." },
      { id: 39, nome: "Pizza Quanto Mais Quente Melhor", preco: 26, descricao: "Molho de tomates, calabresa moída, molho de pimenta, pimenta biquinho, cebola, orégano e azeitonas pretas." },
      { id: 40, nome: "Pizza Quinto Elemento", preco: 26, descricao: "Molho de tomates, muçarela, catupiry, provolone, gorgonzola, parmesão, orégano e azeitonas pretas." },
      { id: 41, nome: "Pizza Tempos Modernos", preco: 26, descricao: "Molho de tomates, frango temperado, catupiry, orégano e azeitonas pretas." },
      { id: 42, nome: "Pizza Três Mosqueteiros", preco: 26, descricao: "Molho de tomates, catupiry, provolone, parmesão, orégano e azeitonas pretas." },
      { id: 43, nome: "Pizza Tubarão", preco: 26, descricao: "Molho de tomates, muçarela, filé de anchovas, orégano e azeitonas pretas." },
    ],
  },
  Sundance: { descricao: "Pizzas Veganas com ingredientes de nossa própria fabricação..", itens: [
      { id: 44, nome: "Pizza Capitão Fantástico", preco: 26, descricao: "Molho de tomates, abobrinha refogada, alho poró, orégano e azeitonas pretas." },
      { id: 45, nome: "Pizza Muito Além do Jardim", preco: 26, descricao: "Molho de tomates, palmito, milho, tomate cereja selecionado, orégano, salsinha e azeitonas pretas." },
    ],
  },
  CineBijou: { descricao: "Nomes de Atores, Filmes e Personagens, entre outros, tornam nossas Pizzas Doces ainda mais divertidas.", itens: [
      { id: 46, nome: "Pizza Carmem Miranda", preco: 26, descricao: "Banana, leite condensado, mel e canela." },
      { id: 47, nome: "Pizza A Fantástica Fábrica de Chocolate", preco: 26, descricao: "Chocolate e chocolate granulado." },
      { id: 48, nome: "Pizza MaryJane", preco: 26, descricao: "Chocolate ao leite e chocolate branco." },
      { id: 49, nome: "Pizza Proposta Indecente", preco: 26, descricao: "Chocolate, morango fatiado e chocolate granulado." },
      { id: 50, nome: "Pizza Segundas Intenções", preco: 26, descricao: "Banana e chocolate ao leite" },
      { id: 51, nome: "Pizza Smurfs", preco: 26, descricao: "Chocolate e confeitos coloridos." },
    ],
  },
  Bomboniere: { descricao: "Momento de adoçar o paladar, igualzinho no cinema.", itens: [
      { id: 51, nome: "Cafés", preco: 6, descricao: "Cafés e Chás em Cápsulas" },
      { id: 52, nome: "Gabriela", preco: 8, descricao: "Café com canelinha" },
      { id: 53, nome: "Casa Comigo", preco: 28, descricao: "Papaia batido com sorvete de creme, acompanha licor de cassis." },
      { id: 54, nome: "Charlie Brownie e Snoopy", preco: 26, descricao: "Brownie e sorvete de creme." },
      { id: 55, nome: "Coringa", preco: 15, descricao: "Espetacular pudim de leite com raspinhas de limão." },
      { id: 56, nome: "Fantasmas se Divertem", preco: 16, descricao: "Camada de biscoitos, bananas fatiadas, doce de leite e chantilly polvilhado com canela." },
    ],
  },
  Matinê: { descricao: "Censura livre: liberado para menores.", itens: [
      { id: 57, nome: "Coca-Cola KS", preco: 9, descricao: "Para alegrar o dia" },
      { id: 58, nome: "Coca-Cola lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 59, nome: "Coca-Cola Zero lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 60, nome: "Fanta Laranja lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 61, nome: "Guaraná lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 62, nome: "Guaraná Zero lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 63, nome: "Pepsi lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 64, nome: "Pepsi Black lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 65, nome: "Schweppes Citrus lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 66, nome: "Soda Limonada lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 67, nome: "Tônica lata", preco: 9, descricao: "Para alegrar o dia" },
      { id: 68, nome: "H2O", preco: 10, descricao: "Limoneto ou limão" },
      { id: 69, nome: "Itubaina Retrô", preco: 8, descricao: "Para alegrar o dia" },
      { id: 70, nome: "Limonada Suiça", preco: 16, descricao: "limão, água leite condensado" },
      { id: 71, nome: "Suco Polpas", preco: 14, descricao: "abacaxi, acerola, graviola, maracujá, morango, uva" },
      { id: 72, nome: "Suco em Lata", preco: 10, descricao: "Pêssego, Uva" },
      { id: 73, nome: "Suco Natural", preco: 14, descricao: "Laranja, Limão" },
      { id: 74, nome: "Cerveja Amanteigada", preco: 18, descricao: "Sabor doce, receita secreta vinda do mundo bruxo." },
      { id: 75, nome: "Cocktail de fruta sem álcool", preco: 18, descricao: "Dois sabores a escolher: maracujá, morango, laranja, abacaxi, uva ou frutas vermelhas" },
      { id: 76, nome: "Água Mineral com gás", preco: 7, descricao: "Para se hidratar" },
      {
        id: 77,
        nome: "Água Mineral sem gás",
        descricao: "Com ou sem gás.",
        precoG: 6.0,
        precoB: 0,
        preco2G: 0,
        preco2B: 0
      },
      { id: 78, nome: "Grinch", preco: 18, descricao: "O drink que vai conquistar seu coração! schweppes citrus, suco de abacaxi" },
      { id: 79, nome: "Hotel Transilvânia", preco: 16, descricao: "Suco de limão e groselha" },
      { id: 80, nome: "Sabre de Luz Azul", preco: 16, descricao: "Suco de limão aromatizado de aniso" },
      { id: 81, nome: "Sabre de Luz Verde", preco: 16, descricao: "Suco de limão aromatizado de hortelã" },
      { id: 82, nome: "La Doce Vida", preco: 16, descricao: "Soda italiana em diversos sabores" },
    ],
  },
  Lanterninha: { descricao: "Censura 18+ : No escurinho do cinema...", itens: [
      { id: 83, nome: "Budweiser (sem álcool)", preco: 13, descricao: "Beba com moderação" },
      { id: 84, nome: "Heineken (sem álcool)", preco: 14, descricao: "Beba com moderação" },
      { id: 85, nome: "Heineken", preco: 14, descricao: "Beba com moderação" },
      { id: 86, nome: "Malzbier", preco: 12, descricao: "Beba com moderação" },
      { id: 87, nome: "Spaten", preco: 12, descricao: "Beba com moderação" },
      { id: 88, nome: "Stella Artois", preco: 12, descricao: "Beba com moderação" },
      { id: 89, nome: "Heineken 600ml", preco: 19, descricao: "Beba com moderação" },
      { id: 90, nome: "Original 600ml", preco: 18, descricao: "Beba com moderação" },
      { id: 91, nome: "Spaten 600ml", preco: 18, descricao: "Beba com moderação" },
      { id: 92, nome: "Stella Artois 600ml", preco: 19, descricao: "Beba com moderação" },
      { id: 93, nome: "Campari", preco: 18, descricao: "Beba com moderação" },
      { id: 94, nome: "Rum Bacardi", preco: 18, descricao: "Beba com moderação" },
      { id: 95, nome: "Whisky Red Label", preco: 20, descricao: "Beba com moderação" },
      { id: 96, nome: "Cachaça Sagatiba", preco: 13, descricao: "Beba com moderação" },
      { id: 97, nome: "Steinhaeger", preco: 12, descricao: "Beba com moderação" },
      { id: 98, nome: "Saquê", preco: 12, descricao: "Beba com moderação" },
      { id: 99, nome: "Vodka Smirnoff", preco: 13, descricao: "Beba com moderação" },
      { id: 100, nome: "Vodka Absolut", preco: 20, descricao: "Beba com moderação" },
      { id: 101, nome: "Cachaça Salinas", preco: 13, descricao: "Beba com moderação" },
      { id: 102, nome: "Caipirinha de Cachaça", preco: 22, descricao: "Beba com moderação" },
      { id: 103, nome: "Caipirinha de Sagatiba", preco: 32, descricao: "Beba com moderação" },
      { id: 104, nome: "Caipirissima Rum Bacardi", preco: 22, descricao: "Beba com moderação" },
      { id: 105, nome: "Caipiroska de Smirnoff", preco: 24, descricao: "Beba com moderação" },
      { id: 106, nome: "Caipiroska de Absolut", preco: 32, descricao: "Beba com moderação" },
      { id: 107, nome: "Saquerinha", preco: 24, descricao: "Beba com moderação" },
      { id: 108, nome: "Grinch", preco: 22, descricao: "Schweppes citrus, suco de abacaxi e licor de menta" },
      { id: 109, nome: "Campari Tônica", preco: 27, descricao: "Campari, tônica e rodelas de limão ou laranja" },
      { id: 110, nome: "Cerveja Amanteigada", preco: 23, descricao: "Licor de marula" },
      { id: 111, nome: "Piratas do Caribe", preco: 27, descricao: "Rum, limão, Coca-Cola e gelo" },
      { id: 112, nome: "Sabre de Luz Azul", preco: 22, descricao: "Suco de limão com licor de anis" },
      { id: 113, nome: "Sabre de Luz Verde", preco: 22, descricao: "Suco de limão com licor de menta" },
      { id: 114, nome: "Gin Tônica", preco: 29, descricao: "Beba com moderação" }
    ],
  },
};

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Trailer");
  const [modoMeia, setModoMeia] = useState(null);

  const categoriasComum = ["Awards", "Premiere", "Celebrity", "Cult", "Sundance", "Cine Bijou"];
  const categoriasEntradas = ["Trailer"];
  const categoriasDoces = ["Bomboniere"];
  const categoriasBebidas = ["Matinê", "Lanterninha"];

  const adicionarItem = (nome, preco) => {
    setCarrinho((prev) => [...prev, { nome, preco }]);
  };

  const removerItem = (index) => {
    setCarrinho((prev) => prev.filter((_, i) => i !== index));
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const enviarPedido = () => {
    alert("Pedido enviado! Total: R$ " + total.toFixed(2));
    setCarrinho([]);
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

  return (
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
  );
}