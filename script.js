// =====================================================
// DATOS
// Lugares, imágenes, descripciones y horarios.
// - Nombres, mensajes y horarios: de citaDN1.sh
// - Imagen, descripción y enlace: de citaDN1.html
// En cada horario:
//   texto = lo que el script muestra en el menú
//   valor = lo que el script guarda en $Horario (sale en el resumen)
// =====================================================

const pass = "carpediem";

const categorias = [
  {
    nombre: "Picnic",
    mensajeElegir: "Elegiste: Picnic",
    clase: "bosque", // clase de citaDN1.html para el tamaño de la imagen
    pregunta: "Elige el lugar para hacer el picnic",
    textoVolver: "Volver al menú",
    mensajeVolver: "Regresaste al menú",
    lugares: [
      {
        nombre: "Bosque de Chapultepec",
        mensajeElegir: "Elegiste: Bosque de Chapultepec",
        textoVolver: "Elegir otro lugar",
        mensajeVolver: "Elegiste: otro lugar",
        imagen: "https://media.timeout.com/images/102302773/image.jpg",
        alt: "Bosque de Chapultepec",
        descripcion: "El Bosque de Chapultepec es un espacio natural y recreativo ubicado en la Ciudad de México. Con una extensión de más de 2,000 hectáreas, el bosque alberga una gran diversidad de flora y fauna, además de ser sede de importantes instituciones culturales y museos.",
        enlace: "https://maps.app.goo.gl/LbCvSVWFwA4rVpQE9",
        textoEnlace: "Bosque de Chapultepec",
        horarios: [
          { texto: "Martes:11a.m-6p.m", valor: "Martes  11a.m-6p.m" },
          { texto: "Miércoles:11a.m-6p.m", valor: "Miércoles  11a.m-6p.m" },
          { texto: "Jueves:11a.m-6p.m", valor: "Jueves  11a.m-6p.m" },
          { texto: "Viernes:11a.m-6p.m", valor: "Viernes  11a.m-6p.m" },
          { texto: "Sábado:11a.m-6p.m", valor: "Sábado  11a.m-6p.m" },
          { texto: "Domingo:11a.m-6p.m", valor: "Domingo  11a.m-6p.m" }
        ]
      },
      {
        nombre: "Bosque de Aragón",
        mensajeElegir: "Elegiste: Bosque de Aragón",
        textoVolver: "Elegir otro lugar",
        mensajeVolver: "Elegiste: otro lugar",
        imagen: "https://www.revistainfraestructura.com.mx/wp-content/uploads/2021/09/aragon-1.jpg",
        alt: "Bosque de Aragon",
        descripcion: "El Bosque de Aragón, que con sus 162 hectáreas es la segunda área verde más grande de la ciudad.El arbolado en Aragón es mucho más joven,Además de los servicios clásicos como la pinta de caritas,la venta de garnachas o artículos deportivos, el lugar también cuenta con juegos mecánicos, go cars y unos vehículos de cuatro ruedas con pedales ideales para recorrer el lugar con toda la familia.",
        enlace: "https://maps.app.goo.gl/8iNmesdXiQkb4zLo7",
        textoEnlace: "Bosque de Aragon",
        horarios: [
          { texto: "Martes:6a.m-6p.m", valor: "Martes  6a.m-6p.m" },
          { texto: "Miércoles:6a.m-6p.m", valor: "Miércoles  6a.m-6p.m" },
          { texto: "Jueves:6a.m-6p.m", valor: "Jueves  6a.m-6p.m" },
          { texto: "Viernes:6a.m-6p.m", valor: "Viernes  6a.m-6p.m" },
          { texto: "Sábado:6a.m-6p.m", valor: "Sábado  6a.m-6p.m" },
          { texto: "Domingo:6a.m-6p.m", valor: "Domingo  6a.m-6p.m" }
        ]
      },
      {
        nombre: "Parque Ecológico de Xochimilco",
        mensajeElegir: "Elegiste: Parque Ecológico de Xochimilco",
        textoVolver: "Elegir otro lugar",
        mensajeVolver: "Elegiste: otro lugar",
        imagen: "https://elheraldoslp.com.mx/new/wp-content/uploads/2025/07/Parque-Ecologico-Xochimilco-en-CDMX.jpg",
        alt: "Parque-Ecologico-Xochimilco-en-CDMX",
        descripcion: "El Parque Ecológico de Xochimilco abarca 180 hectáreas, de las cuales una quinta parte son espejos de agua (lagos, ciénagas y canales). Aquí se pueden observar especies de flora y fauna originales del sur de la cuenca y muchas aves migratorias. El Parque comprende un Centro de Información y cuatro grandes áreas: Zona Recreativa, Jardín Botánico, La Reserva Natural de Aves y Jardín Xochitla.La Reserva Natural de las Aves es un refugio y es un agradable lugar para la observación de las mismas, ya que cuenta con una gran cantidad de aves residentes y es visitado por cientos de aves migratorias. Aquí puedes ver especies como la garza blanca, garza morena, patos y zanates, entre muchas otras.",
        enlace: "https://maps.app.goo.gl/Jwn5Gk4mgKuWQWKK8",
        textoEnlace: "Parque Ecológico de Xochimilco",
        horarios: [
          { texto: "Martes:9a.m-11p.m", valor: "Martes  9a.m-11p.m" },
          { texto: "Miércoles:9a.m-11p.m", valor: "Miércoles  9a.m-11p.m" },
          { texto: "Jueves:9a.m-11p.m", valor: "Jueves  9a.m-11p.m" },
          { texto: "Viernes:9a.m-11p.m", valor: "Viernes  9a.m-11p.m" },
          { texto: "Sábado:9a.m-11p.m", valor: "Sábado  9a.m-11p.m" },
          { texto: "Domingo:9a.m-11p.m", valor: "Domingo  9a.m-11p.m" }
        ]
      }
    ]
  },
  {
    nombre: "Museo",
    mensajeElegir: "Elegiste: El Museo",
    clase: "museo",
    pregunta: "Elige el Museo",
    textoVolver: "Volver al Menú",
    mensajeVolver: "Regresaste al menú",
    lugares: [
      {
        nombre: "Museo Nacional de las Culturas",
        mensajeElegir: "Elegiste: Museo Nacional de las Culturas",
        textoVolver: "Regresar a los museos",
        mensajeVolver: "Regresaste a los museos",
        imagen: "https://www.inah.gob.mx/images/fotodeldia/20240206_fotodia_MNCM.jpg",
        alt: "Museo Nacional de Culturas Populares",
        descripcion: "El Museo Nacional de Culturas Populares es un espacio dedicado a la preservación y promoción de las diversas manifestaciones culturales de México. A través de exposiciones, talleres y eventos, el museo busca fomentar el conocimiento y la apreciación de las tradiciones populares, artesanías y expresiones artísticas que forman parte del patrimonio cultural del país.",
        enlace: "https://maps.app.goo.gl/r6igndCZuQzGddg39",
        textoEnlace: "Museo Nacional de Culturas Populares",
        horarios: [
          { texto: "Martes 10a.m.-6p.m", valor: "Martes 10a.m.-6p.m" },
          { texto: "Miércoles 10a.m.-6p.m.", valor: "Miércoles 10a.m.-6p.m" },
          { texto: "Jueves 10 a.m.-6p.m", valor: "Jueves 10a.m.-6p.m" },
          { texto: "Viernes 10a.m-6p.m", valor: "Viernes 10a.m.-6p.m" },
          { texto: "Sábado 10a.m.-6p.m.", valor: "Sábado 10a.m.-6p.m" },
          { texto: "Domingo 10a.m-6p.m", valor: "Domingo 10a.m.-6p.m" }
        ]
      },
      {
        nombre: "Museo de Arte Popular",
        mensajeElegir: "Elegiste: Museo de Arte Popular",
        textoVolver: "Regresar a los museos",
        mensajeVolver: "Regresaste a los museos",
        imagen: "https://live.staticflickr.com/65535/52043298831_fec7531925_b.jpg",
        alt: "Museo de Arte Popular",
        descripcion: "El Museo de Arte Popular es un espacio dedicado a la exhibición y promoción del arte moderno y contemporáneo. Con una colección diversa que incluye obras de artistas nacionales e internacionales, el museo busca fomentar el intercambio cultural y el diálogo entre diferentes épocas y estilos artísticos.",
        enlace: "https://maps.app.goo.gl/nwKeaizTMKx6C41PA",
        textoEnlace: "Museo de Arte Moderno",
        horarios: [
          { texto: "Martes: 10a.m.-6p.m.", valor: "Martes 10a.m.-6p.m." },
          { texto: "Miércoles: 10a.m.-6p.m.", valor: "Miércoles: 10a.m.-6p.m." },
          { texto: "Jueves: 10a.m.-6p.m.", valor: "Jueves: 10a.m.-6p.m." },
          { texto: "Viernes: 10a.m.-6p.m.", valor: "Viernes: 10a.m.-6p.m." },
          { texto: "Sábado: 10a.m.-6p.m.", valor: "Sábado: 10a.m.-6p.m." },
          { texto: "Domingo: 10a.m.-6p.m.", valor: "Domingo: 10a.m.-6p.m." }
        ]
      },
      {
        nombre: "Museo de la Ciudad de México",
        mensajeElegir: "Elegiste: Museo de la Ciudad de México",
        textoVolver: "Regresar a los museos",
        mensajeVolver: "Regresaste a los museos",
        imagen: "https://viajarpormexico.com/wp-content/uploads/2025/07/A_high-resolution_photograph_captures_the_exterior.webp",
        alt: "Museo de la Ciudad de Mexico",
        descripcion: "El Museo de la Ciudad de México es un espacio dedicado a la exhibición y promoción del arte y la cultura de la capital del país. Con una colección diversa que incluye obras de artistas nacionales e internacionales, el museo busca fomentar el intercambio cultural y el diálogo entre diferentes épocas y estilos artísticos.",
        enlace: "https://maps.app.goo.gl/yLfgUqABuzurEY5u6",
        textoEnlace: "Museo de la Ciudad de México",
        horarios: [
          { texto: "Martes : 10a.m.-5:30p.m.", valor: "Martes : 10a.m.-5:30p.m" },
          { texto: "Miércoles : 10a.m.-5:30p.m.", valor: "Miércoles : 10a.m.-5:30p.m" },
          { texto: "Jueves : 10a.m.-5:30p.m.", valor: "Jueves : 10a.m.-5:30p.m" },
          { texto: "Viernes : 10a.m.-5:30p.m.", valor: "Viernes : 10a.m.-5:30p.m" },
          { texto: "Sábado : 10a.m.-5:30p.m.", valor: "Sábado : 10a.m.-5:30p.m" },
          { texto: "Domingo : 10a.m.-5:30p.m.", valor: "Domingo : 10a.m.-5:30p.m" }
        ]
      },
      {
        nombre: "Museo Nacional De Arte",
        mensajeElegir: "Elegiste: Museo Nacional De Arte",
        textoVolver: "Regresar a los museos",
        mensajeVolver: "Regresaste a los museos",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vista_del_MUNAL_en_la_Ciudad_de_M%C3%A9xico.JPG/1280px-Vista_del_MUNAL_en_la_Ciudad_de_M%C3%A9xico.JPG",
        alt: "Museo de Arte Popular",
        descripcion: "El Museo de Arte Popular es un espacio dedicado a la exhibición y promoción del arte popular mexicano. Con una colección diversa que incluye obras de artistas nacionales e internacionales.",
        enlace: "https://maps.app.goo.gl/xietgQf1SQqHeVV77",
        textoEnlace: "Museo Nacional de Arte (MUNAL)",
        horarios: [
          { texto: "Martes : 10a.m-6p.m.", valor: "Martes 10a.m-6p.m." },
          { texto: "Miércoles : 10a.m-6p.m.", valor: "Miércoles 10a.m-6p.m." },
          { texto: "Jueves : 10a.m-6p.m.", valor: "Jueves 10a.m-6p.m." },
          { texto: "Viernes : 10a.m-6p.m.", valor: "Viernes 10a.m-6p.m." },
          { texto: "Sábado : 10a.m-6p.m.", valor: "Sábado 10a.m-6p.m." },
          { texto: "Domingo : 10a.m-6p.m.", valor: "Domingo 10a.m-6p.m." }
        ]
      }
    ]
  },
  {
    nombre: "Barrio Chino",
    mensajeElegir: "Elegiste: el Barrio Chino",
    clase: "barrio",
    saltaLugares: true, // como en el script: pasa directo a días y horarios
    lugares: [
      {
        nombre: "Barrio Chino",
        mensajeElegir: "Elegiste: el Barrio Chino",
        textoVolver: "Volver al menú",
        mensajeVolver: "Regresaste al menú",
        imagen: "https://cdn.mexicorutamagica.mx/Y7k5x75LrRAYTe_fjT9IaaCMPzJ0M5QHcK_hIuteCO4/f:webp/q:80/plain/https://storage.googleapis.com/mexico-ruta-magica/2022/06/arco-paifang-barrio-chino-cdmx.jpg",
        alt: "barrio",
        descripcion: "El Barrio Chino de la Ciudad de México es un rincón lleno de color y tradición en el Centro Histórico. Sus calles y comercios ofrecen comida, dulces, adornos y productos inspirados en la cultura china. Es un lugar pequeño pero animado, ideal para pasear, probar nuevos sabores y conocer parte de la diversidad cultural de la ciudad.",
        enlace: "https://www.google.com/maps/search/?api=1&query=Barrio+Chino%2C+Ciudad+de+M%C3%A9xico",
        textoEnlace: "Barrio Chino de la Ciudad de México",
        horarios: [
          { texto: "Lunes: 12p.m-10p.m", valor: "Lunes  12p.m-10p.m" },
          { texto: "Martes: 12p.m-10p.m", valor: "Martes  12p.m-10p.m" },
          { texto: "Miércoles: 12p.m-10p.m", valor: "Miércoles  12p.m-10p.m" },
          { texto: "Jueves: 12p.m-10p.m", valor: "Jueves  12p.m-10p.m" },
          { texto: "Viernes: 12p.m-10p.m", valor: "Viernes  12p.m-10p.m" },
          { texto: "Sábado: 12p.m-10p.m", valor: "Sábado  12p.m-10p.m" },
          { texto: "Domingo: 12p.m-10p.m", valor: "Domingo  12p.m-10p.m" }
        ]
      }
    ]
  },
  {
    nombre: "Biblioteca",
    mensajeElegir: "Elegiste: Biblioteca",
    clase: "biblioteca",
    pregunta: "Elige la biblioteca",
    textoVolver: "Volver al menú",
    mensajeVolver: "Regresaste al menú",
    lugares: [
      {
        nombre: "Biblioteca Vasconcelos",
        mensajeElegir: "Elegiste: Biblioteca Vasconcelos",
        textoVolver: "Elegir otra Biblioteca",
        mensajeVolver: "Regresaste a las Bibliotecas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Biblioteca_Vasconcelos%2C_Ciudad_de_M%C3%A9xico%2C_M%C3%A9xico%2C_2015-07-20%2C_DD_16-18_HDR.JPG",
        alt: "Biblioteca Vasconcelos",
        descripcion: "La Biblioteca Vasconcelos es un espacio dedicado a la preservación y promoción del conocimiento. Con una colección diversa que incluye libros, revistas, y otros materiales de interés, la biblioteca busca fomentar la lectura y el aprendizaje continuo.",
        enlace: "https://www.google.com/maps/search/?api=1&query=Biblioteca+Vasconcelos%2C+Ciudad+de+M%C3%A9xico",
        textoEnlace: "Biblioteca Vasconcelos",
        horarios: [
          { texto: "Lunes: 8:30a.m.-7:30p.m.", valor: "Lunes  8:30a.m.-7:30p.m." },
          { texto: "Martes: 8:30a.m.-7:30p.m.", valor: "Martes  8:30a.m.-7:30p.m." },
          { texto: "Miércoles: 8:30a.m.-7:30p.m.", valor: "Miércoles  8:30a.m.-7:30p.m." },
          { texto: "Jueves: 8:30a.m.-7:30p.m.", valor: "Jueves  8:30a.m.-7:30p.m." },
          { texto: "Viernes: 8:30a.m.-7:30p.m.", valor: "Viernes  8:30a.m.-7:30p.m." },
          { texto: "Sábado: 8:30a.m.-7:30p.m.", valor: "Sábado  8:30a.m.-7:30p.m." },
          { texto: "Domingo: 8:30a.m.-7:30p.m.", valor: "Domingo  8:30a.m.-7:30p.m." }
        ]
      },
      {
        nombre: "Biblioteca Central Silvestre Moreno Cora",
        mensajeElegir: "Elegiste: Biblioteca Central Silvestre Moreno Cora",
        textoVolver: "Elegir otra Biblioteca",
        mensajeVolver: "Regresaste a las Bibliotecas",
        imagen: "https://live.staticflickr.com/65535/10986708616_1132c7d5c3_b.jpg",
        alt: "Biblioteca Central Silvestre Moreno Cora",
        descripcion: "La Biblioteca Central Silvestre Moreno Cora : sta biblioteca recuerda al abogado, senador y magistrado mexicano Silvestre Moreno Cora, quien destacó por sus tratados e investigaciones en materia territorial, penal y civil. Además es la biblioteca central de un sistema bibliotecario que abarca todo el país con 50 bibliotecas y tener un acervo total de casi un millón de ejemplares con obras especializadas en derecho y materias afines.",
        enlace: "https://www.google.com/maps/search/?api=1&query=Biblioteca+Central+Silvestre+Moreno+Cora%2C+Ciudad+de+M%C3%A9xico",
        textoEnlace: "Biblioteca Central Silvestre Moreno Cora",
        horarios: [
          { texto: "Lunes: 8:30a.m.-5p.m.", valor: "Lunes  8:30a.m.-5p.m." },
          { texto: "Martes: 8:30a.m.-5p.m.", valor: "Martes  8:30a.m.-5p.m." },
          { texto: "Miércoles: 8:30a.m.-5p.m.", valor: "Miércoles  8:30a.m.-5p.m." },
          { texto: "Jueves: 8:30a.m.-5p.m.", valor: "Jueves  8:30a.m.-5p.m." },
          { texto: "Viernes: 8:30a.m.-5p.m.", valor: "Viernes  8:30a.m.-5p.m." }
        ]
      },
      {
        nombre: "Biblioteca Miguel Lerdo de Tejada",
        mensajeElegir: "Elegiste: Biblioteca Miguel Lerdo de Tejada",
        textoVolver: "Elegir otra Biblioteca",
        mensajeVolver: "Regresaste a las Bibliotecas",
        imagen: "https://www.gob.mx/cms/uploads/gallery/main_image/35176/AOA_8948.jpg",
        alt: "Biblioteca Miguel Lerdo de Tejada",
        descripcion: "La Biblioteca Miguel Lerdo de Tejada es un espacio dedicado a la preservación y promoción del conocimiento en el ámbito económico y financiero. Con una colección diversa que incluye libros, revistas, y otros materiales de interés, la biblioteca busca fomentar la investigación y el aprendizaje continuo en temas relacionados con la economía y las finanzas.",
        enlace: "https://www.google.com/maps/search/?api=1&query=Biblioteca+Miguel+Lerdo+de+Tejada%2C+Ciudad+de+M%C3%A9xico",
        textoEnlace: "Biblioteca Miguel Lerdo de Tejada",
        horarios: [
          { texto: "Lunes: 9a.m.-6p.m.", valor: "Lunes  9a.m.-6p.m." },
          { texto: "Martes: 9a.m.-6p.m.", valor: "Martes  9a.m.-6p.m." },
          { texto: "Miércoles: 9a.m.-6p.m.", valor: "Miércoles  9a.m.-6p.m." },
          { texto: "Jueves: 9a.m.-6p.m.", valor: "Jueves  9a.m.-6p.m." },
          { texto: "Viernes: 9a.m.-6p.m.", valor: "Viernes  9a.m.-6p.m." },
          { texto: "Sábado: 9a.m.-6p.m.", valor: "Sábado  9a.m.-6p.m." }
        ]
      }
    ]
  }
];

