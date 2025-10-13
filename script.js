//Menu Mobile
$(document).ready(function () {
  //Menu mobile inicia fechado
  $(".menu-container-mobile").hide();

  //Abre o menu mobile
  $(".menu-mobile").click(function () {
    $(".menu-container-mobile").slideToggle();
  });

  // Fecha o menu ao clicar em qualquer item do menu
  $(".menu-link").click(function () {
    $(".menu-container-mobile").slideUp();
  });
});

//Efeito digitação
document.addEventListener("DOMContentLoaded", function () {
  const elemento = document.querySelector(".subtitulo");
  const texto = "Desenvolvedor Front-End";
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    } else {
      setTimeout(apagar, 1500); //Espera 1,5 segundos antes de apagar o texto
    }
  }

  function apagar() {
    if (i > 0) {
      elemento.textContent = texto.substring(0, i - 1);
      i--;
      setTimeout(apagar, 50);
    } else {
      setTimeout(digitar, 500); //Espera 0,5 segundos antes de digitar novamente
    }
  }

  digitar();
});

//Animação barra de progresso
document.addEventListener("DOMContentLoaded", function () {
  const progresses = document.querySelectorAll(
    ".habilidades-conteudo-card-progresso"
  );

  progresses.forEach((progress) => {
    const max = parseInt(progress.getAttribute("max"));
    const target = parseInt(progress.getAttribute("value"));
    progress.value = 0;
    let current = 0;

    const speed = 10; //ms entre cada incremento
    const step = Math.ceil(target / 40); // quanto aumenta por vez

    function animate() {
      if (current < target) {
        current += step;
        if (current > target) current = target;
        progress.value = current;
        requestAnimationFrame(animate);
      } else {
        progress.value = target; // garante que o valor final seja exato
      }
    }
    animate();
  });
});

//Máscara para estilização do número do telefone
$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
});

//Enviar mensagem do formulário via WhatsApp
function enviarWhats(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5551999852157"; //Altere o número do telefone para o seu

  const msg = `Olá! Me chamo ${nome}. ${mensagem}.`;
  const msgFormatada = encodeURIComponent(msg);

  const url = `http://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}

// Carregar mais formacao
document.addEventListener("DOMContentLoaded", function () {
  const formacao = Array.from(document.querySelectorAll(".formacao-card"));
  const btnCarregar = document.getElementById("carregar-mais");
  const initialVisible = 6; // exibir inicialmente
  const increment = 3; // quantidade a adicionar por clique

  if (!btnCarregar || formacao.length === 0) return;

  // Função para atualizar visibilidade dos cards
  function atualizarVisibilidade(visibleCount) {
    formacao.forEach((el, idx) => {
      if (idx < visibleCount) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });

    if (visibleCount >= formacao.length) {
      btnCarregar.style.display = "none";
    } else {
      btnCarregar.style.display = "";
    }
  }

  // Inicializa: mostra apenas os primeiros `initialVisible`
  atualizarVisibilidade(initialVisible);

  let currentVisible = Math.min(initialVisible, formacao.length);

  btnCarregar.addEventListener("click", function () {
    currentVisible = Math.min(currentVisible + increment, formacao.length);
    atualizarVisibilidade(currentVisible);
  });
});

// Carregar mais projetos
document.addEventListener("DOMContentLoaded", function () {
  const projetos = Array.from(document.querySelectorAll(".projetos-card-link"));
  const btnCarregar = document.getElementById("carregar-mais");
  const initialVisible = 6; // exibir inicialmente
  const increment = 3; // quantidade a adicionar por clique

  if (!btnCarregar || projetos.length === 0) return;

  // Função para atualizar visibilidade dos cards
  function atualizarVisibilidade(visibleCount) {
    projetos.forEach((el, idx) => {
      if (idx < visibleCount) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });

    if (visibleCount >= projetos.length) {
      btnCarregar.style.display = "none";
    } else {
      btnCarregar.style.display = "";
    }
  }

  // Inicializa: mostra apenas os primeiros `initialVisible`
  atualizarVisibilidade(initialVisible);

  let currentVisible = Math.min(initialVisible, projetos.length);

  btnCarregar.addEventListener("click", function () {
    currentVisible = Math.min(currentVisible + increment, projetos.length);
    atualizarVisibilidade(currentVisible);
  });
});
