(function(){
    emailjs.init("2KOqq-disbqTiWgsV"); 
})();




const EMAILJS_CONFIG = {
    serviceID: 'service_7t1oe2e',    
    templateID: 'template_o0ez18u'   
};


document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    // Verificar que el formulario existe
    if (!contactForm) {
        console.error('❌ Formulario de contacto no encontrado');
        return;
    }

    // Función para mostrar mensajes de estado
    function showMessage(message, type) {
        statusMessage.textContent = message;
        statusMessage.style.display = 'block';
        statusMessage.style.marginTop = '15px';
        statusMessage.style.padding = '12px';
        statusMessage.style.borderRadius = '5px';
        statusMessage.style.textAlign = 'center';
        statusMessage.style.fontWeight = '500';
        
        // Estilos según el tipo de mensaje
        switch(type) {
            case 'success':
                statusMessage.style.backgroundColor = '#d4edda';
                statusMessage.style.color = '#155724';
                statusMessage.style.border = '1px solid #c3e6cb';
                break;
            case 'error':
                statusMessage.style.backgroundColor = '#f8d7da';
                statusMessage.style.color = '#721c24';
                statusMessage.style.border = '1px solid #f5c6cb';
                break;
            case 'loading':
                statusMessage.style.backgroundColor = '#d1ecf1';
                statusMessage.style.color = '#0c5460';
                statusMessage.style.border = '1px solid #bee5eb';
                break;
            default:
                statusMessage.style.backgroundColor = '#f8f9fa';
                statusMessage.style.color = '#383d41';
                statusMessage.style.border = '1px solid #dee2e6';
        }
    }

    // Función para ocultar mensaje después de un tiempo
    function hideMessageAfterDelay(seconds = 5) {
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, seconds * 1000);
    }

    // Evento submit del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('input[type="submit"]');
        const originalValue = submitBtn.value;
        
        // Deshabilitar botón y mostrar estado de carga
        submitBtn.disabled = true;
        submitBtn.value = 'Enviando...';
        showMessage('📧 Enviando tu mensaje...', 'loading');

        // Obtener fecha y hora actual formateada
        const now = new Date();
        const formattedTime = now.toLocaleString('es-PE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // Preparar parámetros del email
        const templateParams = {
            from_name: this.from_name.value,
            user_email: this.user_email.value,
            business_type: this.business_type.value,
            service_type: this.service_type.value,
            message: this.message.value,
            time: formattedTime
        };

        console.log('📨 Enviando email con los siguientes parámetros:', templateParams);

        // Enviar email usando EmailJS
        emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            templateParams
        )
        .then(function(response) {
            console.log('✅ Email enviado exitosamente:', response.status, response.text);
            
            // Mostrar mensaje de éxito
            showMessage('✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
            
            // Limpiar formulario
            contactForm.reset();
            
            // Restaurar botón
            submitBtn.disabled = false;
            submitBtn.value = originalValue;
            
            // Ocultar mensaje después de 5 segundos
            hideMessageAfterDelay(5);
            
        })
        .catch(function(error) {
            console.error('❌ Error al enviar email:', error);
            
            // Mostrar mensaje de error
            showMessage('❌ Error al enviar. Por favor intenta nuevamente o contáctanos por WhatsApp.', 'error');
            
            // Restaurar botón
            submitBtn.disabled = false;
            submitBtn.value = originalValue;
            
            // Ocultar mensaje después de 7 segundos
            hideMessageAfterDelay(7);
        });
    });

    console.log('✅ EmailJS configurado correctamente');
});