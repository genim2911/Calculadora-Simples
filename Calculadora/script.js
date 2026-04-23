function pegarValores() {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");

  const valor1 = campo1.value;
  const valor2 = campo2.value;

  if (valor1.trim() === "" || valor2.trim() === "") {
    alert("Por favor, preencha os dois números.");
    return null;
  }

  const numero1 = Number(valor1);
  const numero2 = Number(valor2);

  return { numero1, numero2 };
}

function mostrarResultado(valor) {
  document.getElementById("resultado").textContent = "Resultado: " + valor;
}

function somar() {
  const valores = pegarValores();
  if (valores === null) return;

  const resultado = valores.numero1 + valores.numero2;
  mostrarResultado(resultado);
}

function subtrair() {
  const valores = pegarValores();
  if (valores === null) return;

  const resultado = valores.numero1 - valores.numero2;
  mostrarResultado(resultado);
}

function multiplicar() {
  const valores = pegarValores();
  if (valores === null) return;

  const resultado = valores.numero1 * valores.numero2;
  mostrarResultado(resultado);
}

function dividir() {
  const valores = pegarValores();
  if (valores === null) return;

  if (valores.numero2 === 0) {
    alert("Não é possível dividir por zero.");
    return;
  }

  const resultado = valores.numero1 / valores.numero2;
  mostrarResultado(resultado);
}