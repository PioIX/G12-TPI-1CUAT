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
                    <input type="text" class="form-control mt-0 mb-2" id="rta${i}" placeholder="Ingrese la respuesta que quiere agregar" required>
                </div>
                <div class="col-1 ">
                    <label for="correcto${i}" class="form-label mb-0">Correcta?</label> <br>
                    <input class="form-check-input" type="radio" id="correcto${i}" name="correcto" value="correcto${i}" style="height:30px;width:30px;" required>
                </div>
            </div>
        </div>
        `;
    };

    forms += `<input class="btn btn-success col-12" value="Enviar Nueva Pregunta" type="submit" onclick="validacion()" data-dismiss="modal" data-backdrop="false" style="background-color: #2C7342; border:none"> `
    return document.getElementById('respuestas').innerHTML = forms;
}




// ----------- VALIDACION BOOTSTRAP (GENERAL) ------------

function validacion() {
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        
        form.addEventListener('submit', function (event) {
            
            if (!form.checkValidity() || !validacionManual()) {
                event.preventDefault()
                event.stopPropagation()
            }
            
            form.classList.add('was-validated');
            
        }, false)
    })
    
}

// ---------------------------------------------

// ------------- VALIDACION MANUAL (CONCORDANCIA NIVEL-CATEGORIA) -------------

function validacionManual(){
    let categoriaPregunta = document.getElementById('categoria').value; 
    let nivelPregunta = document.getElementById('nivel').value;
    console.log(categoriaPregunta, nivelPregunta)

    let alert = new bootstrap.Modal(document.getElementById('alert'))
    $(".modal-backdrop").remove();

    if((nivelPregunta == '1' && categoriaPregunta !== 'Agenda 2030') ||
       (nivelPregunta == '2' && categoriaPregunta == 'Agenda 2030') || 
       (nivelPregunta == '2' && categoriaPregunta == 'Estadísticas') ||
       (nivelPregunta == 'bonus' && categoriaPregunta !== 'Estadísticas'))
    {
        document.getElementById('alertBody').innerHTML = `
        La opción de <i>Categoría</i> y <i>Nivel</i> seleccionadas no son compatibles entre sí. Tenga en cuenta lo siguiente:<br><br>
        <ul>
        <li> Nivel 1 --> Categoría Agenda 2030 </li>
        <li> Nivel 2 --> Categoría ODS 4, ODS 10, ODS 15 </li>
        <li> Nivel 3 --> Categoría Estadísticas </li>
        </ul>`
        alert.show()
        return false
    };
   
    return true
}

// ---------------------------------------------