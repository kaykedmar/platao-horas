horasSegundos()
  
function horasSegundos() { 
  const dataAtual = new Date();
  
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const days = dataAtual.getFullYear(); 
  document.querySelector("#js-hours").innerHTML = hora + ":" + minutos;
  document.getElementById("js-days").innerHTML = days
 
  if (hora < 20) { 
    document.getElementById("js-photo").src='img/segundoplatao.webp'; 
  } 
  }