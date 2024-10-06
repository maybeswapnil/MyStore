import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import ImageForm from './ImageForm';
import Collection from './Collection';
import { useNavigate } from 'react-router-dom';

const mappedImages = {
  SS001: {
      name: 'Walking Monk',
      url: 'https://images.pexels.com/photos/18347410/pexels-photo-18347410/free-photo-of-pedestrians-walking-along-a-decorated-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS001',
      camera: 'Canon EOS 5D Mark IV',
      shipping_time: '5-7 Business Days'
  },
  SS002: {
      name: 'Ghuiyan',
      url: 'https://images.pexels.com/photos/3039072/pexels-photo-3039072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS002',
      camera: 'Nikon D850',
      shipping_time: '5-7 Business Days'
  },
  SS003: {
      name: 'Ladakh',
      url: 'https://images.pexels.com/photos/17615049/pexels-photo-17615049/free-photo-of-scenery-of-barren-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS003',
      camera: 'Sony Alpha A7R III',
      shipping_time: '5-7 Business Days'
  },
  SS004: {
      name: 'Bangalore',
      url: 'https://images.pexels.com/photos/18466770/pexels-photo-18466770/free-photo-of-crowns-of-trees-seen-from-below.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS004',
      camera: 'Canon EOS 6D',
      shipping_time: '5-7 Business Days'
  },
  SS005: {
      name: 'Banaras',
      url: 'https://images.pexels.com/photos/27556831/pexels-photo-27556831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS005',
      camera: 'Fujifilm X-T4',
      shipping_time: '5-7 Business Days'
  },
  SS006: {
      name: 'Corrupted',
      url: 'https://images.pexels.com/photos/28736029/pexels-photo-28736029/free-photo-of-majestic-mountain-landscape-with-verdant-valleys.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS006',
      camera: 'Leica Q2',
      shipping_time: '5-7 Business Days'
  },
  SS007: {
      name: 'Clevage',
      url: 'https://images.pexels.com/photos/28737029/pexels-photo-28737029/free-photo-of-breathtaking-mountain-valley-landscape-view.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS007',
      camera: 'Canon EOS 90D',
      shipping_time: '5-7 Business Days'
  },
  SS008: {
      name: 'Cassett',
      url: 'https://images.pexels.com/photos/1745936/pexels-photo-1745936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      smallurl: 'https://i.imgur.com/X9gqYOh.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS008',
      camera: 'Sony A7 III',
      shipping_time: '5-7 Business Days'
  },
  SS009: {
      name: 'Contrasty Leaf',
      url: 'https://images.unsplash.com/photo-1588417221066-8b8184004cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
      smallurl: 'https://i.imgur.com/Qlbwbib.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS009',
      camera: 'Canon EOS R5',
      shipping_time: '5-7 Business Days'
  },
  SS010: {
      name: 'Cassett In the Sky',
      url: 'https://images.pexels.com/photos/6064637/pexels-photo-6064637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      smallurl: 'https://i.imgur.com/MOuVb5C.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS010',
      camera: 'Nikon Z6',
      shipping_time: '5-7 Business Days'
  },
  SS011: {
      name: 'Pretty White Duck',
      url: 'https://images.unsplash.com/photo-1588417220543-160f591512cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80',
      smallurl: 'https://i.imgur.com/yihklXO.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS011',
      camera: 'Panasonic Lumix GH5',
      shipping_time: '5-7 Business Days'
  },
  SS012: {
      name: 'Flower',
      url: 'https://images.pexels.com/photos/1785271/pexels-photo-1785271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      smallurl: 'https://i.imgur.com/zWry6uz.jpg',
      price: {
          'Small (12inch*18inch)': 2000,
          'Medium (24inch*36inch)': 2500,
          
      },
      size: 'Small (12inch*18inch)',
      quantity: 1,
      key: 'SS012',
      camera: 'Olympus OM-D E-M10 Mark III',
      shipping_time: '5-7 Business Days'
  }
};


export default function ProductPage() {

  const [sku, setSku] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const skuFromUrl = params.get('sku');
    if (skuFromUrl) {
      setSku(skuFromUrl);
    }
    console.log("skuFromUrl", skuFromUrl)
  }, []);

  const navigate = useNavigate();

  if (sku != '') {
    return (
      <>
        <div className="full-window-container">
          <a href="#" class="back-button" onClick={() => navigate('/collection')}>Back</a>
     
          <div className="product-page-container">
            <div className="product-container" >
              <div
                className="product-card"
              >
                {/* Canvas-like frame around the image */}
                <div className="image-frame">
                  <img className="product-image" src={mappedImages[sku].url} alt={mappedImages[sku].name} />
                </div>
              </div>
            </div>
            <div className="product-page-details">
              <ImageForm res={mappedImages[sku]} />
            </div>
          </div>
        </div>
        <Collection />
      </>

    );
  } else {
    return null
  }

}
