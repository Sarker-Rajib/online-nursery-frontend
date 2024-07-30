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


      <div>
        {
          loading ?
            <p>Loading ... </p>
            :
            data?.map((item, i) => <p key={i}>{item.title}</p>)
        }
      </div>
    </>
  )
}

export default Home
