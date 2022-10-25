<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em> Narrative connectors</em> (Conectores narrativos) 
    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        //TODO agregar traduccion 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
            .contenedor-traductor__eng
              p.fst-italic Using narrative connectors is an essential part of telling anecdotes. They are very useful when giving the reader or listener a path to follow throughout the story and help you build a solid structure during your narration. When talking about narrative connectors, there will be a lot of options to choose from, but let’s focus on the ones that will help you lead to an interesting and structured anecdote:
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
              p El uso de conectores narrativos es una parte esencial de la narración de anécdotas. Son muy útiles a la hora de dar al lector u oyente un camino a seguir a lo largo de la historia y le ayudan a construir una estructura sólida durante la narración. Al hablar de conectores narrativos, habrá muchas opciones para elegir, pero vamos a centrarnos en los que le ayudarán a dar lugar a una anécdota interesante y estructurada:
            a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Once upon a time " style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic “Once upon a time” is an expression used to initiate a tale or a story. Most of these stories are fairy tales for kids and it is not surprising it is almost a standard when talking about how to start a narration. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind:.
                    .contenedor-traductor__esp(:class="{ mostrar: tabs1}")
                      p #[em “Once upon a time"] es una expresión utilizada para iniciar un cuento o una historia. La mayoría de estas historias son cuentos para niños y no es de extrañar que sea casi un estándar cuando se habla de cómo empezar una narración. Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta.
                    a.boton-traduccion(@click='tabs1 = !tabs1' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/2.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/3.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |1. Mostly appears at the beginning of children tales or stories. 
                    span.fst-normal / Aparece sobre todo al principio de los cuentos o historias de niños.
                    br
                    |2. It can be replaced by the expression “A long time ago”. 
                    span.fst-normal / Puede ser reemplazada por la expresión “A long time ago”.
                    br
                    |3. Don’t put a comma after the expression. 
                    span.fst-normal / No se pone coma después de la expresión.
          .tarjeta.p-4(titulo="Meanwhile" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                  p.fst-italic “Meanwhile” is an element of the narration which allows you to talk about two things that were happening at the same time. However, it is not its only use, it can be also used to talk about a period of time between an action and a future one. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind:  
                  .contenedor-traductor__esp(:class="{ mostrar: tabs2}")
                    p #[em “Meanwhile”] es un elemento de la narración que permite hablar de dos cosas que ocurren al mismo tiempo. Sin embargo, no es su único uso, también puede utilizarse para hablar de un periodo de tiempo entre una acción y otra futura. Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta: 
                  a.boton-traduccion(@click='tabs2 = !tabs2' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/4.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/5.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |1. Use it to talk about two things happening at the same time. 
                    span.fst-normal / Úsalo para hablar de dos cosas que suceden al mismo tiempo.
                    br
                    |2. It mostly appears between two commas or after a connector. 
                    span.fst-normal / Suele aparecer entre dos comas o después de un conector.
                  
          .tarjeta.p-4(titulo="Suddenly" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                p.fst-italic “Suddenly” is a narrative connector that denotes surprise or something unexpected. It is commonly used with a verb and as a starting point of a sentence. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind:
              .contenedor-traductor__esp(:class="{ mostrar: tabs3}")
                p #[em “Suddenly”] es un conector narrativo que denota sorpresa o algo inesperado. Se utiliza habitualmente con un verbo y como punto de partida de una frase.  Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta:  
              a.boton-traduccion(@click='tabs3 = !tabs3' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/6.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/7.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |1. Used to express surprise or something that was not expected. 
                    span.fst-normal / Se utiliza para expresar sorpresa o algo que no se esperaba.
                    br
                    |2. If it is used at the beginning of the sentence, use a comma. 
                    span.fst-normal / Si se utiliza al principio de la frase, utilice una coma.
                    br
                    |3. Don’t put a comma if it is used before a verb. 
                    span.fst-normal / No ponga una coma si se usa antes de un verbo.
                  
          .tarjeta.p-4(titulo="Later" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                p.fst-italic “Later” is a narrative connector that refers to a moment in the future. It can be used with any grammar tense because there is not only one context. “Later” can start a sentence using a comma or right before a verb; in this case, the verb has to be used in ING form. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind: 
              .contenedor-traductor__esp(:class="{ mostrar: tabs3}")
                p #[em “Later”] es un conector narrativo que se refiere a un momento en el futuro. Se puede utilizar con cualquier tiempo gramatical porque no hay un solo contexto. Later puede empezar una frase usando una coma o justo antes de un verbo; en este caso, el verbo tiene que usarse en forma ING. Para que entiendas mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos que sea fácil de tener en cuenta:
              a.boton-traduccion(@click='tabs3 = !tabs3' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/6-1.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/7-1.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |1. It indicates an activity that is going to happen in the future. 
                    span.fst-normal / Indica una actividad que va a ocurrir en el futuro.
                    br
                    |2. When starting a sentence, use a comma before starting the next idea. 
                    span.fst-normal / Al comenzar una frase, utilice una coma antes de empezar la siguiente idea.
                    br
                    |3. If it is before a verb, use the verb in ING form.  
                    span.fst-normal / Si está antes de un verbo, use el verbo en forma ING.
                  
          .tarjeta.p-4(titulo="Afterwards" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                p.fst-italic “Afterwards” is a narrative connector that refers to a moment in the future. It can be used with any grammar tense because there is not only one context. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind: 
              .contenedor-traductor__esp(:class="{ mostrar: tabs4}")
                p #[em “Afterwards”] es un conector narrativo que se refiere a un momento en el futuro. Se puede utilizar con cualquier tiempo gramatical porque no hay un solo contexto. Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta: 
              a.boton-traduccion(@click='tabs4 = !tabs4' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/8.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/9.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |1. It indicates an activity that is going to happen in the future. 
                    span.fst-normal / Indica una actividad que va a ocurrir en el futuro.
                    br
                    |2. When starting a sentence, use a comma before starting the next idea. 
                    span.fst-normal / Al comenzar una frase, utilice una coma antes de empezar la siguiente idea.
          .tarjeta.p-4(titulo="When" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                p.fst-italic “When” is a connector that can be used in different situations depending on the way you want to express the ideas. The interesting thing about “when” is that you can use it to connect two different grammar tenses; however, it is mostly used in the past tense. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind: 
              .contenedor-traductor__esp(:class="{ mostrar: tabs4}")
                p #[em “When”] es un conector que se puede utilizar en diferentes situaciones dependiendo de la forma en que se quieran expresar las ideas. Lo interesante de #[em  “when”] es que se puede utilizar para conectar dos tiempos gramaticales diferentes; sin embargo, se utiliza sobre todo en pasado. Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta:
              a.boton-traduccion(@click='tabs4 = !tabs4' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/8-1.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/9-1.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |1. Used to connect a sentence to another in the same period of time.  
                    span.fst-normal / Se utiliza para conectar una frase con otra en el mismo periodo de tiempo. 
                    br
                    |2. Don’t put a comma after “when”.  
                    span.fst-normal  / No se pone coma después de “when”. 
          .tarjeta.p-4(titulo="Finally" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                p.fst-italic “Finally” is a finishing connector. It is used to introduce the closing part of the narration that you are telling or writing. This expression allows the writers or speakers to tell their audience that this narration is going to finish and prepare them for the end of the narration. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind:    
              .contenedor-traductor__esp(:class="{ mostrar: tabs5}")
                p #[em “Finally”] es un conector de finalización. Se utiliza para introducir la parte final de la narración que se está contando o escribiendo. Esta expresión permite a los escritores u oradores indicar a su público que la narración va a terminar y prepararlos para el final de la misma. Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta:
              a.boton-traduccion(@click='tabs5 = !tabs5' style='background-color: #fc5f65') Ver traducción 
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/10.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/11.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic Tips to use it:
                    br
                    br
                    |1. Used to introduce the final part of a narration. 
                    span.fst-normal / Se utiliza para introducir la parte final de una narración.
                    br
                    |2. Put a comma after the expression “Finally”. 
                    span.fst-normal / Se pone una coma después de la expresión “#[em Finally”.]
          .tarjeta.p-4(titulo="At the end" style='background-color: #c4d1ff')
            .contenedor-traductor(style='background-color: #fcf2ca').mb-5
              .contenedor-traductor__eng
                p.fst-italic “At the end” is a finishing expression. It is used to introduce the closing part of the narration that you are telling or writing. This expression allows the writers or speakers to tell their audience that this narration is going to finish and prepare them for the end of the narration. In order for you to understand this expression better, let’s see a chart in which some tips are shown so it is easy to keep in mind: 
              .contenedor-traductor__esp(:class="{ mostrar: tabs6}")
                p #[em “At the end”] es una expresión de finalización. Se utiliza para introducir la parte final de la narración que se está contando o escribiendo. Esta expresión permite a los escritores u oradores indicar a su público que la narración va a terminar y prepararlos para el final de la misma. Para que entienda mejor esta expresión, vamos a ver un cuadro en el que se muestran algunos consejos para que sea fácil de tener en cuenta:
              a.boton-traduccion(@click='tabs6 = !tabs6' style='background-color: #fc5f65') Ver traducción
                  
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema3/12.svg', alt='')
            .row.justify-content-center.mb-5
              .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/13.svg', alt='')
              .col-lg-9(data-aos="fade-left")
                .contenedor-traductor(style='background-color: #fcf2ca').mb-5
                  p.fst-italic #[b Tips to use it:]
                    br
                    br
                    |Used to introduce the final part of a narration. 
                    span.fst-normal / Se utiliza para introducir la parte final de una narración.
                    br
                    |2. Put a comma after the expression “at the end”.  
                    span.fst-normal / Se pone una coma después de la expresión #[em “at the end”.]
      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/14.jpg', alt='')
    .margin-n.p-5.mb-5(style="background-color: #f0f4ff ")
      p.mb-5
        span.r--1.fst-italic Now you can check the examples for each connector. Listen, repeat, and memorize: 
        span.r--g / Ahora, puede consultar los ejemplos de cada conector. Escuche, repita y memorice:
      .row.justify-content-center.align-items-center
        .col-lg-4(data-aos="fade-right")
          h5.text-center
            span.r--1.fst-italic Example narrative connectors
          p
            span.r--1.fst-italic Narrative connectors are very useful when giving the reader or listener a path to follow throughout the story and help you build a solid structure during your narration.
            br
            br
            span.r--g Los conectores narrativos son muy útiles a la hora de dar al lector u oyente un camino a seguir a lo largo de la historia y le ayudan a construir una estructura sólida durante la narración.
        .col-lg-8
          SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-6").text-center
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/15.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/1.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic ONCE UPON A TIME 
                p
                  span.r--4.fst-italic.fw-bold Once upon a time a girl was in the woods… 
                  br
                  | Érase una vez una niña que estaba en el bosque… 
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/16.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/2.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic ONCE UPON A TIME 
                p
                  span.r--4.fst-italic.fw-bold Once upon a time a hunter was looking for a despicable beast… 
                  br
                  | Érase una vez un cazador que estaba buscando una bestia despreciable…
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/17.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/3.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic MEANWHILE
                p
                  span.r--4.fst-italic.fw-bold I was looking for my dogs in the park, meanwhile, they were home playing. 
                  br
                  | Estaba buscando a mis perros en el parque, mientras tanto, ellos estaban en casa jugando 
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/18.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/4.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic MEANWHILE 
                p
                  span.r--4.fst-italic.fw-bold I have a class in a few hours, but meanwhile I am going to take a short nap. 
                  br
                  | Tengo una clase en pocas horas, pero mientras tanto voy a tomar una pequeña siesta.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/19.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/5.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic SUDDENLY
                p
                  span.r--4.fst-italic.fw-bold Suddenly, the fox jumped off the bush. 
                  br
                  | De repente, el zorro saltó del arbusto.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/20.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/6.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic SUDDENLY
                p
                  span.r--4.fst-italic.fw-bold My sister suddenly yelled at me for no reason. 
                  br
                  | Mi hermana me gritó de repente sin razón.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/21.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/7.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic AFTER
                p
                  span.r--4.fst-italic.fw-bold After she had finished her duties, she went to sleep. 
                  br
                  | Una vez terminadas sus tareas, se fue a dormir.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/22.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/8.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic AFTER
                p
                  span.r--4.fst-italic.fw-bold They had already paid after finishing their breakfast. 
                  br
                  | Ya habían pagado después de terminar su desayuno.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/23.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/9.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic AFTERWARDS
                p
                  span.r--4.fst-italic.fw-bold They had arrived home, afterwards, they called their mom.
                  br
                  | Habían llegado a casa, después, llamaron a su madre.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/24.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/10.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic AFTERWARDS
                p
                  span.r--4.fst-italic.fw-bold Afterwards, she realized how difficult it was.
                  br
                  | Después, se dio cuenta de lo difícil que era.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/25.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/11.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic WHEN
                p
                  span.r--4.fst-italic.fw-bold I had done my homework when you arrived.
                  br
                  | Había hecho mis tareas cuando llegaste. 
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/26.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/12.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic WHEN
                p
                  span.r--4.fst-italic.fw-bold My parents had returned from their vacation when I called them.
                  br
                  | Mis padres habían regresado de sus vacaciones cuando los llamé.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/27.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/13.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic FINALLY
                p
                  span.r--4.fst-italic.fw-bold Finally, the woodcutter found the wolf.
                  br
                  | Finalmente, el leñador encontró al lobo.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/28.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/14.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic FINALLY
                p
                  span.r--4.fst-italic.fw-bold Finally, the little girl arrived home with her family.
                  br
                  | Finalmente, la niña llegó a casa con su familia.
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/29.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/15.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic AT THE END
                p
                  span.r--4.fst-italic.fw-bold At the end, the police officer caught the thief.
                  br
                  | Al final, el policía atrapó al ladrón. 
            .tarjeta.color-acento-contenido.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema3/30.svg' alt='AvatarTop')
              .tarjeta.bg-white.p-3
                Audio.color-acento-botones(:audio="require('@/assets/curso/audios/tema3/16.mp3')").mb-3.m-auto.d-flex
                p.mb-0
                  span.r--1.fw-bold.fst-italic AT THE END
                p
                  span.r--4.fst-italic.fw-bold At the end, Bruno could tell the truth to the judge.
                  br
                  | Al final, Bruno pudo contarle la verdad al juez.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        //TODO a;adir traduccion 
        .contenedor-traductor(style='background-color: #fcf2ca').mb-5
          .contenedor-traductor__eng
            p.fst-italic Now that you have learned the expression and have tips to identify when to use these narrative connectors in a text, let’s practice by filling the blanks in your notebook, then check the answers. Listen, read, and complete:     
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Ahora que ha aprendido la expresión y tiene consejos para identificar cuándo utilizar estos conectores narrativos en un texto, vamos a practicar rellenando los espacios en su cuaderno y revisando las respuestas. Escuche, lea y complete:
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp' style='background-color: #fc5f65') Ver traducción
      .col-lg-6.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/31.jpg' alt='AvatarTop')
    .margin-n.p-5.mb-4.position-relative(style="background-color: #fff0f1")
      .row.mb-3
        .col-lg-9
          p.p-modal 
            span.button(@click="modal1 = true")  - - - - -
            | upon a time, a mysterious man arrived into town. Everyone in the town was whispering and making comments  about the man,
            span.button(@click="modal2 = true")  - - - - -
            | the man was just walking around the market. 
            span.button(@click="modal3 = true")  - - - - -
            | the sheriff stopped him and started asking questions.
            span.button(@click="modal4 = true")  - - - - -
            | letting him go, the sheriff talked to everyone in the town and told them to relax; however, not  everyone believed him
            span.button(@click="modal5 = true")  - - - - -
            | he told them that.
            span.button(@click="modal6 = true")  - - - - -
            | the mysterious man turned out to be the king, he was in a disguise to investigate a situation in the kingdom.
      .tarjeta2__imagen: img(src='@/assets/curso/temas/tema3/32.svg', alt='' style='width: 189px')
      .tarjeta2__audio.d-flex.tarjeta.align-items-center.justify-content-center.w-75(style="background-color: #ffdfe0 ").p-3
        h4.me-2.mb-0 
          span.r--1 #[em Click and check your answers]
        TarjetaAudio.color-acento-botones.bg-white.TarjetaAudio(
          texto=""
          :audio="require('@/assets/curso/audios/tema3/17.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
    ModalA(:abrir-modal.sync="modal1")
      h2.text-center #[u O n c e ]
    ModalA(:abrir-modal.sync="modal2")
      h2.text-center #[u m e a n w h i l e ]
    ModalA(:abrir-modal.sync="modal3")
      h2.text-center #[u s u d d e n l y ]
    ModalA(:abrir-modal.sync="modal4")
      h2.text-center #[u a f t e r ]
    ModalA(:abrir-modal.sync="modal5")
      h2.text-center #[u w h e n ]
    ModalA(:abrir-modal.sync="modal6")
      h2.text-center #[u f i n a l l y ]


























































</template>

<script>
import TabsA from '../../node_modules/ecored-base-pkg/src/components/TabsA.vue'
import TabsB from '../../node_modules/ecored-base-pkg/src/components/TabsB.vue'
export default {
  name: 'Tema3',
  components: { TabsA, TabsB },
  data: () => ({
    ocultarEsp: true,
    tabs1: true,
    tabs2: true,
    tabs3: true,
    tabs4: true,
    tabs5: true,
    tabs6: true,
    tabs7: true,
    tabs8: true,
    tabs9: true,
    tabs10: true,
    tabs11: true,
    tabs12: true,
    tabs13: true,
    tabs14: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
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
span.button
  background-color: #fc5f65
  padding: 5px 10px
  border-radius: 5px
  margin: 5px
  cursor: pointer
  &:hover
    background-color: #E5565B
    color: #fff
    transition: all 0.3s ease
.p-modal
  line-height: 2.5
.tarjeta2
  &__imagen
    position: absolute
    top: 0
    right: 0
    transform: translateX(-30%)
  &__audio
    position: absolute
    bottom: 0
    left: 0
    transform: translate(5%, 50%)
    width: 80%
    .TarjetaAudio
      width: 70%
</style>
t
