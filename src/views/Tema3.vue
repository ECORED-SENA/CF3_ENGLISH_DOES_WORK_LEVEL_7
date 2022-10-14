<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Textual structure of anecdotes] (Estructura textual de anécdotas) 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.jpg', alt='' style='border-radius: 20px')
      .col-lg-8(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  An anecdote is a short and interesting story, usually with a singular lesson or theme. Anecdotes are not very different from everyday stories told among friends, but when used in literature, they can do more than just entertain.
              br
              br
              |Our stories, experiences, and anecdotes are part of our lives, and that is why we love to share them with family, friends and acquaintances. Surely, we know how to tell them in great detail, but… to tell in English we must use the appropriate verb tenses, expressions to give rise to another idea or to end a narrative. Based on this statement, we invite you to listen to the following dialogue, more complex and elaborated, with the grammatical structures used in an anecdote. 
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Una anécdota es una historia corta e interesante, generalmente con una lección o tema singular. Las anécdotas no difieren mucho de las historias cotidianas contadas entre amigos, pero, cuando se usan en la literatura, pueden lograr más que simplemente entretener.
              br
              br
              | Nuestras historias, experiencias y anécdotas forman parte de nuestras vidas, y por eso nos encanta compartirlas con familiares, amigos y conocidos. Seguro que sabemos contarlas con todo lujo de detalles, pero... para narrar en inglés debemos usar los tiempos verbales apropiados, expresiones para dar lugar a otra idea o para terminar una narración. A partir de esta afirmación, le invitamos a escuchar el siguiente diálogo, más complejo y elaborado, con las estructuras gramaticales utilizadas en una anécdota. 
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
    .margin-n.p-5.mb-5.bg-tema(data-aos="zoom-in")
      h4.text-center
        span.r--2 #[em Thematic Dialogue]  / Diálogo temático
      p.mb-5(data-aos='fade-right').text-white.text-center  Our stories, experiences, and anecdotes are part of our lives, and that is why we love to share them with family, friends, and acquaintances.
      .row.justify-content-center.mb-5
        .col-lg-9
          .tarjeta.bg-white.p-5.tarjeta-intro 
            .row.justify-content-center.mb-5
              .col-lg-6: img(src='@/assets/curso/temas/tema3/2.svg', alt='') 
              
              .col-lg-6
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b>Lucas:</b> Hello, Victoria. I’m calling you because I’m really scared and I need to talk to someone. Something very shocking has happened to me.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema3/1.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                    p Hola, Victoria. Te estoy llamando porque estoy muy asustado y necesito hablar con alguien. Me ha pasado algo muy impactante. 
                  a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fc5f65') Ver traducción
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b>Victoria:</b> Hi, Lucas. What happened? Are you okay?
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema3/2.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                    p Hola, Lucas. ¿Qué te pasó? ¿Estás bien?
                  a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fc5f65') Ver traducción
            .row.justify-content-center
              
              .col-lg-6
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b>Lucas:</b> I have just experienced the worst earthquake of my life, I’m sure you’ll hear about it on the news.<br><br> The floor and the walls shook strongly, I thought the house was going to collapse.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema3/3.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                    p Acabo de experimentar el peor terremoto de mi vida, seguro oirás de él en las noticias. El suelo y las paredes se movieron fuertemente, pensé que la casa iba a derrumbarse.
                  a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fc5f65') Ver traducción
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 <b>Victoria:</b> Oh, my God! And what happened next?
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema3/4.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                    p ¡Ay, mi Dios! ¿Y qué pasó después?
                  a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fc5f65') Ver traducción
              .col-lg-6: img(src='@/assets/curso/temas/tema3/3.svg', alt='') 
            .tarjeta-intro__icon1: img(src='@/assets/curso/portada/a4.svg', alt='')
            .tarjeta-intro__icon2: img(src='@/assets/curso/portada/a5.svg', alt='')
    p.mb-5(data-aos='fade-right') 
      span.r--1 After having listened to the thematic dialogue, we can address the definition of what an anecdote is. 
      span.r--g / Después de haber escuchado el diálogo temático, podemos abordar la definición de anécdota.
    .row.justify-content-center.mb-5
      .col-lg-10
        .imagen-absolute(data-aos="zoom-in")
          .contenedor-traductor.imagen-absolute(style='background-color: #fcf2ca').mb-5
            .imagen-absolute__img: img(src='@/assets/curso/temas/tema3/4.svg', alt='' style='width: 295px')
            .row
              .col-lg-11
                .contenedor-traductor__eng
                  p.fst-italic  #[b What is an anecdote?] / ¿Qué es una anécdota?
                    br
                    br
                    | An anecdote is…
                    br
                    br
                    |- A short and entertaining history of past events.
                    br
                    |- Usually funny, scary or extraordinary.
                    br
                    |- Real or fictitious. Or a mixture of both due to the exaggeration of the narrator.
                    br
                    |- A narration from which a lesson can be drawn and its tone can vary from warning to jocularity.
                    br
                    |- A story that tends to focus on a single character (usually the narrator).
                .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
                  p Una anécdota es...

                    br
                    |- Una historia breve y entretenida de sucesos del pasado.
                    br
                    |- Generalmente, divertida, aterradora o extraordinaria.
                    br
                    |- Real o ficticia. O una mezcla de ambos debido a la exageración del narrador.
                    br
                    |- Una narración de la que se puede sacar una enseñanza y su tono puede variar desde la advertencia hasta la jocosidad.
                    br
                    |- Un relato que tiende a centrarse en un solo personaje (generalmente, el narrador).

            a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2' style='background-color: #fc5f65 ; right: 10%') Ver traducción
    div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
          h4.text-white.mb-0.mx-5 #[em Anecdote Structure] / Estructura de anécdota   
    p.mb-5(data-aos='fade-right')
      span.r--1 The parts that make up an anecdote are generally: 
      span.r--g / Las partes que componen una anécdota son generalmente:
    ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/5.svg', alt='Texto que describa la imagen')
      .tarjeta.p-3(x="18.5%" y="25%" numero="+" style='background-color: #f0f4ff; border: 2px solid #638bf9')
        h4.text-center Abstract
        p.text-center
          span.fst-italic Part where the author introduces the singular event that happened to him. 
          span.r--g / Parte donde el autor nombra el evento singular que le ocurrió.
      .tarjeta.p-3(x="34.5%" y="65%" numero="+" style='background-color: #f0f4ff; border: 2px solid #638bf9')
        h4.text-center Orientation
        p.text-center
          span.fst-italic Part where the author gives the context of the narrative telling the who, how, when, and where. / 
          span.r--g Parte donde el autor da el contexto de la narración contando el quién, cómo, cuándo y dónde.
      .tarjeta.p-3(x="50%" y="25%" numero="+" style='background-color: #f0f4ff; border: 2px solid #638bf9')
        h4.text-center Crisis
        p.text-center
          span.fst-italic The incident, the most important part of the account. / 
          span.r--g  El incidente, la parte más importante del recuento.
      .tarjeta.p-3(x="65.9%" y="70%" numero="+" style='background-color: #f0f4ff; border: 2px solid #638bf9')
        h4.text-center Reaction
        p.text-center
          span.fst-italic Where it is told what the main character (or the author) did based on the crisis. 
          span.r--g / Donde se cuenta qué hizo el personaje principal (o el autor) a partir de la crisis.
      .tarjeta.p-3(x="81.5%" y="27%" numero="+" style='background-color: #f0f4ff; border: 2px solid #638bf9')
        h4.text-center Reflection
        p.text-center
          span.fst-italic Also called “coda”, it makes a reflection or evaluation of the unusual event that occurred (generally the message or teaching of the anecdote comes from here). / 
          span.r--g También llamada “coda”, hace una reflexión o evaluación del evento inusual ocurrido (generalmente, el mensaje o la enseñanza de la anécdota sale de aquí).
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Every great story begins with a great introduction that gets the audience interested in what you’re about to tell. Of course, it is important that, when telling a #[b story], we #[b “recreate the scene”] or describe the scenario where everything happened. In every interesting story, we find a moment of real tension, as well as a conflict or tragedy -perhaps somewhat exaggerated- that the narrator has lived or seen. However, to keep the audience’s attention, the narrator of an anecdote often shortens the story, telling only the amusing or relevant details. Finally, people often reflect on an anecdote after it has been told, highlighting the funniest or most interesting part.
              br
              |Now, let’s see in the following text the structure of the anecdote placing each of its parts within a familiar context.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
            p Toda gran historia comienza con una excelente introducción que permite a la audiencia interesarse por lo que está por narrar. Por supuesto, es importante que, al momento de contar una historia, «recreemos la escena» o describamos el escenario donde todo ocurrió. En cada relato interesante, encontramos un momento de verdadera tensión, así como un conflicto o tragedia —quizás algo exagerada— que ha vivido o visto el narrador. Sin embargo, para mantener la atención de la audiencia, el narrador de una anécdota a menudo acorta la historia, contando solo los detalles divertidos o relevantes. Finalmente, la gente suele reflexionar sobre una anécdota después de haberla contado, resaltando la parte más divertida o interesante.
              br
              |Ahora, veamos en el siguiente texto la estructura de la anécdota ubicando cada una de sus partes dentro de un contexto familiar.

          a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3' style='background-color: #fc5f65') Ver traducción
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/6.png', alt='' style='width: 100%')
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right')
      span.r--1 Now, let’s test how much you learned about the textual structure of anecdotes. Complete the following dialogue. 
      span.r--g / Ahora, probemos cuánto aprendió de la estructura textual de las anécdotas. Complete el siguiente diálogo.
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[em Seismic activity] / Actividad sísmica
      template(#descripcion-actividad)   






</template>

<script>
export default {
  name: 'Tema3',
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
          nombre: 'Lucas',
          img: require('@/assets/curso/temas/tema3/lucas.svg'),
        },
        {
          nombre: 'Victoria',
          img: require('@/assets/curso/temas/tema3/victoria.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Lucas',
          textoIng:
            'The moment the ground stopped shaking I knew I wanted to *** back home. I shouldn’t have moved to this city with such seismic activity.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema3/lucas.mp3'),
          palabra: 'go',
        },
        {
          personaje: 'Victoria',
          textoIng: 'What a ***! You should come back.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema3/victoria.mp3'),
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
.bg-tema
  background-image: url('../assets/curso/temas/tema3/bg-3.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.imagen-absolute
  position: relative
  margin-right: 50px
  &__img
    position: absolute
    top: 0
    right: 0
    transform: translate(50%)
</style>
