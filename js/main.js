async function cargarProductos() {

    const respuesta = await fetch("data/productos.json");
    const productos = await respuesta.json();

    const contenedor = document.getElementById("productos");

    productos.forEach(producto => {

        let imagenes = "";

        producto.imagenes.forEach((imagen, index) => {

            imagenes += `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                    <img src="${imagen}" class="d-block w-100" alt="${producto.nombre}">
                </div>
            `;

        });

        contenedor.innerHTML += `

        <div class="card">

            <div id="carouselProducto${producto.id}" class="carousel slide card-image" data-bs-ride="false">

                <div class="carousel-inner">

                    ${imagenes}

                </div>

                <button class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselProducto${producto.id}"
                        data-bs-slide="prev">

                    <span class="carousel-control-prev-icon"></span>

                </button>

                <button class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselProducto${producto.id}"
                        data-bs-slide="next">

                    <span class="carousel-control-next-icon"></span>

                </button>

            </div>

            <div class="card-content">

                <h3>${producto.nombre}</h3>

                <p>
                    ${producto.descripcion}
                </p>

                <button class="add-to-cart">
                    ${producto.boton}
                </button>

            </div>

        </div>

        `;

    });

}

cargarProductos();