"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preLoadProducts = void 0;
const dataSource_1 = require("../config/dataSource");
const Product_1 = require("../entities/Product");
const product_repository_1 = require("../repositories/product.repository");
const productsToPreLoad = [
    {
        name: "Fender Precision Bass",
        price: 800,
        description: "Alder body, maple neck with modern C profile, split single-coil pickup, 20 medium jumbo frets, vintage-style bridge, passive electronics.",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_942834-MLA45400121419_032021-F.webp",
        categoryId: 1,
        stock: 10,
    },
    {
        name: "Fender Jazz Bass",
        price: 900,
        description: "Offset alder body, maple neck with slim profile, dual single-coil pickups, 20 frets, passive electronics, vintage-style tuners.",
        image: "https://blog.musicopolix.com/wp-content/webp-express/webp-images/uploads/2016/04/fender-american-elite-jazz-bass-v-nat_1.jpg.webp",
        categoryId: 1,
        stock: 8,
    },
    {
        name: "Music Man StingRay",
        price: 1800,
        description: "Ash body, maple neck, active 3-band EQ preamp, humbucker pickup with neodymium magnets, 21 frets, high-mass bridge.",
        image: "https://m.media-amazon.com/images/I/51AFpA55YTL._AC_UF894,1000_QL80_.jpg",
        categoryId: 1,
        stock: 5,
    },
    {
        name: "Warwick Corvette Standard Fretless",
        price: 1600,
        description: "Solid swamp ash body, fretless wenge fingerboard, bolt-on ovangkol neck, MEC pickups, 2-band active EQ.",
        image: "https://media.guitarcenter.com/is/image/MMGS7/519129000000000-00-600x600.jpg",
        categoryId: 1,
        stock: 6,
    },
    {
        name: "Classical Nylon Guitar Fender",
        price: 130,
        description: "Laminated spruce top, mahogany back and sides, wide nut width, 12-fret neck joint, classical-style headstock, nylon strings.",
        image: "https://www.fmicassets.com/demandware/assets/acoustic-guitars/classical/overview/classical-hero-product.jpg",
        categoryId: 2,
        stock: 12,
    },
    {
        name: "Acoustic Steel-String Guitar Yamaha",
        price: 250,
        description: "Spruce top, sapele back and sides, rosewood fingerboard and bridge, scalloped bracing, die-cast tuners, steel strings.",
        image: "https://usa.yamaha.com/files/02_FG9-R_f_0001_87381dd45ce472f1d1e39b29123d7f3d.jpg?impolicy=resize&imwid=2000&imhei=2000",
        categoryId: 2,
        stock: 15,
    },
    {
        name: "Fender Stratocaster",
        price: 1000,
        description: "Alder body, 3 single-coil pickups with 5-way selector, maple neck with modern C profile, synchronized tremolo bridge, 22 frets.",
        image: "https://acdn-us.mitiendanube.com/stores/003/928/657/products/h97920000001000-02-86x86-d88220e3865e880e7517080230376581-1024-1024.jpg",
        categoryId: 2,
        stock: 7,
    },
    {
        name: "Fender Telecaster",
        price: 1200,
        description: "Solid alder body, two single-coil pickups, string-through-body bridge, maple neck with 22 medium jumbo frets, fixed bridge.",
        image: "https://acdn-us.mitiendanube.com/stores/001/040/912/products/ef11880a-4400-46bc-9ac6-e53b99b96d40-5fc9c6ae21fcc4947617079209288483-1024-1024.jpg",
        categoryId: 2,
        stock: 5,
    },
    {
        name: "PSR Modern Electric Guitar",
        price: 900,
        description: "Mahogany body with maple top, dual humbucker pickups, 24-fret rosewood fingerboard, tremolo bridge, wide-thin neck profile.",
        image: "https://www.kennysmusic.co.uk/images/prs-se-custom-24-electric-guitar-turquoise-b-stock-p7485-25886_medium.jpg",
        categoryId: 2,
        stock: 9,
    },
    {
        name: "Pearl Roadshow Drum Set",
        price: 500,
        description: '9-ply poplar shells, 5-piece configuration, 14" snare, 22" bass drum, chrome hardware, includes cymbals and throne.',
        image: "https://m.media-amazon.com/images/I/81Dsq8-JU0L._AC_SL1500_.jpg",
        categoryId: 3,
        stock: 4,
    },
    {
        name: "Yamaha Stage Custom",
        price: 700,
        description: 'Birch shells, 5-piece configuration with mounting system, 22" bass drum, 14" snare, lacquer finish, chrome hardware.',
        image: "https://es.yamaha.com/es/files/SCB_DUS_a_0002_7c990cac1dee48790f654fe60c06bea8.jpg?impolicy=resize&imwid=2000&imhei=800",
        categoryId: 3,
        stock: 3,
    },
    {
        name: "Tama Imperialstar",
        price: 780,
        description: '6-ply poplar shells, 5-piece setup with black nickel hardware, 14" snare, 22" bass drum, includes cymbals and hardware.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvA7fSXvIxzuCIs9vPg88lttj95frsImcSQ&s",
        categoryId: 3,
        stock: 2,
    },
    {
        name: "Delrin Standard Pick 0.73mm",
        price: 1,
        description: "0.73mm thickness, made of Delrin for improved grip, standard shape, matte finish, medium flexibility.",
        image: "https://intermusicashop.com.ar/wp-content/uploads/2024/11/Puas_Medium_Martin_Delrin_0.73mm_X_12_Unidades_D_947654-MLA53226320944_012023-O.jpg",
        categoryId: 4,
        stock: 200,
    },
    {
        name: "Celluloid Classic Pick 0.88mm",
        price: 1,
        description: "0.88mm thickness, celluloid construction, glossy surface, traditional teardrop shape, medium-heavy gauge.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNgQ6YwkbbfWYXNjfwwfFOK4bVDui2-PIw&s",
        categoryId: 4,
        stock: 180,
    },
    {
        name: "Nylon Jazz Pick 1.20mm",
        price: 1,
        description: "1.20mm thickness, heavy nylon construction, small jazz shape, matte grip surface, firm attack response.",
        image: "https://magmastoreusa.com/cdn/shop/products/PT120_1200x1200.jpg?v=1659028223",
        categoryId: 4,
        stock: 150,
    },
    {
        name: "Vic Firth 5A American Classic",
        price: 13,
        description: 'Hickory wood, 5A size, wooden tip, medium taper, 16" length and .565" diameter, lacquer finish.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyi1EvOmCb53GM9bntPtJbEGQbn-Er9J-XJQ&s",
        categoryId: 5,
        stock: 80,
    },
    {
        name: "Zildjian 5B Drumsticks",
        price: 15,
        description: 'Hickory sticks, 5B size, oval wood tip, 16" length, .600" diameter, natural finish, high durability.',
        image: "https://zildjian.com/cdn/shop/files/z5b-5b-select-hickory-natural-pair.jpg?v=1737581552&width=1445",
        categoryId: 5,
        stock: 70,
    },
    {
        name: "Elixir Nanoweb Bass Strings (.045 - .105)",
        price: 20,
        description: "Nickel-plated steel, long scale, Nanoweb coating, gauges: .045, .065, .085, .105, corrosion-resistant.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4p3iMkK6ooVvY4U_FhxBDYcHW9r9DTPkgfA&s",
        categoryId: 6,
        stock: 30,
    },
    {
        name: "D'Addario Pro-Arte Nylon Strings",
        price: 10,
        description: "Clear nylon trebles, silver-plated wound basses, normal tension, corrosion barrier packaging, laser-sorted for precision.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRbn0lNk2o5nw1Lkzl_Kk05q9NnmTNgl_qA&s",
        categoryId: 6,
        stock: 40,
    },
    {
        name: "Ernie Ball Regular Slinky Electric Strings",
        price: 10,
        description: "Nickel-plated steel, hex core, gauges .010–.046, bright tone, corrosion-resistant packaging.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTsNoHnZpXdsjC4i7zmT8OOecP8IGmtEMIQ&s",
        categoryId: 6,
        stock: 50,
    },
    {
        name: "Magma BE170N Acoustic Strings",
        price: 20,
        description: "Nickel-plated steel, phosphor bronze coating, light gauge, extended durability, balanced tone for acoustic guitars.",
        image: "https://www.stringsbymail.com/images/BE170N.jpg",
        categoryId: 6,
        stock: 45,
    },
];
const preLoadProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_repository_1.ProductRepository.find();
    if (!products.length)
        yield dataSource_1.AppDataSource.createQueryBuilder()
            .insert()
            .into(Product_1.Product)
            .values(productsToPreLoad)
            .execute();
    console.log("Products preloaded");
});
exports.preLoadProducts = preLoadProducts;
