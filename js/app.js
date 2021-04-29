document.addEventListener("DOMContentLoaded", e => {
    loader();
    menu();
    maquinaDeEscribir();
    scrollTopButton(".scroll-top-btn");
    showScroll();

});

function loader(){
    const loader = document.querySelector(".loader");
    const body = document.querySelector(".body");
    window.onload = () =>{
        setTimeout(function(){
            loader.style.opacity = "0";
            
            setTimeout(function(){
                loader.style.display = "none";
                
            },1500);
        }, 1500);
    }
}

function menu(){
    ((d) => {
        const $btnMenu = d.querySelector(".icon"),
            $menu = d.querySelector(".enlaces");
        
            $btnMenu.addEventListener("click",(e) => {
                $btnMenu.firstElementChild.classList.toggle("none");
                $btnMenu.lastElementChild.classList.toggle("none");  
                $menu.classList.toggle("is-active");
            
            });
    
            d.addEventListener("click",(e) => {
                if(!e.target.matches(".enlaces a")) return false;
    
                $btnMenu.firstElementChild.classList.remove("none");
                $btnMenu.lastElementChild.classList.add("none");
                $menu.classList.remove("is-active");
            });
    
            
    })(document);
}


function maquinaDeEscribir(){
    const $text1 = document.querySelector('.text-title-1'),
    $text2 = document.querySelector('.text-title-2'),
    $text3 = document.querySelector('.text-title-3');

let writing = (string1 , string2, string3) => {
    $text1.innerHTML = "";
    $text2.innerHTML = "";
    $text3.innerHTML = "";
    let arrFromString = string1.split('');
    let i = 0;
    let printString1 = setInterval(() => {
        $text1.innerHTML += arrFromString[i];
        i++;

        if(i === arrFromString.length){
            clearInterval(printString1);

            let arrFromString2 = string2.split('');
            i = 0;
            let printString2 = setInterval(() => {
                $text2.innerHTML += arrFromString2[i];
                i++;

                if(i === arrFromString2.length){
                    clearInterval(printString2);
                    
                    let arrFromString3 = string3.split('');
                    i = 0;
                    let printString3 = setInterval(() => {
                        $text3.innerHTML += arrFromString3[i];
                        i++;

                        if(i === arrFromString3.length){
                            clearInterval(printString3);
                        }
                    }, 80);
                }
            }, 80);
            // document.body.style.color = 'steelblue';
        }
    }, 80);
};  

writing($text1.textContent, $text2.textContent, $text3.textContent);

}

function scrollTopButton(btn){
    const $scrollBtn = document.querySelector(btn);

    window.addEventListener('scroll', e => {
        //Retorna el numero de pixeles que han sido desplazado en el documento mediante el scroll vertical 
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
    })

    document.addEventListener('click', e => {
        if(e.target.matches(btn)){

            window.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    });
}

function showScroll(){
    const $animateTop = document.querySelectorAll('.animate-top'),
        $animateLeft = document.querySelectorAll('.animate-left'),
        $animateRight = document.querySelectorAll('.animate-right');

    let scrollTop = document.documentElement.scrollTop,
    heightAnimate;

    for (let i = 0; i < $animateTop.length; i++) {
        heightAnimate = $animateTop[i].offsetTop;
        if(heightAnimate - 580 < scrollTop){
            $animateTop[i].style.opacity = 1;
            $animateTop[i].classList.add('showTop');
        }
    }

    for (let i = 0; i < $animateLeft.length; i++) {
        heightAnimate = $animateLeft[i].offsetTop;
        if(heightAnimate - 500 < scrollTop){
            $animateLeft[i].style.opacity = 1;
            $animateLeft[i].classList.add('showLeft');
        }
    }

    for (let i = 0; i < $animateRight.length; i++) {
        heightAnimate = $animateRight[i].offsetTop;
        if(heightAnimate - 500 < scrollTop){
            $animateRight[i].style.opacity = 1;
            $animateRight[i].classList.add('showRight');
        }
    }
}

window.addEventListener('scroll', showScroll);

/*---------ContactForm--------------*/
((d) => {
    const $form = d.querySelector(".formulario"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-responsive");

    $form.addEventListener("submit",e => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/rencasdag.12@gmail.com",{
            method: "POST",
            body: new FormData(e.target),
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) =>{
            console.log(json);
            $loader.classList.add("none");
            location.hash = "#gracias";
            $form.reset();
        })
        .catch((err) =>{
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}`;
            $loader.classList.add("none");
        }).finally(()=> {
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);
        });
    });
})(document);

// const $hamburgesa = document.querySelector("#container-menu"),
//     $cerrar = document.querySelector(".icon-close"),
//     $menu = document.querySelector(".menu");

// function mostrar(){
//     $hamburgesa.style.padding = '12px 12px 200vw 200vw';
//     $cerrar.style.display = "block";
//     $menu.style.display = "flex";
// }

// function ocultar(){
//     // $hamburgesa.style.padding = '26px 26px 52px 52px';
//     $hamburgesa.style.padding = '0px';
//     $cerrar.style.display = "none";
//     $menu.style.display = "none";
//     $menu.style.opacity = "1";
//     $menu.style.visibility = "none";
// }


// Efecto Maquina escribir
// const $text1 = document.querySelector('.text-title-1'),
//     $text2 = document.querySelector('.text-title-2'),
//     $text3 = document.querySelector('.text-title-3'),
//     $string1 = $text1.innerHTML;
//     $string2 = $text2.innerHTML;
//     $string3 = $text3.innerHTML;

// $text1.innerHTML = "";
// $text2.innerHTML = "";
// $text3.innerHTML = "";

// let speed1 = 150,
// speed2 = 150,
// speed3 = 150,
//     i = 0,
//     j = 0,
//     k = 0;

// function effectWrite1(){
//     if(i < $string1.length){
//         $text1.innerHTML += $string1.charAt(i);
//         i++;
//         setTimeout(effectWrite1, speed1);
//     }