// =====================================================
// LO QUE EL USUARIO VA ELIGIENDO
// =====================================================

let nombreUsuario = "";
let categoriaElegida = null;
let lugarElegido = null;

// =====================================================
// FECHA DE HOY (se calcula cada vez que carga la página)
// =====================================================

const hoy = new Date();
document.getElementById("fecha-hoy").textContent = hoy.toLocaleDateString("es-MX", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

// =====================================================
// MOSTRAR UNA SOLA CAPA
// Oculta todas las capas y muestra solo la que se pide.
// =====================================================

function mostrarCapa(idCapa) {
  const capas = document.querySelectorAll(".capa");
  capas.forEach(function (capa) {
    capa.classList.remove("activa");
  });
  document.getElementById(idCapa).classList.add("activa");
}

// Crea un botón con un texto y la función que se ejecuta al hacer clic
function crearBoton(texto, alHacerClic) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = texto;
  boton.addEventListener("click", alHacerClic);
  return boton;
}

// Crea la imagen de un lugar dentro de un contenedor con la clase
// de citaDN1.html (bosque, museo, barrio o biblioteca) para que
// tenga el mismo tamaño y estilo: 350 px y esquinas redondeadas.
function crearImagen(lugar, clase) {
  const contenedor = document.createElement("div");
  contenedor.className = clase;
  const imagen = document.createElement("img");
  imagen.src = lugar.imagen;
  imagen.alt = lugar.alt;
  contenedor.appendChild(imagen);
  return contenedor;
}

