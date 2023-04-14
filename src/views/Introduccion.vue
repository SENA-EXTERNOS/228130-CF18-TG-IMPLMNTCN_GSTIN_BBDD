<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-md-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro/intro.svg', alt="Imagen decorativa")
      .col-md-11.col-sm-10(data-aos="fade-left")
        p En el presente componente se desarrollan contenidos relacionados con la construcción del informe de requisitos del <em>software</em> que va de la mano con la recolección de información, pues no se puede priorizar una sobre la otra, simplemente se complementan, puesto que mientras una permite obtener la información necesaria para iniciar el proyecto, también nos permiten entender y construir todo el comportamiento del nuevo sistema que se planea desarrollar. Se invita a revisar el siguiente video para identificar el contexto de aprendizaje.
    
    figure.mb-5(data-aos="zoom-in")
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/1cI9IAI6KiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
