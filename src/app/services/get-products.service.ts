import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  private products = new BehaviorSubject([
    {
      id: 1,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (4).png',
      description: 'Laptop XS3000 WiFi Smart',
      price: '310.00',
      count: 1,
    },
    {
      id: 2,
      title: 'TV',
      image: '../../assets/images/products/New folder/tv1 (4).png',
      description: 'Smart TV Extra Premium',
      price: '430.00',
      count: 1,
    },
    {
      id: 3,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (1).png',
      description: 'Headphones XS3000 WiFi Smart',
      price: '95.00',
      count: 1,
    },
    {
      id: 4,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (3).png',
      description: "Laptops Ellite Pro Book 15'6 7500U",
      price: '570.00',
      count: 1,
    },
    {
      id: 5,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (2).png',
      description: 'Headphones XS3000 WiFi Smart',
      price: '50.00',
      count: 1,
    },
    {
      id: 6,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (1).png',
      description: 'Laptops VX3000 Extra Light',
      price: '400.00',
      count: 1,
    },
    {
      id: 7,
      title: 'Chairs',
      image: '../../assets/images/products/New folder/Chairs 2.png',
      description: "Chairs Aenean Perro",
      price: '110.99',
      count: 1,
    },
    {
      id: 39,
      title: 'Headphones',
      image: '../../assets/images/products/New folder/headphone1.png',
      description: 'Headphones XS3000 WiFi Smart',
      price: '30.00',
      count: 1,
    },
    {
      id: 8,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (2).png',
      description: 'Laptops Tablet VX4000 8500 3TB',
      price: '520.00',
      count: 1,
    },

    {
      id: 9,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (4).png',
      description: 'Headphones XS3000 WiFi Smart Wireless',
      price: '45.00',
      count: 1,
    },

    {
      id: 10,
      title: 'TV',
      image: '../../assets/images/products/New folder/tv1 (1).png',
      description: 'Smart TV Extra Premium',
      price: '545.00',
      count: 1,
    },
    {
      id: 11,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (4).png',
      description: 'Headphones XS3000 WiFi Smart',
      price: '45.00',
      count: 1,
    },
    {
      id: 12,
      title: 'Chairs',
      image: '../../assets/images/products/New folder/Chairs 3png.png',
      description: "Chairs Dono Purple",
      price: '229.99',
      count: 1,
    },

   
    {
      id: 13,
      title: 'TV',
      image: '../../assets/images/products/New folder/tv1 (3).png',
      description: 'Smart TV Extra Premium',
      price: '920.00',
      count: 1,
    },
    {
      id: 14,
      title: 'Phones',
      image: '../../assets/images/products/phone1.png',
      description: 'Mobial 5G 128  50 Pixle',
      price: '99.99',
      count: 1,
    },
    {
      id: 15,
      title: 'Phones',
      image: '../../assets/images/products/phone2.png',
      description: 'Mobial 5G 128  50 Pixle',
      price: '345.00',
      count: 1,
    },
    {
      id: 16,
      title: 'Phones',
      image: '../../assets/images/products/phone3.png',
      description: 'Mobial 5G 128  50 Pixle',
      price: '129.99',
      count: 1,
    },
    {
      id: 17,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (4).png',
      description: 'Headphones XS3000 WiFi Smart Wireless',
      price: '45.00',
      count: 1,
    },
    {
      id: 18,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (3).png',
      description: 'Headphones XS3000 WiFi Smart',
      price: '30.00',
      count: 1,
    },
    {
      id: 19,
      title: 'Phones',
      image: '../../assets/images/products/phone4.png',
      description: 'Mobial 5G 128  50 Pixle',
      price: '99.99',
      count: 1,
    },
    {
      id: 20,
      title: 'Photo Camera',
      image: '../../assets/images/products/New folder/Photocamera1.png',
      description: "Photo Camera Ellite Pro Book 15'6 7500U",
      price: '35.00',
      count: 1,
    },
    {
      id: 21,
      title: 'Smart Watch',
      image: '../../assets/images/products/New folder/Photocamera1 (1).png',
      description: 'Smart Watch Smart Watch ',
      price: '75.00',
      count: 1,
    },
    {
      id: 22,
      title: 'Phones',
      image: '../../assets/images/products/phone5.png',
      description: 'Mobial 5G 128  50 Pixle',
      price: '99.99',
      count: 1,
    },
    {
      id: 23,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (4).png',
      description: 'Laptops VX3000 Extra Light',
      price: '399.99',
      count: 1,
    },

    {
      id: 24,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (5).png',
      description: 'Laptops VX4000 8500 3TB',
      price: '520.00',
      count: 1,
    },
    {
      id: 25,
      title: 'Smart Watch',
      image: '../../assets/images/products/New folder/Photocamera1 (1).png',
      description: 'Smart Watch Smart Watch ',
      price: '75.00',
      count: 1,
    },
    {
      id: 26,
      title: 'Headphones',
      image: '../../assets/images/products/headphone1 (4).png',
      description: 'Headphones XS3000 WiFi Smart Wireless',
      price: '45.00',
      count: 1,
    },
    {
      id: 27,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (1).png',
      description: "Laptops Ellite Pro Book 15'6 7500U",
      price: '1200.00',
      count: 1,
    },
    {
      id: 28,
      title: 'Photo Camera',
      image: '../../assets/images/products/New folder/Photocamera1.png',
      description: "Photo Camera Ellite Pro Book 15'6 7500U",
      price: '35.00',
      count: 1,
    },
    {
      id: 29,
      title: 'Smart Watch',
      image: '../../assets/images/products/New folder/Photocamera1 (1).png',
      description: 'Smart Watch Smart Watch ',
      price: '75.00',
      count: 1,
    },

    {
      id: 31,
      title: 'TV',
      image: '../../assets/images/products/New folder/tv1 (3).png',
      description: 'Smart TV Extra Premium',
      price: '920.00',
      count: 1,
    },
    {
      id: 32,
      title: 'Photo Camera',
      image: '../../assets/images/products/New folder/Photocamera1 (2).png',
      description: "Photo Camera Ellite Pro Book 15'6 7500U",
      price: '25.99',
      count: 1,
    },
    {
      id: 33,
      title: 'Photo Camera',
      image: '../../assets/images/products/New folder/Photocamera1 (1).png',
      description: "Photo Camera Ellite Pro Book 15'6 7500U",
      price: '75.00',
      count: 1,
    },
    {
      id: 34,
      title: 'Smart Watch',
      image: '../../assets/images/products/New folder/Smartwatch1.png',
      description: 'Smart Watch Smart Watch Zoop',
      price: '75.00',
      count: 1,
    },

    {
      id: 35,
      title: 'TV',
      image: '../../assets/images/products/New folder/tv1 (2).png',
      description: 'Smart TV Extra Premium',
      price: '999.99',
      count: 1,
    },

    {
      id: 36,
      title: 'TV',
      image: '../../assets/images/products/New folder/tv1 (5).png',
      description: 'Smart TV Extra Premium',
      price: '850.00',
      count: 1,
    },
    {
      id: 37,
      title: 'Photo Camera',
      image: '../../assets/images/products/New folder/Photocamera1 (2).png',
      description: "Photo Camera Ellite Pro Book 15'6 7500U",
      price: '25.99',
      count: 1,
    },
    {
      id: 38,
      title: 'Chairs',
      image: '../../assets/images/products/New folder/Chairs 1.png',
      description: "Chairs Aenean Perro",
      price: '129.99',
      count: 1,
    },
    {
      id: 39,
      title: 'Headphones',
      image: '../../assets/images/products/New folder/headphone1.png',
      description: 'Headphones XS3000 WiFi Smart',
      price: '30.00',
      count: 1,
    },
    
    {
      id: 40,
      title: 'Laptops',
      image: '../../assets/images/products/laptop (3).png',
      description: 'Laptop XS3000 WiFi Smart',
      price: '899.99',
      count: 1,
    },
    
  ]);
  arrProducts = this.products.asObservable();
  constructor() {}
}
// Dono Purple Wireless
