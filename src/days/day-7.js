import vrt from '../assets/img/game/7/d7.jpeg'
import kuhinja from '../assets/img/game/7/k7.jpg'
import vrataVrt from '../assets/img/game/vrt-vrata.png'
import outItem1 from '../assets/img/game/7/vrt/1.png'
import outItem2 from '../assets/img/game/7/vrt/2.png'
import outItem3 from '../assets/img/game/7/vrt/3.png'
import outItem4 from '../assets/img/game/7/vrt/4.png'
import outItem5 from '../assets/img/game/7/vrt/5.png'
import p1 from '../assets/img/game/7/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/7/kuhinja/5997381337816-Cokoladni-Muffini-360g.png'
import k2 from '../assets/img/game/7/kuhinja/cupcakes-s-ovcicama@2x.webp'
import k3 from '../assets/img/game/7/kuhinja/original-backin-prasak-za-pecivo-2019@2x.webp'
import k4 from '../assets/img/game/7/kuhinja/170000674-set-kolac-iz-kalupa.jpeg'
import k5 from '../assets/img/game/7/kuhinja/4044935014820-Model-za-muffine-121.png'
import vrataKuhinja from '../assets/img/game/kuhinja-vrata.png'
import inItem1 from '../assets/img/game/7/kuhinja/muffins.png'
import inItem2 from '../assets/img/game/7/kuhinja/recept.png'
import inItem3 from '../assets/img/game/7/kuhinja/prasak.png'
import inItem4 from '../assets/img/game/7/kuhinja/set.png'
import inItem5 from '../assets/img/game/7/kuhinja/kalup.png'

const day_7 = [
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
                position: { yaw: "144.7deg", pitch: "-16.9deg" },
                size: { width: 50, height: 50 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "0.6deg", pitch: "-5.9deg" },
                size: { width: 15, height: 18 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-51.7deg", pitch: "-5.7deg" },
                size: { width: 19, height: 24 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "70.5deg", pitch: "-12.2deg" },
                size: { width: 18, height: 24 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-136deg", pitch: "-13deg" },
                size: { width: 17, height: 24 },
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
                position: { yaw: "97.2deg", pitch: "5.5deg" },
                size: { width: 96, height: 144 },
                product_title: 'Čokoladni Muffins',
                product_description: 'Muffini za sve koji vole čokoladu: ukrasite ih po svojoj želji kako bi se savršeno uklopili u vaš blagdanski stol.',
                product_image: k1,
                product_url: 'https://oetker-shop.hr/proizvod/cokoladni-muffins/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "77.6deg", pitch: "-22.3deg" },
                size: { width: 59, height: 76 },
                product_title: 'Cupcakes s ovčicama',
                product_description: 'Ako volite čokoladu, napravite ove čokoladne muffine s tučenim vrhnjem i beze komadićima s motivom ovčica',
                product_image: k2,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/cupcakes-s-ovcicama'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "142.4deg", pitch: "22.5deg" },
                size: { width: 45, height: 81 },
                product_title: 'Original Backin prašak za pecivo',
                product_description: 'Bakin recept i Dr. Oetker Prašak za pecivo savršena su kombinacija za najfinija peciva i kolače.',
                product_image: k3,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/original-backin-u-vrecici'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-53deg", pitch: "-42.8deg" },
                size: { width: 327, height: 183 },
                product_title: 'Set za kolač s glazurom',
                product_description: 'Isprobajte nevjerojatan Dr. Oetker recept za Kolač iz kalupa!',
                product_image: k4,
                product_url: 'https://oetker-shop.hr/proizvod/set-za-kolac-s-glazurom/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "134.3deg", pitch: "-26.9deg" },
                size: { width: 233, height: 158 },
                product_title: 'Kalup za 12 muffina',
                product_description: 'Pomoću Dr. Oetker kalupa za muffine možete ispeći 12 slasnih muffina.',
                product_image: k5,
                product_url: 'https://oetker-shop.hr/proizvod/kalup-za-12-muffina-265x385x2-cm/'
            },
        ]
    },
]

export default day_7