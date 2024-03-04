import vrt from '../assets/img/game_SI/9/d9.jpeg'
import kuhinja from '../assets/img/game_SI/9/k9.jpeg'
import vrataVrt from '../assets/img/game_SI/vrt-vrata.png'
import outItem1 from '../assets/img/game_SI/9/vrt/1.png'
import outItem2 from '../assets/img/game_SI/9/vrt/2.png'
import outItem3 from '../assets/img/game_SI/9/vrt/3.png'
import outItem4 from '../assets/img/game_SI/9/vrt/4.png'
import outItem5 from '../assets/img/game_SI/9/vrt/5.png'
import p1 from '../assets/img/game_SI/9/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/9/kuhinja/aroma-badem@2x.webp'
import k2 from '../assets/img/game_SI/9/kuhinja/3D_LessPlastic_Puding_Cokolada_HR_SLO-m@2x.webp'
import k3 from '../assets/img/game_SI/9/kuhinja/Modeli-za-puding-s-pokrovom-1.jpeg'
import k4 from '../assets/img/game_SI/5/kuhinja/5997381360647-Special-Puding-za-madzarico-okus-cokolade.png'
import k5 from '../assets/img/game_SI/9/kuhinja/tart-od-cokolade-i-malina@2x.webp'
import vrataKuhinja from '../assets/img/game_SI/kuhinja-vrata.png'
import inItem1 from '../assets/img/game_SI/9/kuhinja/badem-aroma.png'
import inItem2 from '../assets/img/game_SI/9/kuhinja/puding.png'
import inItem3 from '../assets/img/game_SI/9/kuhinja/kalup2.png'
import inItem4 from '../assets/img/game_SI/9/kuhinja/kalup.png'
import inItem5 from '../assets/img/game_SI/9/kuhinja/recept.png'

const day_9 = [
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
                position: { yaw: "-139.8deg", pitch: "-34deg" },
                size: { width: 85, height: 85 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "37.5deg", pitch: "-21.3deg" },
                size: { width: 18, height: 23 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "65.6deg", pitch: "-4.8deg" },
                size: { width: 17, height: 20 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "173.8deg", pitch: "-10.9deg" },
                size: { width: 20, height: 26 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-79.8deg", pitch: "-13.8deg" },
                size: { width: 22, height: 24 },
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
                position: { yaw: "78.2deg", pitch: "-23deg" },
                size: { width: 32, height: 91 },
                product_title: 'Tekoča aroma za živila – mandelj',
                product_description: 'Dr. Oetker tekoča aroma sladkega mandlja je nepogrešljiva pri aromatiziranju biskvitov, krem, napitkov, sladoleda in drugih sladic.',
                product_image: k1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/arome/aroma-mandelj'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "106.2deg", pitch: "-29.3deg" },
                size: { width: 60, height: 120 },
                product_title: 'Original puding z okusom čokolade',
                product_description: 'Najljubši okus takoj za vaniljo, Original puding z okusom čokolade, je odličen dodatek vsem čokoladnim sladicam.',
                product_image: k2,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/original-pudingi/original-puding-z-okusom-cokolade'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "38.2deg", pitch: "-22.6deg" },
                size: { width: 100, height: 100 },
                product_title: 'Modeli za puding s pokrovom 6x150ml',
                product_description: 'Vašo najljubšo sladico – puding, ki ste ga pripravili sami – od zdaj naprej lahko pripravite na še bolj eleganten in kreativen način!',
                product_image: k3,
                product_url: 'https://oetker-shop.si/izdelek/modeli-za-puding-s-pokrovom-6x150ml/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-63deg", pitch: "-47.8deg" },
                size: { width: 240, height: 128 },
                product_title: 'Pekač za sadni biskvit 28cm',
                product_description: 'Model za sadni biskvit je odličen pomočnik za izdelavo najrazličnejših pit.',
                product_image: inItem4,
                product_url: 'https://oetker-shop.si/izdelek/model-za-sadni-biskvit-28cm/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "140.3deg", pitch: "-25.2deg" },
                size: { width: 309, height: 180 },
                product_title: 'Pita s čokolado in malinami',
                product_description: 'Preizkusite naš odlični recept za krhko testo s čokoladnim ganašem in kremo iz malin',
                product_image: k5,
                product_url: 'https://www.oetker.si/si-si/velika-noc/zacetek/cokoladno-malinova-pita'
            },
        ]
    },
]

export default day_9