// =====================================================
// CAPA 1: NOMBRE
// =====================================================

document.getElementById("form-nombre").addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  const nombre = document.getElementById("input-nombre").value;
  const error = document.getElementById("error-nombre");

  if (nombre === "") {
    error.textContent = "==ERROR NOMBRE VACIO==";
  } else if (/[0-9]/.test(nombre)) {
    error.textContent = "==ERROR NOMBRE CON NUMERO==";
  } else {
    // Nombre correcto: guardamos y pasamos a la contraseña
    nombreUsuario = nombre;
    error.textContent = "";
    document.getElementById("mensaje-password").innerHTML = "";
    agregarLinea("mensaje-password", "Nombre válido");
    agregarLinea("mensaje-password", "=== WELCOME " + nombreUsuario + " ===");
    mostrarCapa("capa-password");
    document.getElementById("input-password").focus();
  }
});

// Agrega una línea de texto a un elemento (como un "echo" del script)
function agregarLinea(idElemento, texto) {
  const linea = document.createElement("div");
  linea.textContent = texto;
  document.getElementById(idElemento).appendChild(linea);
}

// =====================================================
// CAPA 2: CONTRASEÑA
// =====================================================

document.getElementById("form-password").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const campo = document.getElementById("input-password");
  const entrada = campo.value;
  const error = document.getElementById("error-password");

  if (entrada.length < 9) {
    error.textContent = "=== CONTRASEÑA CORTA ===";
    campo.value = "";
  } else if (entrada !== pass) {
    error.textContent = "=== LA CONTRASEÑA NO COINCIDE ===";
    campo.value = "";
  } else {
    // Contraseña correcta: pasamos a las categorías
    error.textContent = "";
    campo.value = "";
    mostrarCategorias("Contraseña confirmada");
  }
});

