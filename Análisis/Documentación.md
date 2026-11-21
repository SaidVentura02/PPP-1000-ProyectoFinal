
```
    @author ffloresh@unah.hn, iadiazr@unah.hn said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/20
    @since 2026/11/16
```


# Documentación

# Introducción

A continuación se presentará un seguimiento y documentación de todos los componentes, propuestas y funcionalidades del proyecto asignado en la clase paradigmas de programación.

El proyecto se enfoca en un portal web de un servicio turistico con sede en Tegucigalpa. Mediante dicho portal se debe poder administrar y visualizar tanto información del sistemas como estadísticas. 

## Arquitectura del proyecto

Para el desarrollo del sistema se emplearán 4 lenguajes de programación, cada uno con un proposito dentro de cada capa del software. 

 - Javascript: Capa del frontend; Permitirá modelar la estructura visual del sistemas, así como modificar los elementos del DOM.
 - PHP: Capa del Backend; Se empleará para la lógica del manejo de las consultas del lado del Frontend.
 - Prolog: Empleado para almacenar la base de conocimientos del sistema. Los datos del sistema se almacenarán a traves de hechos.
 - Python: Se utilizará python para los cálculos de métricas y estadísticas. También se se hará uso de su capacidad de manejo de listas en el enfoque del paradigma funcional mediante List Comprehension.

## Base de conocimiento
**Los principales actores de la base de conocimiento serán los turistas, los guias y los destinos turisticos.A partir de estos se desarrollaran todos los hechos y reglas que daran forma al esquema de la base de conocimientos, quienes van, quien los acompaña, a donde van, y en que horario.**

**Empezaremos definiendo el hecho turista, el cual tendra los argumentos de nombre, edad, DNI y nacionalidad, la cual llenamos manualmente con 25 turistas, de modo que haya suficientes datos para fromar los grupos.**

**Luego definimos dos reglas para grupos de turistas distintos, grupo_turista5 para grupos de maximo 5 turistas y grupo_turistas10 para geupos de maximo 10 turistas. En ambas se diferenciaran los turistas por su DNI (ya que puede haber nombre repetidos pero el DNI es unico), de modo que no haya turistas repetidos en distintos grupos.**

**Definimos el hecho transporte que tendra como parametros los tipos de transporte donde viajaran los grupos de turistas:**
- *Camioneta.*
- *Bus pequeño.*

**Despues definimos el tipo de destino que puede ser:**
- *Cultural.*
- *De naturaleza/aire libre.*

**Con esa logica definimos el hecho destinos que tendra de argumentos el nombre de el destino, el tiempo limite (que es una constante de 50 minutos por grupo en cada destino), tipo de destino antes definido, y creamoa manualmente tres destinos:**
- *Parque Nacional El Picacho (naturaleza/aire libre).*
- *Basilica de Suyapa(cultural)*
- *Cerro Juana Lainez(naturaleza/aire libre).*

**Continuamos con el hecho guia, que tendra de argumentos el id del guia, el grupo de turistas que tendra a su cargo y el transporte que utilizaran. Creamos manualmente 4 guias, de los cuales uno tendra un grupo de 10 turistas y viajaran en un bus pequeño y los otros tres tendran un grupo de 5 turistas transportandose en camionetas.**

**Seguimos definiendo el itinerario, en este sera creado de manera dinamica donde reune los 4 guias con sus respectivos grupos de turistas.Hacemos una regla que forme el grupo de 10 y los tres grupos de 5, y prueba que ningun turista se repita en cada grupo, osea, que no este con dos guias.**

**A continuacion definimos el hecho horario que tiene como argumentos al guia, el cual sera identificado por su id(y que ya esta enlazado con su grupo de turistas), la hora de entrada y la hora de salida. Creamos manualmente un horario para cada guia, de 50 minutos cada uno para cumplir con el tiempo limite. Estos horarios seran cada hora para evitar colisiones de grupos en un solo lugar.**

**Definimos tambien el hecho visita que recibe de argumentos el horario (enlazado con el guia y el grupo) y el destino que visitaran. Creamos manualmente una visita por cada horario creado anterioremente.**

**Seguimos definiendo el hecho ruta que contiene un horario por cada visita. Como tenemos 4 grupos y 4 guias, habra 4 visitas, y por lo tanto la ruta recibira como argumentos los horarios correspondientes.**

**Por ultimo, se incluye el hecho estacion, con los argumentos nombre y cada hora.**

# JavaScript
La primera versión del proyecto incluye programas básicos de funcionamiento con el lenguaje de programación de JavaScript. Estos archivos conforman la base del FrontEnd del proyecto donde se cimentará la interfaz web con la que el usuario interactuará. 

