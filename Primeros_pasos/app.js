/*
    El signo $ indica el uso de jquery.

    ready() permite la activación del código JS,
    una vez que el árbol DOM esté cargado, sin esperar
    a las imágenes o a los demás recursos.
*/
$(document).ready(function () {
    // console.log("funcionando");

    /*
        Toma todos los elementos h1 y gracias al método
        html() se les asigna el valor enviado como argumento.
    */
    $('h1').html('Etiqueta h1');

    /* 
        Obtener el mismo elemento, pero a través de su clase.

        Se deben usar los selectores CSS para obtener los elementos HTML.
    */
    $('.display-4').html('desde clase');

    // Obtener por el id
    $('#idh1').html('desde id');

    // Se modifica el último elemento hijo en el elemento padre con clase .container.
    $('.container h1:last').html('cambio de texto');

    // agregar clase, se usan las clases de bootstrap, ya que este se importo.
    $('#idh2').addClass('text-danger');

    // Remover la clase
    $('#idh2').removeClass('display-4');

    // agregar un elemento HTML a un padre
    $('#contenido').append('<h1>Este es un elemento al final</h1>')
    $('#contenido').prepend('<h1>Este es un elemento al principio</h1>')

    /*
        Dar estilos a los elementos

        Se invoca el método css() que recibe dos parámetros:
        1. El tipo de estilo 2. el valor de ese estilo.
    */
    $('#color-azul').css('color', 'blue');
});