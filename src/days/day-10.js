import vrt from '../assets/img/game/10/d10.jpeg'
import kuhinja from '../assets/img/game/10/k10.jpg'
import outItem1 from '../assets/img/game/10/vrt/1.png'
import outItem2 from '../assets/img/game/10/vrt/2.png'
import outItem3 from '../assets/img/game/10/vrt/3.png'
import outItem4 from '../assets/img/game/10/vrt/4.png'
import outItem5 from '../assets/img/game/10/vrt/5.png'
import p1 from '../assets/img/game/10/vrt/20204-Boje-za-jaja@2x.webp'
import k2 from '../assets/img/game/10/kuhinja/aroma-rum-2021@2x.webp'
import k1 from '../assets/img/game/10/kuhinja/4044935010273-Mini-zaponke-za-zapiranje-vreck-Retro-2.png'

import k3 from '../assets/img/game/10/kuhinja/4044935016282-Classic-set-za-okrasavanje-6-nastavkov.png'
import k4 from '../assets/img/game/10/kuhinja/zecji-muffini-od-mrkve@2x.webp'
import k5 from '../assets/img/game/10/kuhinja/creative-puding-slana-karamela@2x.webp'
import inItem1 from '../assets/img/game/10/kuhinja/posude.png'
import inItem2 from '../assets/img/game/10/kuhinja/rum-aroma.png'
import inItem3 from '../assets/img/game/10/kuhinja/dekor-magnolija.png'
import inItem4 from '../assets/img/game/10/kuhinja/recept.png'
import inItem5 from '../assets/img/game/10/kuhinja/puding.jpg'

const day_10 = [
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
                position: { yaw: "82.5deg", pitch: "-26.2deg" },
                size: { width: 90, height: 70 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "13.8deg", pitch: "-6.2deg" },
                size: { width: 15, height: 20 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-297deg", pitch: "-10deg" },
                size: { width: 19, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-63.5deg", pitch: "-10deg" },
                size: { width: 17, height: 24 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-135deg", pitch: "-12deg" },
                size: { width: 20, height: 25 },
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
                position: { yaw: "85.2deg", pitch: "-52.7deg" },
                size: { width: 51, height: 211 },
                product_title: 'Mini kvačice za vrećice',
                product_description: 'Uz Dr. Oetker mini kvaćice skladištenje je čišće, urednije i jednostavnije, a također pomažu u očuvanju svježine načetih proizvoda.',
                product_image: k1,
                product_url: 'https://oetker-shop.hr/proizvod/mini-kvacice-za-vrecice-20-kom/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-77.8deg", pitch: "-31deg" },
                size: { width: 42, height: 139 },
                product_title: 'Aroma ruma u bočici',
                product_description: 'Dr. Oetker aroma ruma praktična je za aromatiziranje najfinijih deserata, napitaka, tijesta i nadjeva.',
                product_image: k2,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/arome/aroma-ruma-u-bocici'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "92.2deg", pitch: "-22.5deg" },
                size: { width: 150, height: 145 },
                product_title: 'Set za ukrašavanje, 6 nastavaka',
                product_description: 'Ovaj set za ukrašavanje je za precizno ukrašavanje vaših pečenih kreacija kuverturom, vrhnjem, šlagom ili čak krem ​​sirom.',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/set-za-ukrasavanje-6-nastavaka/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "148.5deg", pitch: "-24.7deg" },
                size: { width: 190, height: 170 },
                product_title: 'Zečji muffini od mrkve',
                product_description: 'Ako volite muffine, morate isprobati ove ukusne muffine od mrkve',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/zecji-muffini-od-mrkve'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "56.2deg", pitch: "-20.5deg" },
                size: { width: 56, height: 112 },
                product_title: 'Dr. Oetker Creative pudding s okusom slane karamele',
                product_description: 'Uživajte u slatko slanoj kombinaciji Dr. Oetker Creative pudinga s okusom slane karamele.',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/creative-pudding/creative-pudding-slana-karamela'
            },
        ]
    },
]

export default day_10