import vrt from '../assets/img/game_SI/1/dan1.jpeg'
import kuhinja from '../assets/img/game_SI/1/dan1a.jpeg'
import vrataVrt from '../assets/img/game_SI/vrt-vrata.png'
import outItem1 from '../assets/img/game_SI/1/vrt/p1.png'
import outItem2 from '../assets/img/game_SI/1/vrt/p2.png'
import outItem3 from '../assets/img/game_SI/1/vrt/p3.png'
import outItem4 from '../assets/img/game_SI/1/vrt/p4.png'
import outItem5 from '../assets/img/game_SI/1/vrt/p5.png'
import p1 from '../assets/img/game_SI/1/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/1/kuhinja/3D_LessPlastic_Puding_Vrhnje_HR_SLO_WEB@2x.webp'
import k2 from '../assets/img/game_SI/1/kuhinja/170000669-pjenjaca-retro-1.jpeg'
import k3 from '../assets/img/game_SI/1/kuhinja/4044935018705-Zeko-kalup-na-zatvaranje-1.jpeg'
import k4 from '../assets/img/game_SI/1/kuhinja/finesse.png'
import k5 from '../assets/img/game_SI/1/kuhinja/keksi-sa-sirom-u-obliku-zeca@2x.webp'
import vrataKuhinja from '../assets/img/game_SI/kuhinja-vrata.png'
/*import inItem1 from '../assets/img/game_SI/1/kuhinja/k1.jpeg'
import inItem2 from '../assets/img/game_SI/1/kuhinja/k2.png'
import inItem3 from '../assets/img/game_SI/1/kuhinja/k3.png'
import inItem4 from '../assets/img/game_SI/1/kuhinja/k4.jpeg'
import inItem5 from '../assets/img/game_SI/1/kuhinja/k5.png'*/

const day_1 = [
    {   main: [
            {
                id: 0,
                image: vrt
            },
            {
                id: 1,
                image: kuhinja
            }
        ],
        outside: [
            {
                id: 0,
                vrata: true,
                trigger_image: ' ',
                position: { yaw: "113.2deg", pitch: "-7.1deg" },
                size: { width: 126, height: 329 },
                product_title: '',
                product_description: '',
                product_image: '',
                product_url: ''
            },
            {
                id: 1,
                trigger_image: ' ',
                position: { yaw: "-52.7deg", pitch: "-9.1deg" },
                size: { width: 22, height: 29 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "42.5deg", pitch: "-9.9deg" },
                size: { width: 22, height: 29 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "71.5deg", pitch: "-11.8deg" },
                size: { width: 22, height: 29 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "174.5deg", pitch: "-22.3deg" },
                size: { width: 30, height: 35 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-103.5deg", pitch: "-39.5deg" },
                size: { width: 85, height: 85 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
        ],
        inside: [
            {
                id: 0,
                vrata: true,
                trigger_image: ' ',
                position: { yaw: "-149.2deg", pitch: "-39.1deg" },
                size: { width: 703, height: 1180 },
                product_title: '',
                product_description: '',
                product_image: '',
                product_url: ''
            },
            {
                id: 1,
                trigger_image: ' ',
                position: { yaw: "97.2deg", pitch: "5.5deg" },
                size: { width: 83, height: 128 },
                product_title: 'Original puding z okusom sladke smetane',
                product_description: 'Nežen kot smetana – prav tak je tudi okus sladke smetane našega klasičnega original pudinga. Za še bolj kremast okus vaših sladic.',
                product_image: k1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/original-pudingi/original-puding-z-okusom-smetane'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "71.8deg", pitch: "-28deg" },
                size: { width: 132, height: 109 },
                product_title: 'Metlica za stepanje, lesen ročaj, retro',
                product_description: 'Metlica z lesenim ročajem je idealen pomočnik za mešanje krem, testa, pudingov in omak ali pri stepanju beljakov in smetane za stepeno smetano.',
                product_image: k2,
                product_url: 'https://oetker-shop.si/izdelek/metlica-za-stepanje-lesen-rocaj-retro/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "32.2deg", pitch: "-23.8deg" },
                size: { width: 134, height: 155 },
                product_title: 'Model za peko zlati, zajček',
                product_description: 'Pravi klasik za veliko noč! Z tem Dr. Oetkerjevim modelčkom zlate barve spečite pecivo v obliki sladkega zajčka, nelepljivi premaz pa vam bo omogočil lahko odstranjevanje iz modela.',
                product_image: k3,
                product_url: 'https://oetker-shop.si/izdelek/model-za-peko-zlati-zajcek/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-76deg", pitch: "-30.8deg" },
                size: { width: 58, height: 116 },
                product_title: 'Finesse bourbon vanilija 2x5g',
                product_description: 'Dr. Oetker Finesse naravna aroma burbonske vanilije  daje posebno kakovostno aromo vsem vrstam sladic.',
                product_image: k4,
                product_url: 'https://oetker-shop.si/izdelek/finesse-bourbon-vanilija-2x5g/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "144.3deg", pitch: "-24.9deg" },
                size: { width: 170, height: 159 },
                product_title: 'Piškoti s sirom v obliki zajčka',
                product_description: 'Hitro in enostavno pripravite te ljubke piškote v obliki zajčka z naribanim parmezanom za velikonočni zajtrk',
                product_image: k5,
                product_url: 'https://slo.oetker-recepti.com/piskoti-s-sirom-v-obliki-zajcka/'
            },
        ]
    },
]

export default day_1