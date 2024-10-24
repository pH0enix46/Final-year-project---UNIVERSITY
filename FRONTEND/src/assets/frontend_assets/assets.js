import logo from "./logo.png";
import serach_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png";
import menu_icon from "./menu_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import hero from "./hero.jpg";
import mac_img01 from "./MacBook-Air-M2-1.jpg";

export const assets = {
  logo,
  serach_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  hero,
  dropdown_icon,
};

export const products = [
  {
    _id: "01",
    name: "MacBook Air M2 13.6-inch 16/256GB 8-CPU 8-GPU Starlight",
    description:
      "The M2 chip and 16GB of RAM provide unmatched performance, and the latest version of macOS and long battery life make the MacBook Air M2 in Starlight the perfect choice for style, function, and appeal",
    price: 198000,
    image: [mac_img01],
    category: "M2",
    subCategory: "Air",
    date: 1716634345448,
    bestseller: true,
  },
];
