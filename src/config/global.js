export default {
  global: {
    componenteFormativo: 'Construcción del informe de requisitos',
    descripcionCurso:
      'En los proyectos de desarrollo de <em>software</em>, resulta determinante la fase de levantamiento de información, razón por la cual se debe estudiar a fondo el tema, que es la base fundamental del <em>software</em> que se planea producir. Ahora bien, desarrollar las competencias en estos aspectos, requiere el estudio de las técnicas que permitan el mejor aprovechamiento de esta información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          //{
          //icono: 'far fa-file-alt',
          //numero: '1.1',
          //titulo: 'Requisitos funcionales',
          //hash: 't_1_1',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '1.2',
          //titulo: 'Requisitos no funcionales',
          //hash: 't_1_2',
          //},
          //{
          // icono: 'far fa-file-alt',
          //numero: '1.3',
          //titulo: 'Estándares',
          //hash: 't_1_3',
          //},
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de recolección de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          //{
          // icono: 'far fa-file-alt',
          //numero: '2.1',
          //titulo: 'Técnicas tradicionales',
          //hash: 't_2_1',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '2.2',
          //titulo: 'Técnicas ágiles',
          //hash: 't_2_2',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '2.3',
          //titulo: 'Técnicas de priorización de requisitos',
          //hash: 't_2_3',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '2.4',
          //titulo: 'Ventajas y desventajas',
          //hash: 't_2_4',
          //},
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Viewpoint</em>',
        desarrolloContenidos: true,
        subMenu: [
          //{
          //icono: 'far fa-file-alt',
          //numero: '3.1',
          //titulo: 'Concepto y aplicación',
          //hash: 't_3_1',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '3.2',
          //titulo: 'Modelos',
          //hash: 't_3_2',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '3.3',
          //titulo: '<em>Stakeholders</em>',
          //hash: 't_3_3',
          //},
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Requisitos de <em>software</em>',
      referencia:
        'Pressman, R. (2010). Ingeniería de <em>software</em> Un enfoque práctico. <em>Séptima Edición.</em>',
      tipo: 'Libro',
      link:
        'http://cotana.informatica.edu.bo/downloads/ld-Ingenieria.de.software.enfoque.practico.7ed.Pressman.PDF',
    },
    {
      tema: 'Requisitos de <em>software</em> ',
      referencia:
        'Sommerville, I (2011). <em>Ingeniería de software. Novena Edición.</em> ',
      tipo: 'Libro',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25469w/ingdelsoftwarelibro9_compressed.pdf',
    },
    {
      tema: 'Requisitos de <em>software</em>',
      referencia:
        'Cervantes Maceda, H. (2016). Arquitectura de <em>software</em>. Conceptos y ciclo de desarrollo. ',
      tipo: 'Libro',
      link:
        'https://www.researchgate.net/profile/Perla-Velasco-Elizondo/publication/281137715_Arquitectura_de_Software_Conceptos_y_Ciclo_de_Desarrollo/links/57144e1408aeebe07c0641ab/Arquitectura-de-Software-Conceptos-y-Ciclo-de-Desarrollo.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>MoSCoW</em>',
      significado:
        'técnica de priorización de requisitos que consiste en calificar dichos requisitos dentro de las categorías: <em>Must, Should, Could o Would</em>.',
    },
    {
      termino: 'Ingeniería del <em>software</em>',
      significado:
        'es una parte importante de las ciencias de la computación, o una ramificación de ella, que estudia la construcción de <em>software</em> seguro y de alta calidad, basándose en métodos y técnicas de ingeniería, además, brinda un efectivo soporte operacional y de otra índole, donde sobresale el mantenimiento.',
    },
    {
      termino: '<em>Scrum</em>',
      significado:
        'es una metodología ágil, muy amplia, en la que se establece una forma efectiva y ordenada para que varios equipos trabajen mancomunadamente para lograr soluciones óptimas en proyectos muy complejos.',
    },
    {
      termino: 'Investigación cualitativa',
      significado:
        'es el método científico de observación directa para extraer o recepcionar datos no numéricos.',
    },
    {
      termino: '<em>ViewPoint</em>',
      significado:
        'se cimienta en la integración de enfoque con puntos de vista.',
    },
    {
      termino: 'Prototipo',
      significado:
        'consiste en una representación supuesta pero concreta y muy aterrizada de una parte específica o la totalidad de un proyecto, idea de negocio, e incluso, un producto o servicio.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'la funcionalidad que se espera tenga un determinado <em>software.</em>',
    },
    {
      termino: 'Roles',
      significado:
        'funciones que un individuo desempeña en un proceso, solución, proyecto, situación, etc.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'se trata del participante, integrante, parte interesada, puede ser un individuo, una empresa u organización, que tiene cualquier tipo de participación directa, de forma interna o externa en un proceso que estudiamos y pretendemos sistematizar.',
    },
    {
      termino: 'Técnicas',
      significado:
        'hace referencia a todos los procedimientos que se usan para lograr un resultado determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Acuña, Andrea Paola. (2012).</em> La gestión de los stakeholders. Análisis de los diferentes modelos. Encuentro Regional Zona Sur Adenag Trelew, 19 y 20 de abril de 2012. Universidad del Sur.',
      link:
        'https://www.fundacionseres.org/lists/informes/attachments/1064/la%20gesti%c3%b3n%20de%20los%20stakeholders.%20an%c3%a1lisis%20de%20los%20diferentes%20modelos.pdf',
    },
    {
      referencia:
        'Apiumhub, (2020). <em>Técnicas de priorización de requerimientos de software que debes saber.</em>',
      link:
        'https://apiumhub.com/es/tech-blog-barcelona/priorizacion-requerimientos-software/',
    },
    {
      referencia:
        'Debrauwer, L. & Van Der, F. (2020). <em>UML 2.5 Iniciación, ejemplos y ejercicios corregidos</em> (5ª edición).',
      link:
        'https://www-eni-training-com.bdigital.sena.edu.co/portal/client/mediabook/home',
    },
    {
      referencia:
        'Edteam, (2017). <em>¿Cómo se deciden las versiones del software?</em>',
      link: 'https://ed.team/blog/como-se-deciden-las-versiones-del-software',
    },
    {
      referencia:
        'Grupo ACMS Consultores. (2019). <em>Norma ISO 33000 Calidad de procesos de desarrollo software.</em> ',
      link: 'https://www.grupoacms.com/norma-iso-33000',
    },
    {
      referencia:
        'IEBS Business School. (2022). Qué es un <em>product backlog</em> y cómo hacer uno.',
      link:
        'https://www.iebschool.com/blog/que-es-un-product-backlog-y-como-hacer-uno-guia-scrum-agile-scrum/#:~:text=Un%20product%20backlog%20es%20una,visibles%20para%20todo%20el%20equipo',
    },
    {
      referencia:
        'Ingeniería de <em>Software</em> I. (2018). <em>Ingeniería de software I.</em>',
      link:
        'https://isi2018.wordpress.com/2018/04/09/metodologia-agil-crystal/',
    },
    {
      referencia:
        'Lis, G, & Pantaleo, L. (2018), <em>Ingeniería de Software.</em> ',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/ingenieria-de-software?location=155',
    },
    {
      referencia:
        'Peralta, E. (2021). <em>Cómo Funciona la Metodología Scrum.</em>',
      link: 'https://www.genwords.com/blog/metodologia-scrum',
    },
    {
      referencia:
        'Pressman, R. &  Maxim, B. (2021). <em>Ingeniería de software – Un enfoque práctico. Novena Edición.</em> ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=16414  ',
    },
    {
      referencia:
        '<em>Sommerville, I. (2011). Ingeniería del software. Novena Edición.</em> Pearson Educación',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25469w/ingdelsoftwarelibro9_compressed.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
