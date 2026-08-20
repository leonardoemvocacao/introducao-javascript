const totalCompra = 180;
let desconto = 0;

if (totalCompra > 200) {
    desconto = 0.15;
} else if (totalCompra >= 100) {
    desconto = 0.05;
}

const valorComDesconto = totalCompra * (1 - desconto);

const frete = totalCompra > 150 ? 0 : 20;

const totalFinal = valorComDesconto + frete;

document.getElementById("resultado").textContent =
    `Total a pagar: R$ ${totalFinal.toFixed(2)}`;
