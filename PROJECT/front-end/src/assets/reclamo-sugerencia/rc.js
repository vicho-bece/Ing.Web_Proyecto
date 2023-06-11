$(document).ready(function(){
    $("#reclamosugerencia").validate({
        rules:{
            asunto:{
                required: true
            },
            nombre:{
                required: true
            },
            apellido:{
                required: true
            },
            correo:{
                required: true,
                email: true
            },
            tipo:{
                required: true
            },
            descripcion:{
                required: true
            }
        },
        messages:{
            asunto:{
                required: "Este campo es obligatorio"
            },
            nombre:{
                required: "Este campo es obligatorio"
            },
            apellido:{
                required: "Este campo es obligatorio"
            },
            correo:{
                required: "Este campo es obligatorio",
                email: "El formato del correo es invalido"
            },
            tipo:{
                required: "Este campo es obligatorio"
            },
            descripcion:{
                required: "Este campo es obligatorio"
            }
        }
    });
});