import vrt from '../assets/img/game_SI/12/d12.jpeg'
import kuhinja from '../assets/img/game_SI/12/k12.jpeg'
import outItem1 from '../assets/img/game_SI/12/vrt/1.png'
import outItem2 from '../assets/img/game_SI/12/vrt/2.png'
import outItem3 from '../assets/img/game_SI/12/vrt/3.png'
import outItem4 from '../assets/img/game_SI/12/vrt/4.png'
import outItem5 from '../assets/img/game_SI/12/vrt/5.png'
import p1 from '../assets/img/game_SI/12/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/12/kuhinja/uskrsnji-kolac@2x.webp'
import k3 from '../assets/img/game_SI/12/kuhinja/170004974-domaci-prhki-keksi.jpeg'
import k5 from '../assets/img/game_SI/12/kuhinja/Set-Velikonocni-lincerji.jpeg'
import k4 from '../assets/img/game_SI/12/kuhinja/5997381360616-Special-puding-za-kremsnite-okus-vanilija-80g.png'
import inItem1 from '../assets/img/game_SI/12/kuhinja/recept.png'
import inItem2 from '../assets/img/game_SI/12/kuhinja/Posipalec-za-sladkor2.jpeg'
import inItem3 from '../assets/img/game_SI/12/kuhinja/prhki-keksi.png'
import inItem4 from '../assets/img/game_SI/12/kuhinja/puding.png'
import inItem5 from '../assets/img/game_SI/12/kuhinja/set.png'

const day_12 = [
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
                position: { yaw: "95.2deg", pitch: "-18.6deg" },
                size: { width: 22, height: 22 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-167deg", pitch: "-18.2deg" },
                size: { width: 18, height: 22 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-104.8deg", pitch: "-21.9deg" },
                size: { width: 17, height: 22 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "33.3deg", pitch: "-7deg" },
                size: { width: 15, height: 19 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "127.65deg", pitch: "-18.8deg" },
                size: { width: 69, height: 53 },
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
                position: { yaw: "-51.5deg", pitch: "-37.2deg" },
                size: { width: 130, height: 100 },
                product_title: 'Velikonočno pecivo',
                product_description: 'Rusko puhasto pecivo iz pekača z velikonočnimi okraski',
                product_image: k1,
                product_url: 'https://slo.oetker-recepti.com/velikonocno-pecivo/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "75.8deg", pitch: "-22.2deg" },
                size: { width: 45, height: 65 },
                product_title: 'Posipalec za sladkor s sitom in pokrovom',
                product_description: 'S pomočjo Dr. Oetker posipalca okrasite sveže pečene vaflje, sladko pecivo, piškote in različne torte!',
                product_image: inItem2,
                product_url: 'https://oetker-shop.si/izdelek/posipalec-za-sladkor-s-sitom-in-pokrovom/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "37.2deg", pitch: "-24deg" },
                size: { width: 101, height: 180 },
                product_title: 'Domači Krhki keksi',
                product_description: 'Brez sladic iz rahlega in okusnega krhkega testa si ne moremo predstavljati praznične mize.',
                product_image: k3,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/mesanice-za-peko/domace/domaci-krhki-keksi'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-116.4deg", pitch: "15.5deg" },
                size: { width: 68, height: 133 },
                product_title: 'Special puding za kremne rezine',
                product_description: 'Naš Special puding za kremne rezine zagotavlja še posebej bogato in penasto teksturo, prilagojeno kremam za nadeve, vi pa se odločite, ali bo bolj v slogu blejske ali domače različice kremnih rezin.',
                product_image: k4,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/special-pudingi/special-puding-za-kremne-rezine'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "139.4deg", pitch: "-26deg" },
                size: { width: 261, height: 260 },
                product_title: 'Set ‘Velikonočni piškoti’',
                product_description: 'To veliko noč specite najlepše piškote s pomočjo seta »Velikonočni piškoti«!',
                product_image: k5,
                product_url: 'https://oetker-shop.si/izdelek/set-velikonocni-piskoti/'
            },
        ]
    },
]

export default day_12