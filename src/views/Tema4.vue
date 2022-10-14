<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[em Comparison with adverbs] (Comparaciones con adverbios)
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #d5d6f0")
          .tarjeta.p-4(style="background-color: #f0f4ff").fst-italic
            h4.text-center
              span.r--1 Comparison with adverbs
            p Adverbs are used to express how something is done.
              br
              br
              | Example: 
            .d-flex.align-items-center
              img(src='@/assets/curso/temas/tema4/1.svg', alt='' style='width: 106px').me-4
              p
                span.r--1.fw-bold The dog sleeps quietly.
                  br
                  | The dog is absolutely quiet. 
      .col-lg-8(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Comparative adverbs, like comparative adjectives, are used to describe the differences and similarities between two things. The difference is that comparative adjectives describe similarities and differences between two nouns (people, places or objects), whereas comparative adverbs make comparisons between two verbs (they describe how an action is performed). 
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Los adverbios comparativos, al igual que los adjetivos comparativos, se usan para describir las diferencias y similitudes entre dos cosas. La diferencia recae en que los adjetivos comparativos describen similitudes y diferencias entre dos sustantivos (personas, lugares u objetos), en cambio, los adverbios comparativos hacen comparaciones entre dos verbos (describen cómo se realiza una acción).
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
        p.mb-5(data-aos='fade-right') #[em For example:] / Por ejemplo: 
    .tarjeta--container.row.mb-5(zoom="zoom-in") 
      .col-md.tarjeta.color-primario.rounded-0.p-5
        h4.text-center.fst-italic
          span.r--2 Example 1
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/tema4/2.jpg', alt='Texto que describa la imagen' style='border-radius: 10px').mb-4
            TarjetaAudio.bg-white.color-acento-botones.mb-3(
              texto="“Susana is <span class= r--1>faster</span> than David” <span class= r--1>(comparative adjective).</span>"
              :audio="require('@/assets/curso/audios/tema4/1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              
              )
            p.ms-4 “Susana es #[b más rápida] que David”. #[b (adjetivo comparativo)]
            TarjetaAudio.bg-white.color-acento-botones.mb-3(
              texto="“Susana skates <span class= r--1>faster</span> than David” <span class= r--1>(comparative adverb).</span>"
              :audio="require('@/assets/curso/audios/tema4/2.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              
              )
            p.ms-4  “Susana patina #[b más rápido] que David”. #[b (adverbio comparativo)]
      .col-md.tarjeta.color-acento-contenido.rounded-0.p-5
        h4.text-center.fst-italic Example 2
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/tema4/3.jpg', alt='Texto que describa la imagen' style='border-radius: 10px').mb-4
            TarjetaAudio.bg-white.color-acento-botones.mb-3(
              texto="“Susana is <span class= r--1>more careful</span> than David in her work” <span class= r--1>(comparative adjective).</span>"
              :audio="require('@/assets/curso/audios/tema4/3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              
              )
            p.ms-4  “Susana es #[b más cuidadosa] que David en su trabajo”. #[b (adjetivo comparativo).]
    
            TarjetaAudio.bg-white.color-acento-botones.mb-3(
              texto="“Susana works <span class= r--1>more carefully</span> than David” <span class= r--1>(comparative adverb).</span>"
              :audio="require('@/assets/curso/audios/tema4/4.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              
              )
            p.ms-4  “Susana trabaja #[b más cuidadosamente] que David”. #[b (adverbio comparativo)]
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  From the examples seen, we invite you to listen to the following thematic dialogue, more complex and elaborated, with the grammatical structures used in comparison with adverbs.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p A partir de los ejemplos vistos, lo invitamos a escuchar el siguiente diálogo temático, más complejo y elaborado, con las estructuras gramaticales utilizadas en comparación con adverbios.
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
      .col-lg-8(data-aos="fade-left")
        .tarjeta.p-4(style='background-color: #ffdfe0')
            h4.text-center #[em Thematic Dialogue]  / Diálogo temático
            p.text-center  Comparison with adverbs
            .row.justify-content-center.mb-5
              .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
                .bg-white.p-3.h-100
                  SlyderE(indicadores="derecha")
                    div
                      p.text-center.fw-bold #[em Thematic Dialogue]  / Diálogo Temático
                      .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                        .contenedor-traductor__eng
                          .row.justify-content-center.align-items-center
                            .col-lg-10
                              p.fst-italic.mb-0 <b>Lorenzo:</b> Hello, Camila. How has your volunteer work been?
                            .col-lg-2
                              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema4/5.mp3')").mb-0
                        .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                          p Hola, Camila. ¿Cómo ha estado tu trabajo de voluntariado?
                        a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fc5f65') Ver traducción
                        
                      .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                        .contenedor-traductor__eng
                          .row.justify-content-center.align-items-center
                            .col-lg-10
                              p.fst-italic.mb-0 <b>Camila:</b> Great! I have worked hard to help build a school.
                            .col-lg-2
                              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema4/6.mp3')").mb-0
                        .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                          p ¡Muy bien! He trabajado fuertemente para ayudar a construir una escuela.
                        a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fc5f65') Ver traducción
                    div
                      p.text-center.fw-bold #[em Thematic Dialogue]  / Diálogo Temático
                      .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                        .contenedor-traductor__eng
                          .row.justify-content-center.align-items-center
                            .col-lg-10
                              p.fst-italic.mb-0 Really? I congratulate you for that work. But, tell me, what happened to your hand?
                            .col-lg-2
                              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema4/8.mp3')").mb-0
                        .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                          p ¿En serio? Te felicito por esa labor. Pero, dime, ¿qué te pasó en la mano?
                        a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fc5f65') Ver traducción
                        
                      .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                        .contenedor-traductor__eng
                          .row.justify-content-center.align-items-center
                            .col-lg-10
                              p.fst-italic.mb-0 I hurt myself pounding down a nail. I must hammer more carefully next time.
                            .col-lg-2
                              Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema4/7.mp3')").mb-0
                        .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                          p Me lastimé clavando una puntilla. Debo martillar más cuidadosamente la próxima vez.
                        a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fc5f65') Ver traducción
              .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/4.svg', alt='' )
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  #[em Adverbs of manner] (Adverbios de modo)
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #f0f4ff ")
          h4.fst-italic Forming adverbs of manner
          .tabla-a.mb-5
            table
              thead(style='background-color: #3c3fa7')
                tr
                  th(style='color: #ffd947').fst-italic  Adjective
                  th(style='color: #ffd947').fst-italic  Adverb
                  th(style='color: #ffd947').fst-italic  What changes?
              tbody
                tr.text-center
                  td beautiful
                    br
                    |slow
                    br
                    |bad
                  td beautifully
                    br
                    |slowly
                    br
                    |badly
                  td Adjective + LY
                tr.text-center
                  td happy
                    br
                    |noisy
                    br
                    |easy
                  td happily
                    br
                    |noisily
                    br
                    |easily
                  td Adjectives that finish in -Y change-Y by I and add LY
                tr.text-center
                  td good
                    br
                    |fast
                    br
                    |hard
                  td well
                    br
                    |fast
                    br
                    |hard
                  td Irregular forms
      .col-lg-5(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  To be able to make comparisons with adverbs of manner, we must first learn what they are and how to form them.
              br
              br
              |Adverbs of manner are words that modify verbs, adjectives, and other adverbs. They indicate how an action occurs or develops. They answer the question about how, what, where, etc.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
            p Para poder hacer comparaciones con adverbios de modo, primero debemos aprender bien qué son y cómo formarlos.
              br
              |Los adverbios de modo son palabras que modifican verbos, adjetivos y otros adverbios. Indican de qué manera ocurre o se desarrolla una acción. Responden a las preguntas sobre cómo, qué, dónde, etc.

          a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3' style='background-color: #fc5f65') Ver traducción
    p.mb-5(data-aos='fade-right') Se le invita a explorar el video que se presenta a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') 
      span.r--1 Below are some warnings to identify the correct use of the adverbs of manner. 
      span.r--g / A continuación, se nombran algunas advertencias para identificar el uso correcto de los adverbs of manner. 
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #fff7da ").p-5
          .row.justify-content-center
            .col-lg-4.col-8(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/5.png', alt='' )
            .col-lg-8(data-aos="fade-left")
              .d-flex.justify-content-center.align-items-end.mb-4
                img(src='@/assets/curso/temas/tema4/alerta.svg', alt='' style='width: 85px' ).me-3
                .textos
                  h4.fst-italic.mb-0 Warning #1
                    br
                    span.r--g Advertencia #1
              p.fst-italic.text-center In general, adverbs of manner are built based on an adjective to which the suffix -ly is added at the end of the word (regular adverbs). However, there are some cases where this is not true (irregular adverbs).
              p.text-center #[em #[b  For example]] / #[em Por ejemplo]:
              .row.justify-content-center.mb-5
                .col-lg-6 
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto=" slow / slowly (regular adverb)"
                    :audio="require('@/assets/curso/audios/tema4/9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ms-4  lento → lentamente (adverbio regular)
                .col-lg-6 
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="good / well (irregular adverb)"
                    :audio="require('@/assets/curso/audios/tema4/10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ms-4  bueno → bien (adverbio irregular)
    p.mb-5(data-aos='fade-right').text-center En los siguientes videos, se amplía la información sobre el uso de 
      span.r--1.fst-italic Adverbs of manner
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right').text-center A continuación, se invita a ver algunas excepciones de los 
      span.r--1.fst-italic Adverbs of manner
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  #[em Regular and irregular adverbs] (Adverbios regulares e irregulares)
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/6.svg', alt='' )
      .col-lg-8(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Regular adverbs are formed by adding the #[b suffix “-ly”], sometimes by itself or with some slight variation at the end of the adjective. Irregular adverbs are not formed from these standard English spelling conventions. Because they don’t follow the “rules,” there’s no trick to using them: you just have to memorize them.
              br
              br
              |Let’s see the cases and norms of regular and irregular adverbs, and how to form them:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp4}")
            p Los adverbios regulares se forman agregando el #[b sufijo "-ly"], a veces solo o con alguna ligera variación al final del adjetivo. Los adverbios irregulares no se forman a partir de estas convenciones ortográficas estándar del inglés. Debido a que no siguen las “reglas”, no hay truco para usarlos, simplemente hay que memorizarlos.
              br
              br
              | Veamos los casos y normas de los adverbios regulares e irregulares, y cómo formarlos:
          a.boton-traduccion(@click='ocultarEsp4 = !ocultarEsp4' style='background-color: #fc5f65') Ver traducción
    h4.fst-italic.text-center Regular adverbs rules
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-rojo ")
      div(titulo="<em> Rule 1</em>")
        .tarjeta.bg-white.p-5
          .tabla-a.mb-5
            table
              thead
                tr(style='background-color: #6b8dfc')
                  th #[em Adjectives] #[br] 
                    span.fw-normal  Adjetivos
                  th #[em Rule] #[br]
                    span.fw-normal  Regla
                  th #[em Examples (adjective - adverb)] #[br] 
                    span.fw-normal  Ejemplos (adjetivo - adverbio)
                  th #[em Comparative adverb] #[br] 
                    span.fw-normal Adverbio comparativo
              tbody(style='background-color: #f0f4ff').text-center
                tr
                  td(rowspan='2') #[em Ending in a consonant plus -Y]
                    br
                    br
                    |Terminados en consonante más -Y
                  td(rowspan='2') #[em The -Y is change → to -I + -ly]
                    br
                    br
                    |Se cambia la -Y → por -i + -ly
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Easy / Easily"
                    :audio="require('@/assets/curso/audios/tema4/11.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Fácil → Fácilmente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more / less easily"
                    :audio="require('@/assets/curso/audios/tema4/12.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 más / menos fácilmente
                tr
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Angry / Angrily"
                    :audio="require('@/assets/curso/audios/tema4/13.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Enfadado/a  / Furiosamente
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more / less angrily"
                    :audio="require('@/assets/curso/audios/tema4/14.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 más / menos furiosamente
      div(titulo="<em> Rule 2</em>")
        .tarjeta.bg-white.p-5
          .tabla-a.mb-5
            table
              thead
                tr(style='background-color: #6b8dfc')
                  th #[em Adjectives]  #[br] 
                    span.fw-normal  Adjetivos
                  th Rule#[br]
                    span.fw-normal  Regla
                  th #[em Examples (adjective - adverb)] #[br] 
                    span.fw-normal  Ejemplos (adjetivo - adverbio)
                  th #[em Comparative adverb]  #[br] 
                    span.fw-normal Adverbio comparativo
              tbody(style='background-color: #f0f4ff').text-center
                tr
                  td(rowspan='2') #[em Ending in -ic]
                    br
                    br
                    |Terminados en -ic
                    
                  td(rowspan='2')  #[em The ending -ally is added]
                    br
                    br
                    |Se le añade la terminación -ally
                    
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Tragic / Tragically"
                    :audio="require('@/assets/curso/audios/tema4/15.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Trágico / Trágicamente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more / less tragically"
                    :audio="require('@/assets/curso/audios/tema4/16.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 más / menos trágicamente
                tr
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Magic / Magically"
                    :audio="require('@/assets/curso/audios/tema4/17.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Mágico / Mágicamente
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more / less magically"
                    :audio="require('@/assets/curso/audios/tema4/18.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 más / menos trágicamente
      div(titulo="<em> Rule 3 </em>")
        .tarjeta.bg-white.p-5
          .tabla-a.mb-5
            table
              thead
                tr(style='background-color: #6b8dfc')
                  th #[em Adjectives] #[br] 
                    span.fw-normal  Adjetivos
                  th #[em Rule] #[br]
                    span.fw-normal  Regla
                  th #[em Examples (adjective - adverb)] #[br] 
                    span.fw-normal  Ejemplos (adjetivo - adverbio)
                  th #[em Comparative adverb] #[br] 
                    span.fw-normal Adverbio comparativo
              tbody(style='background-color: #f0f4ff').text-center
                tr
                  td(rowspan='2') #[em ending in -le]
                    br
                    br
                    |terminados en -le
                    
                  td(rowspan='2') #[em the -l is kept and the -e is changed → to -y]
                    br
                    br
                    |se conserva la -l y se cambia la -e → por la -y
                    
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Horrible / Horribly"
                    :audio="require('@/assets/curso/audios/tema4/19.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Horrible / Horriblemente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more/less horribly"
                    :audio="require('@/assets/curso/audios/tema4/20.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 de una manera más/menos horrible
                tr
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Terrible / Terribly"
                    :audio="require('@/assets/curso/audios/tema4/21.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Terrible / Terriblemente
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more/less terribly"
                    :audio="require('@/assets/curso/audios/tema4/22.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 de una manera más/menos terrible
      div(titulo="<em> Rule 4 </em> ")
        .tarjeta.bg-white.p-5
          .tabla-a.mb-5
            table
              thead
                tr(style='background-color: #6b8dfc')
                  th #[em Adjectives] #[br] 
                    span.fw-normal  Adjetivos
                  th #[em Rule] #[br]
                    span.fw-normal  Regla
                  th #[em Examples (adjective - adverb)] #[br] 
                    span.fw-normal  Ejemplos (adjetivo - adverbio)
                  th #[em Comparative adverb] #[br] 
                    span.fw-normal Adverbio comparativo
              tbody(style='background-color: #f0f4ff').text-center
                tr
                  td(rowspan='2') #[em ending in -l]
                    br
                    br
                    |terminados en -l
                    
                  td(rowspan='2') #[em -ly is added]
                    br
                    br
                    |se añade -ly
                    
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Beautiful / Beautifully"
                    :audio="require('@/assets/curso/audios/tema4/23.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Bonita/o / Hermosamente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more/less beautifully"
                    :audio="require('@/assets/curso/audios/tema4/24.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 de una manera más/menos hermosa
                tr
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Generall / Generally"
                    :audio="require('@/assets/curso/audios/tema4/25.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 General / Generalmente
                  td 
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="more/less generally"
                    :audio="require('@/assets/curso/audios/tema4/26.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 más/menos generalmente
    p.mb-5(data-aos='fade-right')
      span.r--1 Irregular adverbs can be tricky. Sometimes they take different spellings on their endings or irregular forms that look like adjectives. Let’s see some exceptions. 
      span.r--g / Los adverbios irregulares pueden ser complicados. A veces toman diferentes grafías en sus terminaciones o formas irregulares que parecen adjetivos. Veamos algunas excepciones.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-rojo ")
      div(titulo="<em> Exception 1</em>")
        .tarjeta.bg-white.p-5
          .tabla-a.mb-5
            table
              thead
                tr(style='background-color: #6b8dfc')
                  th #[em Adjectives] #[br] 
                    span.fw-normal  Adjetivos
                  th #[em Rule] #[br]
                    span.fw-normal  Regla
                  th #[em Examples (adjective - adverb)] #[br] 
                    span.fw-normal  Ejemplos (adjetivo - adverbio)
                  th #[em Comparative adverb] #[br] 
                    span.fw-normal Adverbio comparativo
              tbody(style='background-color: #f0f4ff').text-center
                tr
                  td(rowspan='2') #[em Exceptions]
                    br
                    br
                    |Excepciones
                  td #[b #[em They do not undergo any change]]
                    br
                    |No sufren ningún cambio
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Fast / Fast"
                    :audio="require('@/assets/curso/audios/tema4/27.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Rápido / Rápidamente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="faster / less fast"
                    :audio="require('@/assets/curso/audios/tema4/28.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 más rápidamente / de una forma menos rápida
                tr
                  td #[b #[em They do not undergo any change]]
                    br
                    |No sufren ningún cambio
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Hard / Hard"
                    :audio="require('@/assets/curso/audios/tema4/29.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Duro / Duramente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="harder / less hard"
                    :audio="require('@/assets/curso/audios/tema4/30.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 de una forma más/menos fuerte
      div(titulo="<em> Exception 2</em>")
        .tarjeta.bg-white.p-5
          .tabla-a.mb-5
            table
              thead
                tr(style='background-color: #6b8dfc')
                  th #[em Adjectives] #[br] 
                    span.fw-normal  Adjetivos
                  th #[em Rule] #[br]
                    span.fw-normal  Regla
                  th #[em Examples (adjective - adverb)] #[br] 
                    span.fw-normal  Ejemplos (adjetivo - adverbio)
                  th #[em Comparative adverb] #[br] 
                    span.fw-normal Adverbio comparativo
              tbody(style='background-color: #f0f4ff').text-center
                tr
                  td(rowspan='2') #[em Exceptions]
                    br
                    br
                    |Excepciones
                  td #[em They totally change]
                    br
                    |Cambian totalmente
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Good / Well"
                    :audio="require('@/assets/curso/audios/tema4/31.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 Bueno / Bien
                  td
                    TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="Better"
                    :audio="require('@/assets/curso/audios/tema4/32.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ms-4 mejor
    p.mb-5(data-aos='fade-right') 
      span.r--1 Now let’s see what you have learned so far about adverbs of manner and the comparison with adverbs. Complete the following dialogue. 
      span.r--g / Ahora veamos lo aprendido sobre los adverbios de modo y la comparación con adverbios. Complete el siguiente diálogo.
    
    
    
    
    
    
    
    
    
    
    
    
    
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) 
      template(#descripcion-actividad)   






</template>

<script>
export default {
  name: 'Tema4',
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
          nombre: 'Lorenzo',
          img: require('@/assets/curso/temas/tema4/lorenzo.svg'),
        },
        {
          nombre: 'Camila',
          img: require('@/assets/curso/temas/tema4/camila.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Lorenzo',
          textoIng:
            'What do you think will happen when the construction of the *** is finished?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema4/lorenzo.mp3'),
          palabra: 'school',
        },
        {
          personaje: 'Camila',
          textoIng:
            'I hope that the kids begin studying, and that they will learn new things *** in their new school.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema4/camila.mp3'),
          palabra: 'safely',
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
