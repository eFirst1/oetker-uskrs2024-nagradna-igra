import vrt from '../assets/img/game_SI/4/d4.jpeg'
import kuhinja from '../assets/img/game_SI/4/k4.jpeg'
import outItem1 from '../assets/img/game_SI/4/vrt/1.png'
import outItem2 from '../assets/img/game_SI/4/vrt/2.png'
import outItem3 from '../assets/img/game_SI/4/vrt/3.png'
import outItem4 from '../assets/img/game_SI/4/vrt/4.png'
import outItem5 from '../assets/img/game_SI/4/vrt/5.png'
import p1 from '../assets/img/game_SI/4/vrt/20204-Boje-za-jaja@2x.webp'
import k2 from '../assets/img/game_SI/4/kuhinja/170000664-modlice-uskrsno-jaje-main.jpeg'
import k1 from '../assets/img/game_SI/4/kuhinja/aroma-naranca@2x.webp'
import k3 from '../assets/img/game_SI/4/kuhinja/4044935019702-Trosilnik-moke-350-g.png'
import k4 from '../assets/img/game_SI/4/kuhinja/3D_LessPlastic_Puding_VANILIJA_HR_SLO_WEB@2x.webp'
import k5 from '../assets/img/game_SI/4/kuhinja/keksi-u-obliku-jaja@2x.webp'
import inItem1 from '../assets/img/game_SI/4/kuhinja/aroma-naranca.png'
import inItem2 from '../assets/img/game_SI/4/kuhinja/modlice.png'
import inItem3 from '../assets/img/game_SI/4/kuhinja/posipac.png'
import inItem4 from '../assets/img/game_SI/4/kuhinja/puding.png'
import inItem5 from '../assets/img/game_SI/4/kuhinja/recept.png'

const day_4 = [
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
                position: { yaw: "-124.8deg", pitch: "-20.2deg" },
                size: { width: 84, height: 68 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "65.5deg", pitch: "-11deg" },
                size: { width: 23, height: 25 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-68.8deg", pitch: "-11deg" },
                size: { width: 20, height: 25 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-16deg", pitch: "-6deg" },
                size: { width: 19, height: 25 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "34deg", pitch: "-4.6deg" },
                size: { width: 19, height: 24 },
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
                position: { yaw: "68.9deg", pitch: "-4.6deg" },
                size: { width: 26, height: 83 },
                product_title: 'Naravna tekoča aroma za živila - pomaranča',
                product_description: 'Dr. Oetker naravna aroma pomaranče je idealna za aromatiziranje vaših priljubljenih sladic, ki s tem dobijo osvežujočo, citrusno noto.',
                product_image: k1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/arome/aroma-pomaranca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "74.8deg", pitch: "-28deg" },
                size: { width: 142, height: 100 },
                product_title: 'Modelčki za linške piškote "Velikonočno jajce"',
                product_description: 'Dr. Oetker velikonočni modelčki za piškote vam bodo pomagali, da za veliko noč pripravite najboljše piškote!',
                product_image: k2,
                product_url: 'https://oetker-shop.si/izdelek/modelcki-za-linske-piskote-velikonocno-jajce/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "153.2deg", pitch: "-23.5deg" },
                size: { width: 110, height: 110 },
                product_title: 'Sito za moko 350g, pocinkano',
                product_description: 'Enoročni posipalec za moko s premerom približno 10 cm navdušuje z enostavno uporabo! Preprosto vsujte želeno suho sestavino in z eno roko presejte vsebino.',
                product_image: k3,
                product_url: 'https://oetker-shop.si/izdelek/sito-za-moko-350g-pocinkano/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-111deg", pitch: "15deg" },
                size: { width: 60, height: 115 },
                product_title: 'Original puding z okusom vanilije',
                product_description: 'Dr. Oetker Original puding z okusom vanilje je najstarejši in najpriljubljenejši okus naših pudingov za kuhanje. To je klasika, ki jo ima rada vsa družina, pa tudi torte in kolači.',
                product_image: k4,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/original-pudingi/original-puding-z-okusom-vanilije'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-50.2deg", pitch: "-46.1deg" },
                size: { width: 209, height: 128 },
                product_title: 'Piškotki v obliki jajčk',
                product_description: 'Povsem preprosto pripravite velikonočne piškotke iz krhkega testa, ki so polnjeni z marelično marmelado.',
                product_image: k5,
                product_url: 'https://slo.oetker-recepti.com/piskotki-v-obliki-jajck/'
            },
        ]
    },
]

export default day_4