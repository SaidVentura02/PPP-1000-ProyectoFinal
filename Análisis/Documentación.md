
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





turistas(nombre, edad, dni, nacionalidad)

tipo_destino(cultural)
tipo_destino(naturaleza/aire libre)

destinos(dest1, tiempo_limite, tipo_destino)
destinos(dest2, tiempo_limite, tipo_destino)
destinos(dest3, tiempo_limite, tipo_destino)

guia(nombre, turis1)
guia(nombre, turis2)
guia(nombre, turis3)

estacion(nombre, cada_hora)

tipo_transporte(uber....)

tiempo_limite(50)

rutas(dest1, dest2, dest3, guia, hora_salida)

