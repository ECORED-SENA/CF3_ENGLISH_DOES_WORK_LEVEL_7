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
        titulo: '<em> Past Perfect </em> (Pasado perfecto)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em> Structure </em> (Estructura)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em> When not to use Past Perfect</em> (Cuándo no usar el pasado perfecto)',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em> Adverbs of degree</em> (Adverbios de grado)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em> Narrative connectors</em> (Conectores narrativos) ',
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
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
      tema: 'Past Perfect (Pasado perfecto)',
      referencia:
        'BBC Learning English. (2018). The Past Perfect Tense: The Grammar Gameshow Episode 13 [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=05HXVE05vjg',
    },
    {
      tema: 'Structure (Estructura)',
      referencia:
        'Beckwith, S. (s. f.). Past Perfect Exercise 1. Perfect English Grammar. ',
      tipo: 'Web',
      link:
        'https://www.perfect-english-grammar.com/past-perfect-exercise-1.html',
    },
    {
      tema: 'Adverbs of Degree (Adverbios de grado)',
      referencia: 'English Grammar.org. (2012). Adverbs of degree exercise. ',
      tipo: 'Web',
      link: 'https://www.englishgrammar.org/adverbs-degree-exercise/',
    },
    {
      tema: 'Adverbs of Degree (Adverbios de grado)',
      referencia:
        'Shaw English Online. (2020). Adverbs of Degree | Learn Basic English Grammar Course [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8exJ4UjxWng&ab_channel=ShawEnglishOnline',
    },
    {
      tema: 'Narrative connectors (Conectores narrativos)',
      referencia:
        'EasyTeaching. (2019). Writing a Narrative: Part 2 Language Elements | EasyTeaching [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3fDbenhTwjw',
    },
  ],
  glosario: [
    {
      termino: '<em> Base form</em> / Forma base',
      significado:
        'forma más básica de un verbo, sin ningún tipo de terminación específica.',
    },
    {
      termino: '<em> Past simple </em> / Pasado simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em> Past continuous</em>  / Pasado continuo',
      significado:
        'tiempo verbal que hace referencia a acciones que se estaban llevando a cabo en un momento del pasado.',
    },
    {
      termino: '<em> Time expressions </em> / Expresiones de tiempo',
      significado:
        'son expresiones que dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Austen, J. (s. f.). LETTER 4th Laura to MARIANNE. Project Gutenberg. ',
      link:
        'https://www.gutenberg.org/files/1212/1212-h/1212-h.htm#link2H_4_0005',
    },
    {
      referencia:
        'Beckwith, S (s. f.). The Past Perfect Tense. Perfect English Grammar. ',
      link: 'https://www.perfect-english-grammar.com/past-perfect.html',
    },
    {
      referencia:
        'Cambridge University Press. (s.f.). Degree adverbs. Cambridge Dictionary. ',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/degree-adverbs',
    },
    {
      referencia:
        'Equipo académico. (2021). Conectores en inglés: herramientas para la fluidez. British Council Colombia.',
      link:
        'https://www.britishcouncil.co/blog/aprende-ingles/conectores-ingles',
    },
    {
      referencia:
        'Equipo académico. (2021). Past perfect: claves para usarlo como nativo. British Council México. ',
      link: 'https://www.britishcouncil.org.mx/blog/past-perfect',
    },
    {
      referencia:
        'English with Cambridge. (2021). Past simple y past perfect. ',
      link: 'https://www.inglesconcambridge.com/past-simple-y-past-perfect/ ',
    },
    {
      referencia:
        'Murphy, R. (2019). English Grammar in Use. Cambridge University Press. ',
      link:
        'https://corsidilaurea.uniroma1.it/sites/default/files/english_grammar_in_use_intermediate_2019_5th-ed.pdf',
    },
    {
      referencia: 'UsingEnglish.com. (2022). English Irregular Verbs List. ',
      link: 'https://www.usingenglish.com/reference/irregular-verbs',
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
        nombre: 'Jesús Edgardo Contreras Ramírez',
        cargo: ' Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: ' Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios – CIES - Regional Santander  ',
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
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual        ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez',
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
