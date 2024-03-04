import vrt from '../assets/img/game/13/d13.jpeg'
import kuhinja from '../assets/img/game/13/k13.jpeg'
import outItem1 from '../assets/img/game/13/vrt/1.png'
import outItem2 from '../assets/img/game/13/vrt/2.png'
import outItem3 from '../assets/img/game/13/vrt/3.png'
import outItem4 from '../assets/img/game/13/vrt/4.png'
import outItem5 from '../assets/img/game/13/vrt/5.png'
import p1 from '../assets/img/game/13/vrt/20204-Boje-za-jaja@2x.webp'
import k2 from '../assets/img/game/13/kuhinja/170000730-punjena-kutija-prijateljice.jpeg'

import k3 from '../assets/img/game/13/kuhinja/2020-12-kvasac-vrecica-nova-ambalaza@2x.webp'
import k4 from '../assets/img/game/13/kuhinja/Kremfix@2x.webp'
import k5 from '../assets/img/game/13/kuhinja/kolac-iz-kalupa-za-uskrs@2x.webp'
import inItem1 from '../assets/img/game/13/kuhinja/kalup.png'
import inItem2 from '../assets/img/game/13/kuhinja/set.png'
import inItem3 from '../assets/img/game/13/kuhinja/kvasac.jpg'
import inItem4 from '../assets/img/game/13/kuhinja/kremfix.png'
import inItem5 from '../assets/img/game/13/kuhinja/recept.png'

const day_13 = [
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
                position: { yaw: "60deg", pitch: "-9.3deg" },
                size: { width: 18, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "5deg", pitch: "-8.7deg" },
                size: { width: 13, height: 18 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-59.3deg", pitch: "-9.8deg" },
                size: { width: 14, height: 21 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "236.5deg", pitch: "-13.8deg" },
                size: { width: 20, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-63.65deg", pitch: "-38deg" },
                size: { width: 79, height: 63 },
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
                position: { yaw: "-63.2deg", pitch: "-36.8deg" },
                size: { width: 245, height: 148 },
                product_title: 'Kalup za kuglof, klasični 22 cm',
                product_description: 'Izrada kuglofa nikad nije bila jednostavnija!  Dr. Oetker kalup osigurava ravnomjerno pečenje  i spriječava lijepljenje tijesta uz rubove kalupa.',
                product_image: inItem1,
                product_url: 'https://oetker-shop.hr/proizvod/kalup-za-kuglof-klasicni-22-cm/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "71.8deg", pitch: "-27.2deg" },
                size: { width: 259, height: 159 },
                product_title: 'Punjena kutija ‘Prijateljice’',
                product_description: 'Predivan i trajan dar u obliku Punjene kutije “Prijateljice” sigurno će razveseliti svakog ljubitelja pečenja slastica!',
                product_image: k2,
                product_url: 'https://oetker-shop.hr/proizvod/punjena-kutija-prijateljice/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "99.4deg", pitch: "6deg" },
                size: { width: 40, height: 55 },
                product_title: 'Kvasac',
                product_description: 'Dr. Oetker Kvasac idealan je suhi kvasac za pripremu slatkih i slanih dizanih tijesta svih vrsta.',
                product_image: k3,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/kvasac/instant-kvasac'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-206deg", pitch: "18.7deg" },
                size: { width: 55, height: 110 },
                product_title: 'Kremfix',
                product_description: 'Dr. Oetker Kremfix omogućava da torte imaju primamljiv izgled i konzistenciju, a tučenom šlagu daje čvrstoću.',
                product_image: k4,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/kremfix'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "140.2deg", pitch: "-19.9deg" },
                size: { width: 255, height: 122 },
                product_title: 'Kolač iz kalupa za Uskrs',
                product_description: 'Pripremite ovaj svijetli kolač s tamnim motivom uskršnjeg zeca i uskršnjim jajima',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/kolac-iz-kalupa-za-uskrs'
            },
        ]
    },
]

export default day_13