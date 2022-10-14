<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 #[em Exclamation phrases] (Frases de exclamación)   
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Exclamations are used to express surprise, shock, or strong emotion about something. When writing, an exclamation point 
              span.r--4.fw-bold (!) 
              | is usually placed at the 
              span.r--4.fw-bold end of the exclamatory phrase. 
              | Unlike Spanish, English doesn’t have an opening exclamation mark at the beginning of the phrase.
              br
              |Example:
              br
              br
              |I can’t believe it!
              br
              |Oh, no! Look at this place!
              br
              br
              |Next, you are invited to listen to the following thematic dialogue with exclamation phrases that are used in some English conversations.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Las exclamaciones son usadas para expresar sorpresa, conmoción o una emoción fuerte sobre algo. Al escribir, suele ponerse un signo de exclamación (!) al final de la frase exclamativa.  A diferencia del español, el inglés no tiene un signo de exclamación de apertura al principio de la frase.
              br
              br
              |¡No puedo creerlo!
              br
              |¡Oh, no! ¡Mira este lugar!
              br
              br
              | A continuación, se le invita a escuchar el siguiente diálogo temático con frases de exclamación que son utilizadas en algunas conversaciones de inglés.


          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/1.jpg', alt='' style='border-radius: 20px')
    .margin-n.p-5.mb-5.bg-tema(data-aos="zoom-in")
      h4.text-center
        span.r--2 #[em Thematic Dialogue]  / Diálogo temático
      p.mb-5(data-aos='fade-right').text-white.text-center  Dialogue between two friends, one of them had an accident at home. / Diálogo entre dos amigos, uno de ellos tuvo un accidente en casa. 
      .row.justify-content-center.mb-5
        .col-lg-9
          .tarjeta.bg-white.p-5.tarjeta-intro 
            .row.justify-content-center.mb-5
              .col-lg-6: img(src='@/assets/curso/temas/tema5/2.svg', alt='') 
              
              .col-lg-6
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b> Kevin:</b> Manuela, I haven’t sent you my part of the group project because yesterday I broke my arm in three pieces.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/1.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                    p Manuela, no te he enviado mi parte del trabajo en grupo porque ayer me rompí el brazo en tres pedazos.
                  a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fc5f65') Ver traducción
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b> Manuela:</b> You can’t be serious! What happened?
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/2.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                    p ¡No puedes hablar en serio! ¿Qué pasó?
                  a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fc5f65') Ver traducción
            .row.justify-content-center
              
              .col-lg-6
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b> Kevin:</b> I had an accident at home. I slipped and rolled down the stairs.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/3.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                    p Tuve un accidente en casa. Me resbalé y rodé escaleras abajo.
                  a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fc5f65') Ver traducción
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b> Manuela:</b> Sounds awful! I hope you feel better today.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema5/4.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                    p ¡Suena horrible! Espero que hoy te sientas mejor.
                  a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fc5f65') Ver traducción
              .col-lg-6: img(src='@/assets/curso/temas/tema5/3.svg', alt='') 
            .tarjeta-intro__icon1: img(src='@/assets/curso/portada/a4.svg', alt='')
            .tarjeta-intro__icon2: img(src='@/assets/curso/portada/a5.svg', alt='')
    p.mb-5(data-aos='fade-right')
      span.r--1 Let’s look at some of the most commonly used exclamatory phrases to express strong emotions in the English language: 
      span.r--g / Veamos algunas de las frases exclamativas más comúnmente usadas para expresar emociones fuertes en el idioma inglés:
    .bg-5.p-4.mb-5
      p.mb-5(data-aos='fade-right') #[em Knowing expressions or ways of expressing feelings and emotions when communicating.] / Conocer expresiones o formas de expresar los sentimientos y emociones a la hora de comunicarnos. 
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema5/4.svg', alt='Texto que describa la imagen')
        .tarjeta.p-3(x="8.5%" y="90%" numero="+" style='background-color: #f0f4ff ; border: 2px solid #89b1f3')
          h4.text-center #[em Exclamation sentence] / Frase exclamativa
          TarjetaAudio.bg-white.color-acento-botones.mb-3(
            texto="I’m not surprised! / <span class=' fst-normal fw-normal r--b' > ¡No me sorprende!</span>"
            :audio="require('@/assets/curso/audios/tema5/5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          h5 #[em Emotion they express] / Emoción que expresan
          p #[em To express displeasure ]/ Para expresar descontento
        .tarjeta.p-3(x="25%" y="90%" numero="+" style='background-color: #f0f4ff ; border: 2px solid #89b1f3')
          h4.text-center #[em Exclamation sentence] / Frase exclamativa
          TarjetaAudio.bg-white.color-acento-botones.mb-3(
            texto="You’re joking? / <span class=' fst-normal fw-normal r--b' >  ¿Estás bromeando? </span>"
            :audio="require('@/assets/curso/audios/tema5/6.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          h5 #[em Emotion they express] / Emoción que expresan
          p #[em To express surprise / disbelief]
            br
            |Para expresar sorpresa / incredulidad
        .tarjeta.p-3(x="41.5%" y="90%" numero="+" style='background-color: #f0f4ff ; border: 2px solid #89b1f3')
          h4.text-center Exclamation sentence / Frase exclamativa
          TarjetaAudio.bg-white.color-acento-botones.mb-3(
            texto="What a nightmare! / <span class=' fst-normal fw-normal r--b' >  ¡Qué pesadilla! </span>"
            :audio="require('@/assets/curso/audios/tema5/7.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          h5 #[em Emotion they express] / Emoción que expresan
          p #[em To express displeasure] / Para expresar descontento
        .tarjeta.p-3(x="57.9%" y="90%" numero="+" style='background-color: #f0f4ff ; border: 2px solid #89b1f3')
          h4.text-center Exclamation sentence / Frase exclamativa 
          TarjetaAudio.bg-white.color-acento-botones.mb-3(
            texto="I don’t blame you! / <span class=' fst-normal fw-normal r--b' >  ¡No te culpo! </span>"
            :audio="require('@/assets/curso/audios/tema5/8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          h5 #[em Emotion they express] / Emoción que expresan
          p #[em To express sympathy] / Para expresar simpatía
        .tarjeta.p-3(x="74.5%" y="90%" numero="+" style='background-color: #f0f4ff ; border: 2px solid #89b1f3')
          h4.text-center Exclamation sentence / Frase exclamativa
          TarjetaAudio.bg-white.color-acento-botones.mb-3(
            texto="Oh, I see what you mean! / <span class=' fst-normal fw-normal r--b' > ¡Oh, ya veo lo que quieres decir! </span>"
            :audio="require('@/assets/curso/audios/tema5/9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          h5 #[em Emotion they express] / Emoción que expresan
          p #[em To express sympathy] / Para expresar simpatía
        .tarjeta.p-3(x="91%" y="90%" numero="+" style='background-color: #f0f4ff ; border: 2px solid #89b1f3')
          h4.text-center Exclamation sentence / Frase exclamativa
          TarjetaAudio.bg-white.color-acento-botones.mb-3(
            texto="You can’t be serious! <br> ¡No puedes hablar en serio! / <span class=' fst-normal fw-normal r--b' >¡No puede ser en serio! </span>"
            :audio="require('@/assets/curso/audios/tema5/10.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          h5 #[em Emotion they express] / Emoción que expresan
          p #[em To express surprise / disbelief]
            br
            | Para expresar sorpresa /  incredulidad
    p.mb-5(data-aos='fade-right')
      span.r--1 Now let’s see what you have learned so far about the exclamation phrases. Complete the following dialogue. 
      span.r--g / Ahora veamos lo que ha aprendido hasta el momento sobre las frases de exclamación. Complete el siguiente diálogo.
      
          








    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[em Dialogue about the exclamation phrases] / Diálogo sobre las frases de exclamación.
      template(#descripcion-actividad) Unlike Spanish, English doesn't have an opening exclamation mark at the beginning of the phrase.







</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    ocultarEsp: true,
    ocultarEsp2: true,
    ocultarEsp3: true,
    ocultarEsp4: true,
    ocultarEsp5: true,
    ocultarEsp6: true,
    dial1: true,
    dial2: true,
    dial3: true,
    dial4: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Kevin',
          img: require('@/assets/curso/temas/tema5/kevin.svg'),
        },
        {
          nombre: 'Manuela',
          img: require('@/assets/curso/temas/tema5/manuela.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Kevin',
          textoIng:
            'Yesterday, I had an emergency surgery, which was approved *** thanks to my uncle who works at the hospital. ',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema5/kevin1.mp3'),
          palabra: 'quickly',
        },
        {
          personaje: 'Manuela',
          textoIng:
            '*** you! In the hospital, they sometimes take a long time to assist people.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema5/manuela1.mp3'),
          palabra: 'Lucky',
        },
        {
          personaje: 'Kevin',
          textoIng: 'Yes, what a *** !',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema5/kevin2.mp3'),
          palabra: 'nightmare',
        },
      ],
    },
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

<style lang="sass">
.bg-5
  background-image: url('../assets/curso/temas/tema5/bg-5.png')
  background-repeat: no-repeat
  background-position: center
  background-size: 100% 100%
.bg-tema
  background-image: url('../assets/curso/temas/tema3/bg-3.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: 100% 100%
.imagen-absolute
  position: relative
  margin-right: 50px
  &__img
    position: absolute
    top: 0
    right: 0
    transform: translate(50%)
</style>
