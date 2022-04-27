/*
    Se obtiener el contenedor padre.
*/
const contenedor = $('.contenedor');

/*
    Gracias al método find() se puede obtener a los hijos de un
    elemento, en este caso se obtiene al elemente con id #id.
*/
let hijo = contenedor.find('#id');

$('#resultado').html(hijo.val())