// =====================================================
// CAPA 3: CATEGORÍAS
// =====================================================

function mostrarCategorias(mensaje) {
  document.getElementById("mensaje-categorias").textContent = mensaje;

  const contenedor = document.getElementById("botones-categorias");
  contenedor.innerHTML = "";

  categorias.forEach(function (categoria) {
    contenedor.appendChild(crearBoton(categoria.nombre, function () {
      categoriaElegida = categoria;
      if (categoria.saltaLugares) {
        // Barrio Chino: va directo a día y hora
        mostrarHorarios(categoria.lugares[0], categoria.mensajeElegir);
      } else {
        mostrarLugares(categoria.mensajeElegir);
      }
    }));
  });

  mostrarCapa("capa-categorias");
}

// =====================================================
// CAPA 4: LUGARES DE LA CATEGORÍA ELEGIDA
// =====================================================

function mostrarLugares(mensaje) {
  document.getElementById("mensaje-lugares").textContent = mensaje;
  document.getElementById("pregunta-lugares").textContent = categoriaElegida.pregunta;

  const contenedor = document.getElementById("botones-lugares");
  contenedor.innerHTML = "";

  categoriaElegida.lugares.forEach(function (lugar) {
    contenedor.appendChild(crearBoton(lugar.nombre, function () {
      mostrarHorarios(lugar, lugar.mensajeElegir);
    }));
  });

  // Botón para volver a las categorías
  contenedor.appendChild(crearBoton(categoriaElegida.textoVolver, function () {
    mostrarCategorias(categoriaElegida.mensajeVolver);
  }));

  mostrarCapa("capa-lugares");
}

