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

    forms += `<input class="btn btn-primary col-12" value="Enviar Nueva Pregunta" type="submit" onclick="validacion()" data-dismiss="modal">`
    return document.getElementById('respuestas').innerHTML = forms;
}

function validar(){
    let textoPregunta = document.getElementById('textoPregunta').value; 
    let categoriaPregunta = document.getElementById('categoria').value; 
    let nivelPregunta = document.getElementById('nivel').value; 
    // let respuesta1 = document.getElementById('rta1').value;
    // let respuesta2 = document.getElementById('rta2').value;
    // let respuesta3 = document.getElementById('rta3').value;
    // let correcta = document.getElementsByName('correcto');

    let alert = new bootstrap.Modal(document.getElementById('alert'))

    if(textoPregunta.length <= 0){
        document.getElementById('alertBody').innerHTML = `
            Falta completar el campo <i>Pregunta</i>. Ingresá el texto de la pregunta que quieras agregar a la base`
        alert.show()
    };
    if(categoriaPregunta == 'null'){
        document.getElementById('alertBody').innerHTML = `
            Falta elegir una opcion para el campo <i>Categoria</i>. Seleccioná la categoría correspondiente`
        alert.show()
    };
    if(nivelPregunta == 'null'){
        document.getElementById('alertBody').innerHTML = `
        Falta elegir una opcion para el campo <i>Nivel</i>. Seleccioná el nivel correspondiente`
        alert.show()
    };
    if((nivelPregunta == '1' && categoriaPregunta !== 'Agenda 2030') || (nivelPregunta == 'bonus' && categoriaPregunta !== 'Estadísticas')){
        document.getElementById('alertBody').innerHTML = `
        Las opciones seleccionadas de <i>Categoría</i> y <i>Nivel</i> no corresponden entre sí. 
            - Nivel 1 --> Categoría Agenda 2030
            - Nivel 2 --> Categoría ODS 4, ODS 10, ODS 15
            - Nivel 3 --> Categoría Estadísticas`
        alert.show()
    };


}

// ----------- VALIDACION BOOTSTRAP ------------

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

// ------------- VALIDACION MANUAL -------------

function validacionManual(){
    let categoriaPregunta = document.getElementById('categoria').value; 
    let nivelPregunta = document.getElementById('nivel').value;
    console.log(categoriaPregunta, nivelPregunta)

    let alert = new bootstrap.Modal(document.getElementById('alert'))

    
    switch(nivelPregunta){
        case '1':
            console.log('a')
            if(categoriaPregunta !== 'Agenda 2030'){
                document.getElementById('alertBody').innerHTML = `
                La opción de <i>Categoría</i> y <i>Nivel</i> seleccionadas no son compatibles entre sí. Tenga en cuenta lo siguiente:
                - Nivel 1 --> Categoría Agenda 2030
                - Nivel 2 --> Categoría ODS 4, ODS 10, ODS 15
                - Nivel 3 --> Categoría Estadísticas`
                alert.show()
                return false
            }
            break;
        case '2':
            if(categoriaPregunta == 'Agenda 2030' || categoriaPregunta == 'Estadísticas'){
                document.getElementById('alertBody').innerHTML = `
                La opción de <i>Categoría</i> y <i>Nivel</i> seleccionadas no son compatibles entre sí. Tenga en cuenta lo siguiente:
                - Nivel 1 --> Categoría Agenda 2030
                - Nivel 2 --> Categoría ODS 4, ODS 10, ODS 15
                - Nivel 3 --> Categoría Estadísticas`
                alert.show()
                return false
            }
            break;
        case 'bonus':
            if(categoriaPregunta !== 'Estadísiticas'){
                document.getElementById('alertBody').innerHTML = `
                La opción de <i>Categoría</i> y <i>Nivel</i> seleccionadas no son compatibles entre sí. Tenga en cuenta lo siguiente:<br>
                - Nivel 1 --> Categoría Agenda 2030 <br>
                - Nivel 2 --> Categoría ODS 4, ODS 10, ODS 15<br>
                - Nivel 3 --> Categoría Estadísticas`
                alert.show()
                return false
            }
            break;
               
    }
    return true
}

// ---------------------------------------------