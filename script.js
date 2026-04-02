document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", (e) => {
        const password = document.getElementById("password").value;
        const hobbies = document.querySelectorAll('input[name="hobby"]:checked');
        
        let errores = [];

        // Validación manual de hobbies (mínimo 1)
        if (hobbies.length === 0) {
            errores.push("Debes seleccionar al menos un hobby.");
        }

        // Validación de longitud exacta de password (aunque el pattern lo hace, esto es doble check)
        if (password.length !== 16) {
            errores.push("La contraseña debe tener exactamente 16 caracteres.");
        }

        if (errores.length > 0) {
            e.preventDefault(); // Detiene el envío
            alert("Atención:\n" + errores.join("\n"));
        } else {
            alert("Enviando datos...");
        }
    });

    // Confirmación al limpiar
    form.addEventListener("reset", (e) => {
        if (!confirm("¿Seguro que quieres borrar todo el formulario?")) {
            e.preventDefault();
        }
    });
});
