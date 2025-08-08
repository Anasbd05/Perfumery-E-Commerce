import { CreditCard, Headset, HeartHandshake, Truck } from "lucide-react";
import perfume1 from "./products/perfume1.png";
import perfume2 from "./products/perfume2.png";
import perfume3 from "./products/perfume3.png";
import perfume4 from "./products/perfume4.png";

export const services = [
  {
    icon: <Truck size={40} className=" text-nature " />,
    title: "Free shipping",
    desc: "Orders over 750DH",
  },
  {
    icon: <CreditCard size={40} className=" text-nature " />,
    title: "Quick Payments",
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
    title: "Bleu Chanel",
    price: 540,
    image: perfume1,
  },
  {
    title: "Sauvage Elixir",
    price: 350,
    image: perfume2,
  },
  {
    title: "Creed Aventus",
    price: 400,
    image: perfume3,
  },
  {
    title: "Black Orchid",
    price: 350,
    image: perfume4,
  },
];
