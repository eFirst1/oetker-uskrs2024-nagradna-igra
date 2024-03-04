import vrt from '../assets/img/game/9/d9.jpeg'
import kuhinja from '../assets/img/game/9/k9.jpeg'
import vrataVrt from '../assets/img/game/vrt-vrata.png'
import outItem1 from '../assets/img/game/9/vrt/1.png'
import outItem2 from '../assets/img/game/9/vrt/2.png'
import outItem3 from '../assets/img/game/9/vrt/3.png'
import outItem4 from '../assets/img/game/9/vrt/4.png'
import outItem5 from '../assets/img/game/9/vrt/5.png'
import p1 from '../assets/img/game/9/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/9/kuhinja/aroma-badem@2x.webp'
import k2 from '../assets/img/game/9/kuhinja/3D_LessPlastic_Puding_Cokolada_HR_SLO-m@2x.webp'
import k3 from '../assets/img/game/9/kuhinja/170000593-Model-za-puding-600-ml.png'
import k4 from '../assets/img/game/5/kuhinja/5997381360647-Special-Puding-za-madzarico-okus-cokolade.png'
import k5 from '../assets/img/game/9/kuhinja/tart-od-cokolade-i-malina@2x.webp'
import vrataKuhinja from '../assets/img/game/kuhinja-vrata.png'
import inItem1 from '../assets/img/game/9/kuhinja/badem-aroma.png'
import inItem2 from '../assets/img/game/9/kuhinja/puding.png'
import inItem3 from '../assets/img/game/9/kuhinja/kalup2.png'
import inItem4 from '../assets/img/game/9/kuhinja/kalup.png'
import inItem5 from '../assets/img/game/9/kuhinja/recept.png'

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
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "37.5deg", pitch: "-21.3deg" },
                size: { width: 18, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "65.6deg", pitch: "-4.8deg" },
                size: { width: 17, height: 20 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "173.8deg", pitch: "-10.9deg" },
                size: { width: 20, height: 26 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-79.8deg", pitch: "-13.8deg" },
                size: { width: 22, height: 24 },
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
                position: { yaw: "78.2deg", pitch: "-23deg" },
                size: { width: 32, height: 91 },
                product_title: 'Tekuća aroma za hranu – badem',
                product_description: 'Dr. Oetker tekuća aroma slatkog badema nezaobilazna je u aromatiziranju biskvita, krema, napitaka, sladoleda, mješavina i ostalih slastica.',
                product_image: k1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/arome/tekuca-aroma-badem'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "106.2deg", pitch: "-29.3deg" },
                size: { width: 60, height: 120 },
                product_title: 'Original puding s okusom čokolade',
                product_description: 'Najdraži okus odma poslije vanilije, Original puding okusa čokolade idealan je dodatak svim čokoladnim slasticama.',
                product_image: k2,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/original-puding/original-puding-s-okusom-cokolade'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "39.2deg", pitch: "-22.6deg" },
                size: { width: 100, height: 100 },
                product_title: 'Kalup za puding 600 ml',
                product_description: 'Pripremite svoj omiljeni puding uz pomoć ovog kalupa!',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/kalup-za-puding-600-ml/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-63deg", pitch: "-47.8deg" },
                size: { width: 240, height: 128 },
                product_title: 'Kalup za voćni biskvit – Ø28 cm, crveno-sivi',
                product_description: 'Kalup za voćni biskvit savršen je pomagač za izradu tartova i pita.',
                product_image: inItem4,
                product_url: 'https://oetker-shop.hr/proizvod/kalup-za-vocni-biskvit-o28-cm-crveno-sivi/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "140.3deg", pitch: "-25.2deg" },
                size: { width: 309, height: 180 },
                product_title: 'Tart od čokolade i malina',
                product_description: 'Isprobajte naš savršen recept za prhko tijesto s čokoladnim ganacheom i kremom od malina',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/tart-od-cokolade-i-malina'
            },
        ]
    },
]

export default day_9