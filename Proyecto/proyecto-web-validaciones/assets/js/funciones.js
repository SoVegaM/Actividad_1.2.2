document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            let esValido = true;
            const campos = ['nombre', 'email', 'mensaje'];

            campos.forEach(id => {
                const input = document.getElementById(id);
                const errorSpan = document.getElementById(`error-${id}`);
                
                
                if (errorSpan) errorSpan.textContent = '';
                input.classList.remove('is-invalid');

                
                if (!input.value.trim()) {
                    esValido = false;
                    input.classList.add('is-invalid');
                    if (errorSpan) {
                        errorSpan.textContent = `El campo ${input.name} no puede estar vacío.`;
                    }
                }
            });

            if (esValido) {
                alert('Formulario enviado');
                contactForm.reset();
            }
        });
    }
});