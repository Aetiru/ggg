// Los datos de los paquetes
const packages = [
    {
        type: "BEST",
        typeId: "A",
        description: "Concentrato sui veicoli cargo e sul trasporto di merci leggere.",
        ulr: `assets/svgs/start1.svg`,
        info: [
            { title: "GRUPPO MOTORE:", content: "variatore di fase, punterie idrauliche." },
            { title: "GRUPPO VELOCE:", content: "variatore di fase, punterie idrauliche." },
            { title: "GRUPPO ALIMENTAZIONE:", content: "collettore di aspirazione." },
            { title: "GRUPPO IMPIANTO GPL/METANO BI-FUEL:", content: "multi valvola, sensore map, centralina, evaporatore/riduttore, flauto, iniettori, commutatore benzina (serbatoio escluso)." },
            { title: "GRUPPO TRASMISSIONE:", content: "differenziale, anteriore/posteriore (esclusi centralina haldex, motorino e frizioni), semiassi e giunti omocinetici." },
            { title: "GRUPPO CIRCUITO ELETTRICO:", content: "motorino alzavetro, bobina accensione, centralina fusibili, scatola relè, anello antagonista, interruttore stop, sensore del numero dei giri motore." },
            { title: "GRUPPO VOLANO/FRIZIONE:", content: "cuscinetto spingidisco, attuatore frizione smart (frizione esclusa)." },
            { title: "GRUPPO CIRCUITO FRENANTE:", content: "sensore ABS, cilindro maestro, cilindro secondario." },
            { title: "GRUPPO CIRCUITO RISCALD/RAFFREDD.:", content: "sensore temperatura." },
            { title: "GRUPPO SCARICO:", content: "sensore pressione, intercooler, collettore di scarico, valvola EGR, compressore volumetrico." },
            { title: "GRUPPO CAMBIO AUTOMATICO:", content: "pompa olio, centralina mechatronic." },
            { title: "GRUPPO ARIA CONDIZIONATA:", content: "ventola radiatore, valvola espansione, moto posizionatori." }
        ]
    },
    {
        type: "BEST",
        typeId: "B",
        description: "Concentrato su veicoli passeggeri e trasporto urbano.",
        ulr: `assets/svgs/start2.svg`,
        info: [
            { title: "GRUPPO MOTORE:", content: "aste, bilancieri, catena distribuzione" },
            { title: "GRUPPO ORGANI GUIDA:", content: "scatola idroguida, guida elettrica, pompa servosterzo elettrica, pompa servosterzo meccanica." },
            { title: "GRUPPO ALIMENTAZIONE:", content: "pompa iniezione, n°1 (uno) iniettore benzina/gasolio (no gpl/metano)" },
            { title: "GRUPPO TRASMISSIONE:", content: "albero di trasmissione, sensore ABS." },
            { title: "GRUPPO CIRCUITO ELETTRICO:", content: "motorino tergicristallo, motorino pompa lavavetri, bobina accensione, pedale acceleratore elettronico, sensore del numero dei giri." },
            { title: "GRUPPO VOLANO/FRIZIONE:", content: "Volano, Volano Bimassa, pompa frizione" },
            { title: "GRUPPO CIRCUITO FRENANTE:", content: "pompa del vuoto, gruppo valvole ABS, meccanismo freno a mano (no elettronico), pinza freno" },
            { title: "GRUPPO CIRCUITO RISCALD/RAFFREDD.:", content: "termostato" },
            { title: "GRUPPO SCARICO:", content: "turbo geometria fissa, turbo a geometria variabile, valvola wastegate, sonda lambda, attuatore geometria variabile" },
            { title: "GRUPPO CAMBIO VAR. CONTINUA:", content: "tutti gli organi all'interno ad eccezione di guarnizioni, viti, sensori e cuscinetti." },
            { title: "GRUPPO CAMBIO AUTOMATICO:", content: "convertitore di coppia, gruppo valvole (esclusa centralina mechatronic), ruotismo epicicloidale, scatola" },
            { title: "GRUPPO ARIA CONDIZIONATA:", content: "condensatore, evaporatore" }
        ]
    },
    {
        type: "BEST",
        typeId: "C",
        description: "Enfocado Para Vehiculos De Lujo Y Transporte Ejecutivo.",
        ulr: `assets/svgs/start3.svg`,
        info: [
            { title: "GRUPPO MOTORE:", content: "testata + guarnizione, kit smeriglio, canne cilindri, pistoni, bielle, albero motore, albero a camme, bronzine di banco, bronzine di biella, precamere, valvole aspirazione, valvole scarico, pompa olio" },
            { title: "GRUPPO ORGANI GUIDA:", content: "scatola guida meccanica." },
            { title: "GRUPPO ALIMENTAZIONE:", content: "pompa immersione, debimetro." },
            { title: "GRUPPO CIRCUITO ELETTRICO:", content: "alternatore, motorino avviamento, regolatore di tensione" },
            { title: "GRUPPO CIRCUITO FRENANTE:", content: "Pompa freni, servofreno." },
            { title: "GRUPPO CIRCUITO RISCALD/RAFFREDD.:", content: "pompa acqua primaria, radiatore liquido motore." },
            { title: "GRUPO CAMBIO MANUALE:", content: "albero primario/secondario, alberino retromarcia, ingranaggio 1/2/3/4/5/6 marcia e retromarcia." },
            { title: "GRUPPO ARIA CONDIZIONATA:", content: "compressore(solo motore)." }]
    },
    {
        type: "BEST",
        typeId: "D",
        description: "Concentrato su veicoli sportivi e ad alte prestazioni.",
        ulr: `assets/svgs/start4.svg`
    }
];

