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
        "Qual objeto da ficção você gostaria de ter de verdade?"
    ];
}

function geraNumeroAleatorio(tamanhoDaLista){
    return Math.trunc(Math.random() * tamanhoDaLista);
}

function mostraPergunta(pergunta){
    document.getElementById("pergunta").innerHTML = pergunta;
}