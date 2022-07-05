// function mostrarOcultar(id){
//     let cuestionario = document.getElementById('cuestionario');
//     let informacion = document.getElementById('informacion');
//     let final = document.getElementById('final');
//     let container = document.getElementById('container');
    
//     if(id==='informacion'){
//         informacion.style.display = 'block';
//         cuestionario.style.display = 'none';
//         container.style.display = 'block';
//         final.style.display = 'none';

//     }else if(id==='cuestionario'){
//         informacion.style.display = 'none';
//         cuestionario.style.display = 'block';
//         container.style.display = 'block';
//         final.style.display = 'none';

//     }else if(id==='final'){
//         informacion.style.display = 'none';
//         cuestionario.style.display = 'none';
//         container.style.display = 'none';
//         final.style.display = 'block';
//     }

// }


function carga_preguntas(numeroNivel){
    const url = `https://proyecto.lara-malenamale.repl.co/listaPreguntas/nivel/${numeroNivel}`

    fetch(url)
      .then( response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
      })
      .then( texto => {
		    console.log(texto)
        const objeto = JSON.parse(texto);

      })
      .catch( err => console.error(`Fetch problem: ${err.message}`) );
}


function pregunta(){

}









function crea_lista(nombre_lista, txt) {
	var select = document.getElementById(nombre_lista);
	for(var i = 0; i < txt.length; i++) {
		var opt = txt[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}


