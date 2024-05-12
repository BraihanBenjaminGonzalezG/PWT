let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("gaming");
        habilidades[4].classList.add("servidores");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("puntualidad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;

    // Expresiones regulares para validar el formato del teléfono y del correo electrónico
    var telefonoRegex = /^\+?\d{11}$/; // Formato de teléfono válido: opcionalmente un "+" seguido de 11 dígitos
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo electrónico válido

    // Validar que los campos no estén vacíos
    if (nombre === "" || telefono === "" || correo === "" || tema === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    // Validar el formato del teléfono
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor ingresa un número de teléfono válido (por ejemplo, +56975505169).");
        return false;
    }

    // Validar el formato del correo electrónico
    if (!correoRegex.test(correo)) {
        alert("Por favor ingresa una dirección de correo electrónico válida.");
        return false;
    }

    // Si todos los campos están completos y los formatos son válidos, mostrar el mensaje de éxito
    var mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.style.display = "block";

    // Borrar los campos del formulario después de enviar
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("tema").value = "";
    document.getElementById("mensaje").value = "";

    // Ocultar el mensaje de éxito después de unos segundos
    setTimeout(function(){
        mensajeExito.style.display = "none";
    }, 3000); // Mostrar el mensaje por 3 segundos

    return true;
}




