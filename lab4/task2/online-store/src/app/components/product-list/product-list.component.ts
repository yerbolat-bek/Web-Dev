import { Component, NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent{
  products: Product[] = [
    {
      id: 1,
      name: 'Велосипед GESTALT HERO 2025 19 дюймов серый',
      description: 'Велосипед GESTALT HERO 29 дюймов 2025 — это идеальный выбор для активных людей, которые ценят комфорт.',
      price: 106_990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p73/pbd/51312119.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p73/pbd/51312119.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf4/p6e/51312121.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa7/p53/51312129.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/velosiped-gestalt-hero-29-djuim-2025-19-djuimov-seryi-142024246/?c=750000000'
    },{
      id: 2,
      name: 'Xerox Phaser 3020BI белый',
      description: 'Xerox Phaser 3020 - это монохромный лазерный принтер, который отлично подойдет для персонального использования.',
      price: 69_195,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/h70/63757710655518.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/hab/63757711343646.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000'
    },{
      id: 3,
      name: 'Смартфон CUBOT KingKong 6 4 ГБ/64 ГБ оранжевый',
      description: 'Модель соответствует стандартам защиты IP68/IP69K и Military Standard 810G.',
      price: 119_980,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p36/p4f/107073289.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p36/p4f/107073289.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/p51/107073290.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p51/107073292.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/cubot-kingkong-6-4-gb-64-gb-oranzhevyi-podarok-157486323/?c=750000000'
    },{
      id: 4,
      name: 'Мультиварка REDMOND RMC-M90 черный',
      description: 'Высокие технологии и футуристичный дизайн органично слились в новейшей разработке инженеров REDMOND — мультиварке RMC-M90. ',
      price: 31_999,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/had/63768265555998.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/had/63768265555998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/hcf/63768266080286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha6/63768267522078.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mul-tivarka-redmond-rmc-m90-chernyi-3300010/?c=750000000'
    },{
      id: 5,
      name: 'Ноутбук HP 15-fc0940fi 15.6" / 16 Гб / SSD 512 Гб',
      description: 'Ноутбук HP 15-fc0940fi — мощный и надежный инструмент для работы, учебы и развлечений.',
      price: 315_412,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p73/49382216.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p73/49382216.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p93/p05/49382217.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p0c/49382219.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-15-fc0940fi-15-6-16-gb-ssd-512-gb-win-11-pro-bm0b013ea-uuq-141492322/?c=750000000'
    },{
      id: 6,
      name: 'Наушники SteelSeries ARCTIS PRO WIRELESS белый',
      description: '',
      price: 369_890,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h50/64342603005982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h50/64342603005982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h59/64342605987870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h3c/64342611918878.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-steelseries-arctis-pro-wireless-belyi-102762848/?c=750000000'
    },{
      id: 7,
      name: 'Проектор HESOYAM A10',
      description: 'Проектор HESOYAM A10 — Ваш домашний кинотеатр в мини-формате',
      price: 41_999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf0/pdf/78287786.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/pdf/78287786.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pe0/78287789.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/pe2/78287791.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/proektor-hesoyam-a10-143239875/?c=750000000'
    },{
      id: 8,
      name: 'Веб-камера VAC B12',
      description: 'Веб-камера VAC B12 — идеальное решение для качественной видеосвязи, онлайн-конференций и стримов.',
      price: 10_990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p35/p24/62105080.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p35/p24/62105080.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p52/p24/62105081.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6e/p24/62105082.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/vac-b12-143151119/?c=750000000'
    },{
      id: 9,
      name: 'Смарт-кольцо Oura Ring 4 размер 9 серебристый',
      description: 'Oura Ring 4 — умное кольцо премиум-класса для здоровья и сна.',
      price: 223_659,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p69/73483056.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p69/73483056.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p65/73483057.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p13/73483060.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smart-kol-tso-oura-ring-4-razmer-9-serebristyi-148264491/?c=750000000'
    },{
      id: 10,
      name: 'Робот-пылесос DREAME Robot Vacuum D20 Ultra белый',
      description: 'Представляем вам робот-пылесос DREAME D20 Ultra — ваш идеальный помощник в поддержании чистоты дома.',
      price: 192_830,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p72/56265501.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p72/56265501.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p72/56265504.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p71/56265506.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dreame-robot-vacuum-d20-ultra-belyi-140531550/?c=750000000'
    },
  ];

  getStars(rating:number): string[]{
    const fullStars = Math.floor(rating);
    const halfStar = +(rating % 1 >= 0.5);
    const emptyStars = 5 - fullStars - halfStar;
    return[
      ...Array(fullStars).fill('★'),
      ...Array(halfStar).fill('☆'),
      ...Array(emptyStars).fill('☆'),
    ];
  }

  shareWhatsApp(link: string){
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + link)}`;
    window.open(url, '_blank');
  }

  shareTelegram(link: string, name: string){
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  }
}
