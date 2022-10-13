// Con este código de javascript cree el menu hamburguesa para todas las secciones.

// Primero cree 3 constantes para que desde el DOM y con el elemento querySelector podamos llamar a las clases creadas en CSS.
const navegacion = document.querySelector("nav");
const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");

// En seguida le creamos una función a la constante "abrir" con el elemnto "addeventlistener" y poniendo el evento "click". En seguida al evento correspondiente le indicamos que cuando de "click" no ejecute la llamda como enlace que ya habiamos puesto en HTML como "a href" y lo considere solo como evento "click" ya que es la funcíon que creamos para la constante. Después a la constante "navegación" que es la que llama al DOM la clase "nav" le indicamos que con el elemento "classList" que hace como mención a la lista de lases que tenemos en el CSS y el elemento "add" añada la clase "desplegable" para que a la clase "nav" que habiamos creado en CSS le agregue la clase "desplegable" que es el menu hamburguesa para dispositivos moviles. 
abrir.addEventListener("click", function(evento) {
    evento.preventDefault();
    navegacion.classList.add("desplegable");
});
// Aquí creamos otra función pero con la constante "cerrar" y le hemos indicado que haga exactamente lo mismo pero en vez de utilizar el elemento "add" utilizamos el elemento "remove" para que cuando queramos cerrar el menu hamburguesa quite la clase "desplcegable" de la clase "nav" y desaparezca el menu hamburguesa.
cerrar.addEventListener("click", function(evento) {
    evento.preventDefault();
    navegacion.classList.remove("desplegable");
});