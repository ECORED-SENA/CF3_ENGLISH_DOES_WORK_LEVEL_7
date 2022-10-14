<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Present Perfect] (Presente perfecto)
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .tarjeta.p-4(style='background-color: #C4D1FF')
          div(style='background-color: #F0F4FF').p-2.mb-3
            p.text-center #[em We use Present Perfect for actions in the past which have a connection to the present, the time when these actions happened is not important.]
            img(src='@/assets/curso/temas/tema2/1.svg', alt='')
          p.text-center #[em We use the Present Perfect for recently completed actions.]
          img(src='@/assets/curso/temas/tema2/2.svg', alt='').mb-4
          div(style='background-color: #F0F4FF').p-2.mb-3
            p.text-center #[em We use Present Perfect for actions beginning in the past and still continuing.]
            img(src='@/assets/curso/temas/tema2/3.svg', alt='')
      .col-lg-6(data-aos="fade-left") 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic The present perfect tense speaks of an action that took place in the past but still has some importance in the present tense, life experiences, and it focuses on a fact that has happened.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p El tiempo presente perfecto habla de una acción que se llevó a cabo en el pasado, pero que todavía tiene cierta importancia en el tiempo presente, experiencias de vida y se enfoca en un hecho que ha sucedido. 
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
        img(src='@/assets/curso/temas/tema2/4.svg', alt='')
    p.text-center El siguiente video nos amplía la información sobre el uso del 
      span.r--1.fw-bold #[em Present perfect.]
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-8
        a.anexo.my-4.mb-lg-0(:href="obtenerLink('downloads/doc2.pdf')" target="_blank" style='background-color: #3c3fa7')
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto()
                  p
                    span.r--2.fw-normal #[b Anexo.] Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .margin-n.p-5(style="background-color: #E1E8FF").mb-5
      .row.justify-content-center.mb-5
        .col-lg-9
          .tarjeta.bg-white.p-5.tarjeta-intro 
            h5.text-center
              span.r--1  #[em Thematic Dialogue]  / Diálogo temático
            p.mb-5.text-center #[em  A love story using the present perfect.]
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6.col-8.mb-lg-0.mb-3(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/5.svg', alt='')
              .col-lg-6(data-aos="fade-left")
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                      .contenedor-traductor__eng
                        .row.justify-content-center.align-items-center
                          .col-lg-10
                            p.fst-italic.mb-0 <b>Son:</b> Mom, tell me about you and dad. How has your love story been?
                          .col-lg-2
                            Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/1.mp3')").mb-0
                      .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                        p Mamá, cuéntame sobre ti y papá. ¿Cómo ha sido su historia de amor?
                      a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fc5f65') Ver traducción
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                      .contenedor-traductor__eng
                        .row.justify-content-center.align-items-center
                          .col-lg-10
                            p.fst-italic.mb-0 <b>Mom:</b> Well, son, he and I met at school, when we were 13, but we’ve been together since we were 18, when we fell in love. The next year, we got married, moved to the United States and lived abroad for over 20 years before coming back to our hometown.
                          .col-lg-2
                            Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/2.mp3')").mb-0
                      .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                        p Bueno, hijo, él y yo nos conocimos en el colegio, a los 13 años, pero hemos estado juntos desde los 18 años, que nos enamoramos. Al año siguiente, nos casamos, nos mudamos a los Estados Unidos y vivimos en el extranjero por más de 20 años, antes de regresar a nuestra ciudad natal.
                      a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fc5f65') Ver traducción
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6(data-aos="fade-left")
                .contenedor-traductor.edit.hr(style='background-color: #cad3f2').p-3.mb-5
                    .contenedor-traductor__eng
                      .row.justify-content-center.align-items-center
                        .col-lg-10
                          p.fst-italic.mb-0 <b>Son:</b> You have known each other for almost your entire life.
                        .col-lg-2
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/3.mp3')").mb-0
                    .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                      p Ustedes se conocen de casi toda la vida.
                    a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fc5f65') Ver traducción
                .contenedor-traductor.edit.hr(style='background-color: #fff0b5').p-3.mb-5
                      .contenedor-traductor__eng
                        .row.justify-content-center.align-items-center
                          .col-lg-10
                            p.fst-italic.mb-0 <b>Mom:</b> Yes, we have lived together for over 40 years and haven’t spent a single day apart.
                          .col-lg-2
                            Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/tema2/4.mp3')").mb-0
                      .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                            p Sí, hemos vivido juntos por más de 40 años y no hemos pasado un solo día separados.
                      a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fc5f65') Ver traducción
              .col-lg-6.col-8.mb-lg-0.mb-3(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/6.svg', alt='')
            .tarjeta-intro__icon1: img(src='@/assets/curso/portada/a4.svg', alt='')
            .tarjeta-intro__icon2: img(src='@/assets/curso/portada/a5.svg', alt='')    
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        .tarjeta(style="background-color: #FCF2CA").p-3
          h4.ms-5 #[em PRESENT PERFECT TENSE] 
          .tarjeta.color-secundario.p-2.d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/tema2/7.svg', alt='' style='width: 44px').me-4
            .fst-italic
              h4.mb-1 Subject + have/has + past participle
              p.mb-0 She has lived in Liverpool all her life.
          .tarjeta.color-secundario.p-2.d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/tema2/8.svg', alt='' style='width: 44px').me-4
            .fst-italic
              h4.mb-1 Subject + have not (haven't)/has not (hasn’t) + past participle
              p.mb-0 She hasn't lived in Liverpool all her life.
          .tarjeta.color-secundario.p-2.d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/tema2/9.svg', alt='' style='width: 44px').me-4
            .fst-italic
              h4.mb-1 Have/Has + subject + past participle?
              p.mb-0 Has she lived in Liverpool all her life?
      .col-lg-7(data-aos="fade-right") 
        div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
          h4.text-white.mb-0.mx-5 #[em How to form]
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic The present perfect tense is formed using the present tense of the verb “have” plus the past participle of the main verb. You have to be careful with the third person singular (he, she, it) since the auxiliary is “has”, not “have” as for the other grammatical persons (I, you, we, they).
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
            p El tiempo presente perfecto se forma usando el presente del verbo #[em "have"] más el participio pasado del verbo principal. Hay que tener cuidado con la tercera persona en singular #[em (he, she, it)] porque el auxiliar es #[em "has"], no #[em "have"] como para las demás personas gramaticales #[em (I, you, we, they).] 
          a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2' style='background-color: #fc5f65') Ver traducción
    .margin-n.p-3.px-5.mb-5(style="background-color: #a6bbff")
      .row.justify-content-center.mb-4
        .col-lg-4(data-aos="fade-left")
          .contenedor-traductor(style='background-color: #fff0f1').mb-5
            .contenedor-traductor__eng
              p.fst-italic The present perfect and the past simple are topics that tend to be confused with each other due to their similarities, especially the possibility of narrating past events with both verb tenses which causes them to be used equivocally in some cases. To solve this, we are going to see the grammatical structure in the following resource.
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
              p El presente perfecto y el pasado simple son temas que tienden a confundirse debido a sus similitudes, sobre todo, la posibilidad de narrar eventos pasados con ambos tiempos verbales genera que se usen de manera equívoca en algunos casos. Para solucionar esto, vamos a ver la estructura gramatical en el siguiente recurso.
            a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3' style='background-color: #3c3fa7') Ver traducción
          img(src='@/assets/curso/temas/tema2/10.jpg', alt='' style='border-radius: 10px')
        .col-lg-8(data-aos="fade-right")
          .tarjeta.bg-white.p-4
            p.fst-italic.text-center Let's see how a verb interacts with the rest of the words using the present perfect in affirmative, negative, and interrogative sentences. 
            SlyderA.dots-4.audio-blue(tipo='b')
              div
                p.text-center 
                  span.r--1 #[b #[em Affirmative form of the present perfect tense.]] / Forma afirmativa del tiempo presente perfecto.
                p.fst-italic.mb-4.text-center In its affirmative form, the present perfect tense uses its basic form and has the following structure:
                p.fst-italic.text-center Affirmative / Afirmativa
                  br
                  |Present Perfect
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema2/11.svg', alt='')
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--4 >I</span> <span class=  r--3 >have</span> <span class=  f--2 >lived</span> in Colombia since 1997."
                    :audio="require('@/assets/curso/audios/tema2/5.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 Yo he vivido en Colombia desde 1997.
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/13.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--4 >He</span> <span class=  r--3 >has </span> <span class=  f--2 >lived</span> abroad for 15 years."
                    :audio="require('@/assets/curso/audios/tema2/6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 Él ha vivido en el extranjero por 15 años.
              div
                p.text-center 
                  span.r--1 #[b #[em Negative form of the present perfect tense]] / Forma negativa del tiempo presente perfecto.
                p.fst-italic.mb-4.text-center In its negative form, the present perfect tense uses its basic form and has the following structure:
                p.fst-italic.text-center Negative / Negativa
                  br
                  |Present Perfect
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema2/14.svg', alt='')
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--4 >I</span> <span class=  r--3 >haven’t </span> <span class=  f--2 >lived</span> in Colombia since 1997."
                    :audio="require('@/assets/curso/audios/tema2/7.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 Yo no he vivido en Colombia desde 1997.
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/13.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--4 >He</span> <span class=  r--3 >hasn’t</span> <span class=  f--2 >lived</span> abroad for 15 years."
                    :audio="require('@/assets/curso/audios/tema2/8.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 Él no ha vivido en el extranjero por 15 años.
              div
                p.text-center 
                  span.r--1 #[b #[em Interrogative form of the present perfect tense.]] / Forma interrogativa del tiempo presente perfecto.
                p.fst-italic.mb-4.text-center In its interrogative form, the present perfect tense uses its basic form and has the following structure:
                p.fst-italic.text-center “Yes” or “No” Questions / Preguntas de “Sí” y “No”
                  br
                  |Present Perfect
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema2/15.svg', alt='')
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--3 >Have</span> <span class=  r--4 >I</span> <span class=  f--2 >lived</span> in Colombia since 1997?"
                    :audio="require('@/assets/curso/audios/tema2/9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 ¿Yo he vivido en Colombia desde 1997?
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/13.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--3 >Has</span> <span class=  r--4 >he </span> <span class=  f--2 >lived</span> abroad for 15 years?"
                    :audio="require('@/assets/curso/audios/tema2/10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 ¿Él ha vivido en el extranjero por 15 años?
              div
                p.text-center 
                  span.r--1 #[b #[em Information question form of the present perfect tense.]]  / Preguntas de información del tiempo presente perfecto.
                p.fst-italic.mb-4.text-center In its information question form, the present perfect tense uses its basic form and has the following structure:
                p.fst-italic.text-center Information Questions / Preguntas de información
                  br
                  |Present Perfect
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema2/16.svg', alt='')
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--3 >Where</span> <span class=  r--5 >have</span> <span class=  r--4 >I</span> <span class=  f--2 >lived</span> since 1997?"
                    :audio="require('@/assets/curso/audios/tema2/11.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 ¿Dónde he vivido desde 1997?
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/13.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="<span class=  r--3 >Why</span> <span class=  r--5 >has</span> <span class=  r--4 >he</span> <span class=  f--2 >lived</span> abroad for 15 years?"
                    :audio="require('@/assets/curso/audios/tema2/12.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                    p.ms-3 ¿Por qué él ha vivido en el extranjero durante 15 años?
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  It is quite useful when you want to tell an anecdote that has happened to you, or describe the trips made, as well as to express experiences or memories.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp4}")
            p Resulta bastante útil cuando se quiere contar una anécdota que te ha ocurrido, o describir los viajes realizados, así como para expresar experiencias o recuerdos. A continuación, se presentan algunos ejemplos.
          a.boton-traduccion(@click='ocultarEsp4 = !ocultarEsp4' style='background-color: #fc5f65') Ver traducción
      .col-lg-6.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/17.jpg', alt='' style='border-radius: 10px')
    .margin-n.p-3.px-5.mb-5(style="background-color: #ffe891")
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-3(data-aos="fade-right"): img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/18.svg', alt='')
        .col-lg-8(data-aos="fade-left")
          h4.text-center.fst-italic When should I use the Present Perfect?
          .tarjeta.bg-white.p-5
            SlyderA.dots-4(tipo='b')
              div
                p.text-center.fst-italic 
                  span.r--3 #[b When used to refer to unfinished actions ]
                p Cuando se usa para referir acciones no finalizadas. 
                  br
                  br
                  span.r--1 #[em In this case, it is observed that the action started in the past but continues even in the present. ] 
                  span.r--g En este caso, se observa que la acción inició en el pasado, pero continúa aún en el presente. 
                  br
                  br
                  |#[em Listen to the audio:]
                .row.justify-content-center.mb-5
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Susy has worked here since 2019."
                    :audio="require('@/assets/curso/audios/tema2/1_1.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="They have not paid any rent for several months."
                    :audio="require('@/assets/curso/audios/tema2/1_2.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Caroline has practiced swimming in this pool since she was little."
                    :audio="require('@/assets/curso/audios/tema2/1_3.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                img(src='@/assets/curso/temas/tema2/19.svg', alt='')
              div
                p.text-center.fst-italic 
                  span.r--3 #[b  When talking about completed actions ]
                  br
                  br
                p 
                  span.r--1 #[em When talking about completed actions, which have occurred in the past, but without saying when they happened. ] 
                  span.r--g / Cuando se habla de acciones finalizadas, que han ocurrido en el pasado, pero sin decir cuando sucedieron. 
                  br
                  br
                  |#[em Listen to the audio:]
                .row.justify-content-center.mb-5
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Frank has gone to Brazil."
                    :audio="require('@/assets/curso/audios/tema2/1_4.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Lia has lost her Ipod."
                    :audio="require('@/assets/curso/audios/tema2/1_5.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="They have climbed that mountain together."
                    :audio="require('@/assets/curso/audios/tema2/1_6.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                img(src='@/assets/curso/temas/tema2/20.svg', alt='')
              div
                p.text-center.fst-italic 
                  span.r--3 #[b When the time for carrying out ]
                p Cuando se usa para referir acciones no finalizadas. 
                  br
                  br
                  span.r--1 #[em When the time for carrying out the action has not ended. ] 
                  span.r--g  / Cuando el tiempo de realización de la acción no ha concluido. 
                  br
                  br
                  |#[em Listen to the audio:]
                .row.justify-content-center.mb-5
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Carol and Sue have gone to the gym once a week."
                    :audio="require('@/assets/curso/audios/tema2/1_7.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Mario has looked for a job this month."
                    :audio="require('@/assets/curso/audios/tema2/1_8.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="They have been in line to pay for public services."
                    :audio="require('@/assets/curso/audios/tema2/1_9.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                img(src='@/assets/curso/temas/tema2/21.svg', alt='')
              div
                p.text-center.fst-italic 
                  span.r--3 #[b When the action is constantly repeated ]
                  br
                  br
                p 
                  span.r--1 #[em When the action is constantly repeated at an indeterminate time between the past and the present. ] 
                  span.r--g  / Cuando la acción se repite en forma constante en un tiempo indeterminado entre el pasado y el presente.
                  br
                  br
                  |#[em Listen to the audio:]
                .row.justify-content-center.mb-5
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Paul and Linda have gone to the movies several times."
                    :audio="require('@/assets/curso/audios/tema2/1_10.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Julia has visited the theater at every premiere of a play."
                    :audio="require('@/assets/curso/audios/tema2/1_11.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Sara has talked to her son about sexuality several times."
                    :audio="require('@/assets/curso/audios/tema2/1_12.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                img(src='@/assets/curso/temas/tema2/22.svg', alt='')
              div
                p.text-center.fst-italic 
                  span.r--3 #[b When the action recently ended ]
                  br
                  br
                p 
                  span.r--1 #[em When the action recently ended. In this case, it is accompanied by the adverb “just”. ] 
                  span.r--g / Cuando la acción terminó recientemente. En este caso, se acompaña con el adverbio “just”.
                  br
                  br
                  |#[em Listen to the audio:]
                .row.justify-content-center.mb-5
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Joseph has fixed his car just now. "
                    :audio="require('@/assets/curso/audios/tema2/1_13.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="They have ended their relationship just this week."
                    :audio="require('@/assets/curso/audios/tema2/1_14.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Mary has just finished her housework at home."
                    :audio="require('@/assets/curso/audios/tema2/1_15.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                img(src='@/assets/curso/temas/tema2/23.svg', alt='')
              div
                p.text-center.fst-italic 
                  span.r--3 #[b When the moment isn´t relevant]
                  br
                  br
                p 
                  span.r--1 #[em In this case, it is observed that the action started in the past but continues even in the present. ] 
                  span.r--g / Cuando el momento en que se llevó a cabo la acción no es relevante.
                  br
                  br
                  |#[em Listen to the audio:]
                .row.justify-content-center.mb-5
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="I have lived near famous movie stars."
                    :audio="require('@/assets/curso/audios/tema2/1_16.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4.mb-lg-0.mb-3
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Debbie has studied in Harvard for her Law degree."
                    :audio="require('@/assets/curso/audios/tema2/1_17.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                  .col-lg-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Donald has won the lottery."
                    :audio="require('@/assets/curso/audios/tema2/1_18.wav')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    
                    )
                img(src='@/assets/curso/temas/tema2/24.svg', alt='')
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Present Perfect vs Simple Past (Presente perfecto vs. pasado simple)
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Since both tenses are related to the past, there can be confusion when choosing which one to use to talk about something that happened… or something that has happened. In this numeral we will see the differences between the present perfect and the simple past, to know when and how to use each of them.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp4}")
            p Debido a que ambos tiempos tienen relación con el pasado, puede existir confusión a la hora de escoger cuál usar para hablar de algo que pasó... o algo que ha pasado. En este numeral, veremos las diferencias entre el presente perfecto y el pasado simple, para saber cuándo y cómo usar cada uno de ellos.
          a.boton-traduccion(@click='ocultarEsp4 = !ocultarEsp4' style='background-color: #fc5f65') Ver traducción
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/25.png', alt='')
    .margin-n.p-5.mb-5(style="background-color: #a6bbff")
      h4 
        span.r--1.fst-italic Sentence structures
      p.mb-5(data-aos='fade-right') 
        span.r--1 #[em In this numeral we will see the differences between the present perfect and the simple past, to know when and how to use each of them.] / En este numeral veremos las diferencias entre el presente perfecto y el pasado simple, para saber cuándo y cómo usar cada uno de ellos.
      .row.mb-5
        .col-lg-10
          .tarjeta.bg-white.icono-externo.p-5.py-1

            .icono-externo__icono.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema2/26.svg', alt='' style='width: 196px')
            SlyderA.dots-4(tipo='b')
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |Cloud words
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p.text-center Clue words / Palabras clave
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="Ever / Never"
                        :audio="require('@/assets/curso/audios/tema2/31.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="Since "
                        :audio="require('@/assets/curso/audios/tema2/32.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="Still"
                        :audio="require('@/assets/curso/audios/tema2/33.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="Yet"
                        :audio="require('@/assets/curso/audios/tema2/34.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p.text-center Clue words / Palabras clave
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="Last..."
                        :audio="require('@/assets/curso/audios/tema2/35.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="… ago"
                        :audio="require('@/assets/curso/audios/tema2/36.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-2(
                        texto="Yesterday"
                        :audio="require('@/assets/curso/audios/tema2/37.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |Structures
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p.text-center Structures / Estructuras
                    .row.justify-content-center
                      .col-lg-8
                        .tarjeta.p-4.mb-3(style="background-color: #fff0b5 ").d-flex.justify-content-between.aling-items-center
                          p.h1.mb-0 +
                          .fst-italic 
                            p.mb-0 I #[u have] #[b eaten.]
                              br
                              | She #[u has] #[b eaten.]
                        .tarjeta.p-4.mb-3(style="background-color: #fff0b5 ").d-flex.justify-content-between.aling-items-center
                          p.h1.mb-0 -
                          .fst-italic 
                            p.mb-0 I #[u haven’t ] #[b eaten.]
                              br
                              | She #[u hasn’t] #[b eaten.]
                        .tarjeta.p-4.mb-3(style="background-color: #fff0b5 ").d-flex.justify-content-between.aling-items-center
                          p.h1.mb-0 ?
                          .fst-italic 
                            p.mb-0 #[u Have] I  #[b eaten?]
                              br
                              | #[u Has] she  #[b eaten?]

                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p.text-center Structures / Estructuras
                    .row.justify-content-center.mb-5
                      .col-lg-8
                        .tarjeta.p-4.mb-3(style="background-color: #c4d1ff ").d-flex.justify-content-between.aling-items-center
                          p.h1.mb-0 +
                          .fst-italic 
                            p.mb-0 I  #[b ate.]
                              br
                              | She  #[b ate.]
                        .tarjeta.p-4.mb-3(style="background-color: #c4d1ff ").d-flex.justify-content-between.aling-items-center
                          p.h1.mb-0 -
                          .fst-italic 
                            p.mb-0 I #[u didn’t ] #[b eat.]
                              br
                              | She #[u didn’t] #[b eat.]
                        .tarjeta.p-4.mb-3(style="background-color: #c4d1ff ").d-flex.justify-content-between.aling-items-center
                          p.h1.mb-0 ?
                          .fst-italic 
                            p.mb-0 #[u Did] I  #[b eat?]
                              br
                              | #[u Did] she  #[b eat?]
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |To show relation between
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p
                      span.r--1 #[em To show relation between past time and present time. ]
                      span.r--g Para mostrar la relación entre el tiempo pasado y el tiempo presente.
                    .row.justify-content-center.mb-5
                      .col-lg-10: img(src='@/assets/curso/temas/tema2/27.svg', alt='')
                    p
                      span.r--1.fst-italic For example 
                      span.r--g / Por ejemplo:  
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="I have called him five times so far. <span class= 'r--b fw-normal fst-normal' > Lo he llamado cinco veces hasta ahora.</span>"
                        :audio="require('@/assets/curso/audios/tema2/46.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p
                      span.r--1 #[em To talk about actions and events in the past that are now finished. ]
                      span.r--g / Para hablar de acciones y eventos en el pasado que ya terminaron.
                    .row.justify-content-center.mb-5
                      .col-lg-10: img(src='@/assets/curso/temas/tema2/28.svg', alt='')
                    p
                      span.r--1.fst-italic For example 
                      span.r--g / Por ejemplo:  
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="I called him an hour ago. <span class= 'r--b fw-normal fst-normal' > / Lo llamé hace una hora.</span>"
                        :audio="require('@/assets/curso/audios/tema2/47.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |To talk about things that happened.
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p
                      span.r--1 To talk about things that happened in the past, but we don’t specify when they have happened. / 
                      span.r--g Para hablar de cosas que sucedieron en el pasado, pero no especificamos cuándo han sucedido.
                    p
                      span.r--1 For example / 
                      span.r--g Por ejemplo:

                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="She has bought a new house. <span class= 'r--b fw-normal fst-normal' > / Ella ha comprado una casa nueva.</span>"
                        :audio="require('@/assets/curso/audios/tema2/44.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p
                      span.r--1 To talk about things that happened at a specific time in the past. 
                      span.r--g / Para hablar de cosas que sucedieron en un momento específico en el pasado.
                    p
                      span.r--1 For example / 
                      span.r--g Por ejemplo: 
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="She bought a new house 3 months ago. <span class= 'r--b fw-normal fst-normal' > / Ella compró una casa nueva hace 3 meses.</span>"
                        :audio="require('@/assets/curso/audios/tema2/45.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |To talk about a state
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p
                      span.r--1 To talk about a state which has gone on up to the present. 
                      span.r--g / Para hablar de un estado que se ha prolongado hasta el presente.
                    p
                      span.r--1 For example / 
                      span.r--g Por ejemplo:

                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="Sandra has been in the clinic for two days. (She is still in the clinic)  <span class= 'r--b fw-normal fst-normal' > / Sandra ha estado en la clínica durante dos días. (Ella todavía está en la clínica) </span>"
                        :audio="require('@/assets/curso/audios/tema2/48.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p
                      span.r--1 To talk about a state in the past in a period which is finished. 
                      span.r--g / Para hablar de un estado en el pasado en un periodo que ha terminado.
                    p
                      span.r--1 For example / 
                      span.r--g Por ejemplo:

                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="Sandra was in the clinic for two days. <span class= 'r--b fw-normal fst-normal' >  / Sandra estuvo dos días en la clínica.</span>"
                        :audio="require('@/assets/curso/audios/tema2/49.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |It is used with today, this morning, this week.
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p
                      span.r--1 #[em It is used with "today", "this morning", "this week", etc. when these periods are not finished at the time of speaking. ]  
                      span.r--g / Es usado con #[em “today”], #[em “this morning”], #[em “this week”], etc., cuando estos periodos no se han terminado al momento de hablar.
                    .row.justify-content-center.mb-5
                      .col-lg-10: img(src='@/assets/curso/temas/tema2/29.svg', alt='')
                    p
                      span.r--1.fst-italic For example 
                      span.r--g / Por ejemplo:  
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="The nurse has written three prescriptions this morning. (It is still morning) <span class= 'r--b fw-normal fst-normal' > / La enfermera ha escrito tres recetas esta mañana. (Todavía es de mañana)</span>"
                        :audio="require('@/assets/curso/audios/tema2/50.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p
                      span.r--1 #[em It is used with “today”, “this morning”, “this week”, etc., when these periods are finished at the time of speaking. ] 
                      span.r--g / Es usado con #[em “today”], #[em “this morning], #[em “this week”], etc., cuando estos periodos ya se han terminado al momento de hablar.
                    .row.justify-content-center.mb-5
                      .col-lg-10: img(src='@/assets/curso/temas/tema2/30.svg', alt='')
                    p
                      span.r--1.fst-italic For example  
                      span.r--g / Por ejemplo:  
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="The nurse wrote three prescriptions this morning. (The morning is over) <span class= 'r--b fw-normal fst-normal' > / La enfermera escribió tres recetas esta mañana. (La mañana ha terminado) </span>"
                        :audio="require('@/assets/curso/audios/tema2/51.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
              div.px-5
                h4.text-center.fst-italic 
                  span.r--1 Present perfect / Simple past
                    br
                    |To give information
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta(style="background-color: #fff7da").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Present Perfect
                    p
                      span.r--1 #[em To give new information (a general summary). ] 
                      span.r--g / Para dar nueva información (un resumen general).
                    p
                      span.r--1.fst-italic For example  
                      span.r--g / Por ejemplo:  
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="The US space shuttle Atlantis has returned safely to earth.  <span class= 'r--b fw-normal fst-normal' > / El transbordador espacial estadounidense Atlantis ha regresado sano y salvo a la Tierra.</span>"
                        :audio="require('@/assets/curso/audios/tema2/52.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
                  .col-md.tarjeta(style="background-color: #f0f4ff ").p-5
                    .d-flex.justify-content-center
                      div(style="background-color: #3c3fa7 ").p-2.d-inline-block.mb-4
                        h4.text-white.mb-0.mx-5.fst-italic Simple Past
                    p
                      span.r--1 #[em To give the details of a story. ] 
                      span.r--g / Para dar los detalles de una historia.
                    p
                      span.r--1.fst-italic For example  
                      span.r--g / Por ejemplo:  
                    .d-flex.justify-content-center
                      TarjetaAudio.bg-white.color-acento-botones.mb-3(
                        texto="The US space shuttle Atlantis landed in Florida this morning. <span class= 'r--b fw-normal fst-normal' > / El transbordador espacial estadounidense Atlantis aterrizó en Florida esta mañana. </span>"
                        :audio="require('@/assets/curso/audios/tema2/53.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        
                        )
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Complex sentences with present perfect (Oraciones complejas con presente perfecto) 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  A complex sentence is a sentence that contains more than one clause, usually one independent and at least one dependent clause (sometimes called a subordinate clause). With the present perfect we can form complex sentences if we add a subordinate conjunction and then the other dependent clause (which can be in other verb tense, such as the simple past, the simple present, etc.) that will delve a little more into the information. Next, we can see and listen to some examples.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp5}")
            p Una oración compleja es una oración que contiene más de una cláusula, generalmente una independiente y al menos una cláusula dependiente (a veces llamada cláusula subordinada). Con el presente perfecto, podemos formar frases complejas si agregamos una conjunción subordinada y, luego, la otra oración dependiente (que puede ser en otro tiempo verbal, como el pasado simple, el presente simple, etc.) que va a ahondar un poco más en la información. A continuación, podemos ver y escuchar algunos ejemplos
          a.boton-traduccion(@click='ocultarEsp5 = !ocultarEsp5' style='background-color: #fc5f65') Ver traducción
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/31.svg', alt='')
    p.mb-5(data-aos='fade-right').text-center 
      span.r--1 Next, we can see and listen to some examples. 
      span.r--g / A continuación, podemos ver y escuchar algunos ejemplos:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.rounded-0.p-5
        h4.text-center.fst-italic
          span.r--2 Example 1
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/32.jpg', alt='Texto que describa la imagen').mb-4
            TarjetaAudio.bg-white.color-acento-botones.mb-3(
              texto="She has been in the hospital for 3 days <span class= r--1>because</span> she caught a very strong flu"
              :audio="require('@/assets/curso/audios/tema2/54.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              
              )
            p.ms-4 Ella ha estado 3 días en el hospital porque pescó una gripe muy fuerte.
      .col-md.tarjeta.color-acento-contenido.rounded-0.p-5
        h4.text-center.fst-italic Example 2
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/tema2/33.jpg', alt='Texto que describa la imagen').mb-4
            TarjetaAudio.bg-white.color-acento-botones.mb-3(
              texto="I have eaten exotic dishes <span class= r--1 > while</span> my business partner and I travel for work. "
              :audio="require('@/assets/curso/audios/tema2/55.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
              
              )
            p.ms-4 Yo he comido platos exóticos mientras mi socio y yo viajamos por trabajo.
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/34.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Subordinating conjunctions, unlike coordinating conjunctions, join sentences that are not of the same grammatical or syntactic category. These conjunctions are used to join a main clause with a subordinate clause, since the latter would not make sense on its own.
              br
              br
              |They can be of different types: time, opposition, cause and effect or condition.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp6}")
            p Las conjunciones subordinantes, al contrario de las conjunciones coordinantes, unen frases que no son de la misma categoría gramatical o sintáctica. Estas conjunciones se usan para unir una oración principal con una subordinada, puesto que esta última no tendría sentido por sí sola.
              br
              br
              |Pueden ser de distinto tipo: tiempo, oposición, causa y efecto o condición.

          a.boton-traduccion(@click='ocultarEsp6 = !ocultarEsp6' style='background-color: #fc5f65') Ver traducción
    p.mb-5(data-aos='fade-right').text-center A continuación, podemos estudiar algunas de ellas:
    .margin-n.p-5.mb-5(style="background-color: #fff7da")
      .row.justify-content-center.mb-5
        .col-lg-4(data-aos="fade-right")
          h4.fst-italic Subordinate conjunctions
          p
            span.fst-italic These conjunctions are used to join a main clause with a subordinate clause, since the latter would not make sense on its own. 
            span.r--g / Estas conjunciones se usan para unir una oración principal con una subordinada, puesto que esta última no tendría sentido por sí sola. 
          p
            span.fst-italic They can be of different types: #[b time, opposition, cause and effect or condition.]
            span.r--g  / Pueden ser de distintos tipos: tiempo, oposición, causa y efecto o condición.
        .col-lg-8(data-aos="fade-left")
          .bg-white.p-4
            SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg--3.p-4.h-100 
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/temas/tema2/35.svg', alt='Texto que describa la imagen')
                .tarjeta.bg-white.p-4
                  h4.text-center.fst-italic
                    span.r--4 Time
                  .text-center 
                    p
                      span.r--4.fw-bold.fst-italic After: 
                      | luego, después
                      br
                      span.r--4.fw-bold.fst-italic Before: 
                      | antes
                      br
                      span.r--4.fw-bold.fst-italic When: 
                      | cuando
                      br
                      span.r--4.fw-bold.fst-italic While: 
                      | mientras
                      br
                      span.r--4.fw-bold.fst-italic Since: 
                      | desde
                      br
                      span.r--4.fw-bold.fst-italic Until: 
                      | hasta
              .tarjeta.p-4.bg--3.p-4.h-100 
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/temas/tema2/36.svg', alt='Texto que describa la imagen')
                .tarjeta.bg-white.p-4
                  h4.text-center.fst-italic
                    span.r--4 Opposition
                  .text-center 
                    p
                      span.r--4.fw-bold.fst-italic  Although: 
                      | aunque
                      br
                      span.r--4.fw-bold.fst-italic  Even though: 
                      | a pesar de que
                      br
                      span.r--4.fw-bold.fst-italic  Whereas: 
                      | mientras que
                      br
                      span.r--4.fw-bold.fst-italic  While: 
                      | mientras
                      br
                      span.r--4.fw-bold.fst-italic  Nevertheless: 
                      | sin embargo
              .tarjeta.bg--3.p-4.h-100 
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/temas/tema2/37.svg', alt='Texto que describa la imagen')
                .tarjeta.bg-white.p-4
                  h4.text-center.fst-italic
                    span.r--4 Cause and effect
                  .text-center 
                    p
                      span.r--4.fw-bold.fst-italic Because: 
                      | porque
                      br
                      span.r--4.fw-bold.fst-italic Since:  
                      | ya que
                      br
                      span.r--4.fw-bold.fst-italic Now that: 
                      | ahora que
                      br
                      span.r--4.fw-bold.fst-italic As: 
                      | puesto que
                      br
                      span.r--4.fw-bold.fst-italic In order that: 
                      | para que
                      br
                      span.r--4.fw-bold.fst-italic So: 
                      | así que 
                      

              .tarjeta.bg--3.p-4.h-100 
                .row.justify-content-center.mb-3
                  .col-5
                    figure
                      img(src='@/assets/curso/temas/tema2/38.svg', alt='Texto que describa la imagen')
                .tarjeta.bg-white.p-4
                  h4.text-center.fst-italic
                    span.r--4 Condition
                  .text-center 
                    p
                      span.r--4.fw-bold.fst-italic  If: 
                      | si
                      br
                      span.r--4.fw-bold.fst-italic  Unless: 
                      | a menos que
                      br
                      span.r--4.fw-bold.fst-italic  Only if: 
                      | solo si 
                      br
                      span.r--4.fw-bold.fst-italic  Even if: 
                      | aún cuando
                      br
                      span.r--4.fw-bold.fst-italic  In case (that): 
                      | por si
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Time expressions (Expresiones de tiempo)
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/39.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic  Although they can sometimes be used with other tenses, we often use the adverbs #[b “just”, “still”, “already”], and #[b “yet”], or the prepositions #[b “since”] and #[b “for”] with the present perfect tense. These words generally refer to a period of time between the past and now. Let’s see how to use each of them.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp6}")
            p Si bien a veces pueden usarse con otros tiempos verbales, a menudo usamos los adverbios #[em "just"], #[em "still"], #[em "already"] y #[em "yet"] o las preposiciones #[em "since"] y #[em "for"] con el tiempo presente perfecto.
              br
              |Estas palabras generalmente se refieren a un periodo de tiempo entre el pasado y el ahora. Veamos cómo usar cada uno de ellos.

          a.boton-traduccion(@click='ocultarEsp6 = !ocultarEsp6' style='background-color: #fc5f65') Ver traducción
    p.mb-5(data-aos='fade-right')
      span.r--1.fst-italic These words generally refer to a period of time between the past and now. Let's see how to use each of them. 
      span.r--g / Estas palabras generalmente se refieren a un periodo de tiempo entre el pasado y el ahora. Veamos cómo usar cada una de ellas.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-rojo ")
          div(titulo="Just")
            .tarjeta.bg-white.p-4
              p
                span.fst-italic Use:  Very recently, a short moment ago.
                span.r--g  / Muy recientemente, hace un momento.
              h5.text-center.fst-italic For example:
              .row.justify-content-center.mb-3
                .col-lg-3.col-8: img(src='@/assets/curso/temas/tema2/40.svg', alt='Texto que describa la imagen')
                .col-lg-7
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                      texto="I’ve <span class= r--1> just</span> seen Sara with Marco."
                      :audio="require('@/assets/curso/audios/tema2/56.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      
                      )
                    p.ms-4 Acabo de ver a Sara con Marco.
              p.fst-italic Position in the sentence:  Between the #[b auxiliary verb] and the #[b past participle verb.]
          div(titulo="Still")
            .tarjeta.bg-white.p-4
              p
                span.fst-italic #[b Use:] Events that have not happened for a long time (negative sentences). / 
                span.r--g Acontecimientos que continúan sin ocurrir desde hace mucho tiempo (frases negativas).
              h5.text-center.fst-italic For example:
              .row.justify-content-center.mb-3
                .col-lg-3.col-8: img(src='@/assets/curso/temas/tema2/41.svg', alt='Texto que describa la imagen')
                .col-lg-7
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                      texto="I <span class= r--1> still </span> haven’t called Gloria to see how she is."
                      :audio="require('@/assets/curso/audios/tema2/58.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      
                      )
                    p.ms-4 Todavía no he llamado a Gloria para ver cómo está.
              p.fst-italic Position in the sentence:  Before the #[b auxiliary verb.]
          div(titulo="Already")
            .tarjeta.bg-white.p-4
              p
                span.fst-italic #[b Use:]  Events that happened before you expected (affirmative sentences). 
                span.r--g / Acontecimientos que sucedieron antes de lo esperado (frases afirmativas).
              h5.text-center.fst-italic For example:
              .row.justify-content-center.mb-3
                .col-lg-3.col-8: img(src='@/assets/curso/temas/tema2/42.svg', alt='Texto que describa la imagen')
                .col-lg-7
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                      texto=" I’ve <span class= r--1> already</span> had lunch at home."
                      :audio="require('@/assets/curso/audios/tema2/57.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      
                      )
                    p.ms-4 Ya he almorzado en casa.
              p.fst-italic Position in the sentence:  Between the #[b auxiliary verb] and the #[b past participle verb.]
      .col-lg-4.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/47.jpg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/43.jpg', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-rojo ")
          div(titulo="Yet")
            .tarjeta.bg-white.p-4
              p
                span.fst-italic #[b Use:]  It usually refers to something that has not happened, but you expect it to happen soon (negative and interrogative sentences). 
                span.r--g / Usualmente, se refiere a algo que no ha sucedido, pero esperas que suceda pronto (frases negativas e interrogativas).
              h5.text-center.fst-italic For example:
              .row.justify-content-center.mb-3
                .col-lg-3.col-8: img(src='@/assets/curso/temas/tema2/45.svg', alt='Texto que describa la imagen')
                .col-lg-7
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                      texto="We haven’t decided what to do <span class= r--1> yet. </span>"
                      :audio="require('@/assets/curso/audios/tema2/59.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      
                      )
                    p.ms-4 Aún no hemos decidido qué hacer.
              p.fst-italic Position in the sentence:  At the #[b end] of the sentence.
          div(titulo="For")
            .tarjeta.bg-white.p-4
              p
                span.fst-italic #[b Use:]  It measures the duration of something or how long it lasts. 
                span.r--g  / Mide la duración de algo o por cuánto tiempo se desarrolla.
              h5.text-center.fst-italic For example:
              .row.justify-content-center.mb-3
                .col-lg-3.col-8: img(src='@/assets/curso/temas/tema2/46.svg', alt='Texto que describa la imagen')
                .col-lg-7
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                      texto="They have traveled the world <span class= r--1> for </span> 2 years."
                      :audio="require('@/assets/curso/audios/tema2/60.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      
                      )
                    p.ms-4 Ellos han viajado por el mundo por 2 años.
              p.fst-italic Position in the sentence:  Before the #[b temporary marker.]
          div(titulo="Since")
            .tarjeta.bg-white.p-4
              p
                span.fst-italic  Use: To mark the moment something started in the past and continues until now.  
                span.r--g / Para señalar el momento en que comenzó algo en el pasado y continúa hasta ahora.
              h5.text-center.fst-italic For example:
              .row.justify-content-center.mb-3
                .col-lg-3.col-8: img(src='@/assets/curso/temas/tema2/44.svg', alt='Texto que describa la imagen')
                .col-lg-7
                    TarjetaAudio.bg-white.color-acento-botones.mb-3(
                      texto="He has been here <span class= r--1> since </span> 9 am."
                      :audio="require('@/assets/curso/audios/tema2/61.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      
                      )
                    p.ms-4 Él ha estado aquí desde las 9 am.
              p.fst-italic Position in the sentence:  Before the #[b temporary marker.]
    p.mb-5(data-aos='fade-right')
      span.r--1 Let’s practice a little the structure of the present perfect. Complete the following dialogue. 
      span.r--g / Practiquemos un poco la estructura del presente perfecto. Complete el siguiente diálogo.
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[em Dialogue structure of the present perfect] / Diálogo estructura del presente perfecto
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
          nombre: 'Son',
          img: require('@/assets/curso/temas/tema2/son.svg'),
        },
        {
          nombre: 'Mom',
          img: require('@/assets/curso/temas/tema2/mom.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Son',
          textoIng:
            'And what has *** the most difficult moment in your marriage?',
          textoEsp: 'Yo necesito el libro de biologia y las diapositivas.',
          audio: require('@/assets/curso/audios/tema2/son.mp3'),
          palabra: 'been',
        },
        {
          personaje: 'Mom',
          textoIng:
            'Probably, when your grandmother died, your dad’s mother. It is very sad to lose a loved one, and in times like those we *** supported each other as a couple. It hasn’t been easy being together for so long.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema2/mom.mp3'),
          palabra: 'have',
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