La segunda versión del proyecto agrega componentes visuales importantes, uso de estilos y páginas. Define una mejora sustancial en el FrontEnd del proyecto.

JavaScript presenta las propiedades y utilidades perfectas para el desarrollo FrontEnd, por lo que es el lenguaje principal para la parte gráfica de la aplicación.

# Archivos HTML
## Inicio (index.html)

Documento HTML que forma la primera y principal SPA del proyecto. Se enfoca en brindar el punto de entrada para el interprete de la web para mostrar el proyecto. Cuenta en su etiqueta html un atributo data-theme que específica el tema actual que esta usando el usuario. Dependiendo de dicho valor, se puede aplicar un tema u otro.

Muestra el panel principal de la aplicación en una columna, mostrando la información de turistas, guías y destinos. En una segunda columna, muestra las opciones del sistema.

Su estructura es la siguiente:
- **header**: Muestra el panel de navegación principal de toda la aplicación. Permite ir al inicio y a la página de rutas.
- **main:** Se divide en dos partes, **leftCol** que muestra la columna izquierda la cual es la principal, que guarda los listados de datos y **rightCol** que es la columna secundaria, la cual muestra opciones al usuario.
- **footer:** Muestra las opciones informativas del sistema como ser Autores, Ayuda y Acerca de.
## Rutas Turísticas (routes.html)

Documento HTML. Forma el punto de entrada para la segunda SPA del proyecto. Su función es mostrar las 4 rutas turísticas que soporta el sistema. 

Su estructura es la siguiente:
- **header:** Misma funcionalidad del header de la página Inicio.
- **footer:** Misma funcionalidad del footer de la página de Inicio.
## main.js

Es el documento principal del FrontEnd de la página principal. Su función es escribir lo que será mostrado en el index.html. Agrega los elementos de la página de manera dinámica.
### Imports 
main.js importa los siguientes módulos:
- **dom.js:** Usa los métodos init para inicializar los estilos del sistema y printAddingNodes para agregar nodos HTML al sistema.
- **dom-html-elements.js:** Toma los métodos createAnchor para crear elementos de tipo `<a>`, createDialog para crear elementos tipo modal dialog y createElement para crear elementos generales del sistema.
- **nodes-styles.js:** Importa todo el objeto `STYLES` que guarda los estilos de la aplicación.

### Footer y dialogs
El footer de la página muestra tres botones: Autores, Ayuda y Acerca De. Cada botón abre un dialog (ventana modal) con su información.

El contenido de cada dialog se crea afuera de `createDialog`, con `createElement`. Cada contenido es un `div` con un título (`h2`) y uno o varios párrafos (`p`). Los estilos de estos elementos se toman de `nodes-styles.js` (`dialogTitle` y `dialogText`). Luego, el contenido ya armado se le pasa a `createDialog`, junto con los estilos `buttonDialog` y `dialog`.`createDialog` devuelve también el botón de cerrar, así que main.js lo agrega a cada dialog con `appendChild`.

## routes.js

Es el documento principal del FrontEnd de la página de rutas turísticas. Su función es escribir lo que será mostrado en routes.html, agregando los elementos de manera dinámica, igual que main.js.

### Imports
routes.js importa los mismos módulos que main.js: `init` y `printAddingNodes` de **dom.js**, `createAnchor`, `createDialog` y `createElement` de **dom-html-elements.js**, y el objeto `STYLES` de **nodes-styles.js**.

### Estructura
- **header:** Mismo panel de navegación de la página Inicio, con los enlaces a Inicio y Rutas.
- **main:** Muestra el título "Rutas turísticas".
- **footer:** Mismos botones y dialogs (Autores, Ayuda y Acerca De) de la página Inicio.

## Modules

### dom.js

Es el módulo encargado de manipular e inicializar los estilos de la aplicación. Su funciones engloban el aplicar el tema a la página dependiendo de theme-config.js, cambiar colores y fuente de letras y proporcionar el método orquestador init, el cual inicializa todos los estilos aplicables a la página.

### imports
dom.js importa:
- **theme-config.js:** Importa la configuración del tema del sistema. 

### exports
dom.js exporta:
- **init(bodyStyles):** Método que inicializa el tema de la aplicación. Recibe los estilos del body, y aplica además el color de fondo, el color del texto y la fuente a la página.
- **print:** Imprime texto en la web
- **printAddingNodes:** Una de las funciones principales del módulo. Agrega nodos HTML al body.
- **html:** Constante que hace referencia al html del sistema.
- **theme:** Nombre del tema que se está usando, tomado del atributo data-theme del html.
- **actualTheme:** Objeto con los colores del tema actual. Los estilos de nodes-styles.js lo usan para pintar los elementos.

