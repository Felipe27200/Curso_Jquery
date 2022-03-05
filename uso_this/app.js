$(document).ready(function () {
    /*
        Al enviarle como argumento la función pulsarElemento,
        el método on(), recibe una referencia a esa función,
        por la que la puede ejecutar como si fuera una función
        anónima declarada en su lista de argumentos.

        Por esto, la función pulsarElemento puede usar
        $(this) para acceder a las propiedades y entidades
        del elemento actual.
    */
    $('#contenedor2').on('click', pulsarElemento)
});

function pulsarElemento(){
    if ($(this) != null)
        console.log("Se envió la referencia: " + $(this).html('Me recibió'))
    else
        console.log("Fallo total")
}