# Rick and Morty for Dummies

## Índice

* [1. Introducción](#1-Introducción)
* [2. Definición de producto](#2-Definición-de-producto)
* [3. Proceso de diseño](#3-Proceso-de-diseño)
* [4. Historias de usuario](#4-Historias-de-usuario)
* [5. Test de usabilidad](#5-Test-de-usabilidad)


***

## 1. Introducción

En este proyecto, teníamos como proposito realizar una página web que le permitiera a los usuarios visualizar un conjunto de datos de una tematica en especifico y poder ordenarlos y filtrarlos a su gusto para poder así encontrar los datos que necesitan o quieren saber. Elegimos como tema para esta base de datos a la serie Rick y Morty. 

Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. 

![rick-and-morty](/src/img/rickandmortyreadme.jpg)

## 2. Definición de producto

### Definición del usuario

Nuestros usuarios son personas entre 28 y 35 años que tienen interés en conocer sobre la serie Rick y Morty y con esto decidir si verla o no. Según nuestra investigación tienen prioridad en ver información sobre los personajes y capítulos.

### Definición del problema

Descubrimos que la necesidad de nuestro usuario es obtener información útil y rápida respecto a los aspectos mas importantes de la serie (personajes y capitulos), para informarse más y tomar la decisión de verla.

### Solución del problema

Nuestra página les mostrará a los usuarios la información básica de la serie, les permitirá filtrarla y ordenarla a su gusto, para que así puedan conseguir los datos que necesitan.


## 3. Proceso de diseño

Para definir nuestro prototipo, realizamos una encuesta con preguntas clave para definir los datos que nuestros usuarios querían conocer. Esta encuesta determinó que querían conocer:

- A los personajes y sus imágenes
- Lugar de origen y donde viven
- Episodios dónde aparecen
- Especie

Esto con la finalidad de conocer la serie. 


### Prototipo de baja fidelidad

A continuación podran ver las imágenes de nuestros primeros sketches.

![rick-and-morty](/src/img/sketch4.jpg)
![rick-and-morty](/src/img/sketch1.jpg)

Luego de obtener feedback de nuestros usuarios e iterar obtuvimos este resultado final en nuestro prototipo:

![rick-and-morty](/src/img/sketch2.jpg)
![rick-and-morty](/src/img/sketch3.jpg)

### Prototipo de alta fidelidad

Plasmamos nuestros sketches en la plataforma figma, donde nos guiamos por los principios de diseño visual. 
Creamos dos prototipos:
- **Blanco y negro:**
este se hizo para enfocarnos en la funcionalidad del producto, esto para ver la posición de los botones y 
la estructura general del proyecto.

**Iteración:** se aconsejo detallar los filtros a utilizar. por lo que se cambiaron por algo mas descriptivo y se separo por especie (humano o extraterrestre), género (femenino o masculino) y estado (vivo o muerto).

- **Color:**
Una vez claro el concepto central del proyecto, empezamos a incluir paleta de colores y diseño visual
final relacionado con el proyecto.

**Iteración:** nos quedamos con los botones rectangulares y agregamos el portal que es caracteristico de la serie, en medio de la pagina principal
asi centramos la atencion al centro de la pagina y el usuario puede visualizar mejor los botones.

![rick-and-morty](/src/img/figmarickandmorty.png)
![rick-and-morty](/src/img/figmapagprincipal.png)

Dejamos aquí el enlace de [Figma](https://www.figma.com/file/W2UglxzppAnvK6niyk6eWB/Prototipo-Rick-and-Morty) con el proyecto.


## 4. Historias de usuario

### Primera Historia:

- Definición de la Historia:
yo como: usuario
quiero: ver una lista de todos los personajes 
para: conocer la serie

- Criterios de Aceptación: 
* [ ] Maquetación de pagina (HTML y CSS)
* [ ] Flexbox
* [ ] Lograr diferenciar de la estructura estática y dinámica de los elementos
* [ ] Aplicar diseño responsive

### Segunda Historia:

- Definición de la Historia:
yo como: usuario
quiero: poder ordenar alfabéticamente a los personajes
para: poder ubicarlos rápidamente por su nombre

- Criterios de Aceptación: 
* [ ] Que haya una opción de select en la página donde esté la opción ordenar alfabéticamente de manera ascendente y descendente
* [ ] Que una vez que el usuario seleccione la opcion ordenar alfabéticamente (de A-Z o de Z-A), los personajes cambien su posición y se ordenen
* [ ] Aplicar diseño responsive

### Tercera Historia:

- Definición de la Historia:
yo como: usuario
quiero: poder filtrar a los personajes bajo las condiciones de especie y género
para: poder ubicarlos por especie y género de manera rápida

- Criterios de Aceptación: 
* [ ] crear los filtros con estilo de checkbox, con opciones de especie y género
* [ ] lograr que se filtre por una o mas condiciones y que al filtrar se ordene alfabéticamente también
* [ ] diseño responsive

### Cuarta Historia:

- Definición de la Historia:
yo como: usuario
quiero: poder buscar a los personajes
para: poder ubicar a un personaje específico por su nombre

- Criterios de Aceptación: 
* [ ] crear barra de buscar
* [ ] lograr que al ingresar una letra o un nombre, se busque al personaje inmediatamente
* [ ] lograr que al borrar las letras se retroceda en la búsqueda
* [ ] diseño responsive

## 5. Test de usabilidad

### Test usabilidad con prototipo de alta fidelidad:

Realizamos a través de Figma nuestros primeros test de usabilidad. Esto lo pensamos con la finalidad de ahorrar horas de código al obtener feedback de nuestros usuarios de manera rápida y poder así iterar y efectuar las modificaciones necesarias antes de empezar con el código. 

![prototipo-antes-de-feedback](/src/img/prototipoAntesDeFeedback.jpg)

Los problemas que detectamos en estos tests de usabilidad fueron los siguientes:

* El botón resultó confuso, ya que era muy similar al titulo. Nos pidieron que tuvieran profundidad y que fueran de otro color.
* Las letras de ¿por dónde comenzamos? se perdían con la imagen de fondo.

Para solucionar estos problemas aplicamos las siguientes modificaciones:

* Modificamos el color de los botones y les añadimos profundidad.
* Añadimos sombreado a las letras para que resaltaran.

![prototipo-despues-de-feedback](/src/img/prototipoDespuesDeFeedback.png)