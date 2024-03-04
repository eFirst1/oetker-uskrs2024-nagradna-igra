import vrt from '../assets/img/game_SI/11/d11.jpeg'
import kuhinja from '../assets/img/game_SI/11/k11.jpeg'
import outItem1 from '../assets/img/game_SI/11/vrt/1.png'
import outItem2 from '../assets/img/game_SI/11/vrt/2.png'
import outItem3 from '../assets/img/game_SI/11/vrt/3.png'
import outItem4 from '../assets/img/game_SI/11/vrt/4.png'
import outItem5 from '../assets/img/game_SI/11/vrt/5.png'
import p1 from '../assets/img/game_SI/11/vrt/20204-Boje-za-jaja@2x.webp'
import k2 from '../assets/img/game_SI/11/kuhinja/Kalup-za-kuglof-Backkunst-24-11.jpeg'
import k1 from '../assets/img/game_SI/11/kuhinja/Gustin-fini-jestivi-skrob@2x.webp'

import k3 from '../assets/img/game_SI/11/kuhinja/uskrsnje-ovcice@2x.webp'
import k4 from '../assets/img/game_SI/11/kuhinja/5997381312325-drOetker-Soda-Bikarbona-2.jpeg'
import k5 from '../assets/img/game_SI/11/kuhinja/Posuda-za-topljenje-cokolade-1.png'
import inItem1 from '../assets/img/game_SI/11/kuhinja/gustin.png'
import inItem2 from '../assets/img/game_SI/11/kuhinja/kalup.png'
import inItem3 from '../assets/img/game_SI/11/kuhinja/recept.png'
import inItem4 from '../assets/img/game_SI/11/kuhinja/cimet-secer.jpg'
import inItem5 from '../assets/img/game_SI/11/kuhinja/posuda.png'

const day_11 = [
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
                position: { yaw: "-15.4deg", pitch: "-5.5deg" },
                size: { width: 12, height: 18 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-86deg", pitch: "-7.9deg" },
                size: { width: 21, height: 22 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "5.3deg", pitch: "-8.5deg" },
                size: { width: 15, height: 20 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "136.2deg", pitch: "-12.5deg" },
                size: { width: 15, height: 20 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-137deg", pitch: "-16.5deg" },
                size: { width: 90, height: 90 },
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
                position: { yaw: "122.8deg", pitch: "5.3deg" },
                size: { width: 79, height: 120 },
                product_title: 'Gustin',
                product_description: 'Uporabite Dr. Oetker Gustin – fini jedilni škrob, in vaše testo bo bolj sočno, kremne juhe in omake pa še gostejše.',
                product_image: k1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/gustin/Gustin%20200%20g'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "103.2deg", pitch: "5.7deg" },
                size: { width: 231, height: 101 },
                product_title: 'Premium pekač za potico/šarkelj ‘Floral’ 24 cm',
                product_description: 'Zahvaljujoč modelu za šarklje Floral bodo v hipu nastale prave mojstrovine, ki ne navdušijo samo z okusom, ampak tudi z videzom.',
                product_image: k2,
                product_url: 'https://oetker-shop.si/izdelek/premium-pekac-za-potico-sarkelj-floral-24-cm/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-51.2deg", pitch: "-45.5deg" },
                size: { width: 213, height: 110 },
                product_title: 'Velikonočne ovčke',
                product_description: 'Velikonočne ovčke iz kvašenega testa so zelo okusne, pripravite pa jih lahko tudi skupaj z otroki.',
                product_image: k3,
                product_url: 'https://slo.oetker-recepti.com/velikonocne-ovcke/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "168.5deg", pitch: "-17.1deg" },
                size: { width: 45, height: 68 },
                product_title: 'Soda bikarbona',
                product_description: 'Dr. Oetker Soda bikarbona od sedaj v praktičnem pakiranju po 20 g za enkratno pripravo muffinov in različnih piškotov!',
                product_image: k4,
                product_url: 'https://oetker-shop.si/izdelek/soda-bikarbona-20g/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "69.2deg", pitch: "-30.7deg" },
                size: { width: 200, height: 200 },
                product_title: 'Posoda za taljenje čokolade, nerjaveče jeklo',
                product_description: 'Posoda za topljenje čokolade je izdelana iz visokokakovostnega nerjavnega jekla s posebno dolgim ročajem za lažje ravnanje. Ta kuhinjski pripomoček je idealen za topljenje čokolade in kuverture.',
                product_image: k5,
                product_url: 'https://oetker-shop.si/izdelek/posoda-za-taljenje-cokolade-nerjavece-jeklo/'
            },
        ]
    },
]

export default day_11