const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date(); // Cria um novo objeto Date com a data e hora atuais
  let h = dateToday.getHours(); // Obtém a hora atual (0-23)
  let m = dateToday.getMinutes(); // Obtém os minutos atuais (0-59)
  let s = dateToday.getSeconds(); // Obtém os segundos atuais (0-59)
  // Adiciona um zero à esquerda se o número for menor que 10
  if (h < 10) {
    h = "0" + h; // Adiciona um zero à esquerda se a hora for menor que 10
  }
  if (m < 10) {
    m = "0" + m; // Adiciona um zero à esquerda se os minutos forem menores que 10
  }
  if (s < 10) {
    s = "0" + s; // Adiciona um zero à esquerda se os segundos forem menores que 10
  }
  horas.textContent = h; // Atualiza o conteúdo do elemento HTML com a hora atual
  minutos.textContent = m; // Atualiza o conteúdo do elemento HTML com os minutos atuais
  segundos.textContent = s; // Atualiza o conteúdo do elemento HTML com os segundos atuais
});
