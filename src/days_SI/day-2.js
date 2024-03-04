import vrt from '../assets/img/game_SI/2/d2.jpeg'
import kuhinja from '../assets/img/game_SI/2/k2.jpeg'
import outItem1 from '../assets/img/game_SI/2/vrt/1.png'
import outItem2 from '../assets/img/game_SI/2/vrt/2.png'
import outItem3 from '../assets/img/game_SI/2/vrt/3.png'
import outItem4 from '../assets/img/game_SI/2/vrt/4.png'
import outItem5 from '../assets/img/game_SI/2/vrt/5.png'
import p1 from '../assets/img/game_SI/2/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/2/kuhinja/uskrsni-kolacici.webp'

import k3 from '../assets/img/game_SI/2/kuhinja/5907707051296-Pisano-pismo-76-g.png'
import k4 from '../assets/img/game_SI/2/kuhinja/aroma-vanilija-2021@2x.webp'
import k5 from '../assets/img/game_SI/2/kuhinja/4044935015315-Analogna-kuhinjska-tehtnica-2kg20g.png'
import inItem1 from '../assets/img/game_SI/2/kuhinja/recept.png'
import inItem2 from '../assets/img/game_SI/2/kuhinja/modlice.png'
import inItem3 from '../assets/img/game_SI/2/kuhinja/sareno-pismo.png'
import inItem4 from '../assets/img/game_SI/2/kuhinja/vanilija-aroma.png'
import inItem5 from '../assets/img/game_SI/2/kuhinja/vaga.png'

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
                position: { yaw: "182deg", pitch: "-12.3deg" },
                size: { width: 24, height: 27 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-35.5deg", pitch: "-4.9deg" },
                size: { width: 16, height: 21 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-104.3deg", pitch: "-12.8deg" },
                size: { width: 23, height: 29 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "94.5deg", pitch: "-35deg" },
                size: { width: 85, height: 70 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-213.65deg", pitch: "-9.5deg" },
                size: { width: 19, height: 23 },
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
                position: { yaw: "-51.2deg", pitch: "-35.8deg" },
                size: { width: 80, height: 84 },
                product_title: 'Ameriški piškoti v obliki piščančkov',
                product_description: 'Ti sladki ameriški piškoti iz slastnega umešanega testa, okrašeni kot piščančki, so prava paša za oči na praznični velikonočni mizi.',
                product_image: k1,
                product_url: 'https://slo.oetker-recepti.com/ameriski-piskoti-v-obliki-piscanckov/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "73.8deg", pitch: "-29deg" },
                size: { width: 160, height: 115 },
                product_title: 'Modelčki za piškote ‘Zajčja družina’',
                product_description: 'To veliko noč boste s pomočjo modelčkov “Zajčja družina” naredili najbolj ustvarjalne piškote za družino in prijatelje!',
                product_image: inItem2,
                product_url: 'https://oetker-shop.si/izdelek/modelcki-za-piskote-zajcja-druzina/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "51.2deg", pitch: "-21.5deg" },
                size: { width: 100, height: 128 },
                product_title: 'Pisano pismo',
                product_description: 'S pomočjo Pisane pisave lahko okrasite velikonočne sladice na najrazličnejše načine, samo pustite domišljiji prosto pot!',
                product_image: k3,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/sladkorni-okraski/4-barvna-sladkorna-pisava'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-121deg", pitch: "18.8deg" },
                size: { width: 38, height: 85 },
                product_title: 'Aroma vanilije',
                product_description: 'Z dodatkom Dr. Oetker arome vanilje se vašim sladkim dobrotam preprosto ne bo moč upreti. ',
                product_image: k4,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/arome/vanilijeva-aroma'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "132.2deg", pitch: "-25.9deg" },
                size: { width: 148, height: 132 },
                product_title: 'Analogna kuhinjska tehtnica',
                product_description: 'Analogna kuhinjska tehtnica Dr. Oetker je praktičena, natančna in enostavna za uporabo!',
                product_image: k5,
                product_url: 'https://oetker-shop.si/izdelek/analogna-kuhinjska-tehtnica-2kg-20g/'
            },
        ]
    },
]

export default day_2