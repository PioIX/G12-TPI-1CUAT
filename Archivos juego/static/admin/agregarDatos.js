function cantidadRespuestas(){
    let tipoDePregunta = document.getElementsByName('tipoPregunta');
    tipoDePregunta = Object.assign([],tipoDePregunta);
    let eleccion = (tipoDePregunta.filter(i => i.checked))[0].value;
    mostrarFormRespuestas(eleccion)
}

function mostrarFormRespuestas(eleccion){
    let cant = (eleccion == 'vof' ? 2 : 3);
    let forms = "";

    for(let i=1 ; i<=cant ; i++){
        forms += `
        <div class="col-12 rounded-3 p-3 mb-3 bg-white rounded shadow-sm">
            <div class="row g-3">
                <div class="col-11">
                    <label for="rta${i}" class="form-label mb-0">Respuesta</label>
                    <input type="text" class="form-control mt-0 mb-2" id="rta${i}" placeholder="Ingrese la respuesta que quiere agregar">
                </div>
                <div class="col-1 ">
                    <label for="correcto${i}" class="form-label mb-0">Correcta?</label> <br>
                    <input class="form-check-input h-50 w-50" type="checkbox" id="correcto${i}">
                </div>
            </div>
        </div>
        `;
    };

    forms += `<input class="btn btn-primary col-12" type="submit" value="Enviar Nueva Pregunta">`
    return document.getElementById('respuestas').innerHTML = forms;
}

function validar(){
    
}