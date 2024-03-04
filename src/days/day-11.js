import vrt from '../assets/img/game/11/d11.jpeg'
import kuhinja from '../assets/img/game/11/k11.jpg'
import outItem1 from '../assets/img/game/11/vrt/1.png'
import outItem2 from '../assets/img/game/11/vrt/2.png'
import outItem3 from '../assets/img/game/11/vrt/3.png'
import outItem4 from '../assets/img/game/11/vrt/4.png'
import outItem5 from '../assets/img/game/11/vrt/5.png'
import p1 from '../assets/img/game/11/vrt/20204-Boje-za-jaja@2x.webp'
import k2 from '../assets/img/game/11/kuhinja/Kalup-za-kuglof-Backkunst-22-11.jpeg'
import k1 from '../assets/img/game/11/kuhinja/Gustin-fini-jestivi-skrob@2x.webp'

import k3 from '../assets/img/game/11/kuhinja/uskrsnje-ovcice@2x.webp'
import k4 from '../assets/img/game/11/kuhinja/Cimet-secer@2x.webp'
import k5 from '../assets/img/game/11/kuhinja/Posuda-za-topljenje-cokolade-1.png'
import inItem1 from '../assets/img/game/11/kuhinja/gustin.png'
import inItem2 from '../assets/img/game/11/kuhinja/kalup.png'
import inItem3 from '../assets/img/game/11/kuhinja/recept.png'
import inItem4 from '../assets/img/game/11/kuhinja/cimet-secer.jpg'
import inItem5 from '../assets/img/game/11/kuhinja/posuda.png'

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
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-86deg", pitch: "-7.9deg" },
                size: { width: 21, height: 22 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "5.3deg", pitch: "-8.5deg" },
                size: { width: 15, height: 20 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "136.2deg", pitch: "-12.5deg" },
                size: { width: 15, height: 20 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-137deg", pitch: "-16.5deg" },
                size: { width: 90, height: 90 },
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
                position: { yaw: "122.8deg", pitch: "5.3deg" },
                size: { width: 79, height: 120 },
                product_title: 'Gustin fini jestivi škrob',
                product_description: 'Koristite Dr. Oetker Gustin fini jestivi škrob kako bi vaše tijesto bilo sočnije, a krem juhe i umaci još gušći.',
                product_image: k1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/gustin/gustin-fini-jestivi-srkob'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "103.2deg", pitch: "5.7deg" },
                size: { width: 231, height: 101 },
                product_title: 'Dizajnerski kalup za kuglof "Twist"',
                product_description: 'Ovaj prelijepi oblik kalupa učiniti će vaš kolač izrazito kreativnim i posebnim.',
                product_image: k2,
                product_url: 'https://oetker-shop.hr/proizvod/dizajnerski-kalup-za-kuglof-twist-o22/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-51.2deg", pitch: "-45.5deg" },
                size: { width: 213, height: 110 },
                product_title: 'Uskršnje ovčice',
                product_description: 'Iskušajte se u pravljenju ovih uskršnjih ovčica od dizanog tijesta koje su iznimno prozračne i izvrsne za pripremu za Uskrs zajedno s djecom.',
                product_image: k3,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/uskrsnje-ovcice'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "168.5deg", pitch: "-17.1deg" },
                size: { width: 45, height: 68 },
                product_title: 'Cimet šećer',
                product_description: 'Dr. Oetker Cimet šećer savršen je dodatak za sve slastice koji će vam ispuniti dom finim mirisom cimeta i svježe pripremljenih kolača.',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/aroma-seceri/cimet-secer'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "69.2deg", pitch: "-30.7deg" },
                size: { width: 200, height: 200 },
                product_title: 'Posuda za topljenje čokolade, nehrđajući čelik',
                product_description: 'Posuda za topljenje čokolade izrađena je od visokokvalitetnog nehrđajućeg čelika s posebno dugačkom ružkom za lakše rukovanje. Ovo kuhinjsko pomagalo idealno je za otapanje čokolade i kuverture.',
                product_image: k5,
                product_url: 'https://oetker-shop.hr/proizvod/posuda-za-topljenje-cokolade-nehrdajuci-celik/'
            },
        ]
    },
]

export default day_11