document.addEventListener("DOMContentLoaded", e => {
    scrollTopButton(".scroll-top-btn");
    navegacionFija();
});


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