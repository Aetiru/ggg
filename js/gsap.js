document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth >= 768) {

        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Crear timeline con config    uración optimizada de ScrollTrigger
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".trigger",
                start: "top top",
                end: "+=62000", // Valor más razonable que el original (10000)
                scrub: true,
                markers: true,
                pin: true,
                pinSpacing: false, // Evita espacios en blanco adicionales          
            }
        });


        // ANIMACIÓN 1: Sección inicial
        ////////////////////////////////////////////////////////////////////
        tl.to(".img_capa", {
            scale: 1,
            ease: "power1.inOut",
            duration: 100 // Reducido de 20
        });

        tl.to(".header", {
            opacity: 0,
            duration: 5,
            ease: "power1.inOut"
        }, "0.1");

        tl.to(".capa-inicio-animacion", {
            background: "#FFFFFFFF",
            ease: "power1.inOut",
            duration: 100
        }, "-=2"); // Superposición para transición más fluida

        ////////////////////////////////////////////////////////////////////    
        tl.to(".equipo", {
            opacity: "100%",
            ease: "power1.inOut",
            duration: 90
        });

        const equipoText = document.querySelector('#equipo-text-1');
        const pieEquipo = document.querySelector('#pie-equipo-2');


        if (equipoText && pieEquipo) {
            const equipoEffect = new BlurScrollEffect(equipoText);
            const pieEffect = new BlurScrollEffect(pieEquipo);

            // Replace the original animation with the new split text animation
            tl.to(equipoEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 60,
                stagger: 0.5,
                ease: "power2.inOut",
            }, "-=2");

            tl.to(pieEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 60,
                stagger: 0.5,
                ease: "power2.inOut",
            }, "-=1");
        }

        tl.to("#cintauno", {
            x: "30vw",
            ease: "power1.inOut",
            duration: 90
        });

        tl.to("#cintados", {
            x: "10vw",
            ease: "power1.inOut",
            duration: 90 // Reducido de 30
        }, "<0.2");

        tl.to("#cintatres", {
            x: "-30vw",
            ease: "power1.inOut",
            duration: 90 // Reducido de 50
        }, "<0.2");

        tl.to(".equipo", {
            opacity: 0,
            // y: "-100vh", // Mantener un movimiento de pantalla completa
            ease: "power1.inOut",
            duration: 20 // Reducido de 80
        });

        ////////////////////////////////////////////////////////////////////
        // ANIMACIÓN 3: Sección packs
        tl.to(".packs-section", {
            y: 0, // Reducido de -300vh para evitar espacio excesivo
            opacity: "100%",
            ease: "power1.inOut",
            duration: 40
        }, "-=5"); // Comenzar antes de que termine la animación anterior

        tl.to(".packages__title", {
            x: 0,
            rotation: 0,
            opacity: 1,
            duration: 70, // Reducido de 20
            ease: "power3.inOut"
        });

        // Animación de paquetes más compacta
        tl.to(".package", {
            top: "50%",
            left: "50%",
            opacity: 1,
            duration: 100,
            stagger: {
                each: 6,
                from: "center",
                ease: "power2.inOut"
            }
        });

        // Pausa más corta
        tl.to({}, { duration: 100 }); // Reducido de 5

        tl.to(".package", {
            left: gsap.utils.wrap(["12.5%", "37.5%", "62.5%", "87.5%"]),
            duration: 200, // Reducido de 10
            stagger: {
                each: 0.3,
                ease: "power2.inOut"
            }
        });

        tl.to({}, { duration: 100 }); // Reducido de 5



        tl.to(".package", {
            top: "50%",
            left: "87.5%",
            opacity: 1,
            duration: 100,
            stagger: {
                each: 0.5,
                from: "center",
                ease: "power2.inOut"
            }
        }, "-=0.5");

        tl.to(".packages__title", {
            x: 0,
            rotation: 0,
            opacity: 0,
            duration: 40, // Reducido de 20
            ease: "power3.inOut"
        }, "-=0.5"); // Comenzar antes de que termine la animación anterior

        tl.to({}, { duration: 20 }); // Reducido de 5

        tl.to(".package", {
            top: "50%",
            x: -1400,
            opacity: 1,
            duration: 100,
            stagger: {
                each: 0.5,
                from: "center",
                ease: "power2.inOut"
            }
        }, "-=0.5");

        tl.to(".packs-section", {
            opacity: 0,
            y: 0
        });

        // Configuración inicial
        gsap.set(".card-seccion", {
            opacity: 0,
            y: 0
        });

        tl.to(".card-seccion", {
            opacity: 1,
            ease: "power2.inOut",
            duration: 40 // Reducido de 10
        }, "-=2"); // Superponer para transición más suave

        const backgroundText = document.querySelector('.background-text');
        console.log('backgroundText: ', backgroundText);
        if (backgroundText) {
            const backgroundEffect = new BlurScrollEffect(backgroundText);

            // Replace the original animation with the new split text animation
            tl.to(backgroundEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 60,
                stagger: 8,
                ease: "power2.inOut",
            }, "-=2");
        }
        // tl.to(".background-text", {
        //     opacity: 1,
        //     duration: 30,
        //     ease: "power2.inOut"
        // })

        tl.to(".content-card", {
            opacity: 1,
            y: 0,
            duration: 30,
            ease: "power2.inOut"
        });

        tl.to({}, { duration: 30 }); // Reducido de 5


        tl.to(".cards:nth-child(1)", {
            opacity: 1,
            y: 0,
            left: "10%",
            rotation: -15,
            duration: 100,
            ease: "power2.inOut"
        });
        // Pause
        tl.to({}, { duration: 30 });

        // Second card
        tl.to(".cards:nth-child(2)", {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 100,
            ease: "power2.inOut"
        });

        // Pause
        tl.to({}, { duration: 30 });

        // Third card
        tl.to(".cards:nth-child(3)", {
            opacity: 1,
            y: 0,
            rotation: 15,
            duration: 100,
            ease: "power2.inOut"
        });

        // Final position animation for all cards
        tl.to(".cards", {
            opacity: 1,
            duration: 100,
            ease: "power2.out",
            stagger: {
                each: 0.2,
                from: "center"
            }
        });

        tl.to(".pie-seccion-card", {
            opacity: 1,
            y: 0,
            duration: 40, // Reducido de 10
            ease: "power3.out"
        });

        // // // // Transición más rápida a la siguiente sección
        tl.to(".card-seccion", {
            y: 0,
            opacity: 0,
            ease: "power3.inOut",
            duration: 30 // Reducido de 5
        });

        gsap.set(".best-info-section", { opacity: 0, y: 0 });

        // ANIMACIÓN 5: Sección best-info - Con posicionamiento ajustado
        tl.to(".best-info-section", {
            opacity: 1,
            y: 0,
            duration: 70,
            ease: "power2.inOut"
        });

        const topText = document.querySelector('.top-text');
        const backgroundInfo = document.querySelector('.background-info');
        const bottonText = document.querySelector('#bottom-text-scoll');

        if (topText && backgroundInfo && bottonText) {
            const topTextEffect = new BlurScrollEffect(topText);
            const backgroundInfoEffect = new BlurScrollEffect(backgroundInfo);
            const bottonTextEffect = new BlurScrollEffect(bottonText);

            // Replace the original animation with the new split text animation
            tl.to(topTextEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 60,
                stagger: 0.5,
                ease: "power2.inOut",
            },
                "-=2");
            tl.to(backgroundInfoEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 100,
                stagger: 6,
                ease: "power2.inOut",
            },
                "-=1");
            tl.to(bottonTextEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 60,
                stagger: 1,
                ease: "power2.inOut",
            },
                "-=1");
        }
        // Agrupar animaciones internas para que ocurran simultáneamente
        tl.to([".top-text", ".background-info", ".bottom-text"], {
            opacity: 1,
            scale: 1,
            duration: 70,
            stagger: 0.5,
            ease: "power2.out"
        });

        // Transición rápida a la siguiente sección
        tl.to(".best-info-section", {
            opacity: 0,
            y: 0,
            duration: 60,
            ease: "power2.inOut"
        });

        // // ANIMACIÓN 6: White container y estadísticas - Con posicionamiento ajustado
        // // Configurar todos los elementos iniciales de una vez
        gsap.set([
            ".background-icon",
            ".stats-container",
            ".card-in",
            ".stats-number-stast",
            ".stats-description-stast",
            ".cta-title",
            ".cta-button",
            "#start_1",
            "#start_2",
            "#start_3",
            ".asterisk"
        ], { opacity: 0 });

        // Posiciones específicas
        gsap.set(".background-icon", { x: -100, rotation: -5 });
        gsap.set(".stats-container", { x: 1000, padding: "6rem 1rem" });
        gsap.set(".card-in", { x: -1000 });
        gsap.set(".stats-number-stast, .stats-description-stast", { x: 350 });

        // // Cambio clave: usar labels para mejor control de animaciones
        tl.addLabel("stats-start");

        // // Entrada del contenedor principal
        tl.to(".white-container", {
            opacity: 1,
            y: 0, // Ajustado como mencionaste que funciona
            duration: 60,
            ease: "power2.in"
        }, "-=2");

        // // Primera fase de estadísticas
        tl.to(".stats-container", {
            opacity: 1,
            x: 0,
            duration: 80,
            ease: "back.out(1.1)"
        });

        tl.to(".background-icon", {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 100,
            ease: "power3.out"
        });

        // // Animación de contador con duración más corta
        tl.to(".stats-number", {
            opacity: 1,
            duration: 100,
            y: 0,
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
        });

        tl.to(".stats-description", {
            opacity: 1,
            y: 0,
            duration: 100,
            ease: "power2.out"
        });

        tl.to([".background-icon", ".stats-number", ".stats-description"], {
            opacity: 0,
            duration: 90,
            ease: "power2.out"
        });

        // // Posiciones específicas (aplicadas después de aparecer)
        tl.to("#start_1", { opacity: 1, y: -100, x: -700, duration: 60 });
        tl.to("#start_2", { opacity: 1, y: -250, x: -500, duration: 60 });
        tl.to("#start_3, .asterisk", { opacity: 1, y: -200, x: 400, duration: 60 });

        // // Contenedor de estadísticas - simplificado
        tl.to(".stats-container", {
            scale: 1,
            height: "100%",
            padding: "10rem",
            duration: 70,
            ease: "back.out(1.2)"
        });

        // // Animaciones finales en paralelo
        tl.to([".stats-number-two", ".stats-description-two"], {
            opacity: 1,
            y: 0,
            duration: 100,
            stagger: 0.5,
            ease: "power2.out"
        });

        // // Salida rápida
        tl.to([".stats-number-two", ".stats-description-two"], {
            opacity: 0,
            duration: 70,
            ease: "power2.out"
        });

        // // Grid stats - más rápido y compacto
        tl.to(".grid-stats", {
            opacity: 1,
            y: 0,
            duration: 100,
            ease: "power2.out"
        });

        tl.to(".stats", {
            opacity: 1,
            y: 0,
            duration: 100,
            ease: "power2.out"
        });

        tl.to([".stats-number-stast", ".stats-description-stast"], {
            opacity: 1,
            x: 0,
            duration: 100,
            ease: "power2.out",
            stagger: 0.3
        });

        // // Card-in con transición más rápida
        tl.to(".card-in", {
            opacity: 1,
            x: 0,
            rotation: -20,
            duration: 100,
            ease: "power2.out"
        });

        tl.to({}, { duration: 30 });

        tl.to(".grid-stats, .stats", {
            opacity: 0,
            duration: 60,
            ease: "power2.out"
        });

        tl.to(".stats-container", {
            padding: "18rem",
            duration: 60,
            ease: "back.out(0.7)"
        });

        tl.to(".content-wrapper", {
            opacity: 1,
            y: 0,
            duration: 70,
            ease: "power2.out"
        });

        tl.to([".cta-title", ".cta-button"], {
            opacity: 1,
            y: 0,
            duration: 100,
            stagger: 0.3,
            ease: "power2.out"
        });

        tl.to(".white-container", {
            opacity: 0,
            y: 0,
            duration: 60,
            ease: "power2.inOut"
        });

        // gsap.set(".contact-section", { opacity: 0, y: 0 });

        tl.to(".contact-section", {
            opacity: 1,
            y: 0,
            duration: 60,
            ease: "power2.out"
        }, "-=2"); // Superposición para transición más fluida

        // tl.to(".contact-section", {
        //     opacity: 0,
        //     y: 0,
        //     duration: 60,
        //     ease: "power2.out"
        // }, "-=2");

        gsap.set(".footer", { opacity: 0, y: 0 });

        tl.to(".footer", {
            opacity: 1,
            y: "-70vh",
            duration: 60,
            ease: "power2.out"
        }, "-=2");

        const footerText = document.querySelector('#footer-text');

        if (footerText) {

            const footerEffect = new BlurScrollEffect(footerText);
            // Replace the original animation with the new split text animation
            tl.to(footerEffect.splitter.getChars(), {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: 60,
                stagger: 26,
                ease: "power2.inOut",
            }, "-=0.2");
        }

        tl.to(".footer-content", {
            opacity: 1,
            y: 0,
            duration: 60,
            ease: "power2.out"
        }, "-=2");
    } else {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Configura la animación específicamente para la sección equipo
        let equipoSection = document.querySelector('.equipo');

        if (equipoSection) {
            // Primero, asegúrate de que la sección esté visible inicialmente
            gsap.set('.equipo', { opacity: 1 });

            // Crea un ScrollTrigger para la sección equipo específicamente
            let equipoTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".equipo",
                    start: "top center", // Comienza cuando la parte superior de equipo llega al centro
                    end: "bottom top", // Termina cuando la parte inferior sale por arriba
                    scrub: 1, // Suaviza la animación con el scroll
                    // markers: true, // Útil para debug, quitar en producción
                    toggleActions: "play none none reverse", // Play al entrar, reverse al salir
                }
            });

            // Texto principal
            const equipoText = document.querySelector('#equipo-text-1');
            if (equipoText && typeof BlurScrollEffect === 'function') {
                try {
                    const equipoEffect = new BlurScrollEffect(equipoText);
                    equipoTimeline.to(equipoEffect.splitter.getChars(), {
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                        duration: 0.5,
                        stagger: 0.03,
                        ease: "power2.out",
                    }, 0);
                } catch (e) {
                    // Fallback si el efecto falla
                    equipoTimeline.to(equipoText, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    }, 0);
                }
            }

            // Animación de las cintas (más sutil en móviles)
            equipoTimeline.to("#cintauno", {
                x: "30vw", // Menos desplazamiento para móviles
                ease: "power1.inOut",
                duration: 100
            }, 0.2);

            equipoTimeline.to("#cintados", {
                x: "15vw", // Menos desplazamiento para móviles
                ease: "power1.inOut",
                duration: 100
            }, 0.3);

            equipoTimeline.to("#cintatres", {
                x: "-30vw", // Menos desplazamiento para móviles
                ease: "power1.inOut",
                duration: 100
            }, 0.4);

            // Texto del pie
            const pieEquipo = document.querySelector('#pie-equipo-2');
            if (pieEquipo && typeof BlurScrollEffect === 'function') {
                try {
                    const pieEffect = new BlurScrollEffect(pieEquipo);
                    equipoTimeline.to(pieEffect.splitter.getChars(), {
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                        duration: 0.5,
                        stagger: 0.03,
                        ease: "power2.out",
                    }, 0.5);
                } catch (e) {
                    // Fallback si el efecto falla
                    equipoTimeline.to(pieEquipo, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    }, 0.5);
                }
            }

            // Creamos otro ScrollTrigger para que la sección desaparezca al seguir scrolleando
            ScrollTrigger.create({
                trigger: ".equipo",
                start: "center top", // Comienza cuando el centro de equipo llega a la parte superior
                endTrigger: ".packs-section", // Termina en la siguiente sección
                end: "top bottom",
                onEnter: () => {
                    gsap.to(".equipo", {
                        opacity: 0,
                        duration: 10,
                        ease: "power1.inOut"
                    });
                },
                onLeaveBack: () => {
                    gsap.to(".equipo", {
                        opacity: 1,
                        duration: 10,
                        ease: "power1.inOut"
                    });
                }
            });
        } else {
            console.error("No se encontró la sección 'equipo'");
        }
    }
});
