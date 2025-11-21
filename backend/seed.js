require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
{ name: 'Smartphone Max 20', category: 'Mobiles', price: 19999, rating: 4.5, image: "/uploads/Smartphone_Max_20.jpeg" },
{ name: 'Smartphone Lite 10', category: 'Mobiles', price: 9999, rating: 4.0, image: "/uploads/Smartphone_Lite_10.jpeg" },
{ name: 'Wireless Headphones Pro', category: 'Electronics', price: 4999, rating: 4.6, image: "/uploads/Wireless_Headphones_Pro.jpeg" },
{ name: 'Laptop Ultra 14', category: 'Computers', price: 59999, rating: 4.4, image: "/uploads/Laptop_Ultra_14.jpeg" },
{ name: 'Gaming Keyboard RGB', category: 'Accessories', price: 2999, rating: 4.3, image: "/uploads/Gaming_Keyboard_RGB.jpeg" },
{ name: '4K Smart TV 55"', category: 'Electronics', price: 45999, rating: 4.7, image: "/uploads/4K_Smart_TV_55.jpeg" },
{ name: 'Bluetooth Speaker Mini', category: 'Electronics', price: 1299, rating: 4.1, image: "/uploads/Bluetooth_Speaker_Mini.jpeg" },
{ name: 'Fitness Band X', category: 'Wearables', price: 1999, rating: 3.9, image: "/uploads/Fitness_Band_X.jpeg" },
{ name: 'Smartwatch Series 5', category: 'Wearables', price: 8999, rating: 4.2, image: "/uploads/Smartwatch_Series_5.jpeg" },
{ name: 'DSLR Camera Pro', category: 'Cameras', price: 74999, rating: 4.8, image: "/uploads/DSLR_Camera_Pro.jpeg" },
{ name: 'Phone Case Clear', category: 'Accessories', price: 299, rating: 4.0, image: "/uploads/Phone_Case_Clear.jpeg" },
{ name: 'Wireless Charger Pad', category: 'Accessories', price: 999, rating: 3.8, image: "/uploads/Wireless_Charger_Pad.jpeg" },
{ name: "Mechanical Gaming Mouse X7", category: "Accessories", price: 1499, rating: 4.4, image: "/uploads/Mechanical_Gaming_Mouse_X7.jpeg" },
{ name: "Noise Cancelling Earbuds Pro", category: "Electronics", price: 2999, rating: 4.5, image: "/uploads/Noise_Cancelling_Earbuds_Pro.jpeg" },
{ name: "Portable SSD 1TB", category: "Computers", price: 6999, rating: 4.8, image: "/uploads/Portable_SSD_1TB.jpeg" },
{ name: "Gaming Chair Elite", category: "Furniture", price: 12999, rating: 4.6, image: "/uploads/Gaming_Chair_Elite.jpeg" },
{ name: "Action Camera 4K", category: "Cameras", price: 8999, rating: 4.3, image: "/uploads/Action_Camera_4K.jpeg" },
{ name: "Smart Home Speaker Mini", category: "Electronics", price: 2499, rating: 4.2, image: "/uploads/Smart_Home_Speaker_Mini.jpeg" },
{ name: "Wireless Keyboard Slim", category: "Accessories", price: 1799, rating: 4.1, image: "/uploads/Wireless_Keyboard_Slim.jpeg" },
{ name: "Curved Monitor 27 Inch", category: "Computers", price: 18999, rating: 4.7, image: "/uploads/Curved_Monitor_27_inch.jpeg" },
{ name: "Drone Quadcopter Lite", category: "Gadgets", price: 14999, rating: 4.4, image: "/uploads/Drone_Quadcopter_Lite.jpeg" },
{ name: "VR Headset Pro", category: "Gadgets", price: 20999, rating: 4.6, image: "/uploads/VR_Headset_Pro.jpeg" },
{ name: "Smart LED Strip RGB", category: "Accessories", price: 799, rating: 4.0, image: "/uploads/Smart_LED_Strip_RGB.jpeg" },
{ name: "Powerbank Ultra 20000mAh", category: "Electronics", price: 1599, rating: 4.4, image: "/uploads/Powerbank_Ultra_20000mAh.jpeg" },
{ name: "Wireless Router AX1500", category: "Electronics", price: 3499, rating: 4.2, image: "/uploads/Wireless_Router_AX1500.jpeg" }
];

async function seed() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI not set');
    await mongoose.connect(uri);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seeded products');
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
