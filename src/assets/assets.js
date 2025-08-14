import {
  Clock,
  CreditCard,
  Headset,
  HeartHandshake,
  Mail,
  Map,
  Phone,
  Truck,
} from "lucide-react";
import perfume1 from "./products/perfume1.png";
import perfume2 from "./products/perfume2.png";
import perfume3 from "./products/perfume3.png";
import perfume4 from "./products/perfume4.png";
import perfume5 from "./products/perfume5.png";
import perfume6 from "./products/perfume6.png";
import perfume7 from "./products/perfume7.png";
import perfume8 from "./products/perfume8.png";
import perfume9 from "./products/perfume9.png";
import perfume10 from "./products/perfume10.png";
import perfume11 from "./products/perfume11.png";
import perfume12 from "./products/perfume12.png";
import perfume13 from "./products/perfume13.png";
import perfume14 from "./products/perfume14.png";

export const services = [
  {
    icon: <Truck size={40} className=" text-nature " />,
    title: "Free shipping",
    desc: "Orders over 750DH",
  },
  {
    icon: <CreditCard size={40} className=" text-nature " />,
    title: "Quick PayMalets",
    desc: "100% Secure",
  },
  {
    icon: <HeartHandshake size={40} className=" text-nature " />,
    title: "Big deals",
    desc: "Over 30% Cashback",
  },
  {
    icon: <Headset size={40} className=" text-nature " />,
    title: " 12/24h Support",
    desc: "Ready for You",
  },
];

export const bestSellers = [
  {
    brandName: "Dior",
    title: "Bleu de Chanel",
    price: 540,
    image: perfume1,
    aboutBrand:
      "Chanel is a legendary French luxury brand established in 1910, famous for timeless style and iconic fragrances.",
    notes: [
      { name: "Grapefruit", percent: "80%" }, // Top
      { name: "Lemon", percent: "70%" }, // Top
      { name: "Mint", percent: "65%" }, // Top
      { name: "Pink Pepper", percent: "50%" }, // Middle
      { name: "Ginger", percent: "45%" }, // Middle
      { name: "Sandalwood", percent: "30%" }, // Base
      { name: "Cedar", percent: "25%" }, // Base
      { name: "Amber", percent: "20%" }, // Base
      { name: "Incense", percent: "15%" }, // Base
    ],
    characteristics: ["Woody", "Citrusy", "Aromatic", "Elegant"],
    perfumer: "Jacques Polge",
    releaseDate: "2010",
    genre: "Male",
  },
  {
    brandName: "Dior",
    title: "Sauvage Elixir",
    price: 350,
    image: perfume2,
    aboutBrand:
      "Dior is a French luxury fashion house founded in 1946, known for elegance, innovation, and high-quality fragrances.",
    notes: [
      { name: "Cinnamon", percent: "85%" }, // Top
      { name: "Nutmeg", percent: "75%" }, // Top
      { name: "Cardamom", percent: "70%" }, // Top
      { name: "Grapefruit", percent: "55%" }, // Middle
      { name: "Lavender", percent: "50%" }, // Middle
      { name: "Licorice", percent: "35%" }, // Base
      { name: "Sandalwood", percent: "30%" }, // Base
      { name: "Amber", percent: "25%" }, // Base
      { name: "Patchouli", percent: "20%" }, // Base
    ],
    characteristics: ["Spicy", "Woody", "Intense", "Long-lasting"],
    perfumer: "François Demachy",
    releaseDate: "2021",
    genre: "Male",
  },
  {
    brandName: "Chanel",
    title: "Creed Aventus",
    price: 400,
    image: perfume3,
    aboutBrand:
      "Creed is a luxury perfume house founded in 1760, known for high-quality, handcrafted fragrances.",
    notes: [
      { name: "Pineapple", percent: "90%" }, // Top
      { name: "Blackcurrant", percent: "80%" }, // Top
      { name: "Apple", percent: "70%" }, // Top
      { name: "Birch", percent: "55%" }, // Middle
      { name: "Patchouli", percent: "45%" }, // Middle
      { name: "Musk", percent: "35%" }, // Base
      { name: "Oakmoss", percent: "30%" }, // Base
      { name: "Vanilla", percent: "25%" }, // Base
    ],
    characteristics: ["Fruity", "Smoky", "Masculine", "Elegant"],
    perfumer: "Olivier Creed",
    releaseDate: "2010",
    genre: "Male",
  },
  {
    brandName: "Tom Ford",
    title: "Black Orchid",
    price: 350,
    image: perfume4,
    aboutBrand:
      "Tom Ford is an American luxury fashion label founded in 2005, recognized for bold and sensual fragrances.",
    notes: [
      { name: "Black Truffle", percent: "85%" }, // Top
      { name: "Ylang-Ylang", percent: "75%" }, // Top
      { name: "Bergamot", percent: "70%" }, // Top
      { name: "Blackcurrant", percent: "55%" }, // Middle
      { name: "Lotus Wood", percent: "50%" }, // Middle
      { name: "Patchouli", percent: "35%" }, // Base
      { name: "Vanilla", percent: "30%" }, // Base
      { name: "Incense", percent: "25%" }, // Base
    ],
    characteristics: ["Rich", "Oriental", "Opulent", "Unisex"],
    perfumer: "David Apel",
    releaseDate: "2006",
    genre: "Unisex",
  },
];

