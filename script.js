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

//Máscara para estilização do número do telefone
$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
});

//Enviar mensagem do formulário via WhatsApp
function enviarWhats(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5551999999999"; //Altere o número do telefone para o seu

  const msg = `Olá! Me chamo ${nome}. ${mensagem}.`;
  const msgFormatada = encodeURIComponent(msg);

  const url = `http://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}