// =====================================================
// CAPA 5: DÍA Y HORA (con imagen y descripción)
// =====================================================

function mostrarHorarios(lugar, mensaje) {
  lugarElegido = lugar;
  document.getElementById("mensaje-horarios").textContent = mensaje;

  // Imagen, descripción y enlace del lugar
  const info = document.getElementById("info-lugar");
  info.innerHTML = "";
  info.appendChild(crearImagen(lugar, categoriaElegida.clase));

  const descripcion = document.createElement("p");
  descripcion.className = "intro";
  descripcion.textContent = lugar.descripcion;
  info.appendChild(descripcion);

  // Un botón por cada día y hora del lugar
  const contenedor = document.getElementById("botones-horarios");
  contenedor.innerHTML = "";

  lugar.horarios.forEach(function (horario) {
    contenedor.appendChild(crearBoton(horario.texto, function () {
      mostrarResumen(horario.valor);
    }));
  });

  // Botón para volver: Barrio Chino regresa a categorías, los demás a lugares
  contenedor.appendChild(crearBoton(lugar.textoVolver, function () {
    if (categoriaElegida.saltaLugares) {
      mostrarCategorias(lugar.mensajeVolver);
    } else {
      mostrarLugares(lugar.mensajeVolver);
    }
  }));

  mostrarCapa("capa-horarios");
}

