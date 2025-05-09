function geraPergunta(){
    var perguntas = this.getListaDePerguntas();
    var numeroAleatorio = this.geraNumeroAleatorio(perguntas.length);
    this.mostraPergunta(perguntas[numeroAleatorio]);
}

function getListaDePerguntas(){
    return [
      "Que lugar da ficção você gostaria de visitar?",
      "Qual seu brinquedo favorito quando criança?",
      "Com qual vilão você sairia para beber?",
      "Um veículo em que você gostaria de viajar",
      "Qual o primeiro filme que você viu no cinema?",
      "Qual seu personagem favorito entre todas as mídias?",
      "Qual animal da ficção você gostaria de ter como bicho de estimação?",
      "Uma série que você ama mas nunca mais vai ver",
      "Qual sua raça fantástica favorita?",
      "Seus três livros favoritos",
      "Se sua vida fosse um RPG, de qual classe você seria?",
      "Suas três séries favoritas",
      "Cite os três melhores eventos que você já foi, incluindo show",
      "Conte uma lembrança nerd da sua infância",
      "Qual foi seu primeiro filme de terror?",
      "Primeiro livro que você leu e curtiu",
      "Um filme para ver todos os anos até morrer",
      "Qual o primeiro super-herói(na) que você se lembra?",
      "Qual era seu programa favorito na adolescência?",
      "Qual objeto da ficção você gostaria de ter de verdade?",
      "Que super-herói você gostaria de ter como melhor amigo?",
      "Qual história da ficção científica você acha que vai acontecer no mundo real?",
      "Com que personagem você iria para a balada?",
      "Qual jogo marcou sua vida?",
      "Uma história em quadrinhos que te marcou.",
      "Qual é o seu personagem favorito de Star Wars?",
      "Se pudesse pilotar uma nave espacial, qual seria?",
      "Qual é o seu episódio favorito de uma série de TV?",
      "Qual é o seu herói ou heroína favorito da Marvel?",
      "Fale um herói ou heroína da Marvel que você não gosta",
      "Fale um herói ou heroína da DC que você não gosta",
      "Qual é o seu herói ou heroína favorito da DC?",
      "Qual é o seu personagem favorito de Harry Potter?",
      "Se pudesse ter um item mágico, qual seria?",
      "Qual é o seu filme de terror favorito?",
      "Qual é o seu personagem favorito de Senhor dos Anéis?",
      "Se pudesse ser um Pokémon, qual seria?",
      "Qual é o seu jogo de RPG favorito?",
      "Qual é o seu personagem favorito de Game of Thrones?",
      "Se pudesse viver em um mundo pós-apocalíptico, qual seria?",
      "Qual é o seu filme de super-herói favorito?",
      "Qual é o seu personagem favorito de The Witcher?",
      "Se pudesse ser um mutante dos X-Men, qual seria seu poder?",
      "Qual é o seu personagem favorito de Stranger Things?",
      "Se pudesse ter um robô assistente, como ele seria?",
      "Qual é o seu personagem favorito de um jogo de luta?",
      "Qual é o seu filme de fantasia favorito?",
      "Se pudesse ser um mestre Pokémon, qual seria seu time?",
      "Qual é o seu personagem favorito de um mangá?",
      "Qual é o seu jogo de estratégia favorito?",
      "Se pudesse criar um universo fictício, como seria?",
      "Qual é o seu personagem favorito de um filme da Disney?",
      "Se pudesse ser um personagem de um filme de ação, qual seria?",
      "Que personagem de anime você gostaria de ser por um dia?",
      "Qual é o seu filme de ficção científica favorito?",
      "Se pudesse viver em um universo de videogame, qual seria?",
      "Qual foi o primeiro console de videogame que você teve?",
      "Qual superpoder você gostaria de ter?",
      "Se pudesse ser um personagem de um livro, qual seria?",
      "Qual é a sua trilha sonora de filme favorita?",
      "Qual é o seu vilão favorito de todos os tempos?",
      "Se pudesse viajar no tempo, para qual época iria?",
      "Qual é o seu jogo de tabuleiro favorito?",
      "Qual é o seu filme de animação favorito?",
      "Descreva um momento inesquecível em um evento nerd.",
      "Conte sobre a primeira vez que jogou um RPG de mesa.",
      "Explique por que você gosta tanto do seu personagem favorito.",
      "Fale sobre o filme que mais te emocionou.",
      "Compartilhe uma memória marcante com videogames.",
      "Diga o nome de uma série que mudou sua forma de pensar.",
      "Relate uma experiência engraçada envolvendo cultura nerd.",
      "Qual foi a teoria de fã mais louca que você já acreditou?",
      "Relate uma experiência marcante em uma maratona de filmes ou séries.",
      "Conte sobre a vez em que você se surpreendeu com um plot twist inesperado.",
      "Cite uma série que não te agradou no final, e explique como seria o final perfeito para você.",
      "Qual personagem você gostaria que fosse seu mentor na vida real?",
      "Que tecnologia fictícia você gostaria que existisse hoje?",
      "Que habilidade inútil de um personagem você adoraria ter só pela zoeira?",
      "Qual vilão você acha que tinha razão, mesmo sendo antagonista?",
      "Qual jogo você abandonou por ser difícil demais, mas ainda tem vontade de terminar?",
      "Qual personagem você amava na infância, mas hoje acha ridículo?",
      "Qual é o pior final de temporada/saga que você já viu?",
      "Descreva o pior poder inútil que um super-herói poderia ter.",
      "Invente um crossover absurdo entre duas franquias que nunca se encontrariam.",
      "Qual personagem de videogame você gostaria de ser por um dia?",
      "Qual é o seu filme de animação favorito?",
      "Qual é a pior adaptação de videogame para filme que você já viu?",
      "Qual personagem secundário merecia ter sua própria série ou filme?",
      "Se pudesse criar um novo Pokémon, como ele seria?",
      "Qual personagem você acha que teve o desenvolvimento mais interessante em uma série?",
      "Qual é a melhor cena pós-créditos que você já viu em um filme?",
      "Se pudesse reviver uma franquia de jogos abandonada, qual seria?",
      "Qual é a mecânica de jogo mais inovadora que você já experimentou?",
      "Qual é o melhor design de armadura/traje em jogos ou filmes que você já viu?",
      "Se pudesse reescrever o destino de um personagem que morreu, qual seria e como terminaria?",
      "Que personagem você acha que merecia um final melhor?",
      "Se pudesse experimentar a comida/bebida de um universo fictício, qual seria?",
      "Qual é o seu monstro/criatura favorita dos jogos ou filmes?",
      "Qual é o seu personagem não-humano favorito (robô, alienígena, animal antropomórfico, etc.)?",
      "Se você pudesse viver em uma cidade de um jogo, qual seria?",
      "Se você pudesse entrevistar qualquer personagem fictício, quem seria e por quê?",
      "Se transformar um hobby em superpoder, qual seria e como funcionaria?",
      "Se pudesse mudar algo no seu passado, o que seria?",
      "Qual é o hábito que você gostaria de mudar em si mesmo?",
      "Se você fosse um animal, qual você seria e porque?",
      "Um filme/série/anime que você odeia mas todo mundo ama",
      "se vc pudesse inventar um sabor de miojo, qual seria?"
    ];
  }

function geraNumeroAleatorio(tamanhoDaLista){
    return Math.trunc(Math.random() * tamanhoDaLista);
}

function mostraPergunta(pergunta){
    document.getElementById("pergunta").innerHTML = pergunta;
}