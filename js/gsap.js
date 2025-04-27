document.addEventListener("DOMContentLoaded", () => {
    // Registrar plugins necesarios
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Crear timeline con configuración optimizada de ScrollTrigger
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger",
            start: "top top",
            end: "+=5000", // Valor más razonable que el original (10000)
            scrub: true,
            markers: true,
            pin: true,
            pinSpacing: false, // Evita espacios en blanco adicionales
            // resto de la configuración...
            onUpdate: self => {
                console.log("Progreso:", self.progress.toFixed(3));
            },
            onComplete: () => {
                console.log("¡Scroll completo!");
            }
        }
    });

    // ANIMACIÓN 1: Sección inicial
    tl.to(".img_capa", {
        scale: 1,
        ease: "power1.inOut",
        duration: 10 // Reducido de 20
    });

    tl.to(".capa-inicio-animacion", {
        background: "#FFFFFFFF",
        ease: "power1.inOut",
        duration: 5
    }, "-=2"); // Superposición para transición más fluida

    // ANIMACIÓN 2: Sección equipo
    tl.to(".equipo", {
        opacity: "100%",
        ease: "power1.inOut",
        duration: 5
    });

    // Animaciones de cintas - duraciones reducidas y mejor superpuestas
    tl.to("#cintauno", {
        x: "30vw",
        ease: "power1.inOut",
        duration: 10 // Reducido de 20
    });

    tl.to("#cintados", {
        x: "10vw",
        ease: "power1.inOut",
        duration: 10 // Reducido de 30
    }, "<0.2"); // Menor superposición para más fluidez

    tl.to("#cintatres", {
        x: "-30vw",
        ease: "power1.inOut",
        duration: 15 // Reducido de 50
    }, "<0.2");

    // Transición más compacta para .equipo
    tl.to(".equipo", {
        y: "-100vh", // Mantener un movimiento de pantalla completa
        ease: "power1.inOut",
        duration: 20 // Reducido de 80
    });

    // ANIMACIÓN 3: Sección packs
    tl.to(".packs-section", {
        opacity: "100%",
        ease: "power1.inOut",
        duration: 5
    }, "-=5"); // Comenzar antes de que termine la animación anterior

    tl.to(".packages__title", {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 10, // Reducido de 20
        ease: "power2.out"
    });

    // Animación de paquetes más compacta
    tl.to(".package", {
        top: "50%",
        left: "50%",
        opacity: 1,
        duration: 2,
        stagger: {
            each: 0.5,
            from: "center",
            ease: "power2.inOut"
        }
    });

    // Pausa más corta
    tl.to({}, { duration: 2 }); // Reducido de 5

    tl.to(".package", {
        left: gsap.utils.wrap(["12.5%", "37.5%", "62.5%", "87.5%"]),
        duration: 5, // Reducido de 10
        stagger: {
            each: 0.3,
            ease: "power2.inOut"
        }
    });

    // Transición más fluida a la siguiente sección
    tl.to(".packs-section", {
        y: "-100vh", // Reducido de -200vh para evitar espacio excesivo
        ease: "power1.inOut",
        duration: 5 // Reducido de 10
    });

    // ANIMACIÓN 4: Sección de tarjetas
    // Configuración inicial
    gsap.set(".cards", {
        opacity: 0,
        y: 0
    });

    tl.to(".card-seccion", {
        y: "-100vh",
        ease: "power2.out",
        duration: 5 // Reducido de 10
    }, "-=2"); // Superponer para transición más suave

    tl.to(".cards", {
        opacity: 1,
        y: 0,
        duration: 5, // Reducido de 10
        ease: "power2.out"
    });

    tl.to(".content-card", {
        rotation: -50,
        transformOrigin: "center center",
        duration: 10, // Reducido de 20
        ease: "power2.inOut"
    });

    tl.to(".pie-seccion-card", {
        opacity: 1,
        y: 0,
        duration: 5, // Reducido de 10
        ease: "power3.out"
    });

    // Transición más rápida a la siguiente sección
    tl.to(".card-seccion", {
        y: "-100vh",
        opacity: 0,
        ease: "power3.inOut",
        duration: 3 // Reducido de 5
    });

    // ANIMACIÓN 5: Sección best-info - Optimizada para flujo continuo
    // ANIMACIÓN 5: Sección best-info - Con posicionamiento ajustado
    tl.to(".best-info-section", {
        y: "-200vh", // Ajustado como mencionaste que funciona
        opacity: 1,
        duration: 3,
        ease: "power2.inOut"
    }, "-=1");

    // Agrupar animaciones internas para que ocurran simultáneamente
    tl.to([".top-text", ".background-info", ".bottom-text"], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 3,
        stagger: 0.5,
        ease: "power2.out"
    });

    // Transición rápida a la siguiente sección
    tl.to(".best-info-section", {
        y: "-100vh", // Ajustado como mencionaste que funciona
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
    });

    // ANIMACIÓN 6: White container y estadísticas - Con posicionamiento ajustado
    // Configurar todos los elementos iniciales de una vez
    gsap.set([
        ".background-icon",
        ".stats-container",
        ".card-in",
        ".stats-number-stast",
        ".stats-description-stast",
        ".cta-title",
        ".cta-button"
    ], { opacity: 0 });

    // Posiciones específicas
    gsap.set(".background-icon", { x: -100, rotation: -5 });
    gsap.set(".stats-container", { x: 1000, padding: "6rem 1rem" });
    gsap.set(".card-in", { x: -1000 });
    gsap.set(".stats-number-stast, .stats-description-stast", { x: 350 });

    // Cambio clave: usar labels para mejor control de animaciones
    tl.addLabel("stats-start");

    // Entrada del contenedor principal
    tl.to(".white-container", {
        opacity: 1,
        y: "-300vh", // Ajustado como mencionaste que funciona
        duration: 3,
        ease: "power2.in"
    }, "-=2");

    // Crear un grupo de animaciones que ocurren después de white-container
    tl.addLabel("stats-sequence");

    // Primera fase de estadísticas
    tl.to(".stats-container", {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "back.out(1.2)"
    }, "stats-sequence");

    tl.to(".background-icon", {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 2,
        ease: "power3.out"
    }, "stats-sequence+=0.5");

    // Animación de contador con duración más corta
    tl.to(".stats-number", {
        opacity: 1,
        duration: 4,
        ease: "power2.out",
        startNum: 0,
        endNum: 25,
        onUpdate: function () {
            const progress = this.progress();
            const target = this.targets()[0];
            const startNum = this.vars.startNum;
            const endNum = this.vars.endNum;
            const currentValue = Math.round(startNum + (progress * (endNum - startNum)));
            target.textContent = "+" + currentValue;
        },
        onComplete: function () {
            const target = this.targets()[0];
            target.textContent = "+25";
            gsap.to(target, {
                scale: 1.05,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
        }
    }, "stats-sequence+=1");

    tl.to(".stats-description", {
        opacity: 1,
        y: -60,
        duration: 2,
        ease: "power2.out"
    }, "stats-sequence+=1.5");

    // Transición rápida
    tl.addLabel("stats-transition");

    tl.to([".background-icon", ".stats-number", ".stats-description"], {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    }, "stats-transition");

    // Elementos start en paralelo para optimizar
    tl.to(["#start_1", "#start_2", "#start_3", ".asterisk"], {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
    }, "stats-transition+=0.5");

    // Posiciones específicas (aplicadas después de aparecer)
    tl.to("#start_1", { y: -100, x: -700, duration: 1 }, "stats-transition+=1");
    tl.to("#start_2", { y: -250, x: -500, duration: 1 }, "stats-transition+=1.2");
    tl.to("#start_3, .asterisk", { y: -200, x: 400, duration: 1 }, "stats-transition+=1.4");

    // Secuencia final compactada con nuevo label
    tl.addLabel("stats-final");

    // Contenedor de estadísticas - simplificado
    tl.to(".stats-container", {
        scale: 1,
        height: "100%",
        padding: "10rem",
        duration: 2,
        ease: "back.out(1.2)"
    }, "stats-final");

    // Animaciones finales en paralelo
    tl.to([".stats-number-two", ".stats-description-two"], {
        opacity: 1,
        y: function (i) { return i === 0 ? -80 : -120; }, // y: -80 para el primero, y: -120 para el segundo
        duration: 2,
        stagger: 0.5,
        ease: "power2.out"
    }, "stats-final+=0.5");

    // Salida rápida
    tl.to([".stats-number-two", ".stats-description-two"], {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    }, "stats-final+=3");

    // Grid stats - más rápido y compacto
    tl.to(".grid-stats", {
        opacity: 1,
        y: -670,
        duration: 2,
        ease: "power2.out"
    }, "stats-final+=4");

    tl.to(".stats", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    }, "stats-final+=4.5");

    tl.to([".stats-number-stast", ".stats-description-stast"], {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3
    }, "stats-final+=5");

    // Card-in con transición más rápida
    tl.to(".card-in", {
        opacity: 1,
        x: 0,
        rotation: -20,
        duration: 2,
        ease: "power2.out"
    }, "stats-final+=6");

    // Final compacto
    tl.addLabel("stats-end");

    tl.to(".grid-stats, .stats", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    }, "stats-end");

    tl.to(".stats-container", {
        padding: "18rem",
        duration: 1.5,
        ease: "back.out(0.7)"
    }, "stats-end+=0.5");

    tl.to(".content-wrapper", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "stats-end+=1");

    tl.to([".cta-title", ".cta-button"], {
        opacity: 1,
        y: -400,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out"
    }, "stats-end+=1.5");

    tl.to(".white-container", {
        opacity: 0,
        y: "-300vh", // Ajustado como mencionaste que funciona
        duration: 3,
        ease: "power2.out"
    });

    // Agregar esto al principio junto con los otros gsap.set
    gsap.set(".contact-section", {
        opacity: 0,
        y: "100vh"  // Posicionarlo debajo inicialmente
    });

    // Y luego modificar la animación final
    tl.to(".contact-section", {
        opacity: 1,
        y: "-300vh",
        duration: 5,
        ease: "power2.inOut"
    }, "stats-end+=1.5");

});