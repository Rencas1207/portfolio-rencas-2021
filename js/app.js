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