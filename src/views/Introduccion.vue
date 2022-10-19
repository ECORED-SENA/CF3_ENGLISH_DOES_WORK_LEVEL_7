<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .margin-n.bg-intro.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.png', alt='')
        .col-lg-8(data-aos="fade-left")
          .tarjeta.bg-white.p-5.tarjeta-intro 
            p.mb-4 Al momento de hablar de eventos del pasado, existen diferentes estructuras gramaticales que permiten hablar de diferentes elementos del pasado. En este componente se trabajará el pasado perfecto, el cual se enfoca en mostrar los eventos del pasado que ocurrieron antes de otro evento del pasado. Durante el componente, se mostrará su estructura y cuándo no utilizar este recurso del lenguaje. 
              br
              br
              |Este componente, además, incluye el uso de los adverbios de grado, los cuales permiten mostrar la intensidad de algo, desde cuándo hacemos algo hasta qué tanto interés se tiene en algo. Otros temas que son importantes para este componente son los conectores narrativos y conectores en general. Los conectores narrativos van a ser elementos complementarios para la producción de textos anecdóticos y oraciones complejas en el pasado. 
              br
              br
              |Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:
            .tarjeta-intro__icon1: img(src='@/assets/curso/portada/a4.svg', alt='')
            .tarjeta-intro__icon2: img(src='@/assets/curso/portada/a5.svg', alt='')
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/eftXJHC30uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-intro
  background-image: url('../assets/curso/temas/intro/bg-intro.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
