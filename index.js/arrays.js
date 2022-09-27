const PRODUCTS = [
  {
    id: 1,
    category: 'Novedades',
    products: [
      {
        id: 'product1',
        name: 'Call of Duty®: Modern Warfare® II',
        descripcion: 'En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global.',
        img: "https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1662612400",
        video: "https://cdn.akamai.steamstatic.com/steam/apps/256906179/movie480_vp9.webm?t=1663275402"
      },
      {
        id: 'product2',
        name: 'Apex',
        descripcion: 'Apex Legends es el galardonado juego gratuito de acción en primera persona de Respawn Entertainment. Domina un elenco creciente de leyendas con potentes habilidades.',
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1660674992',
        video: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256901124/movie480_vp9.webm?t=1660669942',
      },
      {
        id: 'product3',
        name: 'Disney Dreamlight Valley',
        descripcion: 'Explora un mundo donde reina la magia de Disney mientras descubres increíbles historias y construyes el barrio perfecto.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1401590/header.jpg?t=166266975',
        video:'https://cdn.akamai.steamstatic.com/steam/apps/256883361/movie480_vp9.webm?t=1651072549',
    
      },
      {
        id: 'product4',
        name: 'EA SPORTS™ FIFA 23',
        descripcion: 'La tecnología HyperMotion2 ofrece jugabilidad ultrarrealista en la nueva generación.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1662453148',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256902721/movie480_vp9.webm?t=1661522353',
      },
      {
        id: 'product5',
        name: 'NBA 2K23',
        descripcion: 'Ponte a la altura de las circunstancias en NBA 2K23. Demuestra tu talento en Mi CARRERA. Empareja a All-Stars con leyendas eternas en MyTEAM.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1919590/header.jpg?t=1663002902',
        video:'https://cdn.akamai.steamstatic.com/steam/apps/256904677/movie480_vp9.webm?t=1662696176',
      },
      {
        id: 'product6',
        name: 'Marvel Spider-Man Remastered',
        descripcion: 'En Marvels Spider-Man Remasterizado, la vida de Peter Parker se topa con la de Spider-Man en una historia original repleta de acción.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1660316394',
        video:'https://cdn.akamai.steamstatic.com/steam/apps/256900398/movie480_vp9.webm?t=1660316296',
      },
    ]
  },
  {
      id: 2,
      category: 'Acción',
      products: [
      {
        id:'product7',
        name:'Destiny 2',
        descripcion:'Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento.',
        img:'https://cdn.akamai.steamstatic.com/steam/apps/1085660/header_spanish.jpg?t=1661876523',
        video:'https://cdn.akamai.steamstatic.com/steam/apps/256877053/movie480_vp9.webm?t=1661325595',
      },
      {
        id:'product8',
        name: 'Red Dead Redemption 2',
        descripcion:'Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256768283/movie480.webm?t=1574881416',
      },
      {
        id:'product9',
        name: 'Call of Duty®: Modern Warfare® II',
        descripcion:'En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1662612400',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256906179/movie480_vp9.webm?t=1663275402',
      },
      {
        id:'product10',
        name: 'Counter-Strike: Global Offensive',
        descripcion:'Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1641233427',
        video: 'https://cdn.cloudflare.steamstatic.com/steam/apps/81958/movie480.webm?t=1554409259',
      },
      {
        id:'product11',
        name: 'Grand Theft Auto V',
        descripcion:'Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256757119/movie480.webm?t=1563930521'
      },
      {
        id:'product12',
        name: 'God of War',
        descripcion:'Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256864004/movie480_vp9.webm?t=1639001817'
      },
    ]
  },
  {
    id: 3,
    category: 'Autos',
    products: [
      {
        id:'product13',
        name:'Forza Horizon 5',
        descripcion:'¡La aventura Horizon definitiva te espera! Explora los vibrantes paisajes de mundo abierto en constante evolución',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1661275467',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256875134/movie480_vp9.webm?t=1647525311'
      },
      {
        id:'product14',
        name: 'Car Mechanic Simulator 2021',
        descripcion:'Ábrete camino hasta la cumbre del sector. Ensúciate las manos en un juego de simulación altamente realista',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1190000/header.jpg?t=1662542604',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256832709/movie480_vp9.webm?t=1619704398'
      },
      {
        id:'product15',
        name: 'F1® 22',
        descripcion:'Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1692250/header.jpg?t=1663072287',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256891019/movie480_vp9.webm?t=1654870684'
      },
      {
        id:'product16',
        name: 'Forza Horizon 4',
        descripcion:'Las estaciones dinámicas lo cambian todo en el mejor festival automovilístico del mundo.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1622068013',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256820720/movie480_vp9.webm?t=1612810706'
      },
      {
        id:'product17',
        name: 'iRacing',
        descripcion:'Somos el principal juego de carreras de automovilismo del mundo..',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/266410/header.jpg?t=1662580861',
        video: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256863817/movie480_vp9.webm?t=1638911638'
      },
      {
        id:'product18',
        name: 'Need for Speed™ Payback',
        descripcion:'Destaca entre la multitud con artículos de personalización exclusivos y recibe descuentos en el juego',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1262580/header.jpg?t=1662757047',
        video: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256789562/movie480_vp9.webm?t=1592508913'
      },
    ]
  },
  
  {
    id: 4,
    category: 'Estrategia',
    products: [  

      {
        id:'product19',
        name: 'Age of Empires II: Definitive Edition',
        descripcion:'Age of Empires II: Definitive Edition incluye "Los últimos khanes", que incorpora 3 campañas y 4 civilizaciones nuevas.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/813780/header.jpg?t=1655752709',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256810032/movie480_vp9.webm?t=1605737896'
      },
      {
        id:'produc20',
        name: 'Divinity: Original Sin 2 - Definitive Edition',
        descripcion:'The critically acclaimed RPG that raised the bar, from the creators of Baldurs Gate 3. Gather your party.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg?t=1663057274',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256694830/movie480.webm?t=1561485484'
      },
      {
        id:'product21',
        name: 'Cities: Skylines',
        descripcion:'Introduce nuevos elementos a la mecánica de juego para plasmar la emoción y las complicaciones de mantener una ciudad de verdad,',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1661180351',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256785384/movie480_vp9.webm?t=1589550020'
      },
      {
        id:'product22',
        name: 'Total War: WARHAMMER III',
        descripcion:'El final cataclísmico de la trilogía de Total War™: WARHAMMER® ha llegado. Reagrupa a tus fuerzas y adéntrate en el Reino del Caos.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1142710/header.jpg?t=1662479539',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256874322/movie480_vp9.webm?t=1645093986'
      },
      {
        id:'product23',
        name: 'Crusader Kings III',
        descripcion:' Determina el legado de tu casa nobiliaria en la gran estrategia en expansión de Crusader Kings III.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg?t=1662730494',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256799392/movie480_vp9.webm?t=1598976952'
      },
      {
        id:'product24',
        name: 'Jurassic World Evolution 2',
        descripcion:'Jurassic World Evolution 2 es la esperada secuela de Jurassic World Evolution, el éxito de Frontier de 2018.',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1244460/header.jpg?t=1663074314',
        video: 'https://cdn.akamai.steamstatic.com/steam/apps/256859658/movie480_vp9.webm?t=1636466429'
      },
    ]
  }
]
