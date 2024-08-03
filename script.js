let pantalla = document.getElementById('pantalla');

let botones = document.querySelectorAll('input[type="button"]');

botones.forEach(boton => { // Itera sobre cada botón y agrega un listener de clic

    boton.addEventListener('click', () => {
        
        const valor = boton.value; // Obtiene el valor del botón clickeado
        
        if (valor === "C") {

            pantalla.value = ""; // Limpia la pantalla si se presiona el botón "C"
        }

        else if(valor === "=") { // Calcula el resultado de la expresión en la pantalla
            
            try {

                let result = new Function('return ' + pantalla.value)(); // Usa Function en lugar de eval para mayor seguridad
               
                pantalla.value = result; // Muestra el resultado en la pantalla
           
            } catch (err) {
               
                pantalla.value = "Error de cálculo."; // Muestra un mensaje de error si hay un problema con la expresión
            
            }
        } else { // Para los botones que no tienen una funcionalidad especial
           
            pantalla.value += valor; // Agrega el valor del botón a la pantalla
        }

    })
})


