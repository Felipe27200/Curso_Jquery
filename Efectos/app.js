$(document).ready(function (){
    let resultado = $('#resultado');

    $('.btn-primary').click(function (){
        // Ocultar el elemento

        /*
            Establece que se ocultara después de un segundo
            con un efecto de desvanecimiento, esto gracias
            al argumento, aunque este es opcional.

            Si no lo tiene, entonces, lo ocultara de forma
            inmediata.
        */
        resultado.hide(1000);
    });

    $('.btn-danger').click(function (){
        // Mostrar el elemento

        /*
            Su argumento es similar al de hide(), pero con
            el efecto contrario, también es opcional.
        */
        resultado.show(1000);
    });

    $('.btn-warning').click(function (){
        // Mostrar u Ocultar

        /*
            Funciona igual que al toggleClass(), pero este
            muestra u oculta un elemento, si está oculta o 
            se está mostrando, respectivamente.

            Tiene el mismo argumento con el mismo funcionamiento,
            que los métodos anteriores.
        */
        resultado.toggle(3000);
    });


});