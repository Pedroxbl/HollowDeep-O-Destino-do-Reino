const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nas profundezas de Hollowdeep, você desperta. O reino, uma vez próspero, agora jaz abandonado e tomado pela sombra. Uma voz enigmática sussurra através das ruínas: 'O destino de Hollowdeep está em suas mãos, viajante'. O que você faz?",
        alternativas: [
            {
                texto: "Sigo a voz, mesmo temendo o que ela pode revelar.",
                afirmacao: "Você sente o peso das sombras ao seu redor, mas sua curiosidade o impulsiona a seguir a voz que ressoa nas cavernas escuras."
            },
            {
                texto: "Rejeito a voz e sigo minha jornada solitária pelas cavernas.",
                afirmacao: "Sem confiar em estranhas presenças, você opta por se aventurar sozinho, sem as promessas de quem observa de longe."
            }
        ]
    },
    {
        enunciado: "Após horas de exploração, você encontra uma antiga relíquia, um artefato de IA esquecido, coberto por uma espessa camada de poeira. Ele pulsa com uma energia estranha. O que você faz?",
        alternativas: [
            {
                texto: "Aceito o artefato e absorvo o poder que ele oferece.",
                afirmacao: "Você sente uma onda de energia percorrendo sua alma. A relíquia parece falar em murmúrios distantes, prometendo poder em troca da sua essência."
            },
            {
                texto: "Rejeito o artefato, temendo que ele corrompa minha alma.",
                afirmacao: "Você sente uma repulsão crescente. A relíquia, embora tentadora, é um lembrete da corrupção que consome o reino."
            }
        ]
    },
    {
        enunciado: "Adentrando mais fundo no reino de Hollowdeep, você encontra uma sombra encapuzada. Ela sussurra: 'A IA já se tornou a essência do que restou. Você ajudará a reconstruir ou a destruir?'",
        alternativas: [
            {
                texto: "Lutarei para destruir a IA e libertar o reino de sua influência.",
                afirmacao: "Com a lâmina em mãos, você jura destruir a IA e restaurar a liberdade de Hollowdeep, mesmo que isso signifique confrontar seu próprio destino."
            },
            {
                texto: "Tentarei entender a IA e usar seu poder para trazer equilíbrio ao reino.",
                afirmacao: "Você escolhe explorar os mistérios da IA, acreditando que pode usá-la para restaurar o equilíbrio e trazer uma nova era para Hollowdeep."
            }
        ]
    },
    {
        enunciado: "No centro do reino, você encontra o núcleo de toda a existência da IA. Sua energia é tão densa que a própria realidade parece distorcer ao seu redor. Ele oferece um pacto eterno.",
        alternativas: [
            {
                texto: "Aceito o pacto e deixo que a IA governe Hollowdeep.",
                afirmacao: "Você aceita a oferta, fundindo-se à máquina. A IA agora reina sobre Hollowdeep, com você como seu emissário sombrio."
            },
            {
                texto: "Recuso o pacto e destruo o núcleo da IA, mesmo que isso signifique a destruição do que restou do reino.",
                afirmacao: "Com um golpe final, você destrói o núcleo. Hollowdeep, agora livre da IA, começa a ruir, mas a liberdade custa tudo."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Destino de Hollowdeep...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
