$(document).ready(function(){
    $("#reclamosugerencia").validate({
        rules:{
            asunto:{
                required: true
            },
            nombre:{
                required: true,
                strCheck: true,
                maxlength: 30
            },
            apellido:{
                required: true,
                strCheck: true,
                maxlength: 30
            },
            correo:{
                required: true,
                email: true
            },
            tipo:{
                required: true
            },
            descripcion:{
                required: true,
                maxlength: 400
            }
        },
        messages:{
            asunto:{
                required: "Este campo es obligatorio, necesitamos saber el tema del asunto a tratar..."
            },
            nombre:{
                required: "Este campo es obligatorio",
                strCheck: "Los caracteres admitidos son  [A-Z] y [a-z] c/s espacios",
                maxlength: "El nombre debe tener 30 caracteres como maximo"
            },
            apellido:{
                required: "Este campo es obligatorio",
                strCheck: "Los caracteres admitidos son  [A-Z] y [a-z] c/s espacios",
                maxlength: "El apellido debe tener 30 caracteres como maximo"
            },
            correo:{
                required: "Este campo es obligatorio para tener medio de contacto",
                email: "El formato del correo es invalido"
            },
            tipo:{
                required: "Este campo es obligatorio, necesitamos saber el tipo de tramite que desea realizar"
            },
            descripcion:{
                required: "Este campo es obligatorio, necesitamos los detalles para saber su situacion",
                maxlength: "Excedio de los 400 caraceteres para el area de texto"
            }
        },
        submitHandler: function(form){
            $(location).prop('href', 'resultados');
        }
        
    });
    $.validator.addMethod("strCheck",function(value, element){
            return /^[a-zA-Z ]+$/.test(value);
    }); 
});