import vrt from '../assets/img/game_SI/10/d10.jpeg'
import kuhinja from '../assets/img/game_SI/10/k10.jpeg'
import outItem1 from '../assets/img/game_SI/10/vrt/1.png'
import outItem2 from '../assets/img/game_SI/10/vrt/2.png'
import outItem3 from '../assets/img/game_SI/10/vrt/3.png'
import outItem4 from '../assets/img/game_SI/10/vrt/4.png'
import outItem5 from '../assets/img/game_SI/10/vrt/5.png'
import p1 from '../assets/img/game_SI/10/vrt/20204-Boje-za-jaja@2x.webp'
import k2 from '../assets/img/game_SI/10/kuhinja/aroma-rum-2021@2x.webp'
import k1 from '../assets/img/game_SI/10/kuhinja/Presa-za-kekse-1.jpeg'

import k3 from '../assets/img/game_SI/10/kuhinja/170000599-Set-za-dekoriranje-Magnolija.png'
import k4 from '../assets/img/game_SI/10/kuhinja/zecji-muffini-od-mrkve@2x.webp'
import k5 from '../assets/img/game_SI/10/kuhinja/creative-puding-slana-karamela@2x.webp'
import inItem1 from '../assets/img/game_SI/10/kuhinja/posude.png'
import inItem2 from '../assets/img/game_SI/10/kuhinja/rum-aroma.png'
import inItem3 from '../assets/img/game_SI/10/kuhinja/dekor-magnolija.png'
import inItem4 from '../assets/img/game_SI/10/kuhinja/recept.png'
import inItem5 from '../assets/img/game_SI/10/kuhinja/puding.jpg'

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
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "13.8deg", pitch: "-6.2deg" },
                size: { width: 15, height: 20 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "-297deg", pitch: "-10deg" },
                size: { width: 19, height: 23 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "-63.5deg", pitch: "-10deg" },
                size: { width: 17, height: 24 },
                product_title: 'Barve za jajca',
                product_description: 'S pomočjo Dr. Oetker barve za jajca izdelajte najlepše in najbolj živopisne pisanice za vašo velikonočno mizo ali košaro.',
                product_image: p1,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/dekorji/Barve%20za%20jajca'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "-135deg", pitch: "-12deg" },
                size: { width: 20, height: 25 },
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
                position: { yaw: "71.8deg", pitch: "-29deg" },
                size: { width: 175, height: 120 },
                product_title: 'Brizgalka za piškote 10 nastavkov',
                product_description: 'Dr. Oetker 22 cm dolga brizgalka za piškote je popoln kuhinjski pripomoček!',
                product_image: k1,
                product_url: 'https://oetker-shop.si/izdelek/brizgalka-za-piskote-10-nastavkov/'
            },
            {
                id: 2,
                trigger_image: ' ',
                position: { yaw: "-77.8deg", pitch: "-31deg" },
                size: { width: 42, height: 139 },
                product_title: 'Aroma ruma',
                product_description: 'Dr. Oetker aroma ruma je praktična za aromatiziranje najboljših sladic, napitkov, testa in nadevov.',
                product_image: k2,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/pripomocki-za-peko/arome/rumova-aroma'
            },
            {
                id: 3,
                trigger_image: ' ',
                position: { yaw: "92.2deg", pitch: "-19.5deg" },
                size: { width: 80, height: 135 },
                product_title: 'Set za dekoriranje Magnolija',
                product_description: 'Za ljubitelje okraševanja sladic je nastavek Magnolija popoln pripomoček za okraševanje, ki ustvari natančen cvetlični vzorec magnolije na muffinih, tortah, pecivu in vseh vrstah pekovskih izdelkov.',
                product_image: k3,
                product_url: 'https://oetker-shop.si/izdelek/set-za-dekoriranje-magnolija/'
            },
            {
                id: 4,
                trigger_image: ' ',
                position: { yaw: "148.5deg", pitch: "-24.7deg" },
                size: { width: 190, height: 170 },
                product_title: 'Korenčkovi muffini z zajčki',
                product_description: 'Če imate radi muffine, morate poskusiti te odlične muffine s korenčkom',
                product_image: k4,
                product_url: 'https://slo.oetker-recepti.com/korenckovi-muffini-z-zajcki/'
            },
            {
                id: 5,
                trigger_image: ' ',
                position: { yaw: "56.2deg", pitch: "-20.5deg" },
                size: { width: 56, height: 112 },
                product_title: 'Dr. Oetker Creative puding z okusom slane karamele',
                product_description: 'Uživajte v sladko slani kombinaciji Dr. Oetker Creative pudinga z okusom slane karamele.',
                product_image: k5,
                product_url: 'https://www.oetker.si/si-si/nasi-izdelki/creative-puding/creative-puding-z-okusom-slane-karamele'
            },
        ]
    },
]

export default day_10