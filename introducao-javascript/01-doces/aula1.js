//primeira aula de javascript //
/* Vamos aprender a criar as variaveis e conhecer os tipos */

const nomeDoce = "Beijinho";
const preco = 6.7;
const disponivel = true;

console.log(nomeDoce,preco,disponivel);

document.getElementsByid("resultado").textContent= `${nomeDoce} custa R$ ${preco.toFixed(2)}- disponivel: ${disponivel}`;