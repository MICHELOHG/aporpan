// Primer bloque de código
var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
}

window.onload = function() {
    moveDivisor();
};

// Segundo bloque de código
var divisor1 = document.getElementById("divisor1"),
    handle1 = document.getElementById("handle1"),
    slider1 = document.getElementById("slider1");

function moveDivisor1() {
    handle1.style.left = slider1.value + "%";
    divisor1.style.width = slider1.value + "%";
}

window.onload = function() {

    moveDivisor1();
};












    Fancybox.bind("[data-fancybox='gallery']", {
        // Ajuste automático de tamaño para imágenes
        Image: {
            zoom: true, // Habilita el zoom de la imagen
            fit: "contain", // Ajusta la imagen dentro del contenedor manteniendo su proporción
        },
        Thumbs: {
            autoStart: false, // No muestra las miniaturas de forma predeterminada
        },
        Toolbar: {
            display: ['close'], // Opciones de la barra de herramientas
        },
    });


    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        const scrollPosition = window.scrollY; // Obtiene la posición actual del scroll
        const targetPosition = document.getElementById("cuerpo2").offsetTop; // Obtiene la posición del div
    
        if (scrollPosition > targetPosition) {
          navbar.classList.add("fixed"); // Añade la clase 'fixed' si el scroll supera la posición del div
        } else {
          navbar.classList.remove("fixed"); // Remueve la clase si el scroll está por encima
        }
      });


      document.addEventListener("DOMContentLoaded", function () {
        // Selecciona el contenedor cuerpo6
        const cuerpo6 = document.querySelector('#cuerpo6');
        
        // Crea una función para animar el porcentaje
        function animatePercentage(element, start, end) {
            let current = start;
            const stepTime = Math.abs(Math.floor(2000 / (end - start))); // 2 segundos de animación
            const timer = setInterval(function () {
                element.textContent = `${current}%`;
                if (current < end) {
                    current++;
                } else {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    
        // Configura el IntersectionObserver
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animar los porcentajes cuando cuerpo6 esté en la pantalla
                    animatePercentage(document.getElementById('percentage'), 50, 100);
                    animatePercentage(document.getElementById('percentage2'), 50, 100);
                    animatePercentage(document.getElementById('percentage3'), 50, 100);
                    
                    // No detener la observación para que se active cada vez que aparece en pantalla
                }
            });
        }, { threshold: 0.5 }); // El 50% del cuerpo6 debe estar visible
    
        // Inicia la observación del contenedor cuerpo6
        observer.observe(cuerpo6);
    });






    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#cuerpo3"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#cuerpo4"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });


     
    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#cuerpo5-servicios"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });






    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#desc-antes"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });


    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#desc-antes2"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });







    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#galeria-imagenes"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });




    document.addEventListener("DOMContentLoaded", function () {
        const cuerpo = document.querySelector("#cuerpo9-inicio"); // Assuming there's a unique element with this ID
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };
    
        // Callback function for the Intersection Observer
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // No unobserve here, so the animation will trigger every time it re-enters the viewport
                } else {
                    entry.target.classList.remove("visible"); // Optionally remove the class when it's out of view
                }
            });
        };
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Observe the element
        observer.observe(cuerpo);
    });

