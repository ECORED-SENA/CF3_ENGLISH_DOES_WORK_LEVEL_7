<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em I have won the lotto twice!] (¡Yo he ganado la lotería dos veces!)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca')
          .contenedor-traductor__eng
            p.fst-italic Past perfect is a grammar tense which is used to talk about actions that occurred before another action in the past. There are different ways of using the past perfect apart from the one just mentioned. One of them is the use of past perfect in the “indirect speech”; besides, it is an important part of the third conditional because it is the tense used as the condition.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p El pasado perfecto es un tiempo gramatical que se utiliza para hablar de acciones que ocurrieron antes de otra acción en el pasado. Existen diferentes formas de utilizar el pasado perfecto, aparte de la que acabamos de mencionar. Una de ellas es el uso del pasado perfecto en el “discurso indirecto”; además, es una parte importante del tercer condicional, porque este es el tiempo que se utiliza como condición.
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
      .col-lg-6.col-8.mb-lg-0.mb-3(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          span Past perfect 
        img(src='@/assets/curso/temas/tema1/1.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          p.mb-0
            span.r--2.fst-italic Note: past perfect describes events that happened in the middle of another event in the past. 
            | / El pasado perfecto describe eventos que ocurrieron en medio de otro evento en el pasado.
    p.text-center
      span.r--1.fst-italic Let’s see some examples. Listen and repeat. 
      span.r--g / Veamos unos ejemplos. Escuche y repita:
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right").mb-lg-0.mb-3
        img(src='@/assets/curso/temas/tema1/3.jpg', alt='').mb-3
        TarjetaAudio.color-acento-botones.mb-3(
          texto="Freddy had worked in that company for 15 years before he was fired."
          :audio="require('@/assets/curso/audios/tema1/1.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
        p.ms-3 Freddy había trabajado en esa empresa por 15 años antes que lo despidieran.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/4.jpg', alt='').mb-3
        TarjetaAudio.color-acento-botones.mb-3(
          texto="My family had never been to Houston before I moved there. "
          :audio="require('@/assets/curso/audios/tema1/2.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
        p.ms-3 Mi familia nunca había estado en Houston antes de mudarme aquí.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  #[em Structure] (Estructura)
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/5.jpg', alt='' style='border-radius: 20px')
      .col-lg-7(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca')
            .contenedor-traductor__eng
              p.fst-italic When working with the past perfect, it is important to know how sentences are built because it has a very specific way of organizing the elements. However, it is quite similar to the present perfect tense, so it is necessary to remember some important elements, such as the verb used in the past participle and the use of the auxiliary verb, but this time you have to use it in the past. It means, instead of using “have” or “has”, you have to use “had”.
                br
                br
                |As all of the structures use verbs in past participle, it is important to review how regular and irregular verbs are put into this tense: 
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
              p Cuando se trabaja con el pretérito perfecto, es importante conocer cómo se construyen las oraciones, porque tienen una forma muy específica de organizar los elementos. Sin embargo, es bastante similar al presente perfecto, por lo que es necesario recordar algunos elementos importantes, como el verbo utilizado en el participio pasado y el uso del verbo auxiliar, pero esta vez tiene que utilizarlo en pasado. Es decir, en lugar de usar #[em "have]" o #[em "has"], tiene que usar #[em "had"].
                br
                br
                |Como todas las estructuras usan verbos en participio pasado, es importante repasar cómo se ponen los verbos regulares o irregulares en este tiempo:

            a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2' style='background-color: #fc5f65') Ver traducción
    p.text-center.fst-italic.fw-bold 
      span.r--1 Regular verbs / Verbos regulares
    p.text-center.fst-italic Regular verbs have rules that you have to follow:
    .row.justify-content-center.mb-3.align-items-end
      .col-lg-6(data-aos="fade-right")
        .bg-card.p-5.position-relative
          .row.mb-5
            .col-lg-8
              .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/3.mp3')").mb-3.m-auto.d-flex
                h5.fst-italic.text-center
                  span.r--4 1. General rule 
                p.text-center Add “ED” to the verb.
                  br
                  |Example:
                  br
                  |Walk → Walked
                  br
                  |Play → Played
          .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/6.svg', alt='')
      .col-lg-6(data-aos="fade-left")
        .bg-card.p-5.position-relative
          .row.mb-5
            .col-lg-8
              .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/4.mp3')").mb-3.m-auto.d-flex
                h5.fst-italic.text-center
                  span.r--4 2. Verbs ended in “E”
                p.text-center Add “D” to the verb.
                  br
                  |Example:
                  br
                  |Love → Loved
                  br
                  |Live → Lived
          .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/7.svg', alt='')
    .row.justify-content-center.mb-5.align-items-end
      .col-lg-6(data-aos="fade-right")
        .bg-card.p-5.position-relative
          .row.mb-5
            .col-lg-8
              .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/5.mp3')").mb-3.m-auto.d-flex
                h5.fst-italic.text-center
                  span.r--4 3. Verbs ended in “Y” after a consonant
                p.text-center Change “Y” for “IED” in the verb.
                  br
                  |Example:
                  br
                  |Study →  Studied
                  br
                  |Copy →  Copied
          .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/8.svg', alt='')
      .col-lg-6(data-aos="fade-left")
        .bg-card.p-5.position-relative
          .row.mb-5
            .col-lg-8
              .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/6.mp3')").mb-3.m-auto.d-flex
                h5.fst-italic.text-center
                  span.r--4 4. Consonant doubling
                p.text-center Double the last consonant when:
                  br
                  |It’s ended cons-vow-cons.
                  br
                  |K, W, X are not doubled.
                  br
                  |Only double when the last syllable is stressed.
                  br
                  |Example:
                  br
                  |Stop → Stopped
                  br
                  |Control → Controlled
          .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
    .margin-n.bg-margin.p-5.mb-5
      p.text-center.fst-italic Irregular verbs / Verbos irregulares
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="fade-right")
          .tarjeta.bg-white(style='border: 2px solid #ffcacc').p-3.mb-3
            .row.justify-content-center
              .col-lg-10
                p.mb-0.fst-italic #[b Description:] Irregular verbs don’t follow any rule; they all appear in a list: the irregular verb list:
              .col-lg-1
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/7.mp3')").mb-3.m-auto.d-flex
          //TODO agregar documento
          a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank").bg-white
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Download Let us now look at the list of more irregular verbs:
                  br
                  |List of 616 English Irregular Verbs
          img(src='@/assets/curso/temas/tema1/10.svg', alt='')
        .col-lg-4(data-aos="fade-left")
          table.text-center.tabla-border-rosa
            thead
              tr(style='background-color: #ffcacc').fst-italic
                th  Base Form
                th  Past Simple
                th Past Participle
            tbody.fst-italic.bg-white
              tr
                td awake
                td awoke
                td awoken
              tr
                td be
                td was, were
                td been
              tr
                td beat
                td beat
                td beaten
              tr
                td become
                td became

                td become
              tr
                td begin
                td began
                td begun
              tr
                td bend
                td bent
                td bent
              tr
                td bet 
                td bet
                td bet
              tr
                td bid
                td bid
                td bid
              tr
                td bite
                td bit
                td bitten
              tr
                td blow
                td blew
                td blown
              tr
                td break
                td Broke
                td broken
    p.mb-5(data-aos='fade-right') 
      span.r--1.fst-italic Now that we reviewed how to put verbs into the past participle, let’s see how to write or say affirmative sentences in the past perfect:  
      span.r--g / Ahora que hemos repasado cómo poner los verbos en el participio pasado, veamos cómo escribir o decir frases afirmativas en el pasado perfecto:
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .tarjeta.color-primario--borde.border-2.p-5
          TarjetaAudio.color-acento-botones.mb-3.bg-white(
            texto=""
            :audio="require('@/assets/curso/audios/tema1/8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          img(src='@/assets/curso/temas/tema1/11.svg', alt='').mb-4
          .row.justify-content-center
            .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/12.svg', alt='')
            .col-lg-8(data-aos="fade-left")
              p 
                span.r--1.fst-italic.fw-bold Structure affirmative sentences

                br
                span.r--1.fst-italic.fw-bold Examples:
                br
                span.r--1.fst-italic.fw-bold Maria had bought a new cellphone before her birthday.
                br
                span.r--g Maria había comprado un celular nuevo antes de su cumpleaños. 
                br
                span.r--1.fst-italic.fw-bold Bruno had finished his homework before the weekend.
                br
                span.r--g Bruno había terminado su tarea antes del fin de semana.
                br
                span.r--1.fst-italic.fw-bold Luisa had called me many times, but I was asleep. 
                br
                span.r--g Luisa me había llamado varias veces, pero yo estaba dormido.
      .col-lg-3(data-aos="fade-left"): img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/13.svg', alt='')
    .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic When using the past perfect, it is also important to know how to work with negative sentences. The negative sentences are quite similar to the affirmative ones, the only difference is that you have to put the auxiliary verb in the negative form. However, the other elements keep exactly the same; the verb is also in past participle form and the order of the structure is the same. Let’s see how the structure works:  
          .contenedor-traductor__esp(:class="{ mostrar: dial1}")
            p Al utilizar el pasado perfecto, también es importante saber cómo trabajar con oraciones negativas. Las oraciones negativas son bastante similares a las afirmativas, la única diferencia es que hay que poner el verbo auxiliar en la forma negativa. Sin embargo, los demás elementos se mantienen exactamente igual, el verbo también está en forma de participio pasado y el orden de la estructura es el mismo. Veamos cómo funciona la estructura: 
          a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fc5f65') Ver traducción
    .row.justify-content-center.mb-5
      .col-lg-3(data-aos="fade-right"): img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/14.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        .tarjeta.color-acento-botones--borde.border-2.p-5(style='background-color: #fff0f1')
          TarjetaAudio.color-acento-botones.mb-3.bg-white(
            texto=""
            :audio="require('@/assets/curso/audios/tema1/9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          img(src='@/assets/curso/temas/tema1/15.svg', alt='').mb-4
          .row.justify-content-center
            .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/16.svg', alt='')
            .col-lg-8(data-aos="fade-left")
              p 
                span.r--1.fst-italic Structure affirmative sentences
                br
                br
                span.r--1.fst-italic.fw-bold Examples:
                br
                span.r--1.fst-italic.fw-bold Had Maria bought a new cellphone before her birthday?
                br
                span.r--g ¿Maria había comprado un celular nuevo antes de su cumpleaños? 
                br
                span.r--1.fst-italic.fw-bold Had Bruno finished his homework before the weekend?
                br
                span.r--g ¿Bruno había terminado su tarea antes del fin de semana?
                br
                span.r--1.fst-italic.fw-bold Had Luisa called me many times, but I was asleep? 
                br
                span.r--g ¿Luisa me había llamado varias veces, pero yo estaba dormido?
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic Now that we have studied the structures and know how to build sentences in past perfect, it is important to see them in a context, so you can understand the way they are used in real life situations; so, let’s see a fragment of a book “The Complete Works of Jane Austen” (2017), in which this tense is applied. Read and listen
          .contenedor-traductor__esp(:class="{ mostrar: dial2}")
            p Ahora que hemos estudiado las estructuras y sabemos cómo construir oraciones en pasado perfecto, es importante verlas en un contexto para que pueda entender la forma en que se utilizan en situaciones de la vida real; por lo tanto, veamos un fragmento del libro “The Complete Works of Jane Austen” (2017), en el cual este tiempo es aplicado. Lea y escuche:
          a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fc5f65') Ver traducción
      .col-lg-7(data-aos="fade-left")
        .tarjeta(style='background-color: #c4d1ff').p-5.position-relative.me-5
          h5.fst-italic Laura to MARIANNE
          p.mb-3(data-aos='fade-right').me-5.pe-5 #[em Our neighborhood was small, for it consisted only of your mother. She may probably have already told you that being left by her Parents in indigent Circumstances she had retired into Wales on economic motives. There it was when our friendship first commenced. Isobel was then one and twenty. Though pleasing both in her Person and Manners (between ourselves) she never possessed the hundredth part of my Beauty or Accomplishments. Isabel had seen the World. She had passed 2 Years at one of the first Boarding-schools in London; had spent a fortnight in Bath and had supped one night in Southampton…]
          .tarjeta__imagen: img(src='@/assets/curso/temas/tema1/17.svg', alt='' style='width: 280px')
          .tarjeta__audio 
            TarjetaAudio.color-acento-botones.mb-3.bg-white(
              texto=""
              :audio="require('@/assets/curso/audios/tema1/10.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
    .row.justify-content-center.mb-5
      .col-lg-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/18.jpg', alt='')
      .col-lg-9(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic Not only in letters or books the past perfect is found. This tense can be used in everyday conversation. As it is used to talk about an action that happened before another action in the past, we will mostly find it in complex sentences where a simple past sentence will complement the idea. Let’s see an example:
          .contenedor-traductor__esp(:class="{ mostrar: dial2}")
            p No solo en las cartas o los libros se encuentra el pasado perfecto. Este tiempo puede utilizarse en la conversación cotidiana. Como se utiliza para hablar de una acción que ocurrió antes de otra acción en el pasado, lo encontraremos, sobre todo, en oraciones complejas en las que una oración en pasado simple complementará la idea. Veamos un ejemplo: 
          a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fc5f65') Ver traducción
    .tarjeta.bg-2.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10(data-aos="fade-left")
          .tarjeta.bg-white.p-5.tarjeta-intro 
            .row.justify-content-center.mb-5
              .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/19.svg', alt='')
              .col-lg-7
                //TODO agregar traduccion 
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 #[b Jordan:] Hey, Cristina, had you left the city when I called you?
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/11.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                    p Oye, Cristina, ¿habías salido de la ciudad cuando te llamé?
                  a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fc5f65') Ver traducción
                //TODO agregar traduccion 
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 #[b Cristina:] Yes, I had texted you three times before I got on the bus.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/12.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                    p Sí, te había mandado tres mensajes antes de subir al autobús.
                  a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fc5f65') Ver traducción
            .row.justify-content-center
              .col-lg-7
                //TODO agregar traduccion
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 #[b Jordan:] Sorry, I didn’t see the message, you had never ignored one of my calls.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/13.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial5}")
                    p Lo siento, no vi el mensaje, nunca habías ignorado una de mis llamadas.
                  a.boton-traduccion(@click='dial5 = !dial5' style='background-color: #fc5f65') Ver traducción
                //TODO agregar traduccion
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                  .contenedor-traductor__eng
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.fst-italic.mb-0 #[b Cristina:] I know, but there was much noise in that bus.
                      .col-lg-2
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema1/14.mp3')").mb-0
                  .contenedor-traductor__esp(:class="{ mostrar: dial6}")
                    p Lo sé, pero había mucho ruido en el autobús.
                  a.boton-traduccion(@click='dial6 = !dial6' style='background-color: #fc5f65') Ver traducción
              .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/20.svg', alt='')

            .tarjeta-intro__icon1: img(src='@/assets/curso/portada/a4.svg', alt='')
            .tarjeta-intro__icon2: img(src='@/assets/curso/portada/a5.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/21.jpg', alt='')
      .col-lg-9(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
            .contenedor-traductor__eng
              p.fst-italic This could be a common interaction between two friends in real life, and the past perfect allowed them to locate two actions in the past in a chronological order, giving them the chance to show what happened first without using any other time expression or giving any extra information.
            .contenedor-traductor__esp(:class="{ mostrar: dial7}")
              p Esta podría ser una interacción común entre dos amigos en la vida real, y el pasado perfecto les permitió ubicar dos acciones en el pasado en un orden cronológico, dándoles la oportunidad de mostrar lo que sucedió primero, sin usar ninguna otra expresión de tiempo ni dar ninguna información extra. 
            a.boton-traduccion(@click='dial7 = !dial7' style='background-color: #fc5f65') Ver traducción
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  When not to use past perfect (Cuándo no usar el pasado perfecto)
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        //TODO agregar traduccion 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic Past perfect is not always necessary to talk about a sequence of events in the past. You have to think about the kind of message that you are trying to communicate. In case you want to talk about a series of events in chronological order that happened in the past, you mostly use the past simple. So, the past perfect is only used when you want to refer to something that happened earlier in the past. Let’s see some elements to identify these moments in which these tenses are used:
          .contenedor-traductor__esp(:class="{ mostrar: dial8}")
            p El pasado perfecto no siempre es necesario para hablar de la secuencia de acontecimientos en el pasado. Hay que pensar en el tipo de mensaje que se quiere comunicar. Si quiere hablar de una serie de acontecimientos en orden cronológico que ocurrieron en el pasado, se suele utilizar el pasado simple. Por lo tanto, el pasado perfecto solo se utiliza cuando se quiere hacer referencia a algo que ocurrió antes en el pasado. Veamos algunos elementos para identificar los momentos en los que se utilizan estos tiempos: 
          a.boton-traduccion(@click='dial8 = !dial8' style='background-color: #fc5f65') Ver traducción
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/22.jpg', alt='')
    h4.text-center Simple past
    p.text-center.fst-italic Past events or states in chronological orders.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
          .bg-card.p-5.position-relative
            .row.mb-5
              .col-lg-8
                .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                  Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/15.mp3')").mb-3.m-auto.d-flex
                  h5.fst-italic.text-center
                    span.r--4 Past events or states 
                      br
                      span.fw-normal.fst-normal (Eventos o estados pasados)
                  p.fst-italic.text-center I bought a car three months ago.
                    br
                    |We ate pizza last night.
            .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/23.svg', alt='')
            
      .col-lg-6(data-aos="fade-right")
          .bg-card.p-5.position-relative
            .row.mb-5
              .col-lg-8
                .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                  Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/16.mp3')").mb-3.m-auto.d-flex
                  h5.fst-italic.text-center
                    span.r--4 Events in chronological orders
                      br
                      span.fw-normal.fst-normal (Eventos en orden cronológico) 
                  p.fst-italic.text-center I called my friend, then I texted other friends, and finally I met with them.
            .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/24.svg', alt='')
            
    .margin-n.p-5(style='background-color: #e1e8ff').mb-5
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
            .bg-card2.p-5.position-relative
              .row.mb-5
                .col-lg-8
                  .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                    Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/17.mp3')").mb-3.m-auto.d-flex
                    h5.fst-italic.text-center
                      span.r--4 Events happened earlier in the past 
                        br
                        span.fw-normal.fst-normal (Eventos que pasaron más temprano en el pasado)
                    p.fst-italic.text-center I had eaten my whole dish when the waiter brought the dessert.
              .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/25.svg', alt='')
              
        .col-lg-6(data-aos="fade-right")
            .bg-card2.p-5.position-relative
              .row.mb-5
                .col-lg-8
                  .tarjeta.bg-white.djust.p-2(style='border: 2px solid #ffcacc').mx-3
                    Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema1/18.mp3')").mb-3.m-auto.d-flex
                    h5.fst-italic.text-center
                      span.r--4 Duration of an earlier event in the past
                        br
                        span.fw-normal.fst-normal (Duración de un evento anterior del pasado)
                    p.fst-italic.text-center Sara had lived in California for 5 years before she moved to L.A.
              .position-absolute.d-none.d-lg-block(style='bottom: 0; right: 0'): img(src='@/assets/curso/temas/tema1/26.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/27.jpg', alt='')
      .col-lg-8(data-aos="fade-left") 
        //TODO agregar traduccion 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic Seen these charts, it may appear that these two tenses do not work well together; however, this cannot be less true. Because simple past and past perfect can complement each other. Let’s see how this work by looking at the following examples: 
          .contenedor-traductor__esp(:class="{ mostrar: dial9}")
            p Al ver estos diagramas, puede parecer que estos dos tiempos no funcionan bien juntos, sin embargo, esto no puede ser menos cierto, porque el pasado simple y el pretérito perfecto pueden complementarse. Veamos cómo funcionan observando los siguientes ejemplos: 
          a.boton-traduccion(@click='dial9 = !dial9' style='background-color: #fc5f65') Ver traducción
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right").mb-lg-0.mb-3
        img(src='@/assets/curso/temas/tema1/28.jpg', alt='').mb-3
        TarjetaAudio.color-acento-botones.mb-3(
          texto="My father had already made lunch when we returned from school today."
          :audio="require('@/assets/curso/audios/tema1/19.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
        p.ms-3 Mi papá ya había hecho el almuerzo cuando llegamos del colegio hoy. 
      .col-lg-4(data-aos="fade-right").mb-lg-0.mb-3
        img(src='@/assets/curso/temas/tema1/29.jpg', alt='').mb-3
        TarjetaAudio.color-acento-botones.mb-3(
          texto="I didn’t have my first car until I had gotten my driver’s license."
          :audio="require('@/assets/curso/audios/tema1/20.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
        p.ms-3 No tuve mi primer carro hasta que había obtenido mi licencia de conducción.
      .col-lg-4(data-aos="fade-right").mb-lg-0.mb-3
        img(src='@/assets/curso/temas/tema1/30.jpg', alt='').mb-3
        TarjetaAudio.color-acento-botones.mb-3(
          texto="Nani had felt sad in her work until she finally quit. "
          :audio="require('@/assets/curso/audios/tema1/21.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
        p.ms-3 Nani se había sentido triste en su trabajo hasta que por fin renunció.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        //TODO agregar traduccion 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic Now that we know how to identify when to use or not to use the past perfect, we can start practicing our ability to use the past tense by identifying between simple past or past perfect in an exercise, so you can prove you understood the topic. 
          .contenedor-traductor__esp(:class="{ mostrar: dial10}")
            p Ahora que sabemos identificar cuándo usar o no el pasado perfecto, podemos empezar a practicar nuestra habilidad para usar el tiempo pasado, identificando entre el pasado simple o el pasado perfecto en un ejercicio, para que pueda demostrar que ha entendido el tema.
          a.boton-traduccion(@click='dial10 = !dial10' style='background-color: #fc5f65') Ver traducción
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/31.jpg', alt='')

    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[em Practice dialogue] / Diálogo de práctica
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.  
          
      
</template>

<script>
import Separador from '../../node_modules/ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema1',
  components: { Separador },
  data: () => ({
    ocultarEsp: true,
    ocultarEsp2: true,
    dial1: true,
    dial2: true,
    dial3: true,
    dial4: true,
    dial5: true,
    dial6: true,
    dial7: true,
    dial8: true,
    dial9: true,
    dial10: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Karla',
          img: require('@/assets/curso/temas/tema1/karla.svg'),
        },
        {
          nombre: 'Rob',
          img: require('@/assets/curso/temas/tema1/rob.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Karla',
          textoIng:
            'Hey! I hadn’t ***  you since we finished the swimming course.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/22.mp3'),
          palabra: 'seen (see)',
        },
        {
          personaje: 'Rob',
          textoIng:
            'That’s for sure! *** you met anyone from the group before?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/23.mp3'),
          palabra: 'had (have) ',
        },
        {
          personaje: 'Karla',
          textoIng: 'No, I *** not. You are the first one.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/24.mp3'),
          palabra: 'had (have) ',
        },
        {
          personaje: 'Rob',
          textoIng:
            'That’s nice! I had never *** friends in a swimming course.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/25.mp3'),
          palabra: 'made (make)',
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
.contenedor-slyder
  position: relative
  &__img
    width: 295px
    position: absolute
    bottom: 0
    left: 0
.bg-sf
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-card
  background-image: url('../assets/curso/temas/tema1/bg-card.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-card2
  background-image: url('../assets/curso/temas/tema1/bg-card2.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-margin
  background-image: url('../assets/curso/temas/tema1/margin-bg.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-2
  background-image: url('../assets/curso/temas/tema1/bg-2.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.djust
  display: flex
  justify-content: center
  flex-direction: column
.tabla-border-rosa
  td,th
    border: 1px solid #ffbfc1
.tarjeta
  &__imagen
    position: absolute
    top: 0
    right: 0
    transform: translateX(50%)
  &__audio
    position: absolute
    bottom: 0
    left: 0
    transform: translate(10%, 50%)
    width: 80%
</style>
