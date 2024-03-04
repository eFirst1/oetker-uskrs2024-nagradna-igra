import vrt from '../assets/img/game_SI/8/d8.jpeg'
import kuhinja from '../assets/img/game_SI/8/k8.jpeg'
import outItem1 from '../assets/img/game_SI/8/vrt/1.png'
import outItem2 from '../assets/img/game_SI/8/vrt/2.png'
import outItem3 from '../assets/img/game_SI/8/vrt/3.png'
import outItem4 from '../assets/img/game_SI/8/vrt/4.png'
import outItem5 from '../assets/img/game_SI/8/vrt/5.png'
import p1 from '../assets/img/game_SI/8/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/8/kuhinja/Okrogel-pekač-visoki-rob3.jpeg'
import k2 from '../assets/img/game_SI/8/kuhinja/torta-u-obliku-zeca-od-fondanta@2x.webp'
import k3 from '../assets/img/game_SI/8/kuhinja/2020-12-SLO-bourbon-vanilija-pasta@2x.webp'
import k4 from '../assets/img/game_SI/8/kuhinja/5997381312257-drOetker-Krema-za-torte-vanilija-1.png'
import k5 from '../assets/img/game_SI/8/kuhinja/posoda-za-mešanje.jpeg'
import inItem1 from '../assets/img/game_SI/8/kuhinja/pladanj.png'
import inItem2 from '../assets/img/game_SI/8/kuhinja/recept.png'
import inItem3 from '../assets/img/game_SI/8/kuhinja/pasta.png'
import inItem4 from '../assets/img/game_SI/8/kuhinja/krema.png'
import inItem5 from '../assets/img/game_SI/8/kuhinja/posuda.png'

const day_2 = [
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
                position: { yaw: "-55deg", pitch: "-8.9deg" },
                size: { width: 19, height: 23 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-105.2deg", pitch: "-12.2deg" },
                size: { width: 16, height: 21 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "99.5deg", pitch: "-8.9deg" },
                size: { width: 17, height: 22 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "17deg", pitch: "-2deg" },
                size: { width: 13, height: 17 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "283.65deg", pitch: "-22.5deg" },
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
                position: { yaw: "-63.5deg", pitch: "-38.2deg" },
                size: { width: 225, height: 213 },
                product_title: 'Okrogel pekač z visokim robom',
                product_description: 'Vsaka vrhunska sladka mojstrovina se začne s peko v najboljšem pekaču!',
                product_image: k1,
                product_url: 'https://oetker-shop.si/izdelek/okrogel-pekac-z-visokim-robom/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "70.8deg", pitch: "-28deg" },
                size: { width: 212, height: 264 },
                product_title: 'Torta v obliki zajca iz fondanta',
                product_description: 'Preizkusite se v okraševanju sladke torte v obliki zajca',
                product_image: k2,
                product_url: 'https://slo.oetker-recepti.com/torta-v-obliki-zajca-iz-fondanta/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "34.2deg", pitch: "-22deg" },
                size: { width: 29, height: 128 },
                product_title: 'Vanilijeva pasta',
                product_description: 'Dr. Oetker Vaniljeva pasta vsebuje semena madagaskarske vanilje najvišje kakovosti in se uporablja za aromatiziranje tort in sladic, še posebej okusna pa je v sladoledu, panna cotti, stepeni smetani in palačinkah.',
                product_image: k3,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/bourbon-vanilija/pasta-od-bourbon-vanlije'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-123.4deg", pitch: "17.6deg" },
                size: { width: 50, height: 95 },
                product_title: 'Krema za torte vanilija',
                product_description: 'Preizkusite kremo za torte z okusom vanilje, ki jo lahko uporabite kot nadev ali kot okras za torte, kolačke, princeskine krofe in podobne sladice.',
                product_image: k4,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/kreme-za-torte/krema-za-torte-z-okusom-vanilije'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "144.4deg", pitch: "-24deg" },
                size: { width: 245, height: 135 },
                product_title: 'Posoda za mešanje 3,2 l',
                product_description: 'Poleg mešanja lahko to posodo uporabite tudi kot skledo za solato ali za shranjevanje hrane, da ohranite njeno svežino.',
                product_image: k5,
                product_url: 'https://oetker-shop.si/izdelek/posoda-za-mesanje/'
            },
        ]
    },
]

export default day_2