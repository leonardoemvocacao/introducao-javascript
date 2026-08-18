const tituloFilme = "Aventura Especial";
const preco = 12;
const idadeEspectador = 14;
const classificacaoMinima = 12;

const podeAssistir = idadeEspectador >= classificacaoMinima;

console.log(podeAssistir);

document.getElementById("resultado").textContent =
  `${tituloFilme} (${classificacaoMinima} anos) - idade ${idadeEspectador}: pode assistir? ${podeAssistir}`;