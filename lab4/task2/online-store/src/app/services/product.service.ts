import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy A07 6 ГБ/128 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти для хранения ваших данных.',
      price: 68_666,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/pd7/61291244.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
      likes: 0,
      categoryId: 1
    },{
      id: 2,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. ',
      price:  475_000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      likes: 0,
      categoryId: 1
    },{
      id: 3,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb серебристый',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и бескомпромиссного качества в мире смартфонов.',
      price: 910_470,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pb0/64475614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000',
      likes: 0,
      categoryId: 1
    },{
      id: 4,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном.',
      price: 52_900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      likes: 0,
      categoryId: 1
    },{id: 5,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность.',
      price: 847_420,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 0,
      categoryId: 1
    },{
      id: 6,
      name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
      description: 'Ноутбук PRYME N5095 15.6” — оптимальное решение для учёбы и работы',
      price: 189_990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/45122461.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pfb/45122460.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000',
      likes: 0,
      categoryId: 2
    },{
      id: 7,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома. HYDRA H20 стоит, как обычный ноутбук для повседневного использования, однако это устройство достаточно мощное.',
      price: 135_000 ,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
      likes: 0,
      categoryId: 2
    },{
      id: 8,
      name: 'Ноутбук Apple MacBook Pro 16 2021 16.2" / 32 Гб / SSD 512 Гб / macOS / Z14V0008D',
      description: 'Apple MacBook Pro 16 2021 — мощный ноутбук, созданный для профессионалов и творческих людей.',
      price: 699_990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000',
      likes: 0,
      categoryId: 2
    },{
      id: 9,
      name: 'Ноутбук Oyan Lite X14 14.1" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526',
      description: 'Внимание: ноутбук не для игр или работы с ресурсоемкими приложениями. ',
      price: 134_500,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p47/48619240.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000',
      likes: 0,
      categoryId: 2
    },{
      id: 10,
      name: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124',
      description: 'astom E157D — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе мощный процессор AMD Ryzen 5. ',
      price: 249_900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p7d/63008953.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p7c/63008954.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000',
      likes: 0,
      categoryId: 2
    },{
      id: 11,
      name: 'Наушники GERLAX GH-34 черный',
      description: 'Наушники GERLAX GH-34 — это идеальный выбор для тех, кто ценит высокое качество звука и удобство использования. ',
      price: 2_769,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h6d/86037848129566.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000',
      likes: 0,
      categoryId: 3
    },{
      id: 12,
      name: 'Наушники Razer Blackshark V2 X белый',
      description: 'Сразитесь со врагами в легкой киберспортивной гарнитуре, раскрывающую свои преимущества под давлением. ',
      price: 15_500,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h61/64919533551646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h66/64919534207006.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-belyi-104669405/?c=750000000',
      likes: 0,
      categoryId: 3
    },{
      id: 13,
      name: 'Наушники Marshall Major IV черный',
      description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров. ',
      price: 18_441,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      likes: 0,
      categoryId: 3
    },{
      id: 14,
      name: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
      description: 'Apple улучшили в новых аирподсах режим прозрачности, который еще лучше отсекает лишние шумы, при этом позволяя слышать происходящее вокруг. ',
      price: 100_354,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      likes: 0,
      categoryId: 3
    },{
      id: 15,
      name: 'Наушники YERVIEW Y-Pro серый',
      description: 'Наушники YERVIEW Y-Pro серые — это стильный и функциональный аксессуар для тех, кто ценит качественный звук и свободу движений. ',
      price: 9_999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pc7/52453719.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pc7/52453719.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/pc9/52453720.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pc9/52453721.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-yerview-y-pro-seryi-140772729/?c=750000000',
      likes: 0,
      categoryId: 3
    },{
      id: 16,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'iPad A16 2025 — ваш идеальный спутник для работы и развлечений!',
      price: 203_103,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 0,
      categoryId: 4
    },{
      id: 17,
      name: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб серый',
      description: 'Xiaomi Redmi Pad 2 — универсальный планшет с ярким 11-дюймовым экраном и мощным процессором MediaTek Helio G100 Ultra для работы и развлечений.',
      price: 105_580,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p43/46204509.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
      likes: 0,
      categoryId: 4
    },{
      id: 18,
      name: 'Планшет Apple iPad Air 11 2025 Wi-Fi 11 дюйм 8 Гб/128 Гб серый',
      description: 'Новый планшет Apple iPad Air 11 (2025) - это продукт, который приносит вам самые передовые технологии и дизайн.',
      price: 327_186,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8c/36122455.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p89/36122456.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
      likes: 0,
      categoryId: 4
    },{
      id: 19,
      name: 'Планшет Xiaomi Pad 6 11 дюйм 8 Гб/256 Гб серый',
      description: 'Xiaomi Pad 6 — мощный и стильный планшет с ярким 11-дюймовым экраном и высокой производительностью для работы и развлечений.',
      price: 154_996,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      likes: 0,
      categoryId: 4
    },{
      id: 20,
      name: 'Планшет OSCAL Pad 70 10.1 дюйм 4 Гб/128 Гб серый',
      description: 'OSCAL Pad 70 — это мощный и стильный планшет с диагональю 10.1 дюйма, который идеально подходит для работы и развлечений.',
      price: 59_990 ,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hc4/86587164426270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hc4/86587164426270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h32/86587164557342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h32/86587164557342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oscal-pad-70-10-1-djuim-4-gb-128-gb-seryi-113731780/?c=750000000',
      likes: 0,
      categoryId: 4
    },

  ];


  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(product: Product) {
    product.likes++;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}