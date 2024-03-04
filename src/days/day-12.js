import vrt from '../assets/img/game/12/d12.jpeg'
import kuhinja from '../assets/img/game/12/k12.jpeg'
import outItem1 from '../assets/img/game/12/vrt/1.png'
import outItem2 from '../assets/img/game/12/vrt/2.png'
import outItem3 from '../assets/img/game/12/vrt/3.png'
import outItem4 from '../assets/img/game/12/vrt/4.png'
import outItem5 from '../assets/img/game/12/vrt/5.png'
import p1 from '../assets/img/game/12/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game/12/kuhinja/uskrsnji-kolac@2x.webp'
import k3 from '../assets/img/game/12/kuhinja/170004974-domaci-prhki-keksi.jpeg'
import k5 from '../assets/img/game/12/kuhinja/170000672-set-uskrsni-linceri-1.jpeg'
import k4 from '../assets/img/game/12/kuhinja/5997381360616-Special-puding-za-kremsnite-okus-vanilija-80g.png'
import inItem1 from '../assets/img/game/12/kuhinja/recept.png'
import inItem2 from '../assets/img/game/12/kuhinja/bake-go.png'
import inItem3 from '../assets/img/game/12/kuhinja/prhki-keksi.png'
import inItem4 from '../assets/img/game/12/kuhinja/puding.png'
import inItem5 from '../assets/img/game/12/kuhinja/set.png'

const day_12 = [
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
                position: { yaw: "95.2deg", pitch: "-18.6deg" },
                size: { width: 22, height: 22 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-167deg", pitch: "-18.2deg" },
                size: { width: 18, height: 22 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-104.8deg", pitch: "-21.9deg" },
                size: { width: 17, height: 22 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "33.3deg", pitch: "-7deg" },
                size: { width: 15, height: 19 },
                product_title: 'Boje za jaja',
                product_description: 'Pomoću Dr. Oetker boje za jaja napravite najljepše i najšarenije pisanice za vaš uskrsni stol ili košaru.',
                product_image: p1,
                product_url: 'https://www.oetker.hr/hr-hr/nasi-proizvodi/dekoracije-za-kolace-i-torte/boje%20za%20jaja'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "127.65deg", pitch: "-18.8deg" },
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
                position: { yaw: "-51.5deg", pitch: "-37.2deg" },
                size: { width: 130, height: 100 },
                product_title: 'Uskršnji kolač',
                product_description: 'Isprobajte ruski čupavi kolač iz lima s uskrsnim dekoracijama',
                product_image: k1,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/uskrsnji-kolac'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "72.8deg", pitch: "-29.5deg" },
                size: { width: 200, height: 200 },
                product_title: 'Bake & Go pekač s poklopcem, 29×42 cm',
                product_description: 'Uz Dr. Oetker “Bake & Go” pravokutni pekač s plastičnim poklopcem pečenje kolača i ostalih slastica postaje još jednostavnije, a možete ih ponijeti svuda.',
                product_image: inItem2,
                product_url: 'https://oetker-shop.hr/proizvod/bake-go-pekac-s-poklopcem-29x42-cm/'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "37.2deg", pitch: "-24deg" },
                size: { width: 101, height: 180 },
                product_title: 'Domaći Prhki keksi',
                product_description: 'Bez slastica od finog i ukusnog prhkog tijesta nemoguće je zamisliti blagdanski stol.',
                product_image: k3,
                product_url: 'https://oetker-shop.hr/proizvod/domaci-prhki-keksi/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-116.4deg", pitch: "15.5deg" },
                size: { width: 68, height: 133 },
                product_title: 'Speical puding za kremšnite',
                product_description: 'Naš Special pudinga za kremšnite pruža posebno bogatu i pjenastu teksturu prilagođenu za kremu za kolače, a na vama je da odlučite hoće li biti više samoborskog ili zagrebačkog stila.',
                product_image: k4,
                product_url: 'https://oetker-shop.hr/proizvod/special-puding-za-kremsnite/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "139.4deg", pitch: "-26deg" },
                size: { width: 261, height: 260 },
                product_title: 'Set "Uskrsni linceri"',
                product_description: 'Ovog Uskrsa ispecite najljepše keksiće uz pomoć seta Uskrsni linceri!',
                product_image: k5,
                product_url: 'https://oetker-shop.hr/proizvod/set-uskrsni-linceri/'
            },
        ]
    },
]

export default day_12