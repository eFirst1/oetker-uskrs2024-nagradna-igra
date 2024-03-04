import vrt from '../assets/img/game/6/d6.jpeg'
import kuhinja from '../assets/img/game/6/k6.jpg'
import vrataVrt from '../assets/img/game/vrt-vrata.png'
import outItem1 from '../assets/img/game/6/vrt/1.png'
import outItem2 from '../assets/img/game/6/vrt/2.png'
import outItem3 from '../assets/img/game/6/vrt/3.png'
import outItem4 from '../assets/img/game/6/vrt/4.png'
import outItem5 from '../assets/img/game/6/vrt/5.png'
import p1 from '../assets/img/game/6/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/6/kuhinja/170000668-sito-retro-2.jpeg'
import k2 from '../assets/img/game/6/kuhinja/Kakao za kolače@2x.webp'
import k3 from '../assets/img/game/6/kuhinja/torta-s-uskrsnim-zecicima@2x.webp'
import k4 from '../assets/img/game/6/kuhinja/creative-puding-mint-cokolada@2x.webp'
import k5 from '../assets/img/game/6/kuhinja/170000675-set-zecja-obitelj-1.jpeg'
import vrataKuhinja from '../assets/img/game/kuhinja-vrata.png'
import inItem1 from '../assets/img/game/6/kuhinja/sito.png'
import inItem2 from '../assets/img/game/6/kuhinja/kakao.png'
import inItem3 from '../assets/img/game/6/kuhinja/recept.png'
import inItem4 from '../assets/img/game/6/kuhinja/puding.jpg'
import inItem5 from '../assets/img/game/6/kuhinja/set.png'

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
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "94deg", pitch: "-18deg" },
                size: { width: 24, height: 28 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-119.5deg", pitch: "-13.5deg" },
                size: { width: 19, height: 25 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "51.5deg", pitch: "-7deg" },
                size: { width: 18, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "147.5deg", pitch: "-9.5deg" },
                size: { width: 22, height: 27 },
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
                position: { yaw: "-49.2deg", pitch: "-45.5deg" },
                size: { width: 175, height: 82 },
                product_title: 'Sito malo retro – drvena drška',
                product_description: 'Malo sito retro dizajna s drvenom ručkom pastelne svijetlozelene boje bit će vaš idealan pomoćnik za fino posipanje slastica šećerom u prahu, cimetom i sl.',
                product_image: k1,
                product_url: 'https://oetker-shop.hr/proizvod/sito-malo-retro-drvena-drska/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "68deg", pitch: "-26.5deg" },
                size: { width: 80, height: 130 },
                product_title: 'Kakao za kolače',
                product_description: 'Dr. Oetker Kakao za kolače svojom punoćom i intentizvnom tamnom bojom, savršen je dodatak čokoladnim tijestima i kremama za kolače kao i za dekoraciju.',
                product_image: k2,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/kakao-za-kolace/kakao-za-kolace'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "38.2deg", pitch: "-21deg" },
                size: { width: 251, height: 158 },
                product_title: 'Torta s uskrsnim zečićima',
                product_description: 'Isprobajte recept za hrskave zečiće na laganom biskvitu, slatkoj kremi i sočnim mandarinama',
                product_image: k3,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/torta-s-uskrsnim-zecicima'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-56deg", pitch: "-27.8deg" },
                size: { width: 55, height: 110 },
                product_title: 'Dr. Oetker Creative pudding s okusom čokolade i mente',
                product_description: 'Kada poželite puding s ovježavajućim okusom onda je Dr. Oetker Creative puding s okusom čokolade i mente savršen odabir za vas.',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/creative-pudding/creative-pudding-cokolada-menta'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "136.3deg", pitch: "-27.4deg" },
                size: { width: 301, height: 264 },
                product_title: 'Set zečja obitelj u kutiji',
                product_description: 'Napravite najslađe keksiće ovog Uskrsa! Slatki set Zečja obitelj sadrži ukusne Domaće prhke kekse, modlice “Zečja obitelj” za izrezivanje, pastelno šećerno pismo i dekor mix perle soft za dekoriranje.',
                product_image: k5,
                product_url: 'https://oetker-shop.hr/proizvod/set-zecja-obitelj/'
            },
        ]
    },
]

export default day_6