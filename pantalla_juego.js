function carga_datos(numeroNivel){
    const urlPreguntas = `https://proyecto.lara-malenamale.repl.co/listaPreguntas/nivel/${numeroNivel}`

    const urlRespuestas = `https://proyecto.lara-malenamale.repl.co/listaRespuestas`

    let preguntas;
    let respuestas;

    fetch(urlPreguntas)
      .then( response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
      })
      .then( texto => {
        let objeto = JSON.parse(texto);
        preguntas = objeto
      })
      .catch( err => console.error(`Fetch problem: ${err.message}`) );

    fetch(urlRespuestas)
      .then( response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then( texto => {
        return texto
      })
      .catch( err => console.error(`Fetch problem: ${err.message}`) );

    console.log(preguntas,respuestas)
}




let pantalla = document.getElementById('form').innerHTML
let pregunta = document.getElementById('pregunta').innerHTML

function mostrarPregunta(nivel){
  let preguntas = carga_datos('Preguntas',nivel)
  let respuestas = 'a'//carga_datos('Respuestas',nivel)
  console.log(preguntas,respuestas)

  // for(let i=0 ; i<=2 ; i++){
  //   pantalla += `
  //   <div class="rta rounded-3 p-3 ps-5">
  //   <input class="form-check-input" type="radio" name="respuesta" id="rta${i}">
  //   <label class="form-check-label" for="rta${i+1}"> ${respuestas[i].respuesta} </label><br>
  //   </div>
  //   `
  // }
  
  // pantalla += `<button id="enviar" type="submit" class="btn mb-3">Enviar respuesta</button>`

  // document.getElementById('pregunta').innerHTML = pregunta
  // document.getElementById('form').innerHTML = pantalla
}



/* <div class="rta rounded-3 p-3 ps-5">
<input class="form-check-input" type="radio" name="respuesta" id="rta1">
<label class="form-check-label" for="rta1"> Respuesta 1 </label><br>
</div>

<div class="rta rounded-3 p-3 ps-5">
<input class="form-check-input" type="radio" name="respuesta" id="rta2" checked>
<label class="form-check-label" for="rta2"> Respuesta 2 </label><br>
</div>

<div class="rta rounded-3 p-3 ps-5">
<input class="form-check-input" type="radio" name="respuesta" id="rta3">
<label class="form-check-label" for="rta1"> Respuesta 3 </label><br>
</div>

<div class="rta rounded-3 p-3 ps-5 mb-4">
<input class="form-check-input" type="radio" name="respuesta" id="rta4" checked>
<label class="form-check-label" for="rta2"> Respuesta 4 </label><br>
</div>

<button id="enviar" type="submit" class="btn mb-3">Enviar respuesta</button>

*/