export const perfumes = [
  {
    brandName: "Dior",
    title: "Sauvage Eau de Parfum",
    price: 120,
    image: perfume5,
    aboutBrand:
      "Dior is a French luxury fashion house founded in 1946, known for elegance, innovation, and quality fragrances.",
    notes: [
      { name: "Bergamot", percent: "90%" },
      { name: "Sichuan Pepper", percent: "80%" },
      { name: "Ambroxan", percent: "70%" },
      { name: "Vanilla", percent: "60%" },
    ],
    characteristics: ["Fresh", "Spicy", "Woody", "Long-lasting"],
    perfumer: "François Demachy",
    releaseDate: "2018",
    genre: "Male",
  },
  {
    brandName: "Dior",
    title: "Bleu de Chanel",
    price: 540,
    image: perfume1,
    aboutBrand:
      "Chanel is a legendary French luxury brand established in 1910, famous for timeless style and iconic fragrances.",
    notes: [
      { name: "Grapefruit", percent: "80%" }, // Top
      { name: "Lemon", percent: "70%" }, // Top
      { name: "Mint", percent: "65%" }, // Top
      { name: "Pink Pepper", percent: "50%" }, // Middle
      { name: "Ginger", percent: "45%" }, // Middle
      { name: "Sandalwood", percent: "30%" }, // Base
      { name: "Cedar", percent: "25%" }, // Base
      { name: "Amber", percent: "20%" }, // Base
      { name: "Incense", percent: "15%" }, // Base
    ],
    characteristics: ["Woody", "Citrusy", "Aromatic", "Elegant"],
    perfumer: "Jacques Polge",
    releaseDate: "2010",
    genre: "Female",
  },
  {
    brandName: "Dior",
    title: "Sauvage Elixir",
    price: 350,
    image: perfume2,
    aboutBrand:
      "Dior is a French luxury fashion house founded in 1946, known for elegance, innovation, and high-quality fragrances.",
    notes: [
      { name: "Cinnamon", percent: "85%" }, // Top
      { name: "Nutmeg", percent: "75%" }, // Top
      { name: "Cardamom", percent: "70%" }, // Top
      { name: "Grapefruit", percent: "55%" }, // Middle
      { name: "Lavender", percent: "50%" }, // Middle
      { name: "Licorice", percent: "35%" }, // Base
      { name: "Sandalwood", percent: "30%" }, // Base
      { name: "Amber", percent: "25%" }, // Base
      { name: "Patchouli", percent: "20%" }, // Base
    ],
    characteristics: ["Spicy", "Woody", "Intense", "Long-lasting"],
    perfumer: "François Demachy",
    releaseDate: "2021",
    genre: "Male",
  },
  {
    brandName: "Chanel",
    title: "Creed Aventus",
    price: 400,
    image: perfume3,
    aboutBrand:
      "Creed is a luxury perfume house founded in 1760, known for high-quality, handcrafted fragrances.",
    notes: [
      { name: "Pineapple", percent: "90%" }, // Top
      { name: "Blackcurrant", percent: "80%" }, // Top
      { name: "Apple", percent: "70%" }, // Top
      { name: "Birch", percent: "55%" }, // Middle
      { name: "Patchouli", percent: "45%" }, // Middle
      { name: "Musk", percent: "35%" }, // Base
      { name: "Oakmoss", percent: "30%" }, // Base
      { name: "Vanilla", percent: "25%" }, // Base
    ],
    characteristics: ["Fruity", "Smoky", "Masculine", "Elegant"],
    perfumer: "Olivier Creed",
    releaseDate: "2010",
    genre: "Male",
  },
  {
    brandName: "Tom Ford",
    title: "Black Orchid",
    price: 350,
    image: perfume4,
    aboutBrand:
      "Tom Ford is an American luxury fashion label founded in 2005, recognized for bold and sensual fragrances.",
    notes: [
      { name: "Black Truffle", percent: "85%" }, // Top
      { name: "Ylang-Ylang", percent: "75%" }, // Top
      { name: "Bergamot", percent: "70%" }, // Top
      { name: "Blackcurrant", percent: "55%" }, // Middle
      { name: "Lotus Wood", percent: "50%" }, // Middle
      { name: "Patchouli", percent: "35%" }, // Base
      { name: "Vanilla", percent: "30%" }, // Base
      { name: "Incense", percent: "25%" }, // Base
    ],
    characteristics: ["Rich", "Oriental", "Opulent", "Unisex"],
    perfumer: "David Apel",
    releaseDate: "2006",
    genre: "Unisex",
  },
  {
    brandName: "Chanel",
    title: "Coco Mademoiselle",
    price: 135,
    image: perfume6,
    aboutBrand:
      "Chanel is a legendary French luxury brand established in 1910, famous for timeless style and iconic fragrances.",
    notes: [
      { name: "Orange", percent: "85%" },
      { name: "Jasmine", percent: "80%" },
      { name: "Rose", percent: "75%" },
      { name: "Patchouli", percent: "60%" },
      { name: "Vetiver", percent: "50%" },
    ],
    characteristics: ["Floral", "Citrusy", "Elegant", "Feminine"],
    perfumer: "Jacques Polge",
    releaseDate: "2001",
    genre: "Female",
  },
  {
    brandName: "Tom Ford",
    title: "Black Orchid",
    price: 150,
    image: perfume7,
    aboutBrand:
      "Tom Ford is an American luxury fashion label founded in 2005, recognized for bold and sensual fragrances.",
    notes: [
      { name: "Black Truffle", percent: "85%" },
      { name: "Ylang-Ylang", percent: "80%" },
      { name: "Bergamot", percent: "75%" },
      { name: "Blackcurrant", percent: "65%" },
      { name: "Patchouli", percent: "50%" },
      { name: "Vanilla", percent: "45%" },
    ],
    characteristics: ["Rich", "Oriental", "Opulent", "Unisex"],
    perfumer: "David Apel",
    releaseDate: "2006",
    genre: "Unisex",
  },
  {
    brandName: "Yves Saint Laurent",
    title: "Libre Eau de Parfum",
    price: 130,
    image: perfume8,
    aboutBrand:
      "Yves Saint Laurent, founded in 1961, is known for edgy elegance and artistic fragrances.",
    notes: [
      { name: "Lavender", percent: "85%" },
      { name: "Mandarin Orange", percent: "75%" },
      { name: "Jasmine", percent: "70%" },
      { name: "Vanilla", percent: "55%" },
      { name: "Ambergris", percent: "45%" },
    ],
    characteristics: ["Floral", "Fresh", "Bold", "Long-lasting"],
    perfumer: "Anne Flipo, Carlos Benaïm",
    releaseDate: "2019",
    genre: "Female",
  },
  {
    brandName: "Giorgio Armani",
    title: "Acqua di Gio Profumo",
    price: 125,
    image: perfume9,
    aboutBrand:
      "Giorgio Armani is an Italian luxury brand known for minimalist style and refined scents.",
    notes: [
      { name: "Sea Notes", percent: "90%" },
      { name: "Bergamot", percent: "85%" },
      { name: "Sage", percent: "75%" },
      { name: "Rosemary", percent: "60%" },
      { name: "Patchouli", percent: "50%" },
      { name: "Incense", percent: "40%" },
    ],
    characteristics: ["Aquatic", "Aromatic", "Sophisticated", "Masculine"],
    perfumer: "Alberto Morillas",
    releaseDate: "2015",
    genre: "Male",
  },
  {
    brandName: "Creed",
    title: "Aventus",
    price: 350,
    image: perfume10,
    aboutBrand:
      "Creed is a luxury perfume house founded in 1760, known for high-quality, handcrafted fragrances.",
    notes: [
      { name: "Pineapple", percent: "90%" },
      { name: "Blackcurrant", percent: "80%" },
      { name: "Birch", percent: "70%" },
      { name: "Musk", percent: "60%" },
      { name: "Oakmoss", percent: "50%" },
    ],
    characteristics: ["Fruity", "Smoky", "Masculine", "Elegant"],
    perfumer: "Olivier Creed",
    releaseDate: "2010",
    genre: "Male",
  },
  {
    brandName: "Lancôme",
    title: "La Vie Est Belle",
    price: 130,
    image: perfume11,
    aboutBrand:
      "Lancôme is a French luxury perfumes and cosmetics house founded in 1935, known for elegance and femininity.",
    notes: [
      { name: "Black Currant", percent: "85%" },
      { name: "Pear", percent: "80%" },
      { name: "Iris", percent: "75%" },
      { name: "Jasmine", percent: "65%" },
      { name: "Orange Blossom", percent: "60%" },
      { name: "Praline", percent: "50%" },
      { name: "Vanilla", percent: "45%" },
    ],
    characteristics: ["Sweet", "Floral", "Elegant", "Feminine"],
    perfumer: "Olivier Polge, Dominique Ropion",
    releaseDate: "2012",
    genre: "Female",
  },
  {
    brandName: "Hermès",
    title: "Terre Hermes",
    price: 125,
    image: perfume12,
    aboutBrand:
      "Hermès is a French high-fashion luxury goods manufacturer established in 1837, renowned for craftsmanship.",
    notes: [
      { name: "Orange", percent: "90%" },
      { name: "Grapefruit", percent: "85%" },
      { name: "Pepper", percent: "75%" },
      { name: "Pelargonium", percent: "65%" },
      { name: "Vetiver", percent: "55%" },
      { name: "Cedar", percent: "50%" },
    ],
    characteristics: ["Woody", "Earthy", "Citrusy", "Masculine"],
    perfumer: "Jean-Claude Ellena",
    releaseDate: "2006",
    genre: "Male",
  },
  {
    brandName: "Paco Rabanne",
    title: "1 Million",
    price: 110,
    image: perfume13,
    aboutBrand:
      "Paco Rabanne is a Spanish fashion house known for bold designs and distinctive fragrances.",
    notes: [
      { name: "Blood Mandarin", percent: "85%" },
      { name: "Grapefruit", percent: "80%" },
      { name: "Mint", percent: "75%" },
      { name: "Cinnamon", percent: "65%" },
      { name: "Rose", percent: "55%" },
      { name: "Amber", percent: "50%" },
      { name: "Leather", percent: "45%" },
    ],
    characteristics: ["Sweet", "Spicy", "Bold", "Masculine"],
    perfumer: "Christophe Raynaud",
    releaseDate: "2008",
    genre: "Male",
  },
  {
    brandName: "Jo Malone",
    title: "Peony And Blush Suede",
    price: 140,
    image: perfume14,
    aboutBrand:
      "Jo Malone London is a British fragrance brand known for elegant and simplistic scents.",
    notes: [
      { name: "Red Apple", percent: "85%" },
      { name: "Peony", percent: "80%" },
      { name: "Jasmine", percent: "75%" },
      { name: "Carnation", percent: "65%" },
      { name: "Suede", percent: "50%" },
    ],
    characteristics: ["Floral", "Fresh", "Soft", "Feminine"],
    perfumer: "Christine Nagel",
    releaseDate: "2013",
    genre: "Female",
  },
];

export const contacts = [
  {
    title: "Address",
    des: "Unit 58 County Mall, Crawley RH10 1FP",
    icon: <Map size={35} className=" text-emerald-400 " />,
  },
  {
    title: "Phone",
    des: "+44 1293 731673",
    icon: <Phone size={35} className=" text-emerald-400 " />,
  },
  {
    title: "Email",
    des: "zonedupes@gmail.com",
    icon: <Mail size={35} className=" text-emerald-400 " />,
  },
  {
    title: "Buesiness Hours",
    des: "Mon-Fri: 8:30am - 6pm",
    icon: <Clock size={35} className=" text-emerald-400 " />,
  },
];
