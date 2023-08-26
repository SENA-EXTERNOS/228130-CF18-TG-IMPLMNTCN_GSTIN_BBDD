<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de recolección de requisitos

    p.mb-5(data-aos="fade-left") Consisten en estudiar la forma de conseguir información de los clientes o usuarios, para el desarrollo un proyecto de 
      em software. 
      |Es decir, se enfoca en la técnica que extrae los insumos para dar inicio al esquema. Para lograrlo es indispensable tener competencias sólidas para recolectar la información base, lo que abarca interpretar lo que desea los interesados, contactar al equipo de desarrollo, este proceso se conoce como elicitación.

    .bloque-texto-a.bloque-texto-2.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Base de datos')
        .col-lg-8.order-sm-first.order-lg-last(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p Recuerde que los requisitos se pueden obtener de diversas formas, entre las que son de uso común: trabajar directamente con los involucrados, realizando investigaciones, mediante pruebas y corrigiendo errores. Tanto las pruebas como la corrección de errores, son muy útiles, sin embargo, es muy importante la comunicación directa con los actores claves, aspecto fundamental para realizar un proceso exitoso.
            p Las técnicas de recolección de requisitos varían mucho, e incluso puede tornarse subjetivas. Algunos puntos clave a tenerse en cuenta son:
            ul.lista-ul
              li
                i.lista-ul__vineta
                |Reuniones grupales
              li
                i.lista-ul__vineta
                |Prototipos
              li
                i.lista-ul__vineta
                |Entrevistas
              li
                i.lista-ul__vineta
                |Cuestionarios
              li
                i.lista-ul__vineta
                |Observación y/o seguimiento

    Separador

    #t_2_1(data-aos='fade-right')
      h3 Técnicas tradicionales

    p.mb-5(data-aos="fade-right") Dentro de las técnicas de recolección de datos existen las tradicionales, las cuales se describen a continuación:

    .tarjeta.tarjeta--tabs.p-4.mb-5(data-aos="zoom-in")
      TabsC.color-acento-contenido
        .py-4.py-md-5(titulo="Lluvia de ideas")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-sm-4
              figure
                img(src='@/assets/curso/temas/tema2/img2-2.svg', alt='Ideas')
            .col-md-8.mb-4.mb-md-0
              p Consiste en una reunión de trabajo, planificada y estructurada; el objetivo primordial es recolectar diversas ideas acerca de un tema específico. Debe tener pautas claras y de estricto cumplimiento desde el inicio y, entre estas reglas, tenemos: ser abierta y participativa, buen manejo en el uso del tiempo, tener un moderador, respetar el uso de la palabra, entre otras. Se deben fijar los criterios para valorar ideas y establecer un puntaje, al igual que el desarrollo de los temas agendados.
              p 
                b Para tener en cuenta
              p Para que una sesión sea exitosa se debe realizar de la siguiente manera:
              ol
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Hacer una introducción obligatoria, bienvenida, contexto y exposición del caso de estudio, conceptos teóricos, planteamiento del problema y ejemplos de casos similares.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |La organización y estructuras de las sesiones son fundamentales para el producto final, lo cual obliga a una planeación de todos los aspectos a tratar y de qué forma abordarlos.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Como se ha mencionado el manejo del tiempo debe ser suficiente para analizar y asimilar el tema central; seguidamente se debe dar espacio para la generación y preparación de ideas; luego un debate y finalmente escoger los planteamientos más destacados, este último en su mayoría se hace por consenso o votación.
            
        .py-4.py-md-5(titulo="Talleres de trabajo <em>(workshop)</em>")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-sm-4
              figure
                img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Reunión virtual')
            .col-md-8.mb-4.mb-md-0
              p Se trata de un espacio de trabajo, donde confluyen determinadas personas, que aportan conocimientos, conceptos, opiniones, pensamientos, material de estudio e incluso dudas e inquietudes del tema proyectado para el desarrollo de 
                em software.
              p 
                b Pautas a seguir
              p Un 
                em workshop 
                |exitoso, debe tener mínimo los siguientes aspectos:
              ol
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Material óptimo: las ayudas audiovisuales, es una herramienta que facilita captar la atención de los asistentes, el material a proyectar se debe seleccionar de forma técnica, sin olvidar que los grupos son heterogéneos por naturaleza, en cuanto a nivel de preparación y asimilación de los conceptos.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Sitio adecuado: es una experiencia que requiere de mucha concentración, lo cual implica contar un sitio óptimo en cuanto a privacidad, comodidad, confianza, no se puede olvidar que la misión a cumplir es de gran importancia y por ende se deben proporcionar los espacios y elementos idóneos.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Ritmo adecuado: el manejo del tiempo es fundamental, así como realizar pausas activas de manera organizada; la metodología debe ser planeada con antelación y socializada, por ejemplo, cambiando de actividad o de tema-subtema. Sumado a los descansos programados de 15 y hasta 20 minutos, luego de jornadas entre 3 o 4 horas.

        .py-4.py-md-5(titulo="Listas de verificación")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-sm-4
              figure
                img(src='@/assets/curso/temas/tema2/img2-4.svg', alt='Lista de chequeo')
            .col-md-8.mb-4.mb-md-0
              p Denominado 
                em “checklist” 
                |o lista de verificación se utiliza para analizar una o más propiedades de un tema en concreto que se somete a consideración de un grupo de observadores, generalmente esta herramienta se cumple mediante una lista de preguntas con respuestas cerradas. Algunos autores las denominan como “respuestas binarias”, ya que se niega 
                em (false) 
                |o aprueba 
                em (true). 
                |Este carácter cerrado de las respuestas, aunque muy criticado y con muchas desventajas, ofrece un nivel de precisión y objetividad muy alto, que se le debe sacar provecho.
              p 
                b Consideraciones
              p Una lista de verificación bien construida debe tener en cuenta los aspectos descritos a continuación:
              ol
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Crear el registro respetando detalles como categoría, la escala determinada en cada pregunta y un detalle que parece obvio, pero es necesario mencionar, dibujar las cuadrículas que guíen al usuario en el manejo de la misma.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Determinar los periodos de verificación en forma clara y concisa.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Clarificar el área, tema, subtema, etc., para que al final sea más fácil recoger los objetivos específicos y hacer la verificación.
                li.mb-3
                  i.fas.fa-circle.cac.me-3
                  |Realizar los cálculos estadísticos y el análisis para llegar a una conclusión efectiva.

    Separador

    #t_2_2(data-aos='fade-right')
      h3 Técnicas ágiles

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-sm-10
        p.mb-3(data-aos="fade-right") En la historia de la humanidad, la necesidad de mejora ha sido una constante en cada proceso, lo que ha llevado a la evolución en todos los ámbitos. Fue así como en el año 2001, se comienza a mencionar el término “ágil” en el mundo del desarrollo de 
          em software, 
          |dado que existían proyectos que contaban con todas las herramientas modernas para la época: infraestructura, sin embargo, los resultados, aunque eran los esperados, requerían demasiado tiempo, especialmente cuando surgían cambios.
        p(data-aos="fade-left") Fue así como un grupo de 17 personas, que venían trabajando en desarrollos de 
          em software
          |, con técnicas tradicionales, se dieron a la tarea de agilizarlos, dando al inicio a otra forma de trabajo, lo cual se conoce hoy como 
          em The Agil Alliance
          |, una organización que nació específicamente para promover aspectos referentes a la agilidad, surgiendo de esta forma lo que se conoce como el Manifiesto Ágil. Dicho tratado se centra en unos postulados, donde sobresalen:
        ol(data-aos="fade-right")
          li.mb-3
            i.fas.fa-circle.cac.me-3
            |La comunicación permanente con el cliente.
          li.mb-3
            i.fas.fa-circle.cac.me-3
            | Prima el funcionamiento del 
            em software.
          li.mb-3
            i.fas.fa-circle.cac.me-3
            |Es prioridad la respuesta a los cambios.
          li.mb-3
            i.fas.fa-circle.cac.me-3
            |Priman los individuos involucrados.
      .col-md-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
        img(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Computador portátil, reloj inteligente')

    p.mb-5(data-aos="fade-right")
      b Actualmente hay una gran variedad de tecnologías ágiles, siendo las más utilizadas:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in")
      .row(titulo="<em>SCRUM</em>")
        .col-md-7.mb-4.mb-md-0
          p Es una metodología ágil, amplia, efectiva y ordenada que se establece para que varios equipos trabajen mancomunadamente y lograr soluciones óptimas en proyectos de alto grado de complejidad. Lo anterior, se basa en el manejo de buenas prácticas para el trabajo en equipo con alta productividad. En el desarrollo de este método colaborativo, se hace una serie de entregables, parciales, constantes y ascendentes, dejando clara la meta o producto final, dándole prioridad a las necesidades más inmediatas que identifique el cliente.
          p Entre otras muchas razones, este punto es la razón fundamental para sugerir 
            em Scrum, 
            |herramienta empleada para proyectos complejos, cambiantes o con escasa claridad en su definición, que requieren resultados a la mayor brevedad posible. 
            em Scrum 
            |hace entregas parciales y regulares del producto final, priorizadas por el beneficio que aporta al receptor.
          p Otro nicho de trabajo para 
            em Scrum, 
            |son los casos en donde el equipo y los clientes, no logran concretar los entregables, por ende, los plazos pactados se alargan, aumentando los costos sin mayor justificación. También se deben tener en cuenta escenarios muy complejos donde la competencia lleva la delantera y requiere una respuesta inmediata ante la situación.
        .col-md-4.order-sm-first.order-lg-last.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema2/img2-6.svg', alt='Tablero')

      .row(titulo="¿Cómo funciona <em>SCRUM</em>?")
        p Para poder entender el funcionamiento de esta metodología, es necesario conocer la forma de trabajo, basado en lo siguiente:
        ol
          li.mb-3
            i.fas.fa-circle.cac.me-3
            |
            em.text-bold Sprint: 
            |es el corazón del #[i Scrum], se refiere a cualquier interacción realizada por el equipo. Los desarrolladores completarán muchos sprints a lo largo del mismo. Se inicia con el compromiso de un hacer determinada tarea y debe finalizar con la prueba real de un entregable. Cada proceso tiene una duración mínima de una semana y máximo 4.
          li.mb-3
            i.fas.fa-circle.cac.me-3
            | 
            b Roles Básicos: 
            |por el funcionamiento mancomunado que se requiere, esta práctica se asocia con el Rugby, teniendo en cuenta el trabajo en equipo que se debe respetar para cumplir con los objetivos planteados. Para lograr este propósito, se requieren personas que desempeñen los siguientes roles: #[br]#[br]
            ol
              li.mb-3
                i.fas.fa-circle.cab.me-3
                | 
                em Product Owner: 
                |el propietario del proyecto, comúnmente llamado usuario, es quien vigila que realmente se está cumpliendo con los objetivos.
              li.mb-3
                i.fas.fa-circle.cab.me-3
                | Equipo de desarrollo: son los encargados de plasmar el 
                em product backlog 
                |(un listado de todas aquellas tareas que se van a ejecutar durante el proyecto) (IEBS 
                em Business School
                |, 2022) es el código fuente, con sus consecuentes pruebas, para finalmente convertirlo en un entregable.
              li.mb-3
                i.fas.fa-circle.cab.me-3
                | 
                em Scrum Master: 
                |es el líder, quien tiene un contacto permanente con el 
                em product owner
                |, pero al mismo tiempo es quien protege al equipo de desarrollo de presiones externas, cuenta con la experiencia en la creación de 
                em software
                |, proyectos, etc., incluso con conocimientos empíricos en administración de personal. 
              li.mb-3
                i.fas.fa-circle.cab.me-3
                |Iteraciones: ciclo repetitivo, donde a medida que avanza se incrementa el valor del producto, es decir, cada iteración implica un avance y un paso firme y seguro a la entrega final.
      .row(titulo="Para tener en cuenta")
        p En la historia de 
          em Scrum, 
          |existen casos de éxitos, pero también de fracasos.
        p 
          em Shopify
          |: comprendió y le otorgó a esta metodología la importancia para alcanzar el éxito del proyecto, en otras palabras, cumpliendo con todos los preceptos de 
          em Scrum
          |, dándole libertad de acción al 
          em Scrum Master
          |, contrataron personas externas para que realizara el trabajo, entendieron con lujo de detalles el rol de 
          em Project Owner 
          |y como complemento ideal, asignaron en forma equitativa las partes del 
          em software 
          |en el equipo, en forma exclusiva. Peralta, (2021).
        p 
          em Healthcare
          |: no obstante, no todos los casos han llegado a obtener un buen producto, tal fue el caso de 
          em Healthcare.gov, 
          |que formó parte de un proyecto del gobierno americano, que buscaba darle aire de total de transparencia en los temas de seguros sanitarios. No obstante, la implementación de la metodología 
          em Scrum 
          |fue un verdadero fracaso, por múltiples factores, no respetaron pasos obligatorios e imprescindibles, como hacer  pruebas semanales de los pequeños resultados con entregas parciales, para minimizar y asimilar errores, a pesar de contratar una cantidad excesiva de consultores, no asignaron el liderazgo del proyecto; fue lanzado por fases, como lo exige 
          em Scrum
          |, por su entorno altamente cambiante, lo cual requiere organización semanalmente; sin mencionar que las pruebas finales, se realizaron en un periodo de tiempo demasiado corto. Peralta, (2021)

      .row.justify-content-center(titulo="<em>Extreme Programming (XP)</em>")
        .col-md-12.mb-4.mb-md-0
          p Esta técnica fue la precursora de las metodologías actuales; sin lugar a dudas, uno de los pilares de su éxito consiste en que cada iteración establece el alcance de la próxima, tiene un manejo avanzado de entregas frecuentes y continuas, advirtiendo que cada versión liberada debe ir a producción inmediatamente.
        .col-md-9.order-sm-first.order-lg-last.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema2/img2-7.png', alt='Programación extrema')

      .row(titulo="Consideraciones")
        p Se deben establecer cuatro variables fundamentales para un óptimo funcionamiento de la metodología XP en todos los proyectos de 
          em software
          |: calidad, tiempo, alcance y costo. Tres de las mencionadas variables, las pueden fijar los clientes o los responsables del proyecto y la cuarta, la establece la división que adelanta el programa.

      .row(titulo="<em>Crystal</em>")
        .col-md-7.mb-4.mb-md-0
          p En la metodología sobresale por la estimación grupal, necesidades de la empresa, lo cual la hace ligera y versátil; hace énfasis en la eficiencia en el desarrollo de 
            em software, 
            | emplea fórmulas para que sean más rentables, priorizando la seguridad de los entregables; se tiene una comunicación fluida, efectúa constantes entregas, generando completa armonía con el usuario, partiendo del respeto por los puntos de vista.
        .col-md-4.order-sm-first.order-lg-last.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema2/img2-8.svg', alt='Explicación en tablero')

      .row(titulo="La metodología <em>Crystal</em>")
        .col-md-7.mb-4.mb-md-0
          p Funciona con los siguientes aspectos:
          ol
            li.mb-3
              i.fas.fa-circle.cac.me-3
              | 
              b Interacción con los usuarios: 
              |dependiendo de la complejidad, profundidad y tamaño del proyecto, se recomienda más de dos usuarios opinando acerca de los entregables.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b Planificación actual y futura: 
              |el equipo planifica el entregable presente y el que sigue.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b Holística: 
              |se subdividen equipos netamente funcionales en multifuncionales.
            li.mb-3
              i.fas.fa-circle.cac.me-3
              |
              b Revisión continua: 
              |los incrementos se componen de iteraciones y de actividades que permiten construir, revisar, probar y controlar los objetivos de cada incremento de ingeniería de 
              em software  
              |I. (2018)
        .col-md-4.order-sm-first.order-lg-last.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema2/img2-9.svg', alt='Persona trabajando en un escritorio')

    Separador

    #t_2_3(data-aos='fade-right')
      h3 Técnicas de priorización de requisitos

    .bloque-texto-izquierda
      .bloque-texto-a.bloque-texto-3.p-4.mb-5(data-aos="zoom-in" style="background-color: #E8E8E8")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8
            .contenedor-dashed.p-4
              .bloque-texto-a__texto.p-4
                p.mb-3 Como se ha mencionado en capítulos anteriores, en la fase de consecución de información, se debe efectuar un correcto y efectivo levantamiento de requisitos, también es necesario priorizar dichas exigencias; tarea de alta complejidad, por las implicaciones, dado que en su mayoría genera fuertes controversias, incluso, posiciones encontradas, por ende, es de recalcar que se deben tomar decisiones así no todos los actores estén de acuerdo.
                p.mb-0 Las técnicas más utilizadas son:
          .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last
            figure
              img(src='@/assets/curso/temas/tema2/img2-10.svg', alt='Joven en escalera')

    p.mb-5(data-aos="fade-right")
      em MosCow
      |, señala que todos los requisitos son importantes, no se puede desmeritar ninguno, algunos son vitales, debido al funcionamiento de los procesos, tornándose obligatorios, lo cual indica, que, sin ellos, el proceso, no se puede ejecutar. Consiste en calificar los requisitos dentro de las categorías: 
      em Must, Should, Could or Would.

    .row.justify-content-center.mb-5
      .col-lg-12.col-sm-8(data-aos="zoom-in")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2-11.svg', alt='MosCow')
          .tarjeta.color-acento-botones.p-3(x="10%" y="18%" numero="+")
            h3
              em Must
            p Imperativo, obligatorio, forzoso.
          .tarjeta.color-acento-botones.p-3(x="90%" y="42%" numero="+")
            h3
              em Should
            p Muy alta prioridad.
          .tarjeta.color-primario.p-3(x="10%" y="57%" numero="+")
            h3
              em Would
            p Se puede aplazar para futuras ejecuciones.
          .tarjeta.color-acento-contenido.p-3(x="90%" y="81%" numero="+")
            h3
              em Could
            p Importante, pero realmente no necesario.

    p.mb-5(data-aos="fade-right") En el siguiente video se puede conocer más sobre la técnica de 
      em MosCoW
      |, es importante prestar mucha atención a las explicaciones que se detallan en allí:

    figure(data-aos="zoom-in")
      .video.mb-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YqfR-9SoTrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-12.svg', alt='Votación')
        h2.text-center Votación
        p Cuando se tiene una cantidad muy grande de requisitos, combinado con posiciones encontradas, una de las formas tradicionales y sencillas es la priorización a votación, dando un puntaje determinado.
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-13.svg', alt='Lista de chequeo')
        h2.text-center Técnica de clasificación de lista
        p Muchos expertos prefieren esta técnica, dado que realmente no requiere mayor preparación ni esfuerzo, simplemente consiste en hacer un análisis simple, es decir, primero hago esto, y después aquello. Por ejemplo, si vamos a recorrer Colombia desde el norte hasta el sur, entonces comenzamos: primero por Riohacha, luego visitamos Santa Marta, y entonces surge el interrogante: ¿puedo ir a Cartagena sin pasar por Barranquilla?: la respuesta es sí, pero no tiene sentido, porque es más práctico ir primero a Barranquilla y de allí pasar a Cartagena. Así de simple es la técnica.
      
    Separador

    #t_2_4(data-aos='fade-right')
      h2 Ventajas y desventajas

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Ventajas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-14.svg', alt='Celular inteligente')
      .col-md-8.col-sm-10.rectanguloid.p-4(data-aos="fade-left")
        ol
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Permite establecer una comunicación fluida entre usuarios y desarrolladores, facilitando la comprensión entre sí.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Se eliminan los intermediarios entre las partes, por lo tanto, la información no tiene peligro de distorsión.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Es posible captar incluso hasta el lenguaje corporal de los clientes, lo cual nos facilita la comprensión de gestos, tonos de voz, etc.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Facilita la determinación de funciones, las utilidades que requiere el sistema y la posibilidad de atender las necesidades, de forma temprana, evitando reprocesos.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |La cercanía con los usuarios conlleva un entendimiento óptimo, que es fundamental en el modelo de desarrollo, incluso a la hora de realizar todo tipo de pruebas.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Los requerimientos que se obtienen son más confiables, estables y veraces.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Al mejorar la calidad de los requerimientos, se eleva la calidad del producto final.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Desventajas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-15.svg', alt='Computador portátil')
      .col-md-8.col-sm-10.rcacid.p-4(data-aos="fade-left")
        ol
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Algunos usuarios tienen la tendencia a la mentira.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Posibles problemas de comunicación y expresión con los clientes.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |La mala interpretación de las órdenes entre los involucrados puede entorpecer el proyecto.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |En ocasiones, se requiere un reentrenamiento a los desarrolladores, en aspectos como el levantamiento de requisitos.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Algunas veces las entrevistas generan un numeroso volumen de información y requiere de mucha habilidad para organizarla y no olvidar detalles importantes.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Se puede obtener información repetida o excesivamente redundante, cuya revisión requiere demasiado tiempo.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Se requiere excelente entendimiento con los usuarios, independiente de factores externos.
          li.mb-3
            i.fas.fa-check.fa-xs.cst.me-3
            |Puede resultar tedioso y muy difícil vincular a patrocinadores y/o dueños, que se requieran, por la dificultad de sus agendas.

</template>

<script>
export default {
  name: 'Tema2',
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
