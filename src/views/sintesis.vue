<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    div(style="background-color: #fff7da ").p-4.mb-5
      .row.justify-content-center
        .col-lg-3.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/sintesis/1.jpg', alt='')
        .col-lg-8(data-aos="fade-left")
          p #[em Up to this point, we have been able to appreciate everything that has to do with the past perfect tense, the use of adverbs of degree to talk about the intensity of something in a sentence, and the narrative connectors, which is why we invite you to consider the following conceptual scheme that summarizes the subject treated:]
            br
            br
            span.r--g Hasta aquí hemos podido apreciar todo lo que tiene que ver con el pasado perfecto, el uso de adverbios de grado para hablar de la intensidad de algo en una oración y los conectores narrativos, por lo que le invitamos a considerar el siguiente esquema conceptual que resume el tema tratado:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
