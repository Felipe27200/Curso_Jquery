// MANEJAR UN EVENTO SUBMIT EN UN FORM
$('#formulario').submit(function (evento) {
    /*
        Hay que declarar un parámetro en está función,
        ya que cumple la misma función que en JS.
        Con esto, ya es posible usarla para que no se
        ejecuta el evento por defecto del elemento,
        en este caso, el envío de información.

        Así se imprime en consola el console.log() y
        se puede trabajar con los datos dentro del
        formulario.
    */
    evento.preventDefault();

    let nombre = $('#nombre').val();

    console.log("Click en el botón\nValor Nombre: " + nombre);
});