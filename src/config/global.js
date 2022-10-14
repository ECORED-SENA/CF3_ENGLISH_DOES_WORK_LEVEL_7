export default {
  global: {
    componenteFormativo:
      'The spy had left the car before it exploded!<br><span class= r--4> ¡El espía salió del carro antes que explotara!</span>',
    descripcionCurso:
      'Este componente se enfocará en el tiempo presente perfecto, se repasarán algunas expresiones temporales de este tiempo verbal y se van a comparar las funciones de este con las del pasado simple, ya que ambos serán útiles a la hora de aprender a estructurar textualmente recuentos anecdóticos. Para esto último, también se aprenderá a comparar con adverbios, frases exclamativas y más vocabulario sobre experiencias de vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flag.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>I have won the lotto twice!</em> (¡Yo he ganado la lotería dos veces!)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em> Present Perfect</em> (Presente perfecto)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              '<em> Present Perfect vs Simple Past</em> (Presente perfecto vs. pasado simple)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              '<em> Complex sentences with Present Perfect</em> (Oraciones complejas con presente perfecto)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em> Time expressions</em> (Expresiones de tiempo)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<em>Textual structure of anecdotes</em> (Estructura textual de anécdotas) ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em> Comparison with adverbs (Comparaciones con adverbios)</em>        ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<em> Adverbs of manner</em> (Adverbios de modo) ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              '<em> Regular and irregular adverbs</em> (Adverbios regulares e irregulares)',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Exclamation phrases</em> (Frases de exclamación)   ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '<em> Present Perfect vs Simple Past</em> (Presente Perfecto vs Pasado Simple)',
      referencia:
        'BBC Learning English. (2018). Present Perfect and Past Simple: The Grammar Gameshow Episode 29 [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XgLdOI6UsJY',
    },
    {
      tema:
        '<em> Present Perfect vs Simple Past</em> (Presente Perfecto vs Pasado Simple)',
      referencia:
        'BBC Learning English. (2020). Present perfect and past simple - 6 Minute Grammar [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jwmKjgwlMk8',
    },
    {
      tema: '<em> Time Expressions</em> (Expresiones de tiempo)',
      referencia:
        'Woodward English. (2022). Present perfect tense with ADVERBS in English - Just, Ever, Never, Still, Yet, Already [Video]. YouTube. ',
      tipo: 'Video      ',
      link: 'https://www.youtube.com/watch?v=Eoxx2ptKO6c&t=321s',
    },
    {
      tema: '<em> Adverbs of manner</em> (Adverbios de modo)',
      referencia:
        'British Council Malaysia. (2019). Helen and Ted - Adverbs of manner [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JLKF6nieRBM',
    },
    {
      tema: '<em> Exclamation Phrases</em> (Frases de exclamación)',
      referencia: 'BBC. (s. f.). Using exclamation marks. Bitesize. ',
      tipo: 'Artículo',
      link: 'https://www.bbc.co.uk/bitesize/topics/z8x6cj6/articles/zmtpscw',
    },
    {
      tema: ' <em> Exclamation Phrases</em> (Frases de exclamación)',
      referencia:
        'Sun & Moon. (2016). BBC Bitesize - English - Exclamation [Video]. Vimeo. ',
      tipo: 'Video',
      link: 'https://vimeo.com/161802017',
    },
  ],
  glosario: [
    {
      termino: '<em>Adverbs of manner</em> / Adverbios de modo',
      significado:
        'adverbios que describen cómo alguien hace algo o cómo sucede algo.',
    },
    {
      termino: '<em>Anecdote</em> / Anécdota',
      significado:
        'una historia corta, a menudo entretenida, divertida, extraña o curiosa, sobre un evento, que generalmente involucra a la persona que lo cuenta.',
    },
    {
      termino: '<em>Exclamation phrases</em> / Frases de exclamación',
      significado:
        'frase o cláusula asociada a las exclamaciones usadas para expresar sorpresa, conmoción o una emoción fuerte sobre algo.',
    },
    {
      termino: '<em>Present perfect</em> / Presente perfecto',
      significado:
        'tiempo verbal que conecta al pasado con el presente, hace referencia a acciones que empezaron en un momento o tiempo previo al ahora y que todavía se están llevando a cabo, o que si ya terminaron en el pasado aún tienen relevancia en el presente.',
    },
    {
      termino: '<em>Simple past</em> / Pasado simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo (empezaron y terminaron) en un momento o tiempo previo al ahora.',
    },
  ],
  referencias: [
    {
      referencia:
        'BBC. (s. f.). Unit 11: The bucket list: The present perfect with ‘ever’ and ‘never’. Learning English. ',
      link:
        'https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-11/session-2',
    },
    {
      referencia:
        'British Council. (s. f.). Adverbials of manner. British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/es/grammar/english-grammar-reference/adverbials-of-manner',
    },
    {
      referencia:
        'British Council. (s. f.). Comparative and superlative adverbs. British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/comparative-and-superlative-adverbs',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). Exclamations. Cambridge Dictionary. ',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/exclamations',
    },
    {
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia. (s. f.). Comparative forms with adjectives and adverbs. Ambiente Virtual de Idiomas . ',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/3220/mod_resource/content/20/contenido/index.html',
    },
    {
      referencia:
        'Ellis, M. (2022). What Is an Anecdote, and How Do You Write One?. Grammarly Blog. ',
      link: 'https://www.grammarly.com/blog/anecdote/',
    },
    {
      referencia:
        'Woodward English. (s. f.). Adverbs with the Present Perfect Tense. ',
      link:
        'https://www.woodwardenglish.com/lesson/adverbs-with-present-perfect-tense/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: ' Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: ' Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
