function mostrarOcultar(id){
    let cuestionario = document.getElementById('cuestionario');
    let informacion = document.getElementById('informacion');
    let final = document.getElementById('final');
    let container = document.getElementById('container');
    
    if(id==='informacion'){
        informacion.style.display = 'block';
        cuestionario.style.display = 'none';
        container.style.display = 'block';
        final.style.display = 'none';

    }else if(id==='cuestionario'){
        informacion.style.display = 'none';
        cuestionario.style.display = 'block';
        container.style.display = 'block';
        final.style.display = 'none';

    }else if(id==='final'){
        informacion.style.display = 'none';
        cuestionario.style.display = 'none';
        container.style.display = 'none';
        final.style.display = 'block';
    }

}





let preguntas1 = [
    {"categoria":"Agenda2030","id_pregunta":1,"nivel":"1","pregunta":"¿Desde cuando suscribió Argentina a la Agenda 2030?"}
] // esta variable seria tomada desde flask

let respuestas1 = [
    {"es_correcta":0,"id_pregunta":1,"id_respuesta":1,"respuesta":"Septiembre 2015"},
    {"es_correcta":1,"id_pregunta":1,"id_respuesta":2,"respuesta":"Diciembre 2015"},
    {"es_correcta":1,"id_pregunta":1,"id_respuesta":3,"respuesta":"Enero 2016"}
] // esta variable seria tomada desde flask

let titulo1 = "Titulo"
let texto1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



function mostrarCuestionario(unaPregunta, unaRespuesta){
    let form = document.getElementById('form').innerHTML;

    form += `<p id="pregunta" class="rounded-3 p-2 fs-2 text-center">${unaPregunta[0].pregunta}</p>`

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
    let informacion = document.getElementById('informacion').innerHTML;

    informacion += `
    <p id="titulo" class="p-2 text-start fs-3 lh-base mt-auto mb-0">${unTitulo}</p>
    <p id="parrafo" class="p-2 text-start fs-6 lh-base mt-auto mb-0">${unTexto}</p>
    `
    
    document.getElementById('informacion').innerHTML = informacion
    document.getElementById('parrafo').style.animation = `typing 1s steps(${unTexto.length}, end) forwards`
}    