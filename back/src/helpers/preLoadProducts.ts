import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Fender Precision Bass",
    price: 800,
    description:
      "Classic electric bass with an alder body and maple neck, perfect for any style.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_942834-MLA45400121419_032021-F.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Fender Jazz Bass",
    price: 900,
    description:
      "Electric bass with dual single-coil pickups for warm, articulate tones—ideal for jazz and funk.",
    image:
      "https://blog.musicopolix.com/wp-content/webp-express/webp-images/uploads/2016/04/fender-american-elite-jazz-bass-v-nat_1.jpg.webp",
    categoryId: 1,
    stock: 8,
  },
  {
    name: "Music Man StingRay",
    price: 1800,
    description:
      "High-end bass featuring a humbucker pickup and active 3-band EQ preamp.",
    image:
      "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-50.png?1598482639",
    categoryId: 1,
    stock: 5,
  },
  {
    name: "Warwick Corvette Standard Fretless",
    price: 1600,
    description:
      "German-made bass with an elm body and MEC electronics for clear, powerful tone.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/519129000000000-00-600x600.jpg",
    categoryId: 1,
    stock: 6,
  },

  {
    name: "Classical Nylon Guitar Fender",
    price: 130,
    description:
      "Beginner-friendly nylon-string guitar with a mahogany back and spruce top.",
    image:
      "https://www.fmicassets.com/demandware/assets/acoustic-guitars/classical/overview/classical-hero-product.jpg",
    categoryId: 2,
    stock: 12,
  },
  {
    name: "Acoustic Steel-String Guitar Yamaha",
    price: 250,
    description:
      "Steel-string acoustic guitar with a sapele body and rosewood fingerboard.",
    image:
      "https://usa.yamaha.com/files/02_FG9-R_f_0001_87381dd45ce472f1d1e39b29123d7f3d.jpg?impolicy=resize&imwid=2000&imhei=2000",
    categoryId: 2,
    stock: 15,
  },
  {
    name: "Fender Stratocaster",
    price: 1000,
    description:
      "Iconic electric guitar with three single-coil pickups and an alder body.",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/928/657/products/h97920000001000-02-86x86-d88220e3865e880e7517080230376581-1024-1024.jpg",
    categoryId: 2,
    stock: 7,
  },
  {
    name: "Fender Telecaster",
    price: 1200,
    description:
      "Classic electric guitar with two single-coil pickups for bright, cutting tone.",
    image:
      "https://acdn-us.mitiendanube.com/stores/001/040/912/products/ef11880a-4400-46bc-9ac6-e53b99b96d40-5fc9c6ae21fcc4947617079209288483-1024-1024.jpg",
    categoryId: 2,
    stock: 5,
  },
  {
    name: "PSR Modern Electric Guitar",
    price: 900,
    description:
      "Versatile modern electric guitar suitable for rock, blues, and pop styles.",
    image:
      "https://www.kennysmusic.co.uk/images/prs-se-custom-24-electric-guitar-turquoise-b-stock-p7485-25886_medium.jpg",
    categoryId: 2,
    stock: 9,
  },

  {
    name: "Pearl Roadshow Drum Set",
    price: 500,
    description: 'Complete beginner kit with 9" toms and a 14" snare.',
    image: "https://m.media-amazon.com/images/I/81Dsq8-JU0L._AC_SL1500_.jpg",
    categoryId: 3,
    stock: 4,
  },
  {
    name: "Yamaha Stage Custom",
    price: 700,
    description:
      "Intermediate-level kit with birch shells and included hardware.",
    image:
      "https://es.yamaha.com/es/files/SCB_DUS_a_0002_7c990cac1dee48790f654fe60c06bea8.jpg?impolicy=resize&imwid=2000&imhei=800",
    categoryId: 3,
    stock: 3,
  },
  {
    name: "Tama Imperialstar",
    price: 780,
    description: "Durable mid-level set with chrome hardware and resin heads.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvA7fSXvIxzuCIs9vPg88lttj95frsImcSQ&s",
    categoryId: 3,
    stock: 2,
  },

  {
    name: "Delrin Standard Pick 0.73mm",
    price: 1,
    description: "Medium-gauge Delrin pick for excellent grip and durability.",
    image:
      "https://intermusicashop.com.ar/wp-content/uploads/2024/11/Puas_Medium_Martin_Delrin_0.73mm_X_12_Unidades_D_947654-MLA53226320944_012023-O.jpg",
    categoryId: 4,
    stock: 200,
  },
  {
    name: "Celluloid Classic Pick 0.88mm",
    price: 1,
    description: "Traditional celluloid pick with a warm tone and smooth feel.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNgQ6YwkbbfWYXNjfwwfFOK4bVDui2-PIw&s",
    categoryId: 4,
    stock: 180,
  },
  {
    name: "Nylon Jazz Pick 1.20mm",
    price: 1,
    description: "Heavy nylon pick for defined attack and long lifespan.",
    image:
      "https://magmastoreusa.com/cdn/shop/products/PT120_1200x1200.jpg?v=1659028223",
    categoryId: 4,
    stock: 150,
  },

  {
    name: "Vic Firth 5A American Classic",
    price: 13,
    description: "Balanced sticks suitable for all musical styles.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyi1EvOmCb53GM9bntPtJbEGQbn-Er9J-XJQ&s",
    categoryId: 5,
    stock: 80,
  },
  {
    name: "Zildjian 5B Drumsticks",
    price: 15,
    description: "Slightly thicker sticks for extra power and durability.",
    image:
      "https://zildjian.com/cdn/shop/files/z5b-5b-select-hickory-natural-pair.jpg?v=1737581552&width=1445",
    categoryId: 5,
    stock: 70,
  },

  {
    name: "Ernie Ball Super Slinky Bass Strings",
    price: 20,
    description: "Light gauge bass set ideal for slap and fast-playing styles.",
    image: "https://example.com/images/strings-bass-slinky.jpg",
    categoryId: 6,
    stock: 30,
  },
  {
    name: "D'Addario Pro-Arte Nylon Strings",
    price: 10,
    description:
      "Premium nylon strings for classical guitar with balanced tone.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRbn0lNk2o5nw1Lkzl_Kk05q9NnmTNgl_qA&s",
    categoryId: 6,
    stock: 40,
  },
  {
    name: "Ernie Ball Regular Slinky Electric Strings",
    price: 10,
    description: "Classic steel strings for electric guitar with bright tone.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTsNoHnZpXdsjC4i7zmT8OOecP8IGmtEMIQ&s",
    categoryId: 6,
    stock: 50,
  },
  {
    name: "Magma BE170N Nickel Plated Steel Electric Bass Strings",
    price: 20,
    description:
      "Coated phosphor bronze strings for acoustic guitar with extended life.",
    image: "https://www.stringsbymail.com/images/BE170N.jpg",
    categoryId: 6,
    stock: 45,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
