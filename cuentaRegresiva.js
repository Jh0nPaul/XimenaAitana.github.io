// cuentaRegresiva.js

document.addEventListener("DOMContentLoaded", function () {
    // Fecha del evento (cambia esto a la fecha y hora de tu evento)
    const eventDate = new Date("Aug 10, 2024 00:00:00").getTime();

    // Actualiza la cuenta regresiva cada segundo
    const countdown = setInterval(function () {

        // Obtiene la fecha y hora actuales
        const now = new Date().getTime();

        // Calcula la distancia entre la fecha actual y la fecha del evento
        const distance = eventDate - now;

        // Cálculos de tiempo para días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el resultado en el elemento con la clase "cuenta-regresiva"
        document.querySelector(".cuenta-regresiva").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Si la cuenta regresiva ha terminado, muestra un mensaje
        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector(".cuenta-regresiva").innerHTML = "¡El evento ha comenzado!";
        }
    }, 1000);
});
