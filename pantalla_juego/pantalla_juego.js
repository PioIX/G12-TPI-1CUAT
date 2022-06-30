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