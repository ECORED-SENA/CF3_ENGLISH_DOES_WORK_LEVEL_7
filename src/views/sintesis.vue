<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    div(style="background-color: #fff7da ").p-4.mb-5
      .row.justify-content-center
        .col-lg-3.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/sintesis/1.jpg', alt='')
        .col-lg-8(data-aos="fade-left")
          p #[em Up to this point we have been able to understand everything that has to do with the present perfect tense, how it is structured, the time expressions it uses, its relationship with the simple past, and how with these, anecdotes can be narrated (together with the exclamatory phrases and adverbs of manner). For this reason, you are invited to notice the following conceptual scheme that summarizes the subject matter:]
            br
            br
            span.r--g Hasta este punto, hemos podido comprender todo lo que tiene que ver con el tiempo presente perfecto, cómo se estructura, las expresiones temporales que utiliza, su relación con el pasado simple, y cómo con estos se pueden narrar anécdotas (en conjunto con las frases exclamativas y los adverbios de modo). Por ello, se invita a que aprecie el siguiente esquema conceptual que resume la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
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
