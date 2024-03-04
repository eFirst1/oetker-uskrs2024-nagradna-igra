import vrt from '../assets/img/game/1/dan1.jpeg'
import kuhinja from '../assets/img/game/1/dan1a.jpeg'
import vrataVrt from '../assets/img/game/vrt-vrata.png'
import outItem1 from '../assets/img/game/1/vrt/p1.png'
import outItem2 from '../assets/img/game/1/vrt/p2.png'
import outItem3 from '../assets/img/game/1/vrt/p3.png'
import outItem4 from '../assets/img/game/1/vrt/p4.png'
import outItem5 from '../assets/img/game/1/vrt/p5.png'
import p1 from '../assets/img/game/1/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/1/kuhinja/3D_LessPlastic_Puding_Vrhnje_HR_SLO_WEB@2x.webp'
import k2 from '../assets/img/game/1/kuhinja/170000669-pjenjaca-retro-1.jpeg'
import k3 from '../assets/img/game/1/kuhinja/4044935018705-Zeko-kalup-na-zatvaranje-1.jpeg'
import k4 from '../assets/img/game/1/kuhinja/Rum šećer@2x.webp'
import k5 from '../assets/img/game/1/kuhinja/keksi-sa-sirom-u-obliku-zeca@2x.webp'
import vrataKuhinja from '../assets/img/game/kuhinja-vrata.png'
import inItem1 from '../assets/img/game/1/kuhinja/k1.jpeg'
import inItem2 from '../assets/img/game/1/kuhinja/k2.png'
import inItem3 from '../assets/img/game/1/kuhinja/k3.png'
import inItem4 from '../assets/img/game/1/kuhinja/k4.jpeg'
import inItem5 from '../assets/img/game/1/kuhinja/k5.png'

const day_1 = [
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
                position: { yaw: "-52.7deg", pitch: "-9.1deg" },
                size: { width: 22, height: 29 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "42.5deg", pitch: "-9.9deg" },
                size: { width: 22, height: 29 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "71.5deg", pitch: "-11.8deg" },
                size: { width: 22, height: 29 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "174.5deg", pitch: "-22.3deg" },
                size: { width: 30, height: 35 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-103.5deg", pitch: "-39.5deg" },
                size: { width: 85, height: 85 },
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
                size: { width: 83, height: 128 },
                product_title: 'Original puding s okusom slatkog vrhnja',
                product_description: 'Nježan poput šlaga je upravo okus slatkog vrhnja našeg klasičnog original pudinga. Za još kremastiji okus u vašim slasticama.',
                product_image: k1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/original-puding/original-puding-s-okusom-slatkog-vrhnja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "71.8deg", pitch: "-28deg" },
                size: { width: 132, height: 109 },
                product_title: 'Pjenjača 26 cm retro – drvena drška',
                product_description: 'Pjenjača s drvenom ručkom idealan je pomoćnik za miješanje krema, tijesta, pudinga i umaka ili mućenje bjelanjaka i vrhnja za šlag.',
                product_image: k2,
                product_url: 'https://oetker-shop.hr/proizvod/pjenjaca-26-cm-retro-drvena-drska/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "32.2deg", pitch: "-23.8deg" },
                size: { width: 134, height: 155 },
                product_title: 'Zeko zlatni kalup',
                product_description: 'Pravi klasik za Uskrs! Uz ovaj Dr. Oetker kalup zlatne boje ispecite kolač u obliku slatkog zečića, a neprianjajući premaz će vam omogućiti lako uklanjanje iz kalupa.',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/zeko-kalup-na-zatvaranje-zlatni/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-76deg", pitch: "-30.8deg" },
                size: { width: 58, height: 116 },
                product_title: 'Rum šećer',
                product_description: 'Dr. Oetker Rum šećer savršena je opcija za aromatiziranje raznih vrsta kolača, slastica i napitaka bez potrebe za dodavanjem alkoholnog pića.',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/aroma-seceri/rum-secer'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "144.3deg", pitch: "-24.9deg" },
                size: { width: 170, height: 159 },
                product_title: 'Keksi sa sirom u obliku zeca',
                product_description: 'Brzo i jednostavno pripremite ove simpatične kekse u obliku zeca s ribanim parmezanom za uskrsni brunch',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/keksi-sa-sirom-u-obliku-zeca'
            },
        ]
    },
]

export default day_1