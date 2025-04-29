// Ejemplo básico (opcional)
console.log("Bienvenido al proyecto romántico");

function startCountdown() {
    const timerElement = document.getElementById('countdown-timer');

    // Fecha inicial: 7 de septiembre de 2024
    const startDate = new Date('2024-09-07T00:00:00'); 

    // Actualizar el contador cada segundo
    setInterval(() => {
        const now = new Date(); // Fecha y hora actual
        const elapsedTime = Math.floor((now - startDate) / 1000); // Tiempo transcurrido en segundos

        // Cálculos para días, horas, minutos y segundos
        const days = Math.floor(elapsedTime / (24 * 60 * 60));
        const hours = Math.floor((elapsedTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((elapsedTime % (60 * 60)) / 60);
        const seconds = elapsedTime % 60;

        // Mostrar en el elemento HTML
        timerElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }, 1000); // Actualiza cada segundo
}

// Ejecutar el contador al cargar la página
startCountdown();