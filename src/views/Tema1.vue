<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Requisitos de 
        em software

    p.mb-5(data-aos="fade-right") A continuación, encontrará la definición y elementos a tener en cuenta de los requisitos de 
      em software.
      
    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-1.svg', alt='Imagen decorativa')
        h2.text-center Definición
        p Los requisitos del 
          em software 
          |son la definición de las características y funciones del sistema planteado.
        p Dichos requerimientos anuncian lo que  los clientes necesitan o pretenden, dejando claro sus expectativas; no obstante, en algunas ocasiones, los mencionados requisitos pueden quedan ocultos a la vista de los interesados, pero en la retina de los usuarios, o puede suceder que la mayoría de los requisitos sean obvios, incluso para el mismo cliente. 
        p Algunas lecturas cambian la palabra “requisitos” por “servicios”, pero realmente se refieren al mismo concepto.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-2.svg', alt='Imagen decorativa')
        h2.text-center Para tener en cuenta
        p Haciendo una síntesis de las características de los requerimientos, se puede acotar lo siguiente:
        p
          ul.lista-ul
            li
              i.lista-ul__vineta
              |Deben ser específicos y concretos, no puede existir ambigüedad alguna.
            li
              i.lista-ul__vineta
              |Deben ser realizables y aterrizados; puesto que se construyen servicios que son irrealizables.
            li
              i.lista-ul__vineta
              |Ser pertinentes, dado a que los requisitos  deben centrarse en el caso de estudio actual y no tratar de solucionar otras situaciones que no aplican al caso.
            li
              i.lista-ul__vineta
              |Priorizar los requerimientos, es decir, no se puede medir de la misma forma todas las peticiones, lo normal es que para cumplir algunos, ya se tengan otros ejecutados.

    Separador

    #t_1_1(data-aos='fade-right')
      h3 Requisitos funcionales

    p.mb-5(data-aos="fade-right") En el siguiente ítem, encontrará información sobre los requisitos funcionales de un proyecto de desarrollo de 
      em software.

    .tarjeta.tarjeta--celeste.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Definición
            p Los requerimientos funcionales de un proyecto de desarrollo de 
              em software 
              |son los que describen todas las actividades que el sistema debe realizar, es decir, definen los comportamientos o funciones, particulares o generales del mencionado procesador en determinados momentos y condiciones específicas. Generalmente, estos requerimientos funcionales, deben incluir procesos cumplidos por formularios, interfaces, descripciones de los flujos de trabajo, cálculos, rutinas, etc., y en general todas las exigencias del negocio que el sistema debe cumplir.
            p En otras palabras, los servicios funcionales se definen como declaraciones del trabajo que realizará el 
              em software 
              |o los resultados que debe brindarnos el mismo ante el ingreso de determinados datos; aclarando que el término “datos de entradas”, no necesariamente se refiere exclusivamente a la información digitada por los usuarios, también pueden ser respuestas automáticas de otros desarrollos e incluso procesos predefinidos. Lo anterior, sin mencionar que, en muchas ocasiones, los requisitos funcionales establecen clara y explícitamente lo que el sistema no debe o no puede hacer. Esto no se concreta como una definición alternativa, dejando claro el concepto de requerimiento funcional, mediante una declaración negativa de lo que no puede pasar; lo cual lo convierte en algo correcto y necesario determinar cuándo se presente.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-3.svg', alt='Imagen decorativa')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Falencias o fallas
            p Un  elevado número de proyectos de desarrollo, presentan falencias o fallas en su construcción por especificaciones de requisitos inexactas; los encargados de construir y/o determinar los requisitos funcionales, pueden tomar decisiones y hasta suposiciones basados en la propia experiencia o de situaciones anteriores o generales o, en el peor de los casos, de por sentado algún comportamiento que no corresponde al caso de estudio actual: aún más, puede pasar que el profesional encargado, defina de forma ambigua o demasiado simple un requerimiento, pensando más en una solución fácil o rutinaria, en aras de simplificar su implementación. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-4.svg', alt='Imagen decorativa')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Posibilidades para construir requerimientos funcionales
            ul.lista-ul
              li
                i.lista-ul__vineta
                |Definir los datos de entrada completos y bien validados.
              li
                i.lista-ul__vineta
                |Determinar todas y cada una de las operaciones a realizar en cada formulario, interface, etc.
              li
                i.lista-ul__vineta
                |Resolver de manera clara y concisa los reportes requeridos.  
              li
                i.lista-ul__vineta
                p.mb-0 Precisar roles de usuario, especialmente para determinar quiénes y cuándo pueden digitar datos al 
                  em software.
              li
                i.lista-ul__vineta
                |Establecer otros datos de salida (diferente a reportes) requeridos por el usuario.
              li
                i.lista-ul__vineta
                |Detallar la forma de cumplir con estándares internaciones y/o de diversos tipos.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-5.svg', alt='Imagen decorativa')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Ventajas
            ul.lista-ul
              li
                i.lista-ul__vineta
                |Ayuda en la verificación, es decir que la aplicación realmente está proporcionando todas las funciones requeridas y prometidas.
              li
                i.lista-ul__vineta
                |Ayuda en la definición de las funcionalidades de un sistema o en su defecto de sus subsistemas.
              li
                i.lista-ul__vineta
                |Permite completar las necesidades planteadas y posiblemente faltantes.
              li
                i.lista-ul__vineta
                |Accede a depurar errores cometidos en la obtención de requisitos, en aras de afinar los resultados finales. 
              li
                i.lista-ul__vineta
                |Posibilita cumplir con los objetivos propuestos, así como las actividades planteadas y las tareas correspondientes.
              li
                i.lista-ul__vineta
                |Adhiere  en forma clara y precisa los procesos a sistematizar y con ello a determinar los comportamientos planeados y esperado del sistema.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-6.svg', alt='Imagen decorativa')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Clasificación
            p Podemos clasificar los requerimientos funcionales en los siguientes tipos:
            ul.lista-ul
              li
                i.lista-ul__vineta
                |Auditoría.
              li
                i.lista-ul__vineta
                |Interfaces internas y externas.
              li
                i.lista-ul__vineta
                |Histórico de datos.
              li
                i.lista-ul__vineta
                |Transaccionales.
              li
                i.lista-ul__vineta
                |Certificación.
              li
                i.lista-ul__vineta
                |Reglas del negocio.
              li
                i.lista-ul__vineta
                |Roles y permisos de usuarios.
              li
                i.lista-ul__vineta
                |Gestión legal.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-7.svg', alt='Imagen decorativa')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Ejemplos
            p Con base en lo anterior, es posible construir ejemplos de requerimientos funcionales:
            ul.lista-ul
              li
                i.lista-ul__vineta
                |El sistema emitirá un mensaje de texto y/o correo electrónico cuando se realice alguna de las siguientes transacciones: pedido de un cliente, despacho de mercancía, emisión de factura y registro de pago.
              li
                i.lista-ul__vineta
                |El sistema de ventas virtual permitirá a los usuarios, adicionar, modificar y consultar las ventas de los clientes activos.
              li
                i.lista-ul__vineta
                |El sistema de información tendrá un botón de pagos, conectado con PSE que permitirá realizar pagos electrónicos.
              li
                i.lista-ul__vineta
                |El sistema enviará automáticamente un correo electrónico a los interesados cuando se cree una nueva requisición.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-8.svg', alt='Imagen decorativa')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Ejemplos
            ul.lista-ul
              li
                i.lista-ul__vineta
                |El sistema le asignará un número consecutivo, único e irrepetible a cada pedido, para identificarlo en todos los procesos del inventario.
              li
                i.lista-ul__vineta
                |El campo ‘Neto a Pagar' únicamente acepta valores decimales, con dos posiciones.
              li
                i.lista-ul__vineta
                |El campo ‘fecha de nacimiento’ únicamente acepta una fecha que indique que el trabajador tiene entre 18 y 65 años, rango de edad determinada por políticas de la empresa.
              li
                i.lista-ul__vineta
                p.mb-0 Los clientes tendrán disponible únicamente los productos con 
                  em stock 
                  | suficiente. 
              li
                i.lista-ul__vineta    
                |El administrador del sistema podrá ver las ganancias, pérdidas y principales balances contables en tiempo real.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-9.svg', alt='Imagen decorativa')
        .row
          .col-md-8.mb-4.mb-md-0
            h3 Para tener en cuenta
            p Posibles errores en la construcción de requisitos funcionales:
            ul.lista-ul
              li
                i.lista-ul__vineta
                |Evite copiar necesidades externas o generales de artículos, libros, etc., puesto que estos deben   ser personalizados en cada sistema.
              li
                i.lista-ul__vineta
                |Evite adicionar información, a menos que sea estrictamente necesario, ya que esto puede generar dudas o confusiones.
              li
                i.lista-ul__vineta
                |Evite omitir detalles técnicos en los requisitos funcionales.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-10.svg', alt='Imagen decorativa')

    Separador

    #t_1_2(data-aos='fade-right')
      h3 Requisitos no funcionales

    .row.justify-content-center.align-items-center.mb-5
      .col-md-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-11.svg', alt="Monitor")
      .col-md-11.col-sm-10(data-aos="fade-left")
        p Conozca qué son y cómo funcionan los requisitos no funcionales de un proyecto de desarrollo de 
          em software.
        p Los requisitos no funcionales son características, cualidades o restricciones del 
          em software 
          | que no determinan una funcionalidad del sistema que se construye; es decir, no son una especificación del usuario, ni un pedido del cliente, sin embargo, influyen en el funcionamiento del 
          em software. 
          | En otras palabras, los ‘requisitos no funcionales’ no definen lo que el proyecto debe hacer, sino cómo lo debe hacer, por lo tanto, son cuantificables, medibles y verificables.

    .row.mb-5
      .col-md-3.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-12.svg', alt="Persona escribiendo en un tablero")
      .col-md-9(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Elementos para construir los ‘requisitos no funcionales’")
            p 
              b Seguridad: 
              |el activo más preciado de las empresas es la información que debe protegerse realizando acciones como:
            ol
              li.mb-3
                i.fas.fa-circle.cp.me-3
                | #[b Control de intentos en la digitación de claves de usuario:]
                | después de determinado número de intentos fallidos al ingresar una contraseña, se debe bloquear la cuenta por razones de seguridad y estipular un proceso seguro y controlado para su desbloqueo.
              li.mb-3
                i.fas.fa-circle.cp.me-3
                | #[b Control de cuentas de usuario:]
                | todos los usuarios del 
                em software 
                |deben tener cuentas personalizadas, con el fin  de realizar procesos de auditoría y control de la información efectivos. Con esta acción es posible garantizar la seguridad de la información a través de la creación de roles de usuario.
              li.mb-2
                i.fas.fa-circle.cp.me-3
                | #[b Control de contraseñas:]
                |es necesario exigir la utilización de contraseñas fuertes que contengan características como un mínimo de 8 caracteres, obligatoriedad de combinar mayúsculas, minúsculas, números y caracteres especiales. Incluso, puede indicarle al algoritmo que genere dichas contraseñas al usuario, si este lo desea. También es importante agregar preguntas de seguridad previamente establecidas por los usuarios en los procesos de recuperación de contraseñas.

            p 
              b Compatibilidad: el mundo está cada vez más conectado, lo cual 
              |obliga a construir aplicaciones compatibles con la mayor cantidad de dispositivos posibles. En consecuencia, se deben diseñar aplicaciones que funcionen en cualquier navegador y dispositivo. 
            p 
              b Usabilidad: 
              |depende de elementos como:
            ol
              li.mb-3
                i.fas.fa-circle.cp.me-3
                | #[b Capacitación:]
                |un 
                em software 
                |debe facilitar la vida de sus usuarios, no complicarla, es decir, con entrenamientos cortos y sencillos debe ser posible aprender a manejar el aplicativo.
              li.mb-3
                i.fas.fa-circle.cp.me-3
                | #[b Rendimiento:]
                |la optimización de algoritmos, script de bases de datos y demás aspectos medibles y comprobables inherentes al desarrollo de 
                em software, 
                |deben mejorar el rendimiento de las aplicaciones.
              li.mb-3
                i.fas.fa-circle.cp.me-3
                | #[b Estandarizaciones:]
                |utilizar símbolos universalmente conocidos, como el + para indicar adición o la lupa para denotar búsquedas; facilita el uso de las aplicaciones de manera intuitiva.
              li.mb-2
                i.fas.fa-circle.cp.me-3
                | #[b Almacenamiento:]
                |esta característica define un aspecto importante, especialmente para los usuarios, ya que hay aplicaciones que tienen un alto crecimiento en cuanto a registros. Algunas aplicaciones permiten personalizar la configuración de usuario, lo cual es un factor relevante para el almacenamiento.

            p 
              b Eficiencia: 
              |los servidores que alojan las aplicaciones web requieren gran capacidad de almacenamiento y procesamiento de datos, ya que deben responder muchas solicitudes en cuestión de pocos segundos.

          div(titulo="Ejemplos de requerimientos funcionales")
            p Cada transacción (clic) debe tener una respuesta del 
              em software 
              |de máximo 5 segundos.
            p El 
              em software 
              |debe poder trabajar sin problemas hasta con 80 mil usuarios conectados simultáneamente.
            p Los roles de usuario solo pueden ser asignados por el administrador del sistema.
            p Realizar copias de seguridad automáticas cada 24 horas y almacenarlas  en la nube y en un disco físico fuera de las instalaciones de la empresa.
            p Todas las claves de usuario deben estar encriptadas.
            p El sistema debe contar con manuales de usuario ubicados estratégicamente mediante atajos especiales o repositorios comunes. 
            p Las soluciones web deben construirse con la característica de diseño 
              em ‘Responsive’ 
              |(adaptable), que implica que el sitio web se adapte al tamaño de pantalla de cualquier dispositivo.

          div(titulo="Para tener en cuenta")
            p Aunque los requisitos no funcionales son estandarizados, es posible que se presenten situaciones como:
            ol
              li.mb-3
                i.fas.fa-circle.cp.me-3
                |El desarrollo de #[em software] se debe realizar utilizando una de las herramientas #[em CASE] específicas.
              li.mb-3
                i.fas.fa-circle.cp.me-3
                |La invención del #[em software] se debe realizar cumpliendo con la norma ISO 9000 que establece los estándares al respecto.
              li.mb-3
                i.fas.fa-circle.cp.me-3
                |El #[em software] no puede registrar más de dos fallas de distinta índole cada mes.
              li.mb-3
                i.fas.fa-circle.cp.me-3
                |La aplicación web debe funcionar para cualquier sistema operativo y en cualquier navegador.

    Separador

    #t_1_3(data-aos='fade-right')
      h3 Estándares

    p.mb-5(data-aos="fade-left") Un estándar, es un modelo, una referencia o un patrón a seguir. En este sentido, un estándar de calidad, se refiere a las normas mínimas que se deben cumplir para obtener el más alto nivel de calidad de un producto.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1-13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En 1946, se creó la Organización Internacional de Estandarización, más conocida como ISO por sus iniciales en inglés. Esta institución nació de la unión de dos organismos que existían anteriormente, el primero de ellos el 
          em International Federation of National Standarzing 
          |(ISA); y el segundo, la 
          em United Nations Standards Coordinating Committee 
          |(UNSCC), cuya reunión inicial se realizó en el Instituto de Ingenieros Civiles de  Londres, con una participación de 64 delegados representantes de 25 países. #[br]#[br]Todo lo anterior dio como resultado la creación de las normas ISO, una serie de estándares con reconocimiento mundial e internacional, cuyo objetivo principal es ayudar a las empresas a establecer determinados niveles de igualdad y homogeneidad en lo relacionado directamente con su gestión, desarrollo de productos de diversas industrias e incluso, prestación de servicios. Han creado más de 23.000 estándares que cubren diversidad de áreas del saber y de gestión, tecnologías y procesos industriales y de producción. La ISO es una organización no gubernamental, presente en 164 países, con 781 comités y subcomités técnicos dedicados a el desarrollo de estándares, con sede principal en Ginebra, Suiza.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-14.svg', alt="Hoja digital")
      .col-md-11.col-sm-10(data-aos="fade-left")
        p A continuación, se dan a conocer las normas más comunes, aplicadas al desarrollo de 
          em software: 
        p Uno de los temas más importantes de recolección de requisitos son los estándares que se trabajan en esta industria y mediante esta herramienta, se presentan las más usadas.

    .row.justify-content-center.mb-5
      .col-lg-12.col-sm-8(data-aos="zoom-in")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img1-15.svg', alt='Oficinas')
          .tarjeta.color-acento-contenido.p-3(x="10%" y="37%" numero="+")
            p Dedicado al diseño en el desarrollo de un producto.
          .tarjeta.color-acento-contenido.p-3(x="92%" y="37%" numero="+")
            p Registro concreto que nombra las directrices a tener en cuenta para brindar todas las facilidades en el 
              em software, 
              |específicamente en campos como el soporte de usuarios.
          .tarjeta.color-acento-contenido.p-3(x="10%" y="74%" numero="+")
            p Documento específico que aplica el ISO 9001 al desarrollador de 
              em software.
          .tarjeta.color-acento-contenido.p-3(x="92%" y="74%" numero="+")
            p Calidad de los procesos de desarrollo de 
              em software.

    p(data-aos="fade-right")
      b En este capítulo se profundizará en la norma ISO/IEC 33000.
    p.mb-5(data-aos="fade-left") La norma ISO/IEC 33000 hace referencia a la "Calidad de los procesos de desarrollo de 
      em software
      |" que representa a un conjunto de normas internacionales que reemplaza a la ISO 15504 "Evaluación y Mejora de la capacidad y madurez de procesos"; SPICE ISO/IEC 33000 es una actualización de la serie ISO 15504. La norma ISO 33000 es un proyecto de 
      em Software 
      |llamado 
      em Process Improvement and Capability Determination 
      |(SPICE) dirigido fundamentalmente a empresas de desarrollo de 
      em software 
      |y a organizaciones que subcontratan esos servicios.

    .bloque-texto-izquierda(data-aos="zoom-in")
      .bloque-texto-a.bloque-texto-p.p-4.mb-5(data-aos="zoom-in" style="background-color: #F3F9FF")
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8
            .contenedor-dashed.p-4
              .bloque-texto-a__texto.p-4
                p.mb-3 La norma ISO 33000 aporta líneas de trabajo coherentes para la evaluación de procesos 
                  em software.
                p.mb-3
                  b ¿Qué establece la Norma ISO 33000 “Calidad de los procesos de desarrollo de 
                  b 
                    em software
                  b ”?
                p Proporciona la base para realizar evaluaciones de capacidad en los procesos de 
                  em software 
                  |y permite medir los resultados obtenidos, con dicha información se puede: comprobar la evolución de una empresa a lo largo del tiempo, el seguimiento de productos: oferta y/o demanda en una organización respecto a la competencia y determinar las estrategias de mejora, Grupo ACMS Consultores, (2019).
          .col-lg-4.mb-4.mb-lg-0.p-4.order-sm-first.order-lg-last
            img(src='@/assets/curso/temas/tema1/img1-16.svg', alt='Computador portátil')
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
