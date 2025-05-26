function validateLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación de credenciales
    if (email === 'admin@gmail.com' && password === 'admin') {
        // Redirige al dashboard
        window.location.href = 'Dashboard.html';
    } else {
        alert('Credenciales incorrectas. Usa "admin@gmail.com" para correo y "admin" para contraseña.');
    }
}