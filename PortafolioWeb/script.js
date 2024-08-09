/* LANGUAGE */
$(document).ready(function() {
    // Default
    $('.es').show();

    $('#language-switch').change(function() {
        if (this.checked) {
            $('.es').hide();
            $('.en').show();
        } else {
            $('.en').hide();
            $('.es').show();
        }
    });
});



/*SIDEBAR*/
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        //Eliminar clase active
        document.querySelectorAll('.nav-link').forEach(function (item) {
            item.classList.remove('active');
        });

        // Agregar clase active al nuevo
        this.classList.add('active');
    });
});





/*SCROLLTOP*/
window.onscroll = function() {
    var dis_width = window.innerWidth;
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    if(dis_width > 770){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
    else{
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
    
};
// Función para desplazar hacia arriba
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




/* CONTACT FORM */
$(document).ready(function(){
    $('#contactForm').submit(function(event){
        event.preventDefault(); // Previene el envío del formulario por defecto

        // Recoge los datos del formulario
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // Validación básica
        if (formData.name === "" || formData.email === "" || formData.message === "") {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Por favor, complete todos los campos.'
            });
            return;
        }

        // Enviar los datos al servidor usando AJAX
        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/mwpebeer', // La URL de Formspree
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response){
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Mensaje enviado con éxito.'
                });
                
                $('#contactForm')[0].reset();

            },
            error: function(jqXHR, textStatus, errorThrown){
                console.error("Error en AJAX:", textStatus, errorThrown);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al enviar el mensaje.'
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Función para eliminar todas las cookies
    function clearCookies() {
        const cookies = document.cookie.split(";");

        cookies.forEach(cookie => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        });
    }
    
    clearCookies();
});