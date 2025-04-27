// Los datos de los paquetes
const packages = [
    {
        type: "Paquete",
        typeId: "A",
        description: "Enfocado Para Vehiculos De Carga Y Transporte De Elementos De Poco Peso.",
        ulr: `assets/svgs/start1.svg`
    },
    {
        type: "Paquete",
        typeId: "B",
        description: "Enfocado Para Vehiculos De Pasajeros Y Transporte Urbano.",
        ulr: `assets/svgs/start2.svg`
    },
    {
        type: "Paquete",
        typeId: "C",
        description: "Enfocado Para Vehiculos De Lujo Y Transporte Ejecutivo.",
        ulr: `assets/svgs/start3.svg`
    },
    {
        type: "Paquete",
        typeId: "D",
        description: "Enfocado Para Vehiculos Deportivos Y Alto Rendimiento.",
        ulr: `assets/svgs/start4.svg`
    }
];

// Asegúrate de que este código se ejecute después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Usar el selector correcto que coincida con el HTML
    const packagesGrid = document.querySelector('.packages__grid');

    // Verificar que el elemento existe antes de intentar manipularlo
    if (packagesGrid) {
        // Función para crear HTML de cada paquete
        function createPackageHTML(package, index) {
            console.log(`assets/svgs/star${index + 1}`,);
            return `
        <div class="package package-${index + 1}">
                    <img src="assets/svgs/card.svg" alt="">
                    <img src="${package.ulr}" alt="" class="package-star">
                    <div class="package__content">
                        <h2 class="package__type">${package.type}</h2>
                        <h1 class="package__type_id">${package.typeId}</h1>
                        <div class="package__description">
                        <p>
                            ${package.description}
                        </p>
                        </div>
                        <div class="package__corner">
                            <i class="fas fa-arrow-right package__arrow"></i>
                        </div>
                    </div>
                </div>
            `;
        }

        // Generar HTML para cada paquete y añadirlo a la sección
        packages.forEach((package, index) => {
            const packageHTML = createPackageHTML(package, index);
            packagesGrid.insertAdjacentHTML('beforeend', packageHTML);
        });
    } else {
        console.error("No se encontró el elemento .packs-section en el DOM");
    }
});