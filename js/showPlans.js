const planMarketing = document.getElementById("plan-marketing");
const planDesarrollo = document.getElementById("plan-desarrollo");

// Secciones de detalle
const detalleMarketing = document.getElementById("paquete-marketing");
const detalleDesarrollo = document.getElementById("paquete-desarrollo");


const planes = document.getElementById("planes-mostrados");

const verPaquetesBtns = document.querySelectorAll(".ver_paquetes");

detalleMarketing.classList.add("oculto");
detalleDesarrollo.classList.add("oculto");

planMarketing.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Marketing clicked");
    
    detalleMarketing.classList.remove("oculto");
    detalleDesarrollo.classList.add("oculto");
    
    planes.classList.add("oculto");
    
    detalleMarketing.scrollIntoView({ behavior: 'smooth'});
    
});



planDesarrollo.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Desarrollo clicked");
    
    
    detalleDesarrollo.classList.remove("oculto");
    detalleMarketing.classList.add("oculto");
    
    planes.classList.add("oculto");
    

    detalleDesarrollo.scrollIntoView({ behavior: 'smooth',block: 'start' });
});



verPaquetesBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        console.log("Ver Paquetes clicked");

        planes.classList.remove("oculto");
        detalleMarketing.classList.add("oculto");
        detalleDesarrollo.classList.add("oculto");
        verPaquetesBtns.forEach(b => b.setAttribute('href', '#planes'));

    });
});