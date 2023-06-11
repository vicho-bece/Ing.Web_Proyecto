var images = ['./assets/home/Micro1.jpg', 
              './assets/home/Micro2.jpg',
              './assets/home/Micro3.jpg'];

var cont = 0;
let imagen = document.querySelector("img");
imagen.src = images[cont];
let total = images.length;

$(document).ready(function(){
    let carrusel = document.querySelector(".carrusel");
    carrusel.addEventListener('click', () => {

        let imagen = document.querySelector("img");
        let prev = document.querySelector(".prev");
        let next = document.querySelector(".next");
        evento = event.target;

        if( evento == prev ){   
            if(cont == 0){
                imagen.src = images[total - 1];
                cont = total - 1;
            } else {
                imagen.src = images[cont - 1];
                cont--;
            }
        } else if( evento == next ){
            if(cont == (total - 1) ){
                imagen.src = images[0];
                cont = 0;
            } else {
                imagen.src = images[cont + 1];
                cont++;
            }
        }
    })
})