<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1
        em Viewpoint

    p.mb-5(data-aos="fade-left") Se presenta a continuación el concepto de&nbsp;
      em Viewpoint &nbsp;
      |y su campo de aplicación, así como los diferentes términos que se pueden emplear y determinan los privilegios de las antes mencionadas funciones, basadas principalmente en el concepto de los
      em stakeholders&nbsp;
      |Acuña, (2012).


    #t_3_1(data-aos='fade-right')
      h2 Concepto y aplicación

    .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-sm-10(data-aos="fade-right")
        p El modelo se cimienta en la integración de enfoque con puntos de vista, lo cual indica que la base fundamental es la metodología de
          em AORE
          |. Inicialmente, se enfoca en las perspectivas de los actores, según las funcionalidades que desempeñan, haciendo posible un detallado y óptimo tratamiento.
        p El
          em Viewpoint
          |, facilita diferentes funciones a partir de los requerimientos del sistema, a partir de allí, se clasifican las visibilidades basadas en estas funcionalidades, para posteriormente, realizar el diagrama de casos y escenarios, así como también, la individualización de los requerimientos no funcionales.
      .col-md-7.col-sm-8(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-1.svg', alt="Puntos de vista")

    Separador

    #t_3_2(data-aos='fade-right')
      h2 Modelos

    .bloque-texto-a.bloque-texto-2.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img3-2.svg', alt='Modelos')
        .col-lg-8.order-sm-first.order-lg-last(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p El concepto de modelo nace de la necesidad de mirar desde distintas perspectivas al
              em software
              |que se planea desarrollar, es decir, cuando se realiza el levantamiento de requisitos aplicando las técnicas que se están estudiando, dos usuarios del mismo proyecto pueden mirar y dar una visión distinta. Luego se debe presentar la perspectiva que realmente sea del interés del usuario y lleva a la correcta construcción del
              em software
              |. Fue así como surgió el modelado de sistemas de información.#[br]#[br]
            p.mb-0 Existen en el mercado distintas herramientas de modelado, sin embargo, es obligatorio centrarse en la herramienta universal, es decir, la que fue creada específicamente para estos menesteres: UML (lenguaje unificado de modelado, por sus siglas en inglés,
              em Unified Modeling Language
              |), es el lenguaje de modelado más utilizado.

    p.mb-5(data-aos="fade-right")
      b Para conocer más sobre el UML se le invita a visualizar el video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gVt_zU_E8wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 Para llevar a cabo la programación, es indispensable utilizar un control de versiones y herramientas del modelado. Actualmente, se cuenta con varios proyectos interesantes relacionados con el lenguaje del modelado; a continuación, se hace una breve conceptualización al respecto:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in")
      .row(titulo="Lenguaje de modelado")
        .col-md-3.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Diseño diagrama de flujo')
        .col-md-8.mb-4.mb-md-0
          p Consiste en emplear una imagen, símbolo o una figura; ya aterrizando en el mundo de la ingeniería de requisitos, es la representación de un objeto, sistema o idea, desde diversos ángulos, pero siempre refiriéndose a la misma entidad. Luego, surge la pregunta, ¿por qué se utiliza un modelo? Se emplea para tratar de entender, y explicar, cualquier sistema de información; es decir, para una demostración exacta de un sistema, e incluso una abstracción de todas y cada una de las propiedades. Esta forma de trabajar, es una tendencia que se utiliza desde tiempos remotos, ha ido mejorando y tiene como punto de partida, la representación de ideas nuevas, que rompen paradigmas. Lo determinante en un modelo es que describa el proceso a estructurar o ya sistematizado, de forma completa y suficiente, que represente el comportamiento del sistema, lo que implica que las características del mismo coincidan totalmente con las características del desarrollo.
          p Un lenguaje de modelado, está compuesto por vistas, símbolos, diagramas, etc., y, por supuesto, las directrices específicas que explican la forma de utilización; sin perjuicio de la lógica normal que cada lógica de modelado requiera. Existen procedimientos explícitos para construir el pensamiento y el accionar de todos y cada uno de los individuos, recordando que este método es el que realmente guarda las acciones que se debe realizar y el momento de ejecutarlas.

      .row(titulo="Herramientas de modelado")
        .col-md-3.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema3/img3-4.svg', alt='Herramientas de modelado')
        .col-md-8.mb-4.mb-md-0
          p La cantidad de información que se produce diariamente en el mundo, es realmente asombrosa; indicar que hay un crecimiento exponencial, es un poco soñador, por decirlo de alguna manera. Por tal razón, se requieren formas que permitan el manejo de la información, disponible y, en especial, aquella importante para las organizaciones, que, por ejemplo, admiten tomar decisiones para mejorar y facilitar la vida de sus usuarios. Todo lo anterior desemboca en la necesidad de aprovechar el reporte informativo de la manera más adecuada, para lo cual se requiere modelar dichos datos de forma correcta. Las principales herramientas son:
          ol.mb-4
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b Erwin Data Modeler:
              |el
              em software
              |de modelado de datos número uno del mundo. Es una herramienta galardonada y utilizada para encontrar, visualizar, diseñar, desplegar y estandarizar activos de datos empresariales de alta calidad. Reducen la complejidad, facilitando el diseño, el despliegue y la comprensión de las fuentes de información, para satisfacer las necesidades del negocio.
              em Apiumhub
              |, (2020)
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b Moon Modeler:
              |herramienta de modelado de datos para
              em MongoDB, PostgreSQL, MySQL, MariaDB, SQLite y GraphQL
              |. Diseñada para dibujar diagramas ER,
              em Apiumhub.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b Toad Data Modeler:
              |con este instrumento podrá visualizar las estructuras de las bases de datos y comprenderlas mejor, al igual que las relaciones existentes; también instaura modelos de datos lógicos y físicos de alta calidad, se pueden conectar múltiples bases de datos de forma nativa y simultánea, incluyendo
              em Oracle, SAP, MySQL, SQL Server, PostgreSQL, DB2, Ingres y Microsoft Access, Apiumhub.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b UML:
              |fue creado en octubre de 1994, gracias a una reunión de entes mundiales que inventaron una estandarización que necesitaba del desarrollo de
              em software
              |, está compuesto por una serie de diagramas:

          p
            b Estructurales:

          .row
            .col-md-5
              ol.mb-4
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de clases
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de componentes
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de despliegue
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de objetos
            .col-md-6
              ol
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de paquetes
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de perfiles
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de estructura compuesta

          p
            b Diagramas de comportamiento:
          .row
            .col-md-5
              ol.mb-4
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de actividades
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de casos de uso
            .col-md-6
              ol
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama de máquina de estados

          p
            b Diagramas de interacción:
            |realmente son una subdivisión de los anteriores, compuestos por:
          .row
            .col-md-5
              ol
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |De secuencia
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |De comunicación
            .col-md-6
              ol
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |De tiempos
                li.mb-3
                  i.fas.fa-circle.cab.me-3
                  |Diagrama global de interacciones

      .row(titulo="Control de versiones ")
        .col-md-3.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema3/img3-5.svg', alt='Diseño diagrama de flujo')
        .col-md-8.mb-4.mb-md-0
          p Al igual que en la vida cotidiana, en los proyectos de desarrollo de
            em software
            |se busca la mejora continua, optimizar los productos; lo anterior es una tarea cotidiana y habitual. Esto aplica para el código fuente, también para los artefactos que se construyen en el ciclo de vida de fabricación del producto. En consecuencia, se requiere el llamado versionamiento o control de versiones, que consiste en identificar y controlar los cambios en todas las partes durante el ciclo de vida del
            em software
            |, incluido el código fuente. La forma más común de realizar esta actividad es asignándoles tres números seguidos de puntos, por ejemplo A.B.C. Donde:
          ol
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |El primer número, ejemplarizado con la letra A, apunta a la versión mayor, es decir, la principal del
              em software
              |. Por ejemplo: 1.0.0.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |El segundo número, simbolizado con la letra B, perfila a la versión menor, es decir, que en esta existen nuevas funcionalidades del
              em software
              |, puede ser que se construya un módulo nuevo. Por ejemplo: 1.1.0.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |El tercer número, representado con la letra C, señala una revisión del código por algún error o fallo. Por ejemplo: 1.1.1.
          p En otras ocasiones, se adicionan otros aspectos al versionamiento, puede ser por parche, lo que traduce a agregar un dígito adicional, es decir: A.B.C.D., donde D es el número del parche, por ejemplo: 1.1.1.1. Finalmente, se utiliza la versión por fecha, que consiste en agregarle los datos exactos en que se libera la versión, en formato año, mes y día. Por ejemplo: 1.1.1.22830, donde 22 es el año 2022, 8 es el mes 8 (agosto) y 30 es el día, es decir, que esta versión fue liberada el 30 de agosto del año 2022. (EDteam, 2017)

    Separador

    #t_3_3(data-aos='fade-right')
      h3
        em Stakeholders

    p.mb-5(data-aos="fade-left") Este concepto data desde 1984, cuando el filósofo Robert Edward Freeman, lo definió como los grupos de interés en las empresas, en otras palabras, son personas que, de una u otra forma, hacen parte de los procesos de las organizaciones; en términos de la ingeniería de requisitos, es un individuo que será parte integral del
      em software
      |que se planea construir. Existen dos categorías principales de
      em Stakeholders:

    .bloque-texto-a.bloque-texto-2.p-4.p-md-5.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img3-6.svg', alt='Stakeholder')
        .col-lg-8.order-sm-first.order-lg-last(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p.mb-0
              ol
                li
                  i.fas.fa-circle.fa-xs.cac.me-3
                  |<strong>Primarios:</strong> se trata de sujetos con el rótulo de imprescindibles para el normal funcionamiento de la empresa, específicamente en el ámbito económico como los accionistas, dueños, clientes, trabajadores. #[br]#[br]
                li
                  i.fas.fa-circle.fa-xs.cac.me-3
                  |<strong>Secundarios:</strong> no tienen nada que ver con la organización, pero que, de una u otra forma, se ven afectados o beneficiados, aplica para la competencia, sindicatos, partidos políticos y en general toda la comunidad.#[br]#[br]
            p
              b ¿La pregunta que surge es, cómo se identifican los &nbsp;
                em Stakeholders
                |?
            p
              ol
                li
                  i.fas.fa-circle.fa-xs.cac.me-3
                  |El primer paso es reconocer a los interesados en el proyecto, bien sean actores internos o externos a la empresa.#[br]#[br]
                li
                  i.fas.fa-circle.fa-xs.cac.me-3
                  |Seguidamente, establecer de manera clara los intereses de la organización, en cuanto al proyecto planteado.#[br]#[br]
                li
                  i.fas.fa-circle.fa-xs.cac.me-3
                  |Posteriormente, se fija el interés de cada uno de los&nbsp;
                  em Stakeholders&nbsp;
                  |equiparando el primer paso, con relación a lo planteado por la entidad, definiendo la influencia, peso específico y preponderancia.#[br]#[br]
                li
                  i.fas.fa-circle.fa-xs.cac.me-3
                  |Para finalizar se clasifican por niveles.

    p(data-aos="fade-right") La traducción literal al español de&nbsp;
      em Stakeholders&nbsp;
      |es inexacta, debido a que varía la interpretación dependiendo del área de estudio o contexto, puede ser un interesado, pero también puede ser un afectado por el proyecto.

    p(data-aos="fade-right") Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
