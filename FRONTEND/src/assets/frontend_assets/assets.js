import logo from "./logo.png";
import serach_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png";
import menu_icon from "./menu_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import hero from "./hero.jpg";
import hero_ from "./hero_.jpg";

import mac_img01 from "./products/MacBook-Air-M2-1.jpg";
import mac_img02 from "./products/mac-m1-2.jpg";
import mac_img03 from "./products/macbook-air-13-inch-3.webp";
import mac_img04 from "./products/macbook-pro-16-inch-m3-pro-4.webp";
import mac_img05 from "./products/macbook-pro-14-inch-space-black-5.webp";
import mac_img06 from "./products/apple-m3-max-6.jpg";
import mac_img07 from "./products/apple-m3-maxPower-7.jpg";
import mac_img08 from "./products/macbook-air-m2-8.webp";

export const assets = {
  logo,
  serach_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  hero,
  hero_,
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

  {
    _id: "02",
    name: "Apple MacBook Air 13.3-Inch Retina Display 8-core Space Gray",
    description:
      "Apple's thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning",
    price: 99000,
    image: [mac_img02],
    category: "M1",
    subCategory: "Air",
    date: 1716634345448,
    bestseller: false,
  },

  {
    _id: "03",
    name: "Apple MacBook Air 13.3-Inch Retina Display 8-core Silver",
    description:
      "Apple's thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning",
    price: 99000,
    image: [mac_img03],
    category: "M1",
    subCategory: "Air",
    date: 1716634345448,
    bestseller: false,
  },

  {
    _id: "04",
    name: "Apple MacBook Pro 16 inch M3 Pro Chip Liquid Retina Display 18GB RAM 512GB SSD Space Black",
    description:
      "The Apple M3 Pro 12-Core Chip delivers the power and efficiency required to manage all of your professional operations. The M3 Pro 12-Core Chip is now constructed using 3nm manufacturing technology and is paired with an 18-Core GPU",
    price: 300000,
    image: [mac_img04],
    category: "M3",
    subCategory: "Pro",
    date: 1716634345448,
    bestseller: true,
  },

  {
    _id: "05",
    name: "Apple MacBook Pro 14 inch M3 Pro Chip Liquid Retina XDR Display 18GB RAM 512GB SSD Space Black",
    description:
      "The Apple M3 Pro 12-Core Chip delivers the power and efficiency required to manage all of your professional operations. The M3 Pro 12-Core Chip is now constructed using 3nm manufacturing technology and is paired with an 18-Core GPU",
    price: 235000,
    image: [mac_img05],
    category: "M3",
    subCategory: "Pro",
    date: 1716634345448,
    bestseller: true,
  },

  {
    _id: "06",
    name: "Apple MacBook Pro 16 inch M3 Max Chip Liquid Retina Display 36GB RAM 1TB SSD Space Black",
    description:
      "The Apple MacBook Pro 16 inch M3 Max Chip Liquid Retina Display 36GB RAM 1TB SSD Space Black is the ultimate pro mobile workstation for the ultimate user, designed for all sorts of creatives such as photographers, filmmakers, 3D artists, music producers, developers, and more",
    price: 460000,
    image: [mac_img06],
    category: "M3",
    subCategory: "Max",
    date: 1716634345448,
    bestseller: true,
  },

  {
    _id: "07",
    name: "Apple MacBook Pro 16 inch M3 Max Chip Liquid Retina Display 128GB RAM 8TB SSD Space Black",
    description:
      "The space-black Apple 16 MacBook Pro is designed for all sorts of creatives, including photographers, filmmakers, 3D artists, music producers, developers, and more. The system has the Apple M3 Max 16-Core Chip, which delivers the power and performance efficiency required to handle all of your professional workloads",
    price: 1095000,
    image: [mac_img07],
    category: "M3",
    subCategory: "Max",
    date: 1716634345448,
    bestseller: true,
  },

  {
    _id: "08",
    name: "Apple MacBook Air (2022) Apple M2 Chip 13.6-Inch Liquid Retina Display 8GB RAM 256GB SSD Starlight",
    description:
      "The Apple MacBook Air 13.6-Inch laptop is powered by the new M2 chip. It is loaded with 8GB RAM and 256GB SSD. The MacBook Air features a brilliant Retina display, a FaceTime HD camera, and studio-quality mics",
    price: 114000,
    image: [mac_img08],
    category: "M2",
    subCategory: "Air",
    date: 1716634345448,
    bestseller: true,
  },
];
