import vrt from '../assets/img/game_SI/6/d6.jpeg'
import kuhinja from '../assets/img/game_SI/6/k6.jpeg'
import vrataVrt from '../assets/img/game_SI/vrt-vrata.png'
import outItem1 from '../assets/img/game_SI/6/vrt/1.png'
import outItem2 from '../assets/img/game_SI/6/vrt/2.png'
import outItem3 from '../assets/img/game_SI/6/vrt/3.png'
import outItem4 from '../assets/img/game_SI/6/vrt/4.png'
import outItem5 from '../assets/img/game_SI/6/vrt/5.png'
import p1 from '../assets/img/game_SI/6/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/6/kuhinja/170000668-sito-retro-2.jpeg'
import k2 from '../assets/img/game_SI/6/kuhinja/Kakao za kolače@2x.webp'
import k3 from '../assets/img/game_SI/6/kuhinja/torta-s-uskrsnim-zecicima@2x.webp'
import k4 from '../assets/img/game_SI/6/kuhinja/creative-puding-mint-cokolada@2x.webp'
import k5 from '../assets/img/game_SI/6/kuhinja/170000675-set-zecja-obitelj-1.jpeg'
import vrataKuhinja from '../assets/img/game_SI/kuhinja-vrata.png'
import inItem1 from '../assets/img/game_SI/6/kuhinja/sito.png'
import inItem2 from '../assets/img/game_SI/6/kuhinja/kakao.png'
import inItem3 from '../assets/img/game_SI/6/kuhinja/recept.png'
import inItem4 from '../assets/img/game_SI/6/kuhinja/puding.jpg'
import inItem5 from '../assets/img/game_SI/6/kuhinja/set.png'

const day_6 = [
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
                position: { yaw: "-1.2deg", pitch: "-38.6deg" },
                size: { width: 80, height: 80 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "94deg", pitch: "-18deg" },
                size: { width: 24, height: 28 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-119.5deg", pitch: "-13.5deg" },
                size: { width: 19, height: 25 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "51.5deg", pitch: "-7deg" },
                size: { width: 18, height: 23 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "147.5deg", pitch: "-9.5deg" },
                size: { width: 22, height: 27 },
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
                position: { yaw: "-49.2deg", pitch: "-45.5deg" },
                size: { width: 175, height: 82 },
                product_title: 'Sito malo, lesen ročaj, retro',
                product_description: 'To veliko noč pripravite najlepše piškote! Sladki komplet Zajčja družina vsebuje mešanico za krhke kekse, modelčke za izrezovanje "Zajčja družina", pastelno sladkorno pisavo in dekor mix perle soft za okrasitev.',
                product_image: k1,
                product_url: 'https://oetker-shop.si/izdelek/sito-malo-lesen-rocaj-retro/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "68deg", pitch: "-26.5deg" },
                size: { width: 80, height: 130 },
                product_title: 'Kakav za kolače',
                product_description: 'Dr. Oetker Kakav za kolače je s svojo polnostjo in intenzivno temno barvo popoln dodatek čokoladnim testom in kremam za torte ter za okrasitev.',
                product_image: k2,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/kakao/kakao'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "38.2deg", pitch: "-21deg" },
                size: { width: 251, height: 158 },
                product_title: 'Torta z velikonočnimi zajčki',
                product_description: 'Preizkusite recept za hrustljave zajčke na rahlem biskvitu, sladki kremi in sočnih mandarinah',
                product_image: k3,
                product_url: 'https://slo.oetker-recepti.com/1798-2/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-56deg", pitch: "-27.8deg" },
                size: { width: 55, height: 110 },
                product_title: 'Dr. Oetker Creative puding z okusom vanilje in kardamoma',
                product_description: 'Ko si zaželite puding osvežilnega okusa, je Dr. Oetker Creative puding z okusom čokolade in mete kot nalašč za vas.',
                product_image: k4,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/creative-puding/creative-puding-z-okusom-cokolade-in-mete'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "136.3deg", pitch: "-27.4deg" },
                size: { width: 301, height: 264 },
                product_title: 'Set ‘Zajčja družina’',
                product_description: 'To veliko noč pripravite najlepše piškote! Sladki komplet Zajčja družina vsebuje mešanico za krhke kekse, modelčke za izrezovanje "Zajčja družina", pastelno sladkorno pisavo in dekor mix perle soft za okrasitev.',
                product_image: k5,
                product_url: 'https://oetker-shop.si/izdelek/set-zajcja-druzina/'
            },
        ]
    },
]

export default day_6