var config = {
    style: 'mapbox://styles/pmarsan00/cmmbsyzzh006h01sh3s47fyp7',
    // leave commented to use Mapbox Standard Style
    
    accessToken: 'pk.eyJ1IjoicG1hcnNhbjAwIiwiYSI6ImNtbWFtODFyYzBlYTkycnI0NjI4ZThqcXMifQ.E6iTsZS4sJKcP20LLLN_dg',
    
    showMarkers: false,
    markerColor: '#003399',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: "dark",
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Resultados de las elecciones al Parlamento Europeo de 2024',
    subtitle: 'Revelaciones más allá de las posturas ideológicas',
    byline: 'Pablo Martín Sánchez',
    footer: 'Fuentes: <a href="https://zenodo.org/records/14569325" target="_blank">BLUE_EP: A Dataset of Municipality-Level Results of European Parliament Elections</a>, <a href="https://ec.europa.eu/eurostat/web/gisco/geodata/statistical-units/territorial-units-statistics" target="_blank">Eurostat:  Territorial units for statistics (NUTS)</a>, <a href="https://ec.europa.eu/eurostat/web/nuts/local-administrative-units" target="_blank">Eurostat: Local administrative units (LAU)</a>. Creado usando la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    
    ui: {
        parties: [
        // Example: use the short code you use in your data/style
        { id: 'LEFT',  label: 'La Izquierda',                    layerId: 'party-left-fill',  default: true  },
        { id: 'S&D',   label: 'S&D (Socialistas y Demócratas)',  layerId: 'party-sd-fill',    default: true  },
        { id: 'G/EFA', label: 'Verdes/Alianza Libre Europea',    layerId: 'party-gefa-fill',  default: true  },
        { id: 'RE',    label: 'RE (Renew Europe)',               layerId: 'party-re-fill',    default: true  },
        { id: 'EPP',   label: 'EPP (Partido Popular Europeo)',   layerId: 'party-epp-fill',   default: true  },
        { id: 'ECR',   label: 'ECR (Conservadores y Reformistas)', layerId: 'party-ecr-fill', default: true  },
        { id: 'PfE',   label: 'PfE Patriotas por Europa',            layerId: 'party-pfe-fill',   default: true  },
        { id: 'ESN',   label: 'ESN (Europa de las Naciones Soberanas)', layerId: 'party-esn-fill', default: true },
        // Add coalitions if you styled them as dedicated layers:
        { id: 'COAL-sd-re',  label: 'Coalición de SD y RE',                     layerId: 'coal-sd-re-fill',  default: true  },
        { id: 'COAL-sdepp',  label: 'Coalición de SD y EPP',                     layerId: 'coal-sd-epp-fill',  default: true  },
        { id: 'COAL-gefasdreepp',  label: 'Coalición de Verdes, SD, RE y EPP',                     layerId: 'coal-gefa-sd-re-epp-fill',  default: true  },
        { id: 'OTH',  label: 'Otros grupos',                     layerId: 'party-other-fill',  default: true  },
        ],
        // Optional: where to inject the controls
        controlsContainerId: 'party-toggles'
        },

    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Elecciones al Parlemento Europeo de 2024',
            image: './assets/eu-flags.jpg',
            description: 'Fotografía de Antoine Schibler en <a href="https://unsplash.com/es/fotos/un-monton-de-banderas-que-ondean-en-el-aire-KF3Ty-K6NVA" target="_blank">Unsplash</a>.<br><br>El 9 de junio de 2024 se celebraron las últimas elecciones al Parlamento Europeo, en las que participaron más de 182 millones de ciudadanos y ciudadanas.<br><br>A la derecha, verán un mapa de coropletas que muestra el partido más votado en cada región NUTS 3 de la Unión Europea. El objetivo de este artículo es explicar cómo las tendencias políticas de los habitantes de ciertas áreas pueden poner de manifiesto sus diferencias culturales, lingüísticas y/o históricas. Asimismo, nombraré los partidos políticos relevantes y los grupos políticos a los que pertenecen en el Parlamento Europeo.<br><br>Comencemos.',
            location: {
                center: [1.55869, 50.06814],
                zoom: 2.8,
                pitch: 0,
                bearing: 0,
                speed: 0.5,
                curve: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'eu27-ep2024-nuts3',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Bélgica',
            image: './assets/Bruselas.jpg',
            description: 'Fotografía de Polly en <a href="https://unsplash.com/photos/green-grass-field-near-brown-concrete-building-during-daytime-JxoW7xyAUGg" target="_blank">Unsplash</a>.<br><br>Empecemos, ¿cómo no?, por el país que alberga la mayoría de sedes de instituciones europeas. Bélgica es un país con una clara frontera cultural y lingüísitca que se extiende de este a oeste.<br><br> Flandes, al norte, es una región con casi siete millones de habitantes donde se habla neerlandés. Tiene un sector tecnólogico e industrial activo y acceso al mar a través del puerto de Amberes, el segundo más grande de Europa. En el mapa, podemos ver que los partidos mayoritarios en esta región fueron la Nueva Alianza Flamenca¹, perteneciente al Grupo de los Conservadores y Reformistas Europeos (ECR), e Interés Flamenco², del grupo Patriotas por Europa (PfE), ambos con tendencias nacionalistas y de extrema derecha.<br><br>Si miramos al sur, encontramos la región de Valonia, de habla mayoritariamente francesa y con casi cuatro millones de habitantes. Su economía ha estado en declive desde mediados del siglo XX y carece de acceso al oceáno. Vemos cómo el partido político más votado por su población es el Movimiento Reformador³, perteneciente al grupo Renew Europe (RE), con una ideología de centroderecha y mucho más moderado que los partidos votados en Flandes.<br><br>Por último, exploremos la Región de Bruselas Capital, una isla de más de un millón de habitantes de habla mayoritariamentemente francesa. Al igual que en la región de Valonia, el partido más votado fue el Movimiento Reformador.<br><br>¹ECR: en azul grisáceo claro.<br>²PfE: en azul marino.<br>³RE: en amarillo.',
            location: {
                center: [5.57967, 50.45],
                zoom: 7,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                curve: 0.8, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Rumanía',
            image: './assets/Rumanía.jpg',
            description: 'Fotografía de Gloria Cretu en <a href="https://unsplash.com/photos/an-aerial-view-of-a-castle-surrounded-by-trees-hVxuOclsZZU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>.<br><br>Ahora nos centraremos en Rumanía, un país con más de 18 millones de habitantes y con diferencias culturales presentes, pero en una proporción menos acentuada que en el caso de Bélgica.<br><br>Observamos que, en casi todas las regiones de Rumanía, la opción con más votos ha sido la coalición¹ del Partido Social Demócrata, del Grupo de la Alianza Progresista de Socialistas y Demócratas (S&D), y del Partido Nacional Liberal³⁴, del grupo Partido Popular Europeo (EPP).<br><br>Las únicas excepciones se encuentran en Transilvania y en una región del noroeste. En estas zonas se asentaron históricamente personas de etnia húngara. En ellas predominó la Unión Democrática de Húngaros en Rumanía², también del grupo EPP, un partido que pretende defender los derechos de la minoría étnica en el país.<br><br>¹Coalición de partidos: en púrpura.<br>²EPP: en azul.'
       ,
            location: {
                center: [21.94008, 45.86101],
                zoom: 5.8,
                pitch: 0,
                bearing: 0,
                speed: 0.5,
                curve: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Alemania',
            image: './assets/Berlin.jpg',
            description: 'Fotografía de Jonas tebbe en <a href="https://unsplash.com/photos/white-tower-in-the-middle-of-city-LDMDCVtQqR4" target="_blank">Unsplash</a>.<br><br>El último contraste del que hablaremos no es étnico, sino uno marcado por la historia.<br><br> Alemania es un país que permaneció más de cuarenta años dividido por el telón de acero, y aún se puede apreciar el efecto que esto tuvo en las preferencias políticas de sus habitantes.<br><br>El partido más votado en los territorios que pertenecieron a la antigua República Federal Alemana fue la Unión Democrática Cristiana¹, un partido de centroderecha que pertenece al grupo EPP.<br><br>Sin embargo, en la zona del noreste, que se corresponde con la antigua República Democrática Alemana, los votantes prefirieron a Alternativa para Alemania², del Grupo Europa de las Naciones Soberanas (ESN), otro partido de extrema derecha, lo que podría interpretarse como una reacción contraria a su pasado reciente.<br><br>Al igual que la capital de Bélgica, Berlín destaca por ser la excepción a esta norma y decantarse por el partido más moderado.<br><br>¹EPP: en azul.<br>²ESN: en azul verdoso.',
            location: {
                center: [13.62462, 50.99881],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: 0.5,
                curve: 0.7,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'denoument',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusión',
            //image: './assets/eu-flags.jpg',
            description: 'Hoy hemos analizado los partidos más votados en las regiones de tres países europeos durante las últimas elecciones al Parlamento. Esto ha puesto de manifiesto cómo la identidad lingüística, cultural e histórica de los habitantes de una región tiende a influir en su decisión de voto, dando lugar a una visión de los mapas electorales que transciende de las posturas ideológicas.',
            location: {
                center: [9.76312, 50.09520],
                zoom: 3.85,
                pitch: 51,
                bearing: 15,
                speed: 0.5,
                curve: 0.7,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            rotateDuration: 40000,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'eu27-ep2024-nuts3',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
