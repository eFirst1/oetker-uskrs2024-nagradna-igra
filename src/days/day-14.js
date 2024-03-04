import vrt from '../assets/img/game/14/d14.jpeg'
import kuhinja from '../assets/img/game/14/k14.jpeg'
import outItem1 from '../assets/img/game/14/vrt/1.png'
import outItem2 from '../assets/img/game/14/vrt/2.png'
import outItem3 from '../assets/img/game/14/vrt/3.png'
import outItem4 from '../assets/img/game/14/vrt/4.png'
import outItem5 from '../assets/img/game/14/vrt/5.png'
import p1 from '../assets/img/game/14/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/14/kuhinja/4000521025458-Cokoladno-pismo-75g-1.png'
import k2 from '../assets/img/game/14/kuhinja/Kalup-za-kuglof-Backkunst-22-11.jpeg'
import k3 from '../assets/img/game/14/kuhinja/170000665-veliki-okvir-za-keks-veseli-zeko-4.jpeg'
import k4 from '../assets/img/game/14/kuhinja/Limun-secer@2x.webp'
import k5 from '../assets/img/game/14/kuhinja/kolac-od-mrkve@2x.webp'
import inItem1 from '../assets/img/game/14/kuhinja/cokoladno-pismo.png'
import inItem2 from '../assets/img/game/14/kuhinja/kalup.png'
import inItem3 from '../assets/img/game/14/kuhinja/okvir-zeko.png'
import inItem4 from '../assets/img/game/14/kuhinja/limun-secer.png'
import inItem5 from '../assets/img/game/14/kuhinja/recept.png'

const day_14 = [
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
                position: { yaw: "-103deg", pitch: "-39.1deg" },
                size: { width: 85, height: 70 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "99.2deg", pitch: "-8.5deg" },
                size: { width: 16, height: 21 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-140.3deg", pitch: "-13.8deg" },
                size: { width: 20, height: 26 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "174.5deg", pitch: "-10.4deg" },
                size: { width: 16, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "1.8deg", pitch: "-6.2deg" },
                size: { width: 16, height: 21 },
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
                position: { yaw: "-54.2deg", pitch: "-28.8deg" },
                size: { width: 62, height: 111 },
                product_title: 'Čokoladno pismo',
                product_description: 'Spremite unikatne slastice za svoje najdraže i ukrasite ih šećernim čokoladnim pismom u tri okusa – tamna, mliječna i bijela čokolada.',
                product_image: k1,
                product_url: 'https://oetker-shop.hr/proizvod/cokoladno-pismo/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "73.3deg", pitch: "-27.5deg" },
                size: { width: 160, height: 117 },
                product_title: 'Dizajnerski kalup za kuglof “Twist” Ø22',
                product_description: 'Prelijepi oblik dizajnerskog kalupa učiniti će vaš uskrsni kolač izrazito kreativnim i posebnim.',
                product_image: k2,
                product_url: 'https://oetker-shop.hr/proizvod/dizajnerski-kalup-za-kuglof-twist-o22/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "49deg", pitch: "-20.1deg" },
                size: { width: 76, height: 102 },
                product_title: 'Veliki okvir za keks "Veseli zeko"',
                product_description: 'Uz okvir za keks “Veseli zeko” s lakoćom možete napraviti očaravajući motiv uskrsnog zeca za vaš blagdanski stol.',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/veliki-okvir-za-keks-veseli-zeko/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-86.5deg", pitch: "-9.5deg" },
                size: { width: 75, height: 90 },
                product_title: 'Limun šećer',
                product_description: 'Dr. Oeker Limun zahvaljujući slatko-kiseloj kombinaciji vašim kolačima daje posebnu aromu.',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/aroma-seceri/limun-secer'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "152.2deg", pitch: "-23deg" },
                size: { width: 259, height: 157 },
                product_title: 'Kolač od mrkve',
                product_description: 'Pripremite ovaj sočan kolač od mrkve koji je jednostavan za pripremu i vrlo ukusan.',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/kolac-od-mrkve'
            },
        ]
    },
]

export default day_14