import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

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

  useEffect(() => {
    axios.get('https://online-nursery-backend-five.vercel.app/api/v1/products')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // useEffect(() => {
  //   fetch('https://online-nursery-backend-five.vercel.app/api/v1/products')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <div className='max-w-[1280px] px-3 mx-auto'>
        <p className="read-the-docs">
          Home
        </p>

        <div>
          {
            data?.map((item, i) => <p key={i}>{item.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default Home
