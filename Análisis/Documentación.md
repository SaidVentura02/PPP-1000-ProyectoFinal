
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

#JavaScript
La primera versión del proyecto incluye programas básicos de funcionamiento con el lenguaje de programación de JavaScript. Estos archivos conforman la base del FrontEnd del proyecto donde se cimentará la interfaz web con la que el usuario interactuará. 

JavaScript presenta las propiedades y utilidades perfectas para el desarrollo FrontEnd, por lo que es el lenguaje principal para la parte gráfica de la aplicación.

## index.html

Documento HTML que forma la página principal en esta versión del proyecto. Se enfoca en brindar el punto de entrada para el interprete de la web para mostrar el proyecto. Cuenta en su etiqueta html un atributo data-theme que específica el tema actual que esta usando el usuario. Dependiendo de dicho valor, se puede aplicar un tema u otro.

## main.js

Es el documento principal del frontend de la página web. Su función es escribir lo que será mostrado en el index.html de manera dinámica. Esta conectado mediante import a dos módulos con diversas funcionalidades: dom.js y html-basic-elements.js.

## Modules

### dom.js

Es el módulo encargado de manipular e inicializar los estilos de la aplicación. Su funciones engloban el aplicar el tema a la página dependiendo de theme-config.js, cambiar colores y fuente de letras y proporcionar el método orquestador init, el cual inicializa todos los estilos aplicables a la página.

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

### html-basic-elements.js

Su función es ser un módulo de apoyo para el main.js. Guarda etiquetas de uso común en HTML tales como h1, h2, h3, etc. Al combinarlo con el método print de dom.js, se permite hacer combinaciones óptimas y funcionales que permiten escribir en HTML a través del main.

#JavaScript
La primera versión del proyecto incluye programas básicos de funcionamiento con el lenguaje de programación de JavaScript. Estos archivos conforman la base del FrontEnd del proyecto donde se cimentará la interfaz web con la que el usuario interactuará. 

JavaScript presenta las propiedades y utilidades perfectas para el desarrollo FrontEnd, por lo que es el lenguaje principal para la parte gráfica de la aplicación.

## index.html

Documento HTML que forma la página principal en esta versión del proyecto. Se enfoca en brindar el punto de entrada para el interprete de la web para mostrar el proyecto. Cuenta en su etiqueta html un atributo data-theme que específica el tema actual que esta usando el usuario. Dependiendo de dicho valor, se puede aplicar un tema u otro.

## main.js

Es el documento principal del frontend de la página web. Su función es escribir lo que será mostrado en el index.html de manera dinámica. Esta conectado mediante import a dos módulos con diversas funcionalidades: dom.js y html-basic-elements.js.

## Modules

### dom.js

Es el módulo encargado de manipular e inicializar los estilos de la aplicación. Su funciones engloban el aplicar el tema a la página dependiendo de theme-config.js, cambiar colores y fuente de letras y proporcionar el método orquestador init, el cual inicializa todos los estilos aplicables a la página.

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

### html-basic-elements.js

Su función es ser un módulo de apoyo para el main.js. Guarda etiquetas de uso común en HTML tales como h1, h2, h3, etc. Al combinarlo con el método print de dom.js, se permite hacer combinaciones óptimas y funcionales que permiten escribir en HTML a través del main.

La primera versión del proyecto incluye programas básicos de funcionamiento con el lenguaje de programación de JavaScript. Estos archivos conforman la base del FrontEnd del proyecto donde se cimentará la interfaz web con la que el usuario interactuará. 

JavaScript presenta las propiedades y utilidades perfectas para el desarrollo FrontEnd, por lo que es el lenguaje principal para la parte gráfica de la aplicación.

## index.html

Documento HTML que forma la página principal en esta versión del proyecto. Se enfoca en brindar el punto de entrada para el interprete de la web para mostrar el proyecto. Cuenta en su etiqueta html un atributo data-theme que específica el tema actual que esta usando el usuario. Dependiendo de dicho valor, se puede aplicar un tema u otro.

## main.js

Es el documento principal del frontend de la página web. Su función es escribir lo que será mostrado en el index.html de manera dinámica. Esta conectado mediante import a dos módulos con diversas funcionalidades: dom.js y html-basic-elements.js.

## Modules

### dom.js

Es el módulo encargado de manipular e inicializar los estilos de la aplicación. Su funciones engloban el aplicar el tema a la página dependiendo de theme-config.js, cambiar colores y fuente de letras y proporcionar el método orquestador init, el cual inicializa todos los estilos aplicables a la página.

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

### html-basic-elements.js

Su función es ser un módulo de apoyo para el main.js. Guarda etiquetas de uso común en HTML tales como h1, h2, h3, etc. Al combinarlo con el método print de dom.js, se permite hacer combinaciones óptimas y funcionales que permiten escribir en HTML a través del main.