let etapa = 0;
const bequer = document.getElementById("bequer");
const texto = document.getElementById("texto");
const comprimido = document.getElementById("comprimido");
const objetos = document.getElementById("objetos");
const experimento = document.getElementById("experimento");

// Permitir drop no béquer
experimento.addEventListener("dragover", e => e.preventDefault());

experimento.addEventListener("drop", e => {
  if (etapa === 0 && e.dataTransfer.getData("id") === "comprimido") {
    comprimido.style.display = "none";
    bequer.src = "svg_camaleao/bequer_violeta.svg";
    texto.innerText = "Comprimido adicionado! Agora misture com a colher.";
    etapa = 1;

    // Adiciona a colher
    const colher = document.createElement("img");
    colher.id = "colher";
    colher.src = "svg_camaleao/colher.svg";
    colher.classList.add("item");
    colher.draggable = true;
    objetos.appendChild(colher);

    colher.addEventListener("dragstart", e => {
      e.dataTransfer.setData("id", "colher");
    });
  }
});

// Drag do comprimido
comprimido.addEventListener("dragstart", e => {
  e.dataTransfer.setData("id", "comprimido");
});

// Detecta mistura com a colher
experimento.addEventListener("drop", e => {
  if (etapa === 1 && e.dataTransfer.getData("id") === "colher") {
    bequer.src = "svg_camaleao/bequer_verde.svg";
    texto.innerText = "Você misturou! Agora responda a pergunta.";
    etapa = 2;
    document.getElementById("btnPergunta").style.display = "inline-block";
  }
});

// Pergunta exemplo
document.getElementById("btnPergunta").addEventListener("click", () => {
  alert("Pergunta: Qual o NOX do Mn no permanganato? (+7)");
  document.getElementById("btnPergunta").style.display = "none";
  document.getElementById("btnSolucao2").style.display = "inline-block";
  texto.innerText = "Boa! Agora adicione a Solução 2.";
});

// Adicionar solução 2
document.getElementById("btnSolucao2").addEventListener("click", () => {
  bequer.src = "svg_camaleao/bequer_marrom.svg";
  texto.innerText = "A solução mudou para marrom! Reação concluída 🎉";
  document.getElementById("btnSolucao2").style.display = "none";
});
