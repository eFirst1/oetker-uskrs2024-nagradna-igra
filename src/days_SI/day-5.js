import vrt from '../assets/img/game_SI/5/d5.jpeg'
import kuhinja from '../assets/img/game_SI/5/k5.jpeg'
import vrataVrt from '../assets/img/game_SI/vrt-vrata.png'
import outItem1 from '../assets/img/game_SI/5/vrt/1.png'
import outItem2 from '../assets/img/game_SI/5/vrt/2.png'
import outItem3 from '../assets/img/game_SI/5/vrt/3.png'
import outItem4 from '../assets/img/game_SI/5/vrt/4.png'
import outItem5 from '../assets/img/game_SI/5/vrt/5.png'
import p1 from '../assets/img/game_SI/5/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/5/kuhinja/170000673-set-uskrsni-znak-paznje-1.jpeg'
import k2 from '../assets/img/game_SI/5/kuhinja/Bourbon vanilija šećer@2x.webp'
import k3 from '../assets/img/game_SI/5/kuhinja/Pecat-za-kekse-2.jpeg'
import k4 from '../assets/img/game_SI/5/kuhinja/5997381360647-Special-Puding-za-madzarico-okus-cokolade.png'
import k5 from '../assets/img/game_SI/5/kuhinja/jaja-od-prhkog-tijesta@2x.webp'
import vrataKuhinja from '../assets/img/game_SI/kuhinja-vrata.png'
import inItem1 from '../assets/img/game_SI/5/kuhinja/set.png'
import inItem2 from '../assets/img/game_SI/5/kuhinja/bourbon-vanilin.png'
import inItem3 from '../assets/img/game_SI/5/kuhinja/pecat.png'
import inItem4 from '../assets/img/game_SI/5/kuhinja/special.jpg'
import inItem5 from '../assets/img/game_SI/5/kuhinja/recept.png'

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
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-0.5deg", pitch: "-7.3deg" },
                size: { width: 18, height: 24 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-79.6deg", pitch: "-13.8deg" },
                size: { width: 20, height: 27 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "212.3deg", pitch: "-13.7deg" },
                size: { width: 24, height: 28 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-194.5deg", pitch: "-25.5deg" },
                size: { width: 101, height: 101 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
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
                product_title: 'Set "Velikonočni znak hvaležnosti"',
                product_description: 'Poseben sladki set, ki vam bo pomagal narediti najbolj okusne sladice to veliko noč!',
                product_image: k1,
                product_url: 'https://oetker-shop.si/izdelek/set-velikonocni-znak-hvaleznosti/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "86.8deg", pitch: "-51deg" },
                size: { width: 80, height: 82 },
                product_title: 'Bourbon vanilin sladkor',
                product_description: 'Dr. Oetker Bourbon vanilin sladkor daje kremam, testom in nadevom za torte nežno aromo in fin okus prave burbonske vanilje.',
                product_image: k2,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/bourbonska-vanilija/bourbon-vanilin-sladkor'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "35.2deg", pitch: "-23.6deg" },
                size: { width: 100, height: 100 },
                product_title: 'Žig za piškote, 3 kos',
                product_description: 'Specite najboljše piškote, za piko na i pa jih okrasite s pomočjo lepih in pisanih žigov.',
                product_image: k3,
                product_url: 'https://oetker-shop.si/izdelek/zig-za-piskote/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-78deg", pitch: "-42.8deg" },
                size: { width: 108, height: 256 },
                product_title: 'Dr. Oetker Special puding za madžarico',
                product_description: 'Za posebne trenutke so nepogrešljive "madžarice". Dr. Oetker Special puding za madžarico vam omogoča, da to okusno sladico naredite v nekaj preprostih korakih.',
                product_image: k4,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/special-pudingi/dr-oetker-special-puding-za-madzarico'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "137.3deg", pitch: "-24.2deg" },
                size: { width: 133, height: 138 },
                product_title: 'Jajčka iz krhkega testa',
                product_description: 'Za veliko noč okrasite piškote v obliki velikonočnih jajčk',
                product_image: k5,
                product_url: 'https://www.oetker.hr/hr-hr/recept/r/jaja-od-prhkog-tijesta'
            },
        ]
    },
]

export default day_5