### theme-config.js

Guarda la configuración de los temas de la aplicación mediante un JSON. Cuenta con dos posibles configuraciones
- **dark:** Tema oscuro de la aplicación
- **light:** Tema claro de la aplicación
Para el manejo de los temas, se selecciono una paleta de colores con los siguientes códigos hexadecimales:
- 1f7a8c
- bfdbf7
- 022b3a
- bfdbf7

Los temas de la aplicación se basan en cuatro atributos:
- **Color primario (primary-color):** El color principal del tema. Se utilizará para elementos principales del sistema.
- **Color secundario (secondary-color):** El color secundario del tema. Se utilizará para elementos secundarios del sistema o para detalles
- **Color de Fondo (background-color):** Es el color de fondo del sistema. 
- **Color Terciario (tertiary-color):** Es el color que complementa a los otros dos. Se utilizará para equilibrar al color primario y secundario
Dependiendo del tema, los colores toman un rol primario, secundario, de fondo o terciario. 

### dom-html-elements.js

Módulo para crear elementos HTML mediante el DOM. Es la base con la que main.js y routes.js construyen la página.

### tables.mjs

Módulo para crear tablas de manera dinámica. Se usa en la página de Inicio para mostrar los listados de turistas, guías y destinos.

### imports
tables.mjs importa `th` y `td` de **dom-html-basic-elements.js**, que generan las celdas de encabezado y de datos.

### exports
tables.mjs exporta:
- **tableElement:** Crea la tabla con su `thead` (encabezado) y su `tbody` (cuerpo), con un borde, y la agrega al body.
- **addHeaders(elements):** Recibe una lista de textos y agrega una fila de encabezados a la tabla.
- **addContent(data):** Recibe una lista de textos y agrega una fila de datos a la tabla.

Por dentro usa tres funciones de apoyo: `rowElement` crea una fila `tr`, `insertRowContent` agrega una celda a una fila e `insertRow` agrega una fila a la tabla.

Actualmente main.js lo usa como prototipo, con datos de ejemplo.

### exports
dom-html-elements.js exporta:
- **createElement(name, content, style, action):** Crea un elemento HTML de la etiqueta indicada. Recibe el texto que mostrará, un objeto de estilos y una función opcional que se ejecuta al hacer clic. Devuelve el elemento.
- **createAnchor(content, url, style):** Crea un enlace `<a>` con el texto, la dirección y los estilos indicados.
- **createDialog(id, buttonContent, dialogContent, buttonStyle, dialogStyle, closeButtonStyle):** Crea un dialog modal. Devuelve tres elementos: el botón que lo abre, el dialog y el botón de cerrar. El botón de cerrar no se agrega solo: quien llama la función debe agregarlo al dialog. Los botones se conectan al dialog mediante los atributos `commandfor` y `command` (`show-modal` para abrir y `close` para cerrar).

### nodes-styles.js

Guarda todos los estilos de la aplicación en un objeto `STYLES`. Cada estilo es un objeto con propiedades de CSS, que se le pasa a `createElement` para aplicarlo. Los colores se toman de `actualTheme`, por eso cambian según el tema.

### imports
nodes-styles.js importa `actualTheme` de **dom.js**.

### exports
nodes-styles.js exporta el objeto **STYLES**, con los siguientes estilos:
- **body:** Estilos del body de la página.
- **header y footer:** Barras de color primario. El footer queda fijo en la parte de abajo de la página.
- **nav:** Posiciona los enlaces y botones al centro de la barra.
- **anchor:** Enlaces del menú de navegación.
- **main, leftCol y rightCol:** Sección principal y sus dos columnas.
- **cleanButton:** Botón rojo de limpiar la base de conocimientos.
- **button:** Botón general, con el color primario.
- **buttonDialogFooter:** Botones del footer que abren los dialogs.
- **dialog:** Ventana del dialog, con borde, esquinas redondeadas y colores del tema.
- **dialogTitle:** Título del dialog, con una línea debajo.
- **dialogText:** Texto de los párrafos del dialog.

### dom-html-basic-elements.js

Su función es ser un módulo de apoyo para el main.js. Guarda etiquetas de uso común en HTML tales como h1, h2, h3, etc. Al combinarlo con el método print de dom.js, se permite hacer combinaciones óptimas y funcionales que permiten escribir en HTML a través del main.
Exporta las funciones `h1`, `h2`, `h3`, `p`, `i`, `s`,`th`, `td` . Cada una recibe un texto y devuelve la etiqueta HTML como texto, listo para usarse con `print`.