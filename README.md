 🎨 UnicodeStudios

Galería digital de arte contemporáneo

**UnicodeStudios** es una galería digital de arte contemporáneo diseñada para presentar obras artísticas de una manera visual, moderna e interactiva.

El proyecto combina una estética editorial con **colores tornasolados, animaciones suaves, galerías de obras y elementos interactivos**, creando una experiencia digital enfocada en el arte y la identidad visual.

---

## ✨ Características

* 🎨 Diseño visual inspirado en galerías de arte contemporáneo.
* 🌈 Efectos y textos con gradientes tornasolados.
* 🖼️ Galería de obras de arte.
* 🔎 Buscador de obras.
* 🏷️ Filtros por categoría:

  * Todos
  * Geométrico
  * Digital
* 👩‍🎨 Sección dedicada a la artista **Serena**.
* 🖼️ Página independiente para la colección de obras.
* 🛒 Sistema de selección/carrito de obras.
* ❤️ Sistema de favoritos.
* 🌙 Modo oscuro.
* 📱 Diseño responsive para dispositivos móviles.
* ✨ Animaciones y efectos hover.
* 📧 Formulario de contacto funcional mediante **EmailJS**.
* 📰 Formulario de suscripción a newsletter.
* 🔗 Navegación entre diferentes secciones y páginas.

---

🛠️ Tecnologías utilizadas

#Frontend

* **HTML5**
* **CSS3**
* **JavaScript**
* **Google Fonts**

#Servicios

* **EmailJS** — envío de formularios de contacto.

#Herramientas

* **Visual Studio Code**
* **Git**
* **GitHub**

---

## 📂 Estructura del proyecto


UnicodeStudios/
│
├── index.html
├── galeria.html
│
├── style.css
├── galeria.css
├── script.js
│
├── logo.png
├── cuadro1.jpg
├── cuadro2.jpg
├── cuadro3.jpg
├── cuadro4.jpg
├── cuadro5.jpg
├── cuadro6.jpg
├── cuadro7.jpg
├── cuadro8.jpg
├── cuadro9.jpg
├── cuadro10.jpg
│
└── README.md


---

#🖼️ Secciones principales

#🏠 Inicio

La página principal presenta la identidad visual de UnicodeStudios mediante una sección hero con obras de arte, textos tornasolados y botones de navegación.

#🎨 Galería

La galería permite explorar diferentes obras y filtrarlas según su categoría.

Las categorías disponibles son:

* **Todos**
* **Geométrico**
* **Digital**

También cuenta con un buscador para encontrar obras específicas.

#👩‍🎨 Artista

La sección de artistas presenta a **Serena**, artista especializada en arte digital y geométrico.

Su propuesta combina:

* Formas geométricas
* Arte digital
* Colores iridiscentes
* Composiciones abstractas

### 🖼️ Colección

UnicodeStudios cuenta con una página independiente:


galeria.html


donde se presentan diferentes obras de la colección junto con sus respectivas descripciones.

#📩 Contacto

El formulario de contacto permite que los visitantes puedan enviar consultas directamente.

El sistema utiliza **EmailJS** para procesar los mensajes y enviarlos al correo configurado para el proyecto.

---

#🌈 Diseño visual

La identidad visual de UnicodeStudios está basada en una estética artística y contemporánea.

Se utilizan gradientes inspirados en colores iridiscentes:


--iris-1
--iris-2
--iris-3
--iris-4
--iris-5


Estos colores se utilizan en:

* Bordes
* Textos
* Botones
* Elementos decorativos
* Animaciones
* Marcos de las obras

El objetivo es generar una sensación de movimiento y transformación relacionada con el concepto de arte digital.

---

## 📱 Responsive Design

El sitio está adaptado para diferentes tamaños de pantalla:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Smartphone

Se utilizan **Media Queries de CSS** para adaptar la estructura, tamaños y distribución de los elementos.

---

## 📧 EmailJS

El formulario de contacto utiliza EmailJS para enviar los mensajes sin necesidad de implementar un backend propio.

El flujo funciona de la siguiente manera:


Visitante
    ↓
Formulario de contacto
    ↓
JavaScript
    ↓
EmailJS
    ↓
Correo del cliente


La configuración del servicio se realiza mediante:

* Public Key
* Service ID
* Template ID

Las credenciales privadas del correo electrónico **no se almacenan en el código del proyecto**.

---

## 🚀 Instalación

Para ejecutar el proyecto localmente:

### 1. Clonar el repositorio


git clone https://github.com/TU-USUARIO/UnicodeStudios.git


#2. Entrar en la carpeta


cd UnicodeStudios


#3. Abrir el proyecto

Abrí `index.html` en tu navegador.

También podés utilizar **Live Server** desde Visual Studio Code para una mejor experiencia durante el desarrollo.

---

## 🔧 Configuración de EmailJS

Para utilizar el formulario de contacto es necesario configurar EmailJS.

En `script.js` se deben agregar:


emailjs.init({
    publicKey: "TU_PUBLIC_KEY"
});


y:


emailjs.sendForm(
    "TU_SERVICE_ID",
    "TU_TEMPLATE_ID",
    contactForm
);


Los valores deben corresponder al servicio y plantilla configurados en EmailJS.

> ⚠️ No subir contraseñas, claves privadas ni credenciales del correo del cliente al repositorio.

---

## 🎯 Objetivos del proyecto

UnicodeStudios fue desarrollado con los siguientes objetivos:

* Crear una experiencia digital para una galería de arte.
* Aplicar conocimientos de HTML, CSS y JavaScript.
* Practicar diseño responsive.
* Crear interfaces interactivas.
* Trabajar con formularios y servicios externos.
* Desarrollar una identidad visual propia.
* Crear un proyecto orientado a un cliente real.

---

## 📚 Lo aprendido

Durante el desarrollo del proyecto se trabajó con:

* Estructura semántica HTML5.
* Flexbox y CSS Grid.
* Responsive Design.
* Animaciones CSS.
* Gradientes y efectos visuales.
* Manipulación del DOM.
* Eventos de JavaScript.
* Filtros dinámicos.
* Búsqueda de contenido.
* Carrito de selección.
* LocalStorage.
* Formularios.
* Integración con APIs/servicios externos.
* Organización de proyectos frontend.
* Git y GitHub.

---

## 👨‍💻 Autor

**Augusto Braganza**

Frontend Developer en formación.

Este proyecto forma parte de mi portfolio y representa uno de mis trabajos de desarrollo web orientados a proyectos reales.

---

## 📄 Licencia

Este proyecto fue desarrollado con fines de portfolio y presentación profesional.

© 2026 UnicodeStudios — Todos los derechos reservados.



