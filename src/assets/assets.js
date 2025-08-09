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
