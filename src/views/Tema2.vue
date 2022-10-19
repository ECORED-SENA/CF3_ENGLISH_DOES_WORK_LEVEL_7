<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Present Perfect] (Presente perfecto)
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        //TODO agregar traduccion 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic In English, adverbs are normally used to describe a verb, adjective or an adverb. But in this component, we are going to focus on adverbs of degree, which allow the speakers to express the intensity of something in a sentence. So, if we use an adverb that can describe the range, measure or scope of an action, that’s the one we are going to call adverb of degree. During this component, we are going to emphasize “too”, “enough”, “extremely”, “just” and “absolutely/completely”. Let’s see them:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p En inglés, los adverbios se utilizan normalmente para describir un verbo, un adjetivo o un adverbio. Pero en este componente, vamos a centrarnos en los adverbios de grado, los cuales permiten a los hablantes expresar la intensidad de algo en una frase. Por lo tanto, si utilizamos un adverbio que puede describir el rango, la medida o el alcance de una acción, ese es el que vamos a llamar adverbio de grado. Durante este componente, vamos a hacer hincapié en #[em "too"], #[em " enough"], #[em " extremely"], #[em " just"] y #[em " absolutely/completely"]. Veámoslos: 
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    .margin-n.p-5.mb-5(style='background-color: #3c3fa7')
      .row.justify-content-center.mb-5
        .col-lg-4(data-aos="fade-right")
          p
            span.r--2.fw-bold #[em Adverbs of degree] / Adverbios de grado
          p.text-white #[em Adverbs of degree allow the speakers to express the intensity of something in a sentence / Los adverbios de grado permiten a los hablantes expresar la intensidad de algo en una frase.]
          img(src='@/assets/curso/temas/tema2/2.png', alt='')
        .col-lg-8(data-aos="fade-left")
          .tarjeta.bg-white.p-4 
            SlyderA(tipo='b').dots-4
              div
                p.text-center #[em #[b “Too”]] (Demasiado)
                //TODO agregar traduccion
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic It is an adverb that refers to an excess of anything; when it is more than enough of something. It always goes before the adjective or adverb that modifies. It appears in affirmative and negative sentences. Let’s see an abstract of the information we have and use it in some sentences.
                  .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp1}")
                    p Es un adverbio que se refiere a un exceso de algo, cuando es más que suficiente de algo. Siempre va delante del adjetivo o adverbio que modifica. Aparece en oraciones afirmativas y negativas. Vamos a utilizarlo en algunas frases.
                  a.boton-traduccion(@click='ocultarEsp1 = !ocultarEsp1' style='background-color: #fc5f65') Ver traducción
                .row.justify-content-center.mb-5
                  .col-lg-7: img(src='@/assets/curso/temas/tema2/3.svg', alt='')
                p.fst-italic.text-center Example “Too”
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema2/4.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Daniel was <span class= r--1>too cold</span> when they found him."
                      :audio="require('@/assets/curso/audios/tema2/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Daniel tenía #[b demasiado frío] cuando lo encontraron. 
                  .col-lg-6
                    img(src='@/assets/curso/temas/tema2/5.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="George hadn’t run <span class= r--1>too fast</span> until he used energy drinks. "
                      :audio="require('@/assets/curso/audios/tema2/2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 George no había corrido #[b demasiado rápido] hasta que usó bebidas energéticas.
              div
                p.text-center #[em #[b “Enough”]] (Suficiente)
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic “Enough” is an adverb that means “to the necessary degree”. Different from other adverbs, it is placed after the adjective or adverb that it is modifying. It appears in affirmative and negative sentences. Let’s see an abstract of the information we have and use it in some sentences.
                  .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
                    p “Suficiente” es un adverbio que significa "en el nivel necesario". A diferencia de otros adverbios, se coloca después del adjetivo o adverbio al que modifica. Aparece en oraciones afirmativas y negativas. Veamos un resumen de la información que tenemos y utilicémoslo en algunas frases.
                  a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2' style='background-color: #fc5f65') Ver traducción
                .row.justify-content-center.mb-5
                  .col-lg-7: img(src='@/assets/curso/temas/tema2/6.svg', alt='')
                p.fst-italic.text-center Example “Enough”
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema2/7.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Gina wasn’t <span class=r--1> tall enough </span> to enter the basketball team."
                      :audio="require('@/assets/curso/audios/tema2/3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Gina no era lo #[b suficientemente alta] para entrar al equipo de básquet. 
                  .col-lg-6
                    img(src='@/assets/curso/temas/tema2/8.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Susan hadn’t kicked the ball <span class=r--1> hard enough </span> in her previous games"
                      :audio="require('@/assets/curso/audios/tema2/4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Susan no había pateado la pelota lo #[b suficientemente fuerte] en sus partidos pasados. 
              div
                p.text-center #[em #[b Extremely”]]  (Extremadamente)
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic This is an adverb used to heighten the relevance or importance of something in the sentence. “Extremely” is always located right before the element of the sentence that is being modified by it. It can be used in affirmative or negative sentences. Let’s see an abstract of the information we have and use it in some sentences.
                  .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
                    p Es un adverbio que se utiliza para aumentar la relevancia o la importancia de algo en la frase. #[em "Extremely"] se sitúa siempre justo antes del elemento de la frase que está siendo modificado por él. Puede utilizarse en oraciones afirmativas o negativas. Veamos un resumen de la información que tenemos y utilicémoslo en algunas frases.
                  a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3' style='background-color: #fc5f65') Ver traducción
                .row.justify-content-center.mb-5
                  .col-lg-7: img(src='@/assets/curso/temas/tema2/9.svg', alt='')
                p.fst-italic.text-center Example “Extremely”
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema2/10.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Joe had had an <span class= r--1>extremely difficult</span> life until he met Donna."
                      :audio="require('@/assets/curso/audios/tema2/5.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Joe había tenido una vida #[b extremadamente difícil] hasta que conoció a Donna.
                  .col-lg-6
                    img(src='@/assets/curso/temas/tema2/11.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Jack had always driven <span class= r--1> extremely fast</span> on the highway.  "
                      :audio="require('@/assets/curso/audios/tema2/6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Jack siempre había conducido #[b extremadamente rápido] en la carretera.s
              div
                p.text-center #[em #[b “Just”]] (Solamente)
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic “Just” is an adverb of degree that refers to the right sum of something. It can be used with adjectives, adverbs, and it is very common in verbs, too. It can be found in affirmative and negative sentences. Let’s see an abstract of the information we have and use it in some sentences.
                  .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp4}")
                    p #[em “Just”] es un adverbio de grado que se refiere a la suma justa de algo. Se puede utilizar con adjetivos, adverbios y es muy común en los verbos también. Se puede encontrar en oraciones afirmativas y negativas. Veamos un resumen de la información que tenemos y utilicémoslo en algunas frases. 
                  a.boton-traduccion(@click='ocultarEsp4 = !ocultarEsp4' style='background-color: #fc5f65') Ver traducción
                .row.justify-content-center.mb-5
                  .col-lg-7: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
                p.fst-italic.text-center Example “Just”
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema2/13.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Marco had always been <span class= r--1>just fine</span> living by himself."
                      :audio="require('@/assets/curso/audios/tema2/7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Marco siempre había estado bien viviendo solo.
                  .col-lg-6
                    img(src='@/assets/curso/temas/tema2/14.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Bruno had never worked <span class= r--1>just hard</span>, he wanted to be the best.  "
                      :audio="require('@/assets/curso/audios/tema2/8.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Bruno nunca había trabajado lo justo, él quería ser el mejor.
              div
                p.text-center #[em #[b Absolutely/completely”]] (Absolutamente/completamente)
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic These two adverbs appear together because they both refer to the same function. Absolutely and completely are used to emphasize that the adjective or adverb you are using it with is not partial, you fully mean it. They can be found in affirmative and negative sentences. Let’s see an abstract of the information we have and use it in some sentences.
                  .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp5}")
                    p Estos dos adverbios aparecen juntos porque ambos se refieren a la misma función. #[em “Absolutely”] y #[em “completely”] se utilizan para enfatizar que el adjetivo o adverbio con el que se utilizan no es parcial, sino que se quiere decir totalmente. Se pueden encontrar en oraciones afirmativas y negativas. Veamos un resumen de la información que tenemos y utilicémoslos en algunas oraciones.
                  a.boton-traduccion(@click='ocultarEsp5 = !ocultarEsp5' style='background-color: #fc5f65') Ver traducción
                .row.justify-content-center.mb-5
                  .col-lg-7: img(src='@/assets/curso/temas/tema2/15.svg', alt='')
                p.fst-italic.text-center Example “Absolutely/completely”
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema2/16.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Jenny had always thought she was <span class=r--1>absolutely right</span> all the time."
                      :audio="require('@/assets/curso/audios/tema2/9.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Jenny siempre había pensado que tenía toda la razón en todo momento.
                  .col-lg-6
                    img(src='@/assets/curso/temas/tema2/17.svg', alt='' style='width: 155px').m-auto.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                      texto="Danny had been <span class=r--1>completely sure</span> he was from Poland."
                      :audio="require('@/assets/curso/audios/tema2/10.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p.ms-3 Danny había estado completamente seguro de que era de Polonia.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic These two adverbs appear together because they both refer to the same function. Absolutely and completely are used to emphasize that the adjective or adverb you are using it with is not partial, you fully mean it. They can be found in affirmative and negative sentences. Let’s see an abstract of the information we have and use it in some sentences.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp6}")
            p Estos dos adverbios aparecen juntos porque ambos se refieren a la misma función. #[em “Absolutely”] y #[em “completely”] se utilizan para enfatizar que el adjetivo o adverbio con el que se utilizan no es parcial, sino que se quiere decir totalmente. Se pueden encontrar en oraciones afirmativas y negativas. Veamos un resumen de la información que tenemos y utilicémoslos en algunas oraciones.
          a.boton-traduccion(@click='ocultarEsp6 = !ocultarEsp6' style='background-color: #fc5f65') Ver traducción
      .col-lg-4.col-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/18.jpg', alt='')




































































    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[em Excercise adverbs of degree]
      template(#descripcion-actividad)        



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ocultarEsp: true,
    ocultarEsp2: true,
    ocultarEsp3: true,
    ocultarEsp4: true,
    ocultarEsp5: true,
    ocultarEsp6: true,
    ocultarEsp7: true,
    ocultarEsp8: true,
    ocultarEsp9: true,
    dial1: true,
    dial2: true,
    dial3: true,
    dial4: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Keila',
          img: require('@/assets/curso/temas/tema2/keila.svg'),
        },
        {
          nombre: 'Ryan',
          img: require('@/assets/curso/temas/tema2/ryan.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Keila',
          textoIng: 'Ryan, I had never *** an extremely fast bike like yours.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema2/11.mp3'),
          palabra: 'ridden (ride)',
        },
        {
          personaje: 'Ryan',
          textoIng:
            'Well, I had *** small bikes before, but they weren’t fast enough for me.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema2/12.mp3'),
          palabra: 'had (have) ',
        },
        {
          personaje: 'Keila',
          textoIng:
            'You had *** a small bike before this one, do you still have it?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema2/13.mp3'),
          palabra: 'sold (sell)',
        },
        {
          personaje: 'Ryan',
          textoIng:
            'No, I don’t, I had *** it three months before I got this one.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema2/14.mp3'),
          palabra: 'owned (own)',
        },
      ],
    },
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
.icono-externo
  position: relative
  &__icono
    position: absolute
    right: 0
    top: 20%
    transform: translateX(65%)
    z-index: 1
</style>
