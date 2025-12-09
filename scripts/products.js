
// NUEVO ARRAY DE PRODUCTOS ORGANIZADO POR CATEGORÍAS ACTUALES
const products = [
    // Ceviches
    { id: 1, name: "Leche de Tigre", category: "ceviches", price: 20, description: "Leche de tigre tradicional.", image: "./images/menu/leche-tigre.jpg", available: true },
    { id: 2, name: "Ceviche de Pescado", category: "ceviches", price: 30, description: "Ceviche clásico de pescado fresco.", image: "./images/menu/ceviche-pescado.jpg", available: true },
    { id: 3, name: "Ceviche Mixto", category: "ceviches", price: 35, description: "Ceviche mixto de pescado y mariscos.", image: "./images/menu/ceviche-mixto.jpg", available: true },
    { id: 4, name: "Ceviche Carretillero", category: "ceviches", price: 25, description: "Ceviche de pescado + chicharrón + pota.", image: "./images/menu/ceviche-carretillero.jpg", available: true },

    // Chicharrones
    { id: 6, name: "Chicharrón de Pescado", category: "chicharrones", price: 30, description: "Chicharrón crocante de pescado.", image: "./images/menu/chicharron-pescado.jpg", available: true },
    { id: 7, name: "Chicharrón con Pota", category: "chicharrones", price: 20, description: "Chicharrón de pota fresco.", image: "./images/menu/chicharron-pota.jpg", available: true },
    { id: 8, name: "Chicharrón Mixto", category: "chicharrones", price: 35, description: "Chicharrón de pescado y pota.", image: "./images/menu/chicharron-mixto.jpg", available: true },
    { id: 26, name: "Jalea Mixta", category: "chicharrones", price: 35, description: "Jalea mixta de mariscos.", image: "./images/menu/jalea-mixta.jpg", available: true },
    { id: 27, name: "Jalea Real", category: "chicharrones", price: 40, description: "Jalea real de mariscos.", image: "./images/menu/jalea-real.jpg", available: true },

    // Arroces y Chaufas
    { id: 9, name: "Arroz con Mariscos", category: "arroces-chaufas", price: 32, description: "Arroz con mariscos frescos.", image: "./images/menu/arroz-mariscos.jpg", available: true },
    { id: 10, name: "Chaufa de Mariscos", category: "arroces-chaufas", price: 30, description: "Chaufa de mariscos al wok.", image: "./images/menu/chaufa-mariscos.jpg", available: true },
    { id: 11, name: "Tacu Tacu en Salsa de Mariscos", category: "arroces-chaufas", price: 30, description: "Tacu tacu con salsa de mariscos.", image: "./images/menu/tacutacu-mariscos.jpg", available: true },

    // Sopas y Platos Calientes
    { id: 12, name: "Chupe de Pescado", category: "sopas-calientes", price: 30, description: "Chupe tradicional de pescado.", image: "./images/menu/chupe-pescado.jpg", available: true },
    { id: 13, name: "Sudado de Cabrilla", category: "sopas-calientes", price: 33, description: "Sudado de cabrilla con jugo.", image: "./images/menu/sudado-cabrilla.jpg", available: true },
    { id: 14, name: "Parihuela de Tramboyo", category: "sopas-calientes", price: 38, description: "Parihuela de tramboyo y mariscos.", image: "./images/menu/parihuela-tramboyo.jpg", available: true },
    { id: 55, name: "Chilcano de pescado", category: "sopas-calientes", price: 10, description: "Chilcano de pescado.", image: "./images/menu/parihuela-tramboyo.jpg", available: true },
    { id: 5, name: "Chilcano Especial", category: "sopas-calientes", price: 20, description: "Chilcano de pescado y marisco.", image: "./images/menu/chilcano-especial.jpg", available: true },

    // Pescados a la Plancha y Fritos
    { id: 15, name: "Filete de Pescado a la Plancha", category: "pescados-plancha-fritos", price: 30, description: "Filete de pescado a la plancha.", image: "./images/menu/filete-plancha.jpg", available: true },
    { id: 16, name: "Filete de Pescado a la Menier", category: "pescados-plancha-fritos", price: 30, description: "Filete de pescado a la menier.", image: "./images/menu/filete-menier.jpg", available: true },
    { id: 17, name: "Filete de Pescado a lo Macho", category: "pescados-plancha-fritos", price: 35, description: "Filete de pescado con salsa a lo macho.", image: "./images/menu/filete-macho.jpg", available: true },
    { id: 18, name: "Filete de Pescado en Salsa de Ajo", category: "pescados-plancha-fritos", price: 30, description: "Filete de pescado con salsa de ajo.", image: "./images/menu/filete-ajo.jpg", available: true },
    { id: 19, name: "Filete de Pescado en Salsa de Champiñones", category: "pescados-plancha-fritos", price: 35, description: "Filete de pescado con salsa de champiñones.", image: "./images/menu/filete-champinones.jpg", available: true },
    { id: 20, name: "Cabrilla Frita", category: "pescados-plancha-fritos", price: 35, description: "Cabrilla frita crocante.", image: "./images/menu/cabrilla-frita.jpg", available: true },
    { id: 21, name: "Cabrilla en Salsa a lo Macho", category: "pescados-plancha-fritos", price: 39, description: "Cabrilla con salsa a lo macho.", image: "./images/menu/cabrilla-macho.jpg", available: true },
    { id: 22, name: "Milanesa de Pescado", category: "pescados-plancha-fritos", price: 30, description: "Milanesa de pescado.", image: "./images/menu/milanesa-pescado.jpg", available: true },
    { id: 23, name: "Trucha Dorada", category: "pescados-plancha-fritos", price: 25, description: "Trucha dorada frita.", image: "./images/menu/trucha-dorada.jpg", available: true },
    { id: 24, name: "Trucha a la Parrilla", category: "pescados-plancha-fritos", price: 25, description: "Trucha a la parrilla.", image: "./images/menu/trucha-parrilla.jpg", available: true },
    { id: 25, name: "Chita al Ajo", category: "pescados-plancha-fritos", price: 60, description: "Chita al ajo especial.", image: "./images/menu/chita-ajo.jpg", available: true },

    // Pastas
    { id: 28, name: "Fetuccini a lo Alfredo de Marisco", category: "pastas", price: 40, description: "Fetuccini con salsa Alfredo y mariscos.", image: "./images/menu/fetuccini-mariscos.jpg", available: true },
    
    // Duos marinos
    { id: 29, name: "Ceviche de Pescado + Chicharrón de Pescado", category: "duos-marinos", price: 33, description: "Ceviche de pescado + chicharrón de pescado.", image: "./images/menu/duo-marino.jpg", available: true },
    { id: 30, name: "Ceviche de Pescado + Chicharrón Mixto", category: "duos-marinos", price: 35, description: "Ceviche de pescado + chicharrón mixto.", image: "./images/menu/duo-marino-mixto.jpg", available: true },
    { id: 31, name: "Ceviche de Pescado + Chaufa de Mariscos", category: "duos-marinos", price: 35, description: "Ceviche de pescado + chaufa de mariscos.", image: "./images/menu/duo-marino-chaufa.jpg", available: true },
    { id: 32, name: "Ceviche de Pescado + Arroz con Mariscos", category: "duos-marinos", price: 35, description: "Ceviche de pescado + arroz con mariscos.", image: "./images/menu/duo-marino-arroz.jpg", available: true },
    { id: 33, name: "Chicharrón de Pescado + Arroz con Mariscos", category: "duos-marinos", price: 36, description: "Chicharrón de pescado + arroz con mariscos.", image: "./images/menu/chicharron-arroz.jpg", available: true },

    // Trios marinos
    { id: 35, name: "Trío Marino", category: "trios-marinos", price: 40, description: "Ceviche de pescado + chicharrón de pescado + arroz o chaufa de mariscos.", image: "./images/menu/trio-marino.jpg", available: true },
    { id: 36, name: "Trío Marino Mixto", category: "trios-marinos", price: 45, description: "Ceviche mixto + chicharrón mixto + arroz o chaufa de mariscos.", image: "./images/menu/trio-marino-mixto.jpg", available: true },

    // Ronda marina
    { id: 34, name: "Ronda Marina", category: "ronda-marina", price: 70, description: "Ceviche de pescado + chicharrón de pescado + arroz con mariscos + chaufa de mariscos.", image: "./images/menu/ronda-marina.jpg", available: true },

    // Causas
    { id: 37, name: "Causa Acevichada", category: "causas", price: 25, description: "Causa rellena con ceviche.", image: "./images/menu/causa-acevichada.jpg", available: true },

    // Bebidas
    { id: 38, name: "Cerveza Pilsen", category: "bebidas", price: 10, description: "Cerveza Pilsen.", image: "./images/menu/cerveza-pilsen-callao.jpg", available: true },
    { id: 39, name: "Cerveza Cristal", category: "bebidas", price: 10, description: "Cerveza Cristal.", image: "./images/menu/cerveza-cristal.jpg", available: true },
    { id: 40, name: "Cusqueña Negra", category: "bebidas", price: 12, description: "Cerveza Cusqueña Negra.", image: "./images/menu/cerveza-cusquena-negra.jpg", available: true },
    { id: 41, name: "Cusqueña Trigo", category: "bebidas", price: 12, description: "Cerveza Cusqueña Trigo.", image: "./images/menu/cerveza-cusquena-trigo.jpg", available: true },
    { id: 42, name: "Inca Kola 500 ml", category: "bebidas", price: 4, description: "Gaseosa Inca Kola 500 ml.", image: "./images/menu/gaseosa-inca-500ml.jpg", available: true },
    { id: 43, name: "Coca Cola 500 ml", category: "bebidas", price: 4, description: "Gaseosa Coca Cola 500 ml.", image: "./images/menu/gaseosa-coca-500ml.jpg", available: true },
    { id: 54, name: "Inca Kola Gordita", category: "bebidas", price: 5, description: "Gaseosa Inca Kola Gordita", image: "./images/menu/gaseosa-gordita.jpg", available: true },
    { id: 44, name: "Inca Kola 1 Lt.", category: "bebidas", price: 8, description: "Gaseosa Inca Kola 1 Lt.", image: "./images/menu/gaseosa-inca-1lt.jpg", available: true },
    { id: 45, name: "Coca Cola 1 Lt.", category: "bebidas", price: 8, description: "Gaseosa Coca Cola 1 Lt.", image: "./images/menu/gaseosa-coca-1lt.jpg", available: true },
    { id: 46, name: "Inca Kola 1.5 Lt.", category: "bebidas", price: 10, description: "Gaseosa Inca Kola 1.5 Lt.", image: "./images/menu/gaseosa-inca-1-5lt.jpg", available: true },
    { id: 47, name: "Coca Cola 1.5 Lt.", category: "bebidas", price: 10, description: "Gaseosa Coca Cola 1.5 Lt.", image: "./images/menu/gaseosa-coca-1-5lt.jpg", available: true },
    { id: 48, name: "Inca Kola 3 Lt.", category: "bebidas", price: 17, description: "Gaseosa Inca Kola 3 Lt.", image: "./images/menu/gaseosa-inca-3lt.jpg", available: true },
    { id: 49, name: "Coca Cola 3 Lt.", category: "bebidas", price: 17, description: "Gaseosa Coca Cola 3 Lt.", image: "./images/menu/gaseosa-coca-3lt.jpg", available: true },
    { id: 50, name: "Chicha morada 1 Lt.", category: "bebidas", price: 12, description: "Chicha morada 1 Lt.", image: "./images/menu/jarra-chicha-morada.jpg", available: true },
    { id: 51, name: "Chicha de jora 1 Lt.", category: "bebidas", price: 12, description: "Chicha de jora 1 Lt.", image: "./images/menu/jarra-chicha-jora.jpg", available: true },
    { id: 52, name: "Limonada 1 Lt.", category: "bebidas", price: 12, description: "Limonada 1 Lt.", image: "./images/menu/jarra-limonada.jpg", available: true },
    { id: 53, name: "Agua Mineral 500 ml", category: "bebidas", price: 3, description: "Agua mineral 500 ml.", image: "./images/menu/agua.jpg", available: true },
    
    // Económico
    { id: 60, name: "Combo Chaufa", category: "economico", price: 20, description: "Trío: leche de tigre + chaufa de mariscos + chicharrón de pota.", image: "./images/menu/leche-tigre-chaufa-pota.jpg", available: true },
    { id: 61, name: "Combo Arroz con Mariscos", category: "economico", price: 20, description: "Trío: leche de tigre + arroz con mariscos + chicharrón de pota.", image: "./images/menu/leche-tigre-arroz-pota.jpg", available: true },
    { id: 62, name: "Combo Causa", category: "economico", price: 20, description: "Trío: leche de tigre + causa rellena + chicharrón de pota.", image: "./images/menu/leche-tigre-causa-pota.jpg", available: true },
    { id: 63, name: "Ceviche de Pescado + Chicharrón de Pota", category: "economico", price: 15, description: "Ceviche de pescado acompañado de chicharrón de pota.", image: "./images/menu/ceviche-pescado-pota.jpg", available: true },
    { id: 64, name: "Leche de Tigre", category: "economico", price: 10, description: "Leche de tigre porción económica.", image: "./images/menu/leche-tigre.jpg", available: true },
    { id: 65, name: "Chicharrón de Pota ", category: "economico", price: 10, description: "Chicharrón de pota porción económica.", image: "./images/menu/chicharron-pota.jpg", available: true },
    { id: 66, name: "Ceviche de Pota (Carretillero)", category: "economico", price: 12, description: "Ceviche de pota estilo carretillero.", image: "./images/menu/ceviche-carretillero.jpg", available: true }
];

window.restaurantProducts = products;

function renderProducts(category = 'ceviches') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;
    menuItemsContainer.innerHTML = '';
    const filteredProducts = products.filter(product => product.category === category);
    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No hay productos disponibles en esta categoría</p>
            </div>
        `;
        return;
    }
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    document.addEventListener('click', function(e) {
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return;
        }
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product, quantity }
                });
                document.dispatchEvent(event);
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    renderProducts('ceviches');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);