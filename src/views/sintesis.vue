<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-md-11
        .titulo-sexto.color-acento-contenido.mb-5
            h4 Implementación y gestión de bases de datos
            p.mb-0 Síntesis: Construcción del informe de requisitos
      .col-md-1
        figure.logo-size
          img(src="@/assets/curso/temas/logo.svg", alt="alt")

    p.mb-5 La construcción del informe indica la forma de realizarlo, bajo los mejores y más eficientes estándares,  como se muestra en el siguiente mapa conceptual.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1. 
            br
            em Construcción del informe de requisitos

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
