/* =========================================================
   UNICODE ART
   JavaScript
========================================================= */


/* =========================================================
   OBRAS
========================================================= */

<section id="artistas" class="artists-section">

    <div class="section-heading centered">

        <span class="eyebrow">
            ARTISTA
        </span>

        <h2>
            Conocé a Serena
        </h2>

        <p>
            Una mirada personal sobre el arte digital y geométrico.
        </p>

    </div>

    <div class="artists-grid">

        <article class="artist-card">

            <div class="artist-avatar avatar-one">
                S
            </div>

            <h3>
                Serena
            </h3>

            <p>
                Arte digital · Geométrico
            </p>

        </article>

    </div>

</section>



/* =========================================================
   ELEMENTOS
========================================================= */

const galleryGrid =
    document.querySelector("#gallery-grid");

const searchInput =
    document.querySelector("#search-input");

const noResults =
    document.querySelector("#no-results");

const categoryButtons =
    document.querySelectorAll(".category");

const modal =
    document.querySelector("#art-modal");

const modalClose =
    document.querySelector("#modal-close");

const modalArt =
    document.querySelector("#modal-art");

const modalTitle =
    document.querySelector("#modal-title");

const modalArtist =
    document.querySelector("#modal-artist");

const modalCategory =
    document.querySelector("#modal-category");

const modalDescription =
    document.querySelector("#modal-description");

const modalPrice =
    document.querySelector("#modal-price");

const modalCart =
    document.querySelector("#modal-cart");

const themeToggle =
    document.querySelector("#theme-toggle");

const cartButton =
    document.querySelector("#cart-button");

const cartPanel =
    document.querySelector("#cart-panel");

const cartClose =
    document.querySelector("#cart-close");

const cartOverlay =
    document.querySelector("#cart-overlay");

const cartItems =
    document.querySelector("#cart-items");

const cartCount =
    document.querySelector("#cart-count");

const cartTotal =
    document.querySelector("#cart-total");

const checkoutButton =
    document.querySelector("#checkout-button");

const newsletterForm =
    document.querySelector("#newsletter-form");

const contactForm =
    document.querySelector("#contact-form");


/* =========================================================
   ESTADO
========================================================= */

let currentCategory = "all";

let cart = [];

let favorites =
    JSON.parse(
        localStorage.getItem("unicodeFavorites")
    ) || [];


/* =========================================================
   FORMATEAR PRECIO
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "es-AR",
        {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 0
        }
    ).format(price);

}


/* =========================================================
   MOSTRAR OBRAS
========================================================= */

function renderArtworks() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const filtered =
        artworks.filter(art => {

            const matchesCategory =
                currentCategory === "all" ||
                art.category === currentCategory;

            const matchesSearch =
                art.title
                    .toLowerCase()
                    .includes(search) ||

                art.artist
                    .toLowerCase()
                    .includes(search);

            return matchesCategory && matchesSearch;

        });


    galleryGrid.innerHTML = "";


    if (filtered.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    filtered.forEach((art, index) => {

        const card =
            document.createElement("article");

        card.className = "art-card";

        card.style.animationDelay =
            `${index * 0.08}s`;


        const isFavorite =
            favorites.includes(art.id);


        card.innerHTML = `

            <div
                class="art-image"
                data-id="${art.id}"
                style="background: ${art.gradient};"
            >

                <button
                    class="favorite-button ${isFavorite ? "active" : ""}"
                    data-favorite="${art.id}"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <div class="art-info">

                <span class="art-category">
                    ${art.category}
                </span>

                <h3>
                    ${art.title}
                </h3>

                <p class="art-artist">
                    ${art.artist}
                </p>

                <div class="art-bottom">

                    <span class="art-price">
                        ${formatPrice(art.price)}
                    </span>

                    <button
                        class="add-cart"
                        data-cart="${art.id}"
                        aria-label="Agregar al carrito"
                    >
                        +
                    </button>

                </div>

            </div>
        `;


        galleryGrid.appendChild(card);

    });


    addGalleryEvents();

}


/* =========================================================
   EVENTOS GALERÍA
========================================================= */

