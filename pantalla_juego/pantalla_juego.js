// let preguntasODS4 = [{"categoria":"ODS4","id_pregunta":6,"nivel":"2","pregunta":"¿Cuál de estos no es una meta del ODS 4?"},{"categoria":"ODS4","id_pregunta":7,"nivel":"2","pregunta":"En Argentina, la educación es velada/establecida/articulada por la ley nº 26.206 de educación nacional (LEN). Esta propone:"}]

// let preguntasODS15 = [{"categoria":"ODS15","id_pregunta":8,"nivel":"2","pregunta":"¿Qué propone este ODS?"},{"categoria":"ODS15","id_pregunta":9,"nivel":"2","pregunta":"¿Cuál de estas es una de sus metas?"},{"categoria":"ODS15","id_pregunta":10,"nivel":"2","pregunta":"¿Qué zonas son las más afectadas por el cambio en el uso del suelo y la agricultura?"}]

// let pregutnasODS10 = [{"categoria":"ODS10","id_pregunta":11,"nivel":"2","pregunta":"Las desigualdades de ingresos, género, religión, etc, perjudican el desarrollo social y económico, afectan a la reducción de la pobreza y el bienestar, impidiendo un desarrollo sostenible. ¿Verdadero o falso? "},{"categoria":"ODS10","id_pregunta":12,"nivel":"2","pregunta":"¿Cuál de estas es una de sus metas?"},{"categoria":"ODS10","id_pregunta":13,"nivel":"2","pregunta":"¿Cual de las siguientes es una meta a conseguir en la reducción de las desigualdades?"}]

// let preguntasEstadistica = [{"categoria":"Estadísticas","id_pregunta":14,"nivel":"bonus","pregunta":"¿Cuál crees que es la tasa  total de asistencia escolar de niños entre 6 y 14 años?"},{"categoria":"Estadísticas","id_pregunta":15,"nivel":"bonus","pregunta":"¿Cuál es la tasa de egreso del nivel secundario?"},{"categoria":"Estadísticas","id_pregunta":16,"nivel":"bonus","pregunta":"¿Cuál es la tasa de abandono interanual total en el Nivel Secundario?"},{"categoria":"Estadísticas","id_pregunta":17,"nivel":"bonus","pregunta":"El nivel de inversión pública en educación descendió de 5.40% en 2014, a 4,80% en 2018. ¿Verdadero o falso?"},{"categoria":"Estadísticas","id_pregunta":18,"nivel":"bonus","pregunta":"El Porcentaje de Unidades de Servicio con disposición de Internet con propósitos pedagógicos es del 84.34%, acercándose a su meta del 100%"},{"categoria":"Estadísticas","id_pregunta":19,"nivel":"bonus","pregunta":"¿En cuanto porcentaje se redujo la superficie de bosque nativo en Argentina, en 2019, teniendo en cuenta que en 2015 era del 17.36%?"},{"categoria":"Estadísticas","id_pregunta":20,"nivel":"bonus","pregunta":"La brecha salarial del país logró reducirse significativamente desde el 2016, de 10,6% a un 6.7%"},{"categoria":"Estadísticas","id_pregunta":21,"nivel":"bonus","pregunta":"¿Cuál es el porcentaje de personas que viven por debajo del 50% de la mediana de los ingresos en 2018?"},{"categoria":"Extra","id_pregunta":22,"nivel":"2","pregunta":"¿Qué es el Proyecto Bosques Nativos y Comunidad?"},{"categoria":"Extra","id_pregunta":23,"nivel":"2","pregunta":"¿Qué crees que es el Programa Argentina unida por la integración de los barrios populares?"},{"categoria":"Agenda2030","id_pregunta":24,"nivel":"1","pregunta":"¿Cuáles son los 5 ejes alrededor de los que gira la agenda 2030 (5P)?"}]


// function carga_preguntas(numeroNivel){
//     const url = `https://proyecto.lara-malenamale.repl.co/listaPreguntas/nivel/${numeroNivel}`

//     fetch(url)
//       .then( response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.text();
//       })
//       .then( texto => {
// 		    console.log(texto)
//         const objeto = JSON.parse(texto);

//       })
//       .catch( err => console.error(`Fetch problem: ${err.message}`) );
// }



