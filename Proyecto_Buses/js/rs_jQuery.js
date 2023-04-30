$(document).ready(function(){
    $("#reclamo_sugerencia").validate({
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
            email:{
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
            email:{
                required: "Este campo es obligatorio",
                email: true
            },
            tipo:{
                required: "Este campo es obligatorio"
            },
            descripcion:{
                required: "Este campo es obligatorio"
            }
        }
    })
})