document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os botões que fazem avançar os passos
  const botoes = document.querySelectorAll(".btn-proximo");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Encontra o passo atual (com a classe 'ativo')
      const passoAtual = document.querySelector(".passo.ativo");

      // Lê o número do próximo passo a partir do atributo data-proximo
      const proximoId = botao.getAttribute("data-proximo");
      const proximoPasso = document.getElementById(`passo-${proximoId}`);

      // Remove o passo atual e mostra o próximo
      if (passoAtual) passoAtual.classList.remove("ativo");
      if (proximoPasso) proximoPasso.classList.add("ativo");
    });
  });
});