let preguntas = [
{"categoria":"Agenda2030","id_pregunta":1,"nivel":"1","pregunta":"¿Desde cuando suscribió Argentina a la Agenda 2030?"},
{"categoria":"Extra","id_pregunta":2,"nivel":"1","pregunta":"¿Qué es PAMPA 2030?"},
{"categoria":"ODS4","id_pregunta":3,"nivel":"2","pregunta":"¿Qué se entiende por educación de calidad?"},
{"categoria":"Agenda2030","id_pregunta":4,"nivel":"1","pregunta":"Marque la opción que explica una de las diferencias entre los ODS y los ODM (Objetivos de Desarrollo del Milenio)"},
{"categoria":"Agenda2030","id_pregunta":5,"nivel":"1","pregunta":"¿A qué llamamos Desarrollo Sostenible?"}]

let respuestas = [
{"es_correcta":0,"id_pregunta":1,"id_respuesta":1,"respuesta":"Septiembre 2015"},
{"es_correcta":1,"id_pregunta":1,"id_respuesta":2,"respuesta":"Diciembre 2015"},
{"es_correcta":1,"id_pregunta":1,"id_respuesta":3,"respuesta":"Enero 2016"}]
let aa = [
{"es_correcta":0,"id_pregunta":2,"id_respuesta":4,"respuesta":"Plataforma Argentina de Monitoreo para la Agenda 2030"},
{"es_correcta":1,"id_pregunta":2,"id_respuesta":5,"respuesta":"Proyecto Argentino de Movilizaci\u00f3n de los Principales Actores de la agenda 2030"},
{"es_correcta":1,"id_pregunta":2,"id_respuesta":6,"respuesta":"Proyecto Argentino de Monitoreo y Priorizaci\u00f3n de la Agenda 2030"},
{"es_correcta":0,"id_pregunta":3,"id_respuesta":7,"respuesta":"Educaci\u00f3n que fomente el desarrollo de diversas habilidades y capacidades que permitan a las personas llevar una buena vida, tomar decisiones informadas y aportar a sus comunidades."},
{"es_correcta":1,"id_pregunta":3,"id_respuesta":8,"respuesta":"Educaci\u00f3n enfocada en metodolog\u00edas que favorezcan un mejor desempe\u00f1o del empleado, fomentando una mayor eficiencia y calidad en el proceso de producci\u00f3n."},
{"es_correcta":1,"id_pregunta":3,"id_respuesta":9,"respuesta":"Una  educaci\u00f3n costosa, con una gran inversi\u00f3n detr\u00e1s por parte de organismos internacionales, que se caracteriza por la utilizaci\u00f3n de elementos de \u00faltima tecnolog\u00eda."},
{"es_correcta":1,"id_pregunta":4,"id_respuesta":10,"respuesta":"Los objetivos son iguales pero la Agenda 2030 aspira a plazos m\u00e1s cortos en la realizaci\u00f3n de las metas."},
{"es_correcta":0,"id_pregunta":4,"id_respuesta":11,"respuesta":"Los ODS plantean un enfoque m\u00e1s universal, tanto en los pa\u00edses que participan, como en la interseccionalidad de los conflictos"},
{"es_correcta":1,"id_pregunta":4,"id_respuesta":12,"respuesta":"Los ODM solo se trabajaban en los pa\u00edses desarrollados, motivo por el cual no hab\u00eda un compromiso real por parte de todos los pa\u00edses."},
{"es_correcta":1,"id_pregunta":5,"id_respuesta":13,"respuesta":"Aquel que se enfoca globalmente en el mejoramiento de los procesos de reciclaje, as\u00ed como la reducci\u00f3n del uso de pl\u00e1sticos, y otros agentes contaminantes."},
{"es_correcta":0,"id_pregunta":5,"id_respuesta":14,"respuesta":"Aquel que permite que las necesidades mundiales actuales puedan ser satisfechas, sin da\u00f1ar la capacidad de las futuras generaciones de satisfacer las suyas."},
{"es_correcta":1,"id_pregunta":5,"id_respuesta":15,"respuesta":"Aquel que plantea principalmente la idea de un equilibrio ecol\u00f3gico entre sistemas ecol\u00f3gicos, en homeostasis."}
]


let pantalla = document.getElementById('form').innerHTML
let pregunta = document.getElementById('pregunta').innerHTML

function mostrarPregunta(){
  pregunta += preguntas[0].pregunta

  for(let i=0 ; i<=2 ; i++){
    pantalla += `
    <div class="rta rounded-3 p-3 ps-5">
    <input class="form-check-input" type="radio" name="respuesta" id="rta${i}">
    <label class="form-check-label" for="rta${i+1}"> ${respuestas[i].respuesta} </label><br>
    </div>
    `
  }
  
  pantalla += `<button id="enviar" type="submit" class="btn mb-3">Enviar respuesta</button>`

  document.getElementById('pregunta').innerHTML = pregunta
  document.getElementById('form').innerHTML = pantalla
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
