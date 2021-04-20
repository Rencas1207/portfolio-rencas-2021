// ((d) => {
//     const $btnMenu = d.querySelector(".menu-btn"),
//         $navegacion = d.querySelector(".navegacion");
    
//         $btnMenu.addEventListener("click", e => {
//             $btnMenu.firstElementChild.classList.toggle("none");
//             $btnMenu.lastElementChild.classList.toggle("none");
//             $navegacion.classList.toggle("is-active");
//         });

//         d.addEventListener("click", e => {
//             if(!e.target.matches(".navegacion a")) return false;

//             $btnMenu.firstElementChild.classList.remove("none");
//             $btnMenu.lastElementChild.classList.add("none");
//             $navegacion.classList.remove("is-active");
//         });
// })(document);

// console.log('Hola mundo');

// let botonMenu = document.querySelector(".icon-menu"),
//     botonClose = document.querySelector('.icon-close'),
//     navegacion = document.querySelector(".enlaces");

// document.addEventListener('click', e => {
//     botonMenu.classList.toggle('none');
//     botonClose.classList.toggle('none');
//     // navegacion.classList.toggle('dos');
//     navegacion.classList.toggle('is-active');
// })

// document.addEventListener("click",(e) => {
//     if(!e.target.matches(".enlaces a")) return false;

//     // $btnMenu.firstElementChild.classList.remove("none");
//     // $btnMenu.lastElementChild.classList.add("none");
//     // $menu.classList.remove("is-active");
// });

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

// }

// function effectWrite2(){
//     if(j < $string2.length){
//         $text2.innerHTML += $string2.charAt(j);
//         j++;
//         setTimeout(effectWrite2, speed2);
//     }
// }

// function effectWrite3(){
//     if(k < $string3.length){
//         $text3.innerHTML += $string3.charAt(k);
//         k++;
//         setTimeout(effectWrite3, speed3);
//     }
// }

// setTimeout(effectWrite1, speed1);
// setTimeout(effectWrite2, speed2);
// setTimeout(effectWrite3, speed3);

// const $text1 = document.querySelector('.text-title-1'),
//     $text2 = document.querySelector('.text-title-2'),
//     $text3 = document.querySelector('.text-title-3');
//     $string1 = $text1.innerHTML;
//     $string2 = $text2.innerHTML;
//     $string3 = $text3.innerHTML;


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