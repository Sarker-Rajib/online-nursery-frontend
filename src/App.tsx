import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

type TProduct = {
  _id: string,
  title: string,
  category: string,
  price: number,
  quantity: number,
  description: string,
  rating: number,
  image: string
}

const categories = [
  {
    category: 'Flowers',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Flower-Plants.webp"
  },
  {
    category: 'Fruits',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Fruits-Plants.webp"
  },
  {
    category: 'Indoor Plants',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Bamboo-Plants.webp"
  },
  {
    category: 'Cactus',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Cactus-Plants.webp"
  },
  {
    category: 'Fertilizers',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Fertilizers.webp"
  },
  {
    category: 'Soil',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Soils.webp"
  },
  {
    category: 'Gardening Tools',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Gardening-Tools.webp"
  },
  {
    category: 'Pebbles',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Pebbles.webp"
  },
  {
    category: 'Tob',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Fertilizers-2.webp"
  },
]

function Home() {
  const [data, setData] = useState<TProduct[] | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('https://online-nursery-backend-five.vercel.app/api/v1/products')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
    setLoading(false)
  }, []);

  // useEffect(() => {
  //   fetch('https://online-nursery-backend-five.vercel.app/api/v1/products')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <Header />
      <Hero />
      <div className="max-w-[1280px] mx-auto px-2">

        <div className='py-24'>

          <h2 className="text-4xl font-bold">Categories</h2>
          <div className="grid grid-cols-4 gap-4">
            {
              categories.map((category, i) => (
                <div key={i} className='text-center'>
                  <img src={category.url} alt="Category" className="w-full p-3 rounded-md" />
                  <h3>{category.category}</h3>
                </div >
              ))
            }
          </div>
        </div >

        <div>
          {
            loading ?
              <p>Loading ... </p>
              :
              data?.map((item, i) => <p key={i}>{item.title}</p>)
          }
        </div>
      </div >
    </>
  )
}

export default Home
