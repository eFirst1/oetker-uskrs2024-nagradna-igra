import vrt from '../assets/img/game/8/d8.jpeg'
import kuhinja from '../assets/img/game/8/k8.jpg'
import outItem1 from '../assets/img/game/8/vrt/1.png'
import outItem2 from '../assets/img/game/8/vrt/2.png'
import outItem3 from '../assets/img/game/8/vrt/3.png'
import outItem4 from '../assets/img/game/8/vrt/4.png'
import outItem5 from '../assets/img/game/8/vrt/5.png'
import p1 from '../assets/img/game/8/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/8/kuhinja/170000613-Vrtljiv-podstavek-za-torte-in-ostale-slascice.jpeg'
import k2 from '../assets/img/game/8/kuhinja/torta-u-obliku-zeca-od-fondanta@2x.webp'
import k3 from '../assets/img/game/8/kuhinja/2020-12-SLO-bourbon-vanilija-pasta@2x.webp'
import k4 from '../assets/img/game/8/kuhinja/5997381312257-drOetker-Krema-za-torte-vanilija-1.png'
import k5 from '../assets/img/game/8/kuhinja/4044935019122-Visok-obroc-za-torte-O16-30cm-15-cm-1.png'
import inItem1 from '../assets/img/game/8/kuhinja/pladanj.png'
import inItem2 from '../assets/img/game/8/kuhinja/recept.png'
import inItem3 from '../assets/img/game/8/kuhinja/pasta.png'
import inItem4 from '../assets/img/game/8/kuhinja/krema.png'
import inItem5 from '../assets/img/game/8/kuhinja/posuda.png'

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
                position: { yaw: "-55deg", pitch: "-8.9deg" },
                size: { width: 19, height: 23 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-105.2deg", pitch: "-12.2deg" },
                size: { width: 16, height: 21 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "99.5deg", pitch: "-8.9deg" },
                size: { width: 17, height: 22 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "17deg", pitch: "-2deg" },
                size: { width: 13, height: 17 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "283.65deg", pitch: "-22.5deg" },
                size: { width: 69, height: 53 },
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
                position: { yaw: "-63.5deg", pitch: "-38.2deg" },
                size: { width: 225, height: 213 },
                product_title: 'Pladanj za kolače rotirajući',
                product_description: 'Rotirajući pladanj za kolače je vrlo korisno pomagalo pri punjenju i ukrašavanju kolača. Od sada na još lakši i praktičniji način možete napraviti slojevite kolače!',
                product_image: k1,
                product_url: 'https://oetker-shop.hr/proizvod/pladanj-za-kolace-rotirajuci/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "70.8deg", pitch: "-28deg" },
                size: { width: 212, height: 264 },
                product_title: 'Torta u obliku zeca od fondanta',
                product_description: 'Iskušajte se u dekoriranju slatke  torte u obliku zeca',
                product_image: k2,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/torta-u-obliku-zeca-od-fondanta'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "34.2deg", pitch: "-22deg" },
                size: { width: 29, height: 128 },
                product_title: 'Pasta od bourbon vanilije',
                product_description: 'Dr. Oetker Pasta od vanilije sadrži sjemenke madagaskarske vanilije najviše kvalitete i koristi se za aromatiziranje kolača i deserata, a posebno je ukusna u sladoledu, panna cotti, šlagu i palačinkama.',
                product_image: k3,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dodaci-za-kolace/bourbon-vanilija/pasta-od-bourbon-vanlije'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-123.4deg", pitch: "17.6deg" },
                size: { width: 50, height: 95 },
                product_title: 'Krema za torte vanilija',
                product_description: 'Isprobajte kemu za torte s okusom vanilije koju možete koristiti kao nadjev ili kao ukras torti, kolača, princes krafni i sličnih slastica.',
                product_image: k4,
                product_url: 'https://oetker-shop.hr/proizvod/krema-za-torte-vanilija/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "144.4deg", pitch: "-24deg" },
                size: { width: 245, height: 135 },
                product_title: 'Visoki obruč za torte',
                product_description: 'Od sada visokim obručem za torte od nehrđajućeg čelika možete vrlo brzo i jednostavno nadjenuti torte različitih dimenzija.',
                product_image: k5,
                product_url: 'https://oetker-shop.hr/proizvod/visoki-obruc-za-torte-o16-30cm-15-cm/'
            },
        ]
    },
]

export default day_2