// Función para manejar la apertura y cierre de paquetes
document.addEventListener("DOMContentLoaded", () => {

    const packagesGrid = document.querySelector('.packages__grid');
    const yearElement = document.querySelector('.footer-bottom div:first-child');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `${currentYear}, Tutti i diritti riservati`;

    if (!packagesGrid) {
        console.error("No se encontró el elemento .packages__grid en el DOM");
        return;
    }

    // Agregar estilos CSS para responsive
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @media (max-width: 768px) {
            .modal-container {
                flex-direction: column !important;
                overflow-y: auto !important;
                height: 90% !important;
            }
            
            .package-container {
                width: 100% !important;
                height: auto !important;
                padding: 10px !important;
                border-radius: 10px 10px 0 0 !important;
            }
            
            .text-container {
                width: 100% !important;
                border-left: none !important;
                border-top: 1px solid #e0e0e0 !important;
                border-radius: 0 0 10px 10px !important;
                padding: 15px !important;
            }
            
            .modal-container .package {
                transform: scale(0.9) !important;
            }
            
            .info-block {
                margin-bottom: 10px !important;
            }
            
            .info-block h3 {
                font-size: 14px !important;
            }
            
            .info-block p {
                font-size: 13px !important;
            }
            
            .modal-close-button {
                top: 10px !important;
                right: 10px !important;
                width: 40px !important;
                height: 40px !important;
                font-size: 20px !important;
                background: rgba(0,0,0,0.7) !important;
                position: absolute !important;
            }
        }
        
        @media (max-width: 480px) {
            .modal-container {
                width: 95% !important;
                height: 85% !important;
            }
            
            .modal-container .package {
                transform: scale(0.8) !important;
            }
            
            .package-details {
                padding-bottom: 15px !important;
            }
            
            .modal-close-button {
                top: 5px !important;
                right: 5px !important;
                width: 44px !important;
                height: 44px !important;
                font-size: 22px !important;
                position: absolute !important;
            }
        }
        
        /* Estilos generales para el modal */
        .modal-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background-color: #ffffff;
            border-radius: 10px;
            display: flex;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .package-container {
            width: 45%;
            padding: 20px;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px 0 0 10px;
        }
        
        .text-container {
            width: 55%;
            padding: 20px;
            background-color: #ffffff;
            border-left: 1px solid #e0e0e0;
            border-radius: 0 10px 10px 0;
            overflow-y: auto;
        }
        
        .info-block {
            margin-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 10px;
        }
        
        .info-block:last-child {
            border-bottom: none;
        }
        
        .info-block h3 {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .info-block p {
            margin: 0;
            font-size: 14px;
        }
        
        .no-scroll {
            overflow: hidden;
        }
        
        .packages-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: none;
            z-index: 799;
        }
    `;
    document.head.appendChild(styleElement);

    // Crear el overlay para el fondo oscuro
    const overlay = document.createElement('div');
    overlay.className = 'packages-overlay';
    document.body.appendChild(overlay);

    // Generar el HTML para cada paquete
    packages.forEach((package, index) => {
        const packageElement = document.createElement('div');
        packageElement.className = `package package-${index}`;
        packageElement.dataset.index = index;
        packageElement.style.cursor = 'pointer'; // Add cursor pointer to all packages
        packageElement.innerHTML = `
        <div class="package-img-wrapper">
            <img src="assets/svgs/card.svg" alt="">
            <img src="${package.ulr}" alt="" class="package-star">
        </div>
        <div class="package__content">
            <h2 class="package__type">${package.type}</h2>
            <h1 class="package__type_id">${package.typeId}</h1>
            <div class="package__description">
                <p>${package.description}</p>
            </div>
            <div class="package__corner">
                <i class="fas fa-arrow-right package__arrow"></i>
            </div>
        </div>
        `;
        packagesGrid.appendChild(packageElement);
    });

    let activePackage = null;
    let textContainer = null;

    // Función para expandir un paquete
    function expandPackage(packageElement) {
        // Si ya hay un paquete activo, no hacer nada
        if (activePackage) return;

        // Guardar referencia al paquete activo
        activePackage = packageElement;

        // Mostrar overlay
        overlay.style.display = 'block';

        // Crear un contenedor modal que incluirá el paquete y el área de texto
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        modalContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background-color: #ffffff;
            border-radius: 10px;
            display: flex;
            z-index: 1600;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(modalContainer);

        // Crear contenedor para el paquete (lado izquierdo/arriba en móvil)
        const packageContainer = document.createElement('div');
        packageContainer.className = 'package-container';
        packageContainer.style.cssText = `
            width: 45%;
            padding: 20px;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px 0 0 10px;
        `;
        modalContainer.appendChild(packageContainer);

        // Clonar el paquete y añadirlo al contenedor
        const packageClone = packageElement.cloneNode(true);
        packageClone.style.position = 'static';
        packageClone.style.transform = 'scale(1.2)';
        packageClone.style.margin = '0 auto';
        packageClone.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        packageContainer.appendChild(packageClone);

        // Crear contenedor para el texto (lado derecho/abajo en móvil)
        textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        textContainer.style.cssText = `
            width: 55%;
            padding: 20px;
            background-color: #ffffff;
            border-left: 1px solid #e0e0e0;
            border-radius: 0 10px 10px 0;
            overflow-y: auto;
        `;

        // Comprobar si el paquete tiene información que mostrar
        const packageIndex = packageElement.dataset.index;
        const packageInfo = packages[packageIndex].info;

        if (packageInfo && packageInfo.length > 0) {
            textContainer.innerHTML = `
                <h2>${packages[packageIndex].type} ${packages[packageIndex].typeId}</h2>
                <div class="package-details">            
                    ${packageInfo.map(item => `
                    <div class="info-block">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                    `).join('')}
                </div>
            `;
        } else {
            textContainer.innerHTML = `
                <h2>${packages[packageIndex].type} ${packages[packageIndex].typeId}</h2>
                <div class="package-details">
                    <p>No hay información adicional disponible para este paquete.</p>
                </div>
            `;
        }

        modalContainer.appendChild(textContainer);

        // Añadir botón de cierre al modal
        const modalCloseButton = document.createElement('button');
        modalCloseButton.className = 'modal-close-button';
        modalCloseButton.innerHTML = '<i class="fas fa-times"></i>';
        modalCloseButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.6);
            color: white;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            cursor: pointer;
            z-index: 1500;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        `;
        modalContainer.appendChild(modalCloseButton);

        // Evento para cerrar el modal
        modalCloseButton.addEventListener('click', closePackage);

        // Reducir opacidad de otros paquetes
        document.querySelectorAll('.package').forEach(pkg => {
            if (pkg !== packageClone) {
                pkg.style.opacity = '0.3';
            } else {
                // Asegurarse de que el paquete activo mantenga su opacidad total
                pkg.style.opacity = '1';
            }
        });

        // Ocultar el paquete original (ya que mostramos el clon)
        packageElement.style.visibility = 'hidden';
        document.body.classList.add('no-scroll');
    }

    // Función para cerrar un paquete expandido
    function closePackage() {
        if (!activePackage) return;

        // Ocultar overlay
        overlay.style.display = 'none';

        // Restaurar todos los paquetes a su opacidad normal
        document.querySelectorAll('.package').forEach(pkg => {
            pkg.style.opacity = '1';
            pkg.style.visibility = 'visible';
        });

        // Eliminar el modal
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            document.body.removeChild(modalContainer);
        }

        // Limpiar la referencia al paquete activo y al contenedor de texto
        activePackage = null;
        textContainer = null;

        // Restaurar el scroll del cuerpo
        document.body.classList.remove('no-scroll');
    }

    // Event listener para abrir paquetes al hacer clic
    packagesGrid.addEventListener('click', (e) => {
        // Verificar si se hizo clic en un paquete o algún elemento hijo
        const packageElement = e.target.closest('.package');
        if (packageElement) {
            expandPackage(packageElement);
        }
    });

    // Event listener para cerrar al hacer clic en el overlay
    overlay.addEventListener('click', closePackage);
});