import vrt from '../assets/img/game/5/d5.jpeg'
import kuhinja from '../assets/img/game/5/k5.jpg'
import vrataVrt from '../assets/img/game/vrt-vrata.png'
import outItem1 from '../assets/img/game/5/vrt/1.png'
import outItem2 from '../assets/img/game/5/vrt/2.png'
import outItem3 from '../assets/img/game/5/vrt/3.png'
import outItem4 from '../assets/img/game/5/vrt/4.png'
import outItem5 from '../assets/img/game/5/vrt/5.png'
import p1 from '../assets/img/game/5/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/5/kuhinja/170000673-set-uskrsni-znak-paznje-1.jpeg'
import k2 from '../assets/img/game/5/kuhinja/Bourbon vanilija šećer@2x.webp'
import k3 from '../assets/img/game/5/kuhinja/Pecat-za-kekse-2.jpeg'
import k4 from '../assets/img/game/5/kuhinja/5997381360647-Special-Puding-za-madzarico-okus-cokolade.png'
import k5 from '../assets/img/game/5/kuhinja/jaja-od-prhkog-tijesta@2x.webp'
import vrataKuhinja from '../assets/img/game/kuhinja-vrata.png'
import inItem1 from '../assets/img/game/5/kuhinja/set.png'
import inItem2 from '../assets/img/game/5/kuhinja/bourbon-vanilin.png'
import inItem3 from '../assets/img/game/5/kuhinja/pecat.png'
import inItem4 from '../assets/img/game/5/kuhinja/special.jpg'
import inItem5 from '../assets/img/game/5/kuhinja/recept.png'

const day_5 = [
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
                position: { yaw: "130.8deg", pitch: "-6.2deg" },
                size: { width: 18, height: 24 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-0.5deg", pitch: "-7.3deg" },
                size: { width: 18, height: 24 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-79.6deg", pitch: "-13.8deg" },
                size: { width: 20, height: 27 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "212.3deg", pitch: "-13.7deg" },
                size: { width: 24, height: 28 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-194.5deg", pitch: "-25.5deg" },
                size: { width: 101, height: 101 },
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
                position: { yaw: "70.8deg", pitch: "-29deg" },
                size: { width: 222, height: 303 },
                product_title: 'Set Uskrsni znak pažnje',
                product_description: 'Poseban slatki set koji će Vam pomoći u izradi najukusnijih slastica ovog Uskrsa!',
                product_image: k1,
                product_url: 'https://oetker-shop.hr/proizvod/set-uskrsni-znak-paznje/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "86.8deg", pitch: "-51deg" },
                size: { width: 80, height: 82 },
                product_title: 'Bourbon vanilin šećer',
                product_description: 'Dr. Oetker Bourbon vanilin šećer daje nježni miris i fini okus prave bourbon vanilije šlagovima, tijestima i nadjevima za kolače.',
                product_image: k2,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/vanilin-secer/bourbon-vanilija-secer'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "35.2deg", pitch: "-23.6deg" },
                size: { width: 100, height: 100 },
                product_title: 'Pečat za kekse, 3 otiska',
                product_description: 'Ispecite najbolje kekse i dodajte im poseban završni detalj lijepim i šarenim pečatima.',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/pecat-za-kekse-3-otiska/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-78deg", pitch: "-42.8deg" },
                size: { width: 108, height: 256 },
                product_title: 'Special puding za mađaricu',
                product_description: 'Posebni trenutci ne mogu proći bez mađarica. Dr. Oetker Special puding za mađaricu omogućit će vam da uz nekoliko jednostavnih koraka napravite ovu ukusnu slasticu.',
                product_image: k4,
                product_url: 'https://oetker-shop.hr/proizvod/special-puding-za-madaricu/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "137.3deg", pitch: "-24.2deg" },
                size: { width: 133, height: 138 },
                product_title: 'Jaja od prhkog tijesta',
                product_description: 'Dekorirajte šarene, ukrašene keksiće u obliku jaja za Uskrs',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/jaja-od-prhkog-tijesta'
            },
        ]
    },
]

export default day_5