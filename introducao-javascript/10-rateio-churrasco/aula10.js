const nota = 8;
let nivel;
if (nota >= 7) { nivel = "Bom";} else { nivel = "Precisa melhorar";}
document.getElementById("resultado"). textContent = 'Nivel de satisfação: ${nivel}';