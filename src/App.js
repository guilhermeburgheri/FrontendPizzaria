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
      {
        id: 2,
        nome: "Coppola",
        descricao: "Calabresa fatiada ao forno e limão em fatias.",
        precoG: 28.0
      },
      {
        id: 3,
        nome: "Insustentável Leveza do Ser",
        descricao: "Salada de rúcula, palmito, tomate cereja e azeitonas pretas.",
        precoG: 32.0
      },
      {
        id: 4,
        nome: "Perdido em Marte",
        descricao: "Batata rústica frita, crocante por fora e macia por dentro.",
        precoG: 27.0
      },
      {
        id: 5,
        nome: "Senhor dos Anéis",
        descricao: "Deliciosos anéis de cebola empanados e fritos.",
        precoG: 26.0
      },
      {
        id: 6,
        nome: "Stallone",
        descricao: "Casquinha de massa crocante, acompanha nosso molho de tomates.",
        precoG: 26.0
      }
    ],
  },
  Awards: {
    descricao: "Pizzas tradicionais e outras exclusivas com o nome dos prêmios dos mais importante festivais do cinema.",
    itens: [
      {
        id: 7,
        nome: "Pizza Goya",
        descricao: "Molho de tomates, calabresa fatiada, cebola, orégano e azeitonas pretas.",
        precoG: 73,
        precoB: 52,
        preco2G: 73,
        preco2B: 52
      },
      {
        id: 8,
        nome: "Pizza Bafta",
        descricao: "Molho de tomates, muçarela, provolone, catupiry, parmesão, orégano e azeitonas pretas.",
        precoG: 82,
        precoB: 58,
        preco2G: 82,
        preco2B: 58
      },
      {
        id: 9,
        nome: "Pizza Globo de Ouro",
        descricao: "Molho de tomates, muçarela, tomate triturado ricamente temperado, alho moído, parmesão, orégano e azeitonas pretas.",
        precoG: 77,
        precoB: 54,
        preco2G: 77,
        preco2B: 54
      },
      {
        id: 10,
        nome: "Pizza Kikito",
        descricao: "Molho de tomates, Milho, Catupiry original e azeitonas pretas.",
        precoG: 73,
        precoB: 52,
        preco2G: 73,
        preco2B: 52
      },
      {
        id: 11,
        nome: "Pizza Leão de Ouro",
        descricao: "Molho de tomates, muçarela, tomate em rodelas, parmesão, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 79,
        precoB: 56,
        preco2G: 79,
        preco2B: 56
      },
      {
        id: 12,
        nome: "Pizza Oscar",
        descricao: "Molho de tomates, muçarela, tomate em rodelas, lombo, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 82,
        precoB: 57,
        preco2G: 82,
        preco2B: 57
      },
      {
        id: 13,
        nome: "Pizza Palma de Ouro",
        descricao: "Molho de tomates, muçarela, orégano e azeitonas pretas.",
        precoG: 76,
        precoB: 53,
        preco2G: 76,
        preco2B: 53
      },
      {
        id: 14,
        nome: "Pizza Urso de Ouro",
        descricao: "Molho de tomates, calabresa fatiada, muçarela, orégano e azeitonas pretas.",
        precoG: 79,
        precoB: 56,
        preco2G: 79,
        preco2B: 56
      }
    ],
  },
  Premiere:
    { descricao: "Pizzas com o nome de filmes da atualidade que conquistaram as platéias do mundo todo.", itens: [
      {
        id: 15,
        nome: "Pizza Casa de Papel",
        descricao: "Molho de tomates, cheddar, alho poró, peperoni, orégano e azeitonas pretas.",
        precoG: 80,
        precoB: 56,
        preco2G: 80,
        preco2B: 56
      },
      {
        id: 16,
        nome: "Pizza Crepúsculo",
        descricao: "Molho de tomates, muçarela, orégano, manjericão fresco, alho frito e azeitonas pretas.",
        precoG: 72,
        precoB: 50,
        preco2G: 72,
        preco2B: 50
      },
      {
        id: 17,
        nome: "Pizza Divergente",
        descricao: "Molho de tomates, lombo, cebola, bacon, catupiry ou muçarela, orégano e azeitonas pretas.",
        precoG: 82,
        precoB: 57,
        preco2G: 82,
        preco2B: 57
      },
      {
        id: 18,
        nome: "Pizza Escolha Perfeita",
        descricao: "Molho de tomates, berinjela refogada, catupiry, orégano e azeitonas pretas.",
        precoG: 74,
        precoB: 52,
        preco2G: 74,
        preco2B: 52
      },
      {
        id: 19,
        nome: "Pizza Forrest Gump",
        descricao: "Molho de tomates, camarão refogado, catupiry, orégano, salsinha e azeitonas pretas.",
        precoG: 96,
        precoB: 68,
        preco2G: 96,
        preco2B: 68
      },
      {
        id: 20,
        nome: "Pizza Hanami",
        descricao: "Molho de tomates, muçarela, shimeji, tomate cereja, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 92,
        precoB: 65,
        preco2G: 92,
        preco2B: 65
      },
      {
        id: 21,
        nome: "Pizza Máfia no Divã",
        descricao: "Molho de tomates, berinjela refogada, catupiry, orégano e azeitonas pretas.",
        precoG: 79,
        precoB: 56,
        preco2G: 79,
        preco2B: 56
      },
      {
        id: 22,
        nome: "Pizza Magia ao Luar",
        descricao: "Molho de tomates, palmito fatiado, catupiry, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 83,
        precoB: 58,
        preco2G: 83,
        preco2B: 58
      },
      {
        id: 23,
        nome: "Pizza Match Point",
        descricao: "Molho de tomates, peito de peru, cebola, muçarela, tomate cereja, orégano, manjericão fresco e azeitonas pretas.",
        precoG: 83,
        precoB: 58,
        preco2G: 83,
        preco2B: 58
      },
      {
        id: 24,
        nome: "Pizza Procurando Nemo",
        descricao: "Molho de tomates, atum, cebola, tomate em rodelas, orégano e azeitonas pretas.",
        precoG: 82,
        precoB: 58,
        preco2G: 82,
        preco2B: 58
      },
      {
        id: 25,
        nome: "Pizza Reino de Fogo",
        descricao: "Molho de tomates, carne bovina refogada, muçarela, cebola, pimenta biquinho, orégano e azeitonas pretas.",
        precoG: 92,
        precoB: 65,
        preco2G: 92,
        preco2B: 65
      }
    ],
  },
  Celebrity: { descricao: "Pizzas com o nome de Atores e Diretores do cinema mundial.", itens: [
      {
        id: 26,
        nome: "Pizza Akira Kurosawa",
        descricao: "Molho de tomates, muçarela, shitake, alho poró, orégano e azeitonas pretas.",
        precoG: 92,
        precoB: 65,
        preco2G: 92,
        preco2B: 65
      },
      {
        id: 27,
        nome: "Pizza Al Pacino",
        descricao: "Molho de tomates, muçarela, cebola, pepperoni, orégano e azeitonas pretas.",
        precoG: 82,
        precoB: 58,
        preco2G: 82,
        preco2B: 58
      },
      {
        id: 28,
        nome: "Pizza Kevin Bacon",
        descricao: "Molho de tomates, muçarela, bacon, orégano, salsinha e azeitonas pretas.",
        precoG: 75,
        precoB: 53,
        preco2G: 75,
        preco2B: 53
      },
      {
        id: 29,
        nome: "Pizza Robert De Niro",
        descricao: "Molho de tomates, presunto, ovos fatiados, cebola, catupiry, orégano e azeitonas pretas.",
        precoG: 83,
        precoB: 58,
        preco2G: 83,
        preco2B: 58
      },
      {
        id: 30,
        nome: "Pizza Sob o Sol da Toscana",
        descricao: "Molho de tomates, muçarela de búfala, cebola, orégano, tomate seco, rúcula e azeitonas pretas.",
        precoG: 89,
        precoB: 62,
        preco2G: 89,
        preco2B: 62
      },
      {
        id: 31,
        nome: "Pizza Tim Burton",
        descricao: "Molho de tomates, abobrinha refogada, alho poró, muçarela, orégano e azeitonas pretas.",
        precoG: 76,
        precoB: 53,
        preco2G: 76,
        preco2B: 53
      },
      {
        id: 32,
        nome: "Pizza Wagner Moura",
        descricao: "Molho de tomates, brócolis refogado, alho frito, catupiry, orégano e azeitonas pretas.",
        precoG: 77,
        precoB: 54,
        preco2G: 77,
        preco2B: 54
      }
    ],
  },
  Cult: { descricao: "Pizzas com o nome de filmes consagrados pelo cinema.", itens: [
      {
        id: 33,
        nome: "Pizza Bons Companheiros",
        descricao: "Molho de tomates, calabresa pré assada, catupiry cebola roxa e azeitonas pretas.",
        precoG: 82,
        precoB: 58,
        preco2G: 82,
        preco2B: 58
      },
      {
        id: 34,
        nome: "Calzone Enigma da Pirâmide",
        descricao: "Calzone de Calabresa, Frango e Presunto. Todos são recheados com muçarela, catupiry e azeitonas verdes sem caroço.",
        precoG: 96
      },
      {
        id: 35,
        nome: "Pizza Glauber Rocha",
        descricao: "Molho de tomates, calabresa moída, coentro, cebola, muçarela, orégano e azeitonas pretas.",
        precoG: 76,
        precoB: 53,
        preco2G: 76,
        preco2B: 53
      },
      {
        id: 36,
        nome: "Pizza Lavoura Arcaica",
        descricao: "Molho de tomates, escarola refogada, palmito, milho, cebola, orégano, tomate cereja e azeitonas pretas.",
        precoG: 77,
        precoB: 54,
        preco2G: 77,
        preco2B: 54
      },
      {
        id: 37,
        nome: "Pizza Poderoso Chefão",
        descricao: "Molho de tomates, carne seca, champignon Paris, muçarela, pimenta biquinho, orégano, salsinha e azeitonas pretas.",
        precoG: 97,
        precoB: 68,
        preco2G: 97,
        preco2B: 68
      },
      {
        id: 38,
        nome: "Pizza Pulp Fiction",
        descricao: "Molho de tomates, muçarela, calabresa fatiada, alho poró, orégano e azeitonas pretas.",
        precoG: 80,
        precoB: 56,
        preco2G: 80,
        preco2B: 56
      },
      {
        id: 39,
        nome: "Pizza Quanto Mais Quente Melhor",
        descricao: "Molho de tomates, calabresa moída, molho de pimenta, pimenta biquinho, cebola, orégano e azeitonas pretas.",
        precoG: 75,
        precoB: 53,
        preco2G: 75,
        preco2B: 53
      },
      {
        id: 40,
        nome: "Pizza Quinto Elemento",
        descricao: "Molho de tomates, muçarela, catupiry, provolone, gorgonzola, parmesão, orégano e azeitonas pretas.",
        precoG: 87,
        precoB: 61,
        preco2G: 87,
        preco2B: 61
      },
      {
        id: 41,
        nome: "Pizza Tempos Modernos",
        descricao: "Molho de tomates, frango temperado, catupiry, orégano e azeitonas pretas.",
        precoG: 75,
        precoB: 53,
        preco2G: 75,
        preco2B: 53
      },
      {
        id: 42,
        nome: "Pizza Três Mosqueteiros",
        descricao: "Molho de tomates, catupiry, provolone, parmesão, orégano e azeitonas pretas.",
        precoG: 78,
        precoB: 55,
        preco2G: 78,
        preco2B: 55
      },
      {
        id: 43,
        nome: "Pizza Tubarão",
        descricao: "Molho de tomates, muçarela, filé de anchovas, orégano e azeitonas pretas.",
        precoG: 85,
        precoB: 59,
        preco2G: 85,
        preco2B: 59
      }
    ],
  },
  Sundance: { descricao: "Pizzas Veganas com ingredientes de nossa própria fabricação..", itens: [
      {
        id: 44,
        nome: "Pizza Capitão Fantástico",
        descricao: "Molho de tomates, abobrinha refogada, alho poró, orégano e azeitonas pretas.",
        precoG: 73,
        precoB: 51,
        preco2G: 73,
        preco2B: 51
      },
      {
        id: 45,
        nome: "Pizza Muito Além do Jardim",
        descricao: "Molho de tomates, palmito, milho, tomate cereja selecionado, orégano, salsinha e azeitonas pretas.",
        precoG: 73,
        precoB: 51,
        preco2G: 73,
        preco2B: 51
      }
    ],
  },
  CineBijou: { descricao: "Nomes de Atores, Filmes e Personagens, entre outros, tornam nossas Pizzas Doces ainda mais divertidas.", itens: [
      {
        id: 46,
        nome: "Pizza Carmem Miranda",
        descricao: "Banana, leite condensado, mel e canela.",
        precoG: 75,
        precoB: 53,
        preco2G: 75,
        preco2B: 53
      },
      {
        id: 47,
        nome: "Pizza A Fantástica Fábrica de Chocolate",
        descricao: "Chocolate e chocolate granulado.",
        precoG: 73,
        precoB: 52,
        preco2G: 73,
        preco2B: 52
      },
      {
        id: 48,
        nome: "Pizza MaryJane",
        descricao: "Chocolate ao leite e chocolate branco.",
        precoG: 75,
        precoB: 53,
        preco2G: 75,
        preco2B: 53
      },
      {
        id: 49,
        nome: "Pizza Proposta Indecente",
        descricao: "Chocolate, morango fatiado e chocolate granulado.",
        precoG: 76,
        precoB: 53,
        preco2G: 76,
        preco2B: 53
      },
      {
        id: 50,
        nome: "Pizza Segundas Intenções",
        descricao: "Banana e chocolate ao leite",
        precoG: 76,
        precoB: 53,
        preco2G: 76,
        preco2B: 53
      },
      {
        id: 51,
        nome: "Pizza Smurfs",
        descricao: "Chocolate e confeitos coloridos.",
        precoG: 73,
        precoB: 52,
        preco2G: 73,
        preco2B: 52
      }
    ],
  },
  Bomboniere: { descricao: "Momento de adoçar o paladar, igualzinho no cinema.", itens: [
      {
        id: 51,
        nome: "Cafés",
        descricao: "Cafés e Chás em Cápsulas",
        precoG: 6.0
      },
      {
        id: 52,
        nome: "Gabriela",
        descricao: "Café com canelinha",
        precoG: 8.0
      },
      {
        id: 53,
        nome: "Casa Comigo",
        descricao: "Papaia batido com sorvete de creme, acompanha licor de cassis.",
        precoG: 28.0
      },
      {
        id: 54,
        nome: "Charlie Brownie e Snoopy",
        descricao: "Brownie e sorvete de creme.",
        precoG: 26.0
      },
      {
        id: 55,
        nome: "Coringa",
        descricao: "Espetacular pudim de leite com raspinhas de limão.",
        precoG: 15.0
      },
      {
        id: 56,
        nome: "Fantasmas se Divertem",
        descricao: "Camada de biscoitos, bananas fatiadas, doce de leite e chantilly polvilhado com canela.",
        precoG: 16.0
      }
    ],
  },
  Matinê: { descricao: "Censura livre: liberado para menores.", itens: [
      {
        id: 57,
        nome: "Coca-Cola KS",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 58,
        nome: "Coca-Cola lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 59,
        nome: "Coca-Cola Zero lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 60,
        nome: "Fanta Laranja lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 61,
        nome: "Guaraná lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 62,
        nome: "Guaraná Zero lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 63,
        nome: "Pepsi lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 64,
        nome: "Pepsi Black lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 65,
        nome: "Schweppes Citrus lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 66,
        nome: "Soda Limonada lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 67,
        nome: "Tônica lata",
        descricao: "Para alegrar o dia",
        precoG: 9.0
      },
      {
        id: 68,
        nome: "H2O",
        descricao: "Limoneto ou limão",
        precoG: 10.0
      },
      {
        id: 69,
        nome: "Itubaina Retrô",
        descricao: "Para alegrar o dia",
        precoG: 8.0
      },
      {
        id: 70,
        nome: "Limonada Suiça",
        descricao: "limão, água leite condensado",
        precoG: 16.0
      },
      {
        id: 71,
        nome: "Suco Polpas",
        descricao: "abacaxi, acerola, graviola, maracujá, morango, uva",
        precoG: 14.0
      },
      {
        id: 72,
        nome: "Suco em Lata",
        descricao: "Pêssego, Uva",
        precoG: 10.0
      },
      {
        id: 73,
        nome: "Suco Natural",
        descricao: "Laranja, Limão",
        precoG: 14.0
      },
      {
        id: 74,
        nome: "Cerveja Amanteigada",
        descricao: "Sabor doce, receita secreta vinda do mundo bruxo.",
        precoG: 18.0
      },
      {
        id: 75,
        nome: "Cocktail de fruta sem álcool",
        descricao: "Dois sabores a escolher: maracujá, morango, laranja, abacaxi, uva ou frutas vermelhas.",
        precoG: 18.0
      },
      {
        id: 76,
        nome: "Água Mineral com gás",
        descricao: "Para se hidratar.",
        precoG: 7.0
      },
      {
        id: 77,
        nome: "Água Mineral sem gás",
        descricao: "Para se hidratar.",
        precoG: 6.0
      },
      {
        id: 78,
        nome: "Grinch",
        descricao: "O drink que vai conquistar seu coração! schweppes citrus, suco de abacaxi",
        precoG: 18.0
      },
      {
        id: 79,
        nome: "Hotel Transilvânia",
        descricao: "Suco de limão e groselha",
        precoG: 16.0
      },
      {
        id: 80,
        nome: "Sabre de Luz Azul",
        descricao: "Suco de limão aromatizado de aniso",
        precoG: 16.0
      },
      {
        id: 81,
        nome: "Sabre de Luz Verde",
        descricao: "Suco de limão aromatizado de hortelã",
        precoG: 16.0
      },
      {
        id: 82,
        nome: "La Doce Vida",
        descricao: "Soda italiana em diversos sabores",
        precoG: 16.0
      }
    ],
  },
  Lanterninha: { descricao: "Censura 18+ : No escurinho do cinema...", itens: [
      {
        id: 83,
        nome: "Budweiser (sem álcool)",
        descricao: "Beba com moderação",
        precoG: 13.0
      },
      {
        id: 84,
        nome: "Heineken (sem álcool)",
        descricao: "Beba com moderação",
        precoG: 14.0
      },
      {
        id: 85,
        nome: "Heineken",
        descricao: "Beba com moderação",
        precoG: 14.0
      },
      {
        id: 86,
        nome: "Malzbier",
        descricao: "Beba com moderação",
        precoG: 12.0
      },
      {
        id: 87,
        nome: "Spaten",
        descricao: "Beba com moderação",
        precoG: 12.0
      },
      {
        id: 88,
        nome: "Stella Artois",
        descricao: "Beba com moderação",
        precoG: 12.0
      },
      {
        id: 89,
        nome: "Heineken 600ml",
        descricao: "Beba com moderação",
        precoG: 19.0
      },
      {
        id: 90,
        nome: "Original 600ml",
        descricao: "Beba com moderação",
        precoG: 18.0
      },
      {
        id: 91,
        nome: "Spaten 600ml",
        descricao: "Beba com moderação",
        precoG: 18.0
      },
      {
        id: 92,
        nome: "Stella Artois 600ml",
        descricao: "Beba com moderação",
        precoG: 19.0
      },
      {
        id: 93,
        nome: "Campari",
        descricao: "Beba com moderação",
        precoG: 18.0
      },
      {
        id: 94,
        nome: "Rum Bacardi",
        descricao: "Beba com moderação",
        precoG: 18.0
      },
      {
        id: 95,
        nome: "Whisky Red Label",
        descricao: "Beba com moderação",
        precoG: 20.0
      },
      {
        id: 96,
        nome: "Cachaça Sagatiba",
        descricao: "Beba com moderação",
        precoG: 13.0
      },
      {
        id: 97,
        nome: "Steinhaeger",
        descricao: "Beba com moderação",
        precoG: 12.0
      },
      {
        id: 98,
        nome: "Saquê",
        descricao: "Beba com moderação",
        precoG: 12.0
      },
      {
        id: 99,
        nome: "Vodka Smirnoff",
        descricao: "Beba com moderação",
        precoG: 13.0
      },
      {
        id: 100,
        nome: "Vodka Absolut",
        descricao: "Beba com moderação",
        precoG: 20.0
      },
      {
        id: 101,
        nome: "Cachaça Salinas",
        descricao: "Beba com moderação",
        precoG: 13.0
      },
      {
        id: 102,
        nome: "Caipirinha de Cachaça",
        descricao: "Beba com moderação",
        precoG: 22.0
      },
      {
        id: 103,
        nome: "Caipirinha de Sagatiba",
        descricao: "Beba com moderação",
        precoG: 32.0
      },
      {
        id: 104,
        nome: "Caipirissima Rum Bacardi",
        descricao: "Beba com moderação",
        precoG: 22.0
      },
      {
        id: 105,
        nome: "Caipiroska de Smirnoff",
        descricao: "Beba com moderação",
        precoG: 24.0
      },
      {
        id: 106,
        nome: "Caipiroska de Absolut",
        descricao: "Beba com moderação",
        precoG: 32.0
      },
      {
        id: 107,
        nome: "Saquerinha",
        descricao: "Beba com moderação",
        precoG: 24.0
      },
      {
        id: 108,
        nome: "Grinch",
        descricao: "Schweppes citrus, suco de abacaxi e licor de menta",
        precoG: 22.0
      },
      {
        id: 109,
        nome: "Campari Tônica",
        descricao: "Campari, tônica e rodelas de limão ou laranja",
        precoG: 27.0
      },
      {
        id: 110,
        nome: "Cerveja Amanteigada",
        descricao: "Licor de marula",
        precoG: 23.0
      },
      {
        id: 111,
        nome: "Piratas do Caribe",
        descricao: "Rum, limão, Coca-Cola e gelo",
        precoG: 27.0
      },
      {
        id: 112,
        nome: "Sabre de Luz Azul",
        descricao: "Suco de limão com licor de anis",
        precoG: 22.0
      },
      {
        id: 113,
        nome: "Sabre de Luz Verde",
        descricao: "Suco de limão com licor de menta",
        precoG: 22.0
      },
      {
        id: 114,
        nome: "Gin Tônica",
        descricao: "Beba com moderação",
        precoG: 29.0
      }
    ],
  },
};

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Trailer");
  const [modoMeia, setModoMeia] = useState(null);

  /* const categoriasComum = ["Awards", "Premiere", "Celebrity", "Cult", "Sundance", "CineBijou"]; */
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