function addGalleryEvents() {

    document
        .querySelectorAll(".art-image")
        .forEach(image => {

            image.addEventListener(
                "click",
                () => {

                    const id =
                        Number(image.dataset.id);

                    openModal(id);

                }
            );

        });


    document
        .querySelectorAll(".favorite-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        Number(button.dataset.favorite)
                    );

                }
            );

        });


    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    addToCart(
                        Number(button.dataset.cart)
                    );

                }
            );

        });

}


/* =========================================================
   FILTROS
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderArtworks();

        }
    );

});


/* =========================================================
   BUSCADOR
========================================================= */

searchInput.addEventListener(
    "input",
    renderArtworks
);


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favorite => favorite !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "unicodeFavorites",
        JSON.stringify(favorites)
    );


    renderArtworks();

}


/* =========================================================
   MODAL
========================================================= */

function openModal(id) {

    const art =
        artworks.find(
            artwork => artwork.id === id
        );

    if (!art) return;


    modalArt.style.background =
        art.gradient;

    modalTitle.textContent =
        art.title;

    modalArtist.textContent =
        `Por ${art.artist}`;

    modalCategory.textContent =
        art.category;

    modalDescription.textContent =
        art.description;

    modalPrice.textContent =
        formatPrice(art.price);


    modalCart.dataset.id =
        art.id;


    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   AGREGAR DESDE MODAL
========================================================= */

modalCart.addEventListener(
    "click",
    () => {

        addToCart(
            Number(modalCart.dataset.id)
        );

        closeModal();

    }
);


/* =========================================================
   CARRITO
========================================================= */

function addToCart(id) {

    const art =
        artworks.find(
            artwork => artwork.id === id
        );

    if (!art) return;


    const alreadyExists =
        cart.some(
            item => item.id === id
        );


    if (!alreadyExists) {

        cart.push(art);

    }


    updateCart();

    openCart();

}


/* =========================================================
   ELIMINAR CARRITO
========================================================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    updateCart();

}


/* =========================================================
   ACTUALIZAR CARRITO
========================================================= */

function updateCart() {

    cartCount.textContent =
        cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Todavía no seleccionaste ninguna obra.
            </p>

        `;

        cartTotal.textContent =
            formatPrice(0);

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(art => {

        const item =
            document.createElement("div");

        item.className =
            "cart-item";


        item.innerHTML = `

            <div
                class="cart-item-image"
                style="background: ${art.gradient};"
            ></div>

            <div>

                <h4>
                    ${art.title}
                </h4>

                <small>
                    ${formatPrice(art.price)}
                </small>

            </div>

            <button
                class="remove-item"
                data-remove="${art.id}"
            >
                ×
            </button>

        `;


        cartItems.appendChild(item);

    });


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(button.dataset.remove)
                    );

                }
            );

        });


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price,
            0
        );


    cartTotal.textContent =
        formatPrice(total);

}


/* =========================================================
   ABRIR / CERRAR CARRITO
========================================================= */

function openCart() {

    cartPanel.classList.add("active");

    cartOverlay.classList.add("active");

}


function closeCart() {

    cartPanel.classList.remove("active");

    cartOverlay.classList.remove("active");

}


cartButton.addEventListener(
    "click",
    openCart
);

cartClose.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   CHECKOUT
========================================================= */

checkoutButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            alert(
                "Tu selección está vacía."
            );

            return;

        }


        alert(
            "¡Gracias por tu interés en UnicodeArt! El proceso de compra estará disponible próximamente."
        );

    }
);


/* =========================================================
   MODO OSCURO
========================================================= */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");


        const isDark =
            document.body.classList.contains("dark");


        themeToggle.textContent =
            isDark ? "☾" : "☼";


        localStorage.setItem(
            "unicodeTheme",
            isDark ? "dark" : "light"
        );

    }
);


/* =========================================================
   RECUPERAR TEMA
========================================================= */

const savedTheme =
    localStorage.getItem("unicodeTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☾";

}


/* =========================================================
   NEWSLETTER
========================================================= */

newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.querySelector(
                "#newsletter-email"
            ).value;


        alert(
            `¡Gracias! ${email} fue agregado a nuestro newsletter.`
        );


        newsletterForm.reset();

    }
);


/* =========================================================
   CONTACTO
========================================================= */

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        alert(
            "¡Mensaje enviado! Gracias por contactar con UnicodeArt."
        );


        contactForm.reset();

    }
);


/* =========================================================
   INICIO
========================================================= */

renderArtworks();

updateCart();
