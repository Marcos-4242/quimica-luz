// Lógica do jogo — O Desafio da Luz Química
const perguntas = [
  {
    texto: "Para dissolver o Ácido Ftálico de forma eficiente, qual é a melhor estratégia?",
    a: "a) Dissolver o ácido ftálico na água e depois adicionar NaOH",
    b: "b) Dissolver primeiro o NaOH na água e depois adicionar o ácido ftálico",
    correta: "b",
    imagem: "imagens/experimento.svg"
  },
  {
    texto: "A solução de NaOH esquentou. Para adicionar o ácido ftálico, você:",
    a: "a) Aproveita o calor para acelerar a reação",
    b: "b) Espera esfriar até a temperatura ambiente",
    correta: "a",
    imagem: "imagens/experimento.svg"
  },
  {
    texto: "O Luminol é mais solúvel em:",
    a: "a) Água fria e levemente ácida",
    b: "b) Trietilenoglicol puro (solvente quente da reação)",
    correta: "a",
    imagem: "imagens/experimento.svg"
  },
  {
    texto: "Após formar cristais de Luminol, você:",
    a: "a) Descarta os cristais",
    b: "b) Usa a mistura completa (líquido + cristais)",
    correta: "b",
    imagem: "imagens/experimento.svg"
  },
  {
    texto: "O Ferricianeto de Potássio atua como:",
    a: "a) Agente redutor",
    b: "b) Catalisador",
    correta: "b",
    imagem: "imagens/experimento.svg"
  },
  {
    texto: "Se faltar Ferricianeto, você substitui por:",
    a: "a) Sulfato de Cobre (CuSO₄)",
    b: "b) Mais Água Oxigenada",
    correta: "a",
    imagem: "imagens/experimento.svg"
  },
  {
    texto: "Para obter o brilho mais intenso:",
    a: "a) Despejar Solução B no béquer com Solução C",
    b: "b) Despejar Solução C no béquer com Solução B",
    correta: "a",
    imagem: "imagens/brilho.svg"
  },
  {
    texto: "O brilho apagou rápido. Para reativá-lo, você:",
    a: "a) Adiciona mais Solução A",
    b: "b) Agita suavemente o frasco para oxigenar",
    correta: "b",
    imagem: "imagens/brilho.svg"
  }
];

let indice = 0;

const perguntaEl = document.getElementById("pergunta");
const imgEl = document.getElementById("imagem");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

function mostrarPergunta() {
  if (indice < perguntas.length) {
    const p = perguntas[indice];
    perguntaEl.textContent = `${p.texto}\n\n${p.a}\n${p.b}`;
    imgEl.src = p.imagem;
  } else {
    perguntaEl.textContent = "🎉 PARABÉNS! Você completou todos os experimentos e viu o brilho azul!";
    imgEl.src = "imagens/brilho.svg";
    btnA.style.display = "none";
    btnB.style.display = "none";
  }
}

function responder(resposta) {
  if (perguntas[indice].correta === resposta) {
    indice++;
    mostrarPergunta();
  } else {
    perguntaEl.textContent = "☠️ Resposta incorreta! O experimento falhou!";
    imgEl.src = "imagens/explosao.svg";
    btnA.style.display = "none";
    btnB.style.display = "none";
  }
}

btnA.addEventListener("click", () => responder("a"));
btnB.addEventListener("click", () => responder("b"));

mostrarPergunta();
