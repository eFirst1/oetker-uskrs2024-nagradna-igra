import vrt from '../assets/img/game_SI/7/d7.jpeg'
import kuhinja from '../assets/img/game_SI/7/k7.jpeg'
import vrataVrt from '../assets/img/game_SI/vrt-vrata.png'
import outItem1 from '../assets/img/game_SI/7/vrt/1.png'
import outItem2 from '../assets/img/game_SI/7/vrt/2.png'
import outItem3 from '../assets/img/game_SI/7/vrt/3.png'
import outItem4 from '../assets/img/game_SI/7/vrt/4.png'
import outItem5 from '../assets/img/game_SI/7/vrt/5.png'
import p1 from '../assets/img/game_SI/7/vrt/20204-Boje-za-jaja@2x.webp'
import k1 from '../assets/img/game_SI/7/kuhinja/5997381337816-Cokoladni-Muffini-360g.png'
import k2 from '../assets/img/game_SI/7/kuhinja/cupcakes-s-ovcicama@2x.webp'
import k3 from '../assets/img/game_SI/7/kuhinja/pecilni-prasek@2x.webp'
import k4 from '../assets/img/game_SI/7/kuhinja/Set-za-kolac-s-glazurom-1.jpeg'
import k5 from '../assets/img/game_SI/7/kuhinja/4044935014820-Model-za-muffine-121.png'
import vrataKuhinja from '../assets/img/game_SI/kuhinja-vrata.png'
import inItem1 from '../assets/img/game_SI/7/kuhinja/muffins.png'
import inItem2 from '../assets/img/game_SI/7/kuhinja/recept.png'
import inItem3 from '../assets/img/game_SI/7/kuhinja/prasak.png'
import inItem4 from '../assets/img/game_SI/7/kuhinja/set.png'
import inItem5 from '../assets/img/game_SI/7/kuhinja/kalup.png'

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
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "0.6deg", pitch: "-5.9deg" },
                size: { width: 15, height: 18 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-51.7deg", pitch: "-5.7deg" },
                size: { width: 19, height: 24 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "70.5deg", pitch: "-12.2deg" },
                size: { width: 18, height: 24 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-136deg", pitch: "-13deg" },
                size: { width: 17, height: 24 },
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
                position: { yaw: "97.2deg", pitch: "5.5deg" },
                size: { width: 96, height: 144 },
                product_title: 'Čokoladni muffini',
                product_description: 'Muffini za vse, ki imajo radi čokolado: okrasite jih po vaših željah, da se bodo odlično podali na vašo praznično mizo.',
                product_image: k1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/mesanice-za-peko/majhne-ideje/cokoladni-muffins'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "77.6deg", pitch: "-22.3deg" },
                size: { width: 59, height: 76 },
                product_title: 'Kolački z ovčkami',
                product_description: 'Če ste ljubitelj čokolade, naredite te čokoladne mudfine s stepeno smetano in koščki beljakovega testa v obliki ovčk',
                product_image: k2,
                product_url: 'https://www.oetker.si/si-si/recept/r/kolacki-z-ovckami'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "142.4deg", pitch: "22.5deg" },
                size: { width: 45, height: 81 },
                product_title: 'Original Backin prašek za pecivo',
                product_description: 'Babičin recept in Dr. Oetker pecilni prašek sta popolna kombinacija za najboljša peciva in torte.',
                product_image: k3,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/original-backin-pecilni-prasek-v-vrecki'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-53deg", pitch: "-42.8deg" },
                size: { width: 327, height: 183 },
                product_title: 'Set za ‘Kolač z glazuro’',
                product_description: 'Poskusite neverjeten Dr. Oetker recept za »Kolač z glazuro«!',
                product_image: k4,
                product_url: 'https://oetker-shop.si/izdelek/set-za-kolac-z-glazuro/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "134.3deg", pitch: "-26.9deg" },
                size: { width: 233, height: 158 },
                product_title: 'Pekač za 12 muffinov',
                product_description: 'S pomočjo Dr. Oetker modela za muffine lahko spečete 12 slastnih muffinov.',
                product_image: k5,
                product_url: 'https://oetker-shop.si/izdelek/pekac-za-12-muffinov/'
            },
        ]
    },
]

export default day_7