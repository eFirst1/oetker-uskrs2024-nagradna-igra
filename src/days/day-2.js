import vrt from '../assets/img/game/2/d2.jpeg'
import kuhinja from '../assets/img/game/2/k2.jpg'
import outItem1 from '../assets/img/game/2/vrt/1.png'
import outItem2 from '../assets/img/game/2/vrt/2.png'
import outItem3 from '../assets/img/game/2/vrt/3.png'
import outItem4 from '../assets/img/game/2/vrt/4.png'
import outItem5 from '../assets/img/game/2/vrt/5.png'
import p1 from '../assets/img/game/2/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/2/kuhinja/uskrsni-kolacici.webp'

import k3 from '../assets/img/game/2/kuhinja/5907707051296-Pisano-pismo-76-g.png'
import k4 from '../assets/img/game/2/kuhinja/aroma-vanilija-2021@2x.webp'
import k5 from '../assets/img/game/2/kuhinja/170000754-kalup-na-zatvaranje-janje-main.jpeg'
import inItem1 from '../assets/img/game/2/kuhinja/recept.png'
import inItem2 from '../assets/img/game/2/kuhinja/modlice.png'
import inItem3 from '../assets/img/game/2/kuhinja/sareno-pismo.png'
import inItem4 from '../assets/img/game/2/kuhinja/vanilija-aroma.png'
import inItem5 from '../assets/img/game/2/kuhinja/vaga.png'

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
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-35.5deg", pitch: "-4.9deg" },
                size: { width: 16, height: 21 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-104.3deg", pitch: "-12.8deg" },
                size: { width: 23, height: 29 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "94.5deg", pitch: "-35deg" },
                size: { width: 85, height: 70 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-213.65deg", pitch: "-9.5deg" },
                size: { width: 19, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
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
                product_title: 'Uskrsni kolačići',
                product_description: 'Ovi slatki američki keksi od ukusnog miješanog tijesta, ukrašeni poput pilića, pravi su mamac za poglede na svečanom uskrsnom stolu.',
                product_image: k1,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/uskrsni-kolacici'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "73.8deg", pitch: "-29deg" },
                size: { width: 160, height: 115 },
                product_title: 'Modlice za kekse "zečja obitelj"',
                product_description: 'Ovog Uskrsa pomoću modlica “Zečja obitelj” napravite najkreativnije keksiće za obitelj i prijatelje!',
                product_image: inItem2,
                product_url: 'https://oetker-shop.hr/proizvod/modlice-za-kekse-zecja-obitelj-3-kom/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "51.2deg", pitch: "-21.5deg" },
                size: { width: 100, height: 128 },
                product_title: 'Šareno pismo',
                product_description: 'Pomoću Šarenog pisma možete ukrasiti uskrsne slastice na najraznolikije načine, samo pustite mašti na volju! ',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/sareno-pismo/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-121deg", pitch: "18.8deg" },
                size: { width: 38, height: 85 },
                product_title: 'Aroma vanilije u bočici',
                product_description: 'S Dr. Oetker aromom vanilije vaši će kolači i deserti jednostavno postati zavodljiviji. ',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/arome/aroma-vanilije-u-bocici'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "132.2deg", pitch: "-25.9deg" },
                size: { width: 148, height: 132 },
                product_title: 'Janje kalup na zatvaranje, zlatni',
                product_description: 'Pravi klasik za Uskrs! Uz Dr. Oetker kalup zlatne boje ispecite kolač u obliku slatkog janjeta, a neprianjajući premaz će vam omogućiti lako uklanjanje iz kalupa.',
                product_image: k5,
                product_url: 'https://oetker-shop.hr/proizvod/janje-kalup-na-zatvaranje-zlatni-600-ml/'
            },
        ]
    },
]

export default day_2