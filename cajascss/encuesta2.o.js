

//clase que hace que el array por si solo ya contenga la funcion de verificar las respuestas con dos parametros 
class Pregunta {
  constructor(texto,  respuestaCorrecta) {
    this.texto = texto;
   
    this.respuestaCorrecta = respuestaCorrecta;
  }

  esCorrecta(respuesta) {
    return respuesta === this.respuestaCorrecta;
  }
}

export const preguntas = [
  new Pregunta(
    "¿Cuántos libros tiene la Biblia?", 
    "66"
  ),
  new Pregunta("¿En cuántos años se escribió la Biblia?", "1600"),
  new Pregunta("¿En cuántos idiomas se escribió?", "3"),
];



export const contenedor = document.querySelector("#contenedor-preguntas");

preguntas.forEach((pregunta, index) => {
 const div = document.createElement("div");
  div.classList.add('pregunta', `pregunta-${index + 1}`);
  div.innerHTML = `
  <article class="pregunta pregunta-${index + 1}"> 
    <h3>Pregunta ${index + 1}</h3>
    
    <p>${pregunta.texto}</p>
    
     <input type="text" id="respuesta-${index + 1}">
  </article>


  `;
  contenedor.appendChild(div);
});


// Funcion para verificar las respuestas del array


function verificarRespuestas(event) {
  event.preventDefault();

  let mensaje = "";
  let correctas = 0;

  preguntas.forEach((pregunta, index) => {

    const respuestaUsuario = document.getElementById(`respuesta-${index + 1}`).value;

 if (pregunta.esCorrecta(respuestaUsuario)) {
      mensaje += `Pregunta ${index + 1}: ✅ Correcta\n`;
      correctas++;
    } else {
      mensaje += `Pregunta ${index + 1}: ❌ Incorrecta (era: ${pregunta.respuestaCorrecta})\n`;
    }
  });

  mensaje += `\nObtuviste ${correctas} de ${preguntas.length} correctas`;
  alert(mensaje);
}



const boton = document.querySelector('#btn-enviar');
boton.addEventListener('click', () => {

  verificarRespuestas(event);
  console.log('Botón clickeado');
});



// variable para ubicar en el html el contador limite.
let tiempo = document.querySelector("#cuenta-regresiva");
 
 let inicio;
 let intervalo;
//Mostrar array en Html


// funcion para el contador 
 function tiempolimite(){
 inicio=setTimeout(Tictac,1000*30)
intervalo= setInterval (terminar,1000);
 document.querySelector("#cuenta-regresiva").textContent=30;
    }
    function terminar(){
   let tiempo = document.querySelector("#cuenta-regresiva").textContent;
   document.querySelector("#cuenta-regresiva").textContent=tiempo -1;

  if(tiempo <= "1"){
  clearInterval(intervalo);
  clearTimeout(inicio);
}
  
  
      }
  function Tictac(){
  
    alert("GAME OVER");
   
    
        }


console.log(tiempolimite());