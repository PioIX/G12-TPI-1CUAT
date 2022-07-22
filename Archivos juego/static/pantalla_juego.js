let titulo1 = "Titulo"
let texto1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


function mostrarCuestionario(unaPregunta, unaRespuesta){
    let form = "";

    form += `<p id="pregunta" class="rounded-3 p-2 fs-2 text-center">${unaPregunta.pregunta}</p>`

    for(let i=0 ; i<=2 ; i++){
        form += `
        <div class="rta rounded-3 p-3 ps-5">
        <input class="form-check-input" type="radio" name="respuesta" id="rta${i+1}">
        <label class="form-check-label" for="rta${i+1}"> ${unaRespuesta[i].respuesta} </label><br>
        </div>
        `
    }
      
    form += `<button id="enviar" type="submit" class="btn mb-3">Enviar respuesta</button>`
    
    document.getElementById('form').innerHTML = form
}

function mostrarTeoria(unTitulo, unTexto){
    document.getElementById('teoria').innerHTML = "";
    let teoria = "";

    teoria += `
    <p id="titulo" class="p-2 text-start fs-3 lh-base mt-auto mb-0">${unTitulo}</p>
    <p id="parrafo" class="p-2 text-start fs-6 lh-base mt-auto mb-0">${unTexto}</p>
    `
    
    document.getElementById('teoria').innerHTML = teoria
    document.getElementById('parrafo').style.animation = `typing 1s steps(${unTexto.length}, end) forwards`
}    

// para filtrar las respuestas del nivel 2, hay que poner preguntas2[0/1/2]
function filtrarRespuestas(nivel) {
  let respuestasFiltradas = [];

  ids_de_preguntas = nivel.map(i => i.id_pregunta);

  for(let k=0 ; k<ids_de_preguntas.length ; k++){
    preguntasPorID = respuestas.filter(i => i.id_pregunta == ids_de_preguntas[k])
    respuestasFiltradas.push(preguntasPorID);
  }
  return respuestasFiltradas

}

// para filtrar la respuesta correcta del nivel 2 seria filtrarPorRtaCorrecta(lista[0/1/2]) y dsp eso .id_respuesta para comparar el id 
function filtrarPorRtaCorrecta(listaRtas) {
  let correcta;
  for(let i=0 ; i<listaRtas.length ; i++){
    correcta = listaRtas.filter(i => i.es_correcta == '0')[0];
  }
  return correcta
}

//rtas para preguntas 24 no estan cargadas, si no funciona nivel 1 es por eso

function introduccion() {

  // TEORIA
  let titulo1 = 'Introducción a la agenda';
  let texto1 = `A finales de septiembre de 2015, los países del mundo se reunieron en la Cumbre Mundial Sobre el Desarrollo Sostenible, para aprobar la Agenda 2030 y sus Objetivos de Desarrollo Sostenible (ODS), incluyendo a Argentina. Esta nueva Agenda tuvo el objetivo de reemplazar a la establecida anteriormente, que incluía los Objetivos de Desarrollo del Milenio (ODM), y ampliar su campo de acción. En conjunto engloba un total de 17 ODS y 169 metas entre ellos. Tiene el propósito de crear un mundo mejor para las poblaciones actuales y futuras, por lo que requiere el compromiso de los Estados y todos los actores sociales involucrados. Los cambios que propone deben de implementarse en un plazo de 15 años (desde su creación hasta el año 2030). Sus base se asientan en la pobreza extrema, la educación, la equidad de género, el cuidado de la salud reproductiva, la disminución de las enfermedades, el cuidado del ambiente y las alianzas de cooperación.<br>

Estos Objetivos abarcan todas las dimensiones del Desarrollo Sostenible: la económica, la ambiental, la social y aunque menos nombrada, la dimensión cultural. Éstas se basan en un enfoque de derechos con su carácter de integralidad.`;

  let titulo2 = '¿Qué es el desarrollo sostenible?';
  let texto2 = `Es aquel que es capaz de satisfacer las necesidades actuales sin comprometer los recursos y posibilidades de las futuras generaciones para satisfacer las suyas. En otras palabras, es un modelo de desarrollo que busca utilizar los recursos disponibles en el presente sin comprometer su existencia en el futuro.Trata de lograr, equilibradamente el desarrollo económico, el desarrollo social y la protección del ambiente. Es importante porque vela por el mejoramiento de la calidad de vida en toda actividad humana, utilizando solamente la cantidad justa y necesaria de recursos naturales.`;

  let boton = document.getElementById('siguiente');


  // hay que hacerlo con jquery
  boton.addEventListener("click", function(){mostrarTeoria(titulo1,texto1)});

  boton.addEventListener("click", function(){
                                    mostrarTeoria(titulo2,texto2);
                                    document.getElementById('teoria').style.display = 'none';
                                    document.getElementById('form').style.display = 'block';
                                    });

  
  // CUESTIONARIO
  
  
  let respuestas1A = filtrarRespuestas(preguntas1)[0]
  let pregunta1A = preguntas1[0]

  boton.addEventListener("click", function(){mostrarCuestionario(pregunta1A,respuestas1A)})
  
}

window.onload = introduccion()