$(document).ready(function () {
    /*
        Evento click.

        El método click(), trabaja con el evento click,
        recibe como argumento una función, que contiene
        las tareas que hay que realizar cuando el evento
        ocurra.
    */

    // Se puede obtener un elemento con Jquery y almacenarlo en una variable (su referencia).
    let parrafo = $('#resultado p');

    /*
        Cuando ocurra el evento click (se hace click sobre el elemento con el selector),
        se ejecutará el método enviado como argumento a la función click().
    */
    $('.btn-primary').click(function (){
        /*
            Se usa la variable que hace referencia al elemento p,
            para usar los métodos Jquery y agregarle una clase.
        */
        parrafo.addClass('display-4');
    });

    /*
        Se quita la clase agregada por el evento del 
        anterior botón con selector btn-primary.
    */
    $('.btn-danger').click(function (){
        parrafo.removeClass('display-4');
    });

    $('.btn-warning').click(function (){
        /*
            Lo que toggleClass hace es remover la clase si existe en 
            el elemento o removerla en caso de que no exista.

            Ergo, cada vez que se oprima el botón va a remover o 
            a agregar la clase.
        */
        parrafo.toggleClass('display-4');
    });

    // EVENTO KEYUP

    /*
        Este evento se ejecuta cada vez que una tecla se suelta
        en el elemnto input.
    */
    let input = $('#input1');
    let contenedor = $('#contenedor');

    input.attr('placeholder', 'Digita cualquier tecla')

    input.keyup(function () {
        /*
            Cada vez que se ingrese un valor en el input,
            este se asignará al elemento contendor,
            de esta forma siempre se actualizará su datos
            con los ingresados en el input.
        */
        contenedor.html(input.val())

        if (input.val() == '')
            contenedor.html('Estoy esperando información :v');
    });
});