// =====================================================
// CAPA 6: RESUMEN (sin mostrar la contraseña)
// =====================================================

function mostrarResumen(horario) {
  document.getElementById("resumen-nombre").textContent = "Nombre: " + nombreUsuario;
  document.getElementById("resumen-lugar").textContent = "Lugar : " + lugarElegido.nombre;

  const imagen = document.getElementById("resumen-imagen");
  imagen.innerHTML = "";
  imagen.appendChild(crearImagen(lugarElegido, categoriaElegida.clase));

  // Dirección: enlace al mapa del lugar elegido
  const direccion = document.getElementById("resumen-direccion");
  direccion.textContent = "Dirección : ";
  const enlace = document.createElement("a");
  enlace.href = lugarElegido.enlace;
  enlace.target = "_blank"; // abre el mapa en otra pestaña
  enlace.textContent = lugarElegido.textoEnlace;
  direccion.appendChild(enlace);

  document.getElementById("resumen-horario").textContent = "Día / Hora :" + horario;

  mostrarCapa("capa-resumen");
}

// =====================================================
// REINICIAR LA CITA: conserva el nombre y regresa a las categorías
// =====================================================

document.getElementById("boton-reiniciar").addEventListener("click", function () {
  categoriaElegida = null;
  lugarElegido = null;

  mostrarCategorias(""); // sin mensaje: el recuadro verde no se muestra
});

// =====================================================
// AL CARGAR LA PÁGINA: se ve solo la capa 1
// =====================================================

mostrarCapa("capa-nombre");
