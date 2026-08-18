const nomeHospede = "Ana";
const valorDiaria = 180;
const noites = 5.
const temDesconto = noites >= 5;
const fatorDesconto = temDesconto ? 0.9: 1;
const totalReseva = valorDiaria * noites * fatorDesconto;

console.log(totalReseva);
document.getElementById("resultado").textContent = 'Reseva de ${nomehospede}: ${noites} noites - total R$ $(totalReserva.toFixed(2)}';