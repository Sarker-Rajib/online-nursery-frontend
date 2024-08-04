import './App.css'
import axios from 'axios';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { addToCart } from './redux/features/cartSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { tilesImages } from './fake-data/fDAta';
import { Gallery } from "react-grid-gallery";
import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import { Link } from 'react-router-dom';

export type TProduct = {
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
    category: 'Flowers Plants',
    url: "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Flower-Plants.webp"
  },
  {
    category: 'Fruit Plants',
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

  const dispatch = useAppDispatch();

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

  const products = useAppSelector(state => state.cart.products)

  return (
    <>
      {/* header */}
      <Header />

      {/* hero */}
      <Hero />


      {/* Product Search, Filter, and Pagination */}


      {/* Category Section */}
      <>
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

            <>
              {
                products && <p>{products[0]?.quantity}</p>
              }

            </>

          </div >
        </div >
      </>

      {/* Product List */}
      <div className="max-w-[1280px] mx-auto px-2 py-8">
        <h2 className='text-2xl mb-6 underline'>Products Gallery:</h2>
        {
          loading ?
            <p>Loading ... </p>
            :
            <div className='grid grid-cols-4'>
              {
                data?.map((item, i) => <div key={i}
                  className='border shadow rounded-lg p-2 overflow-hidden'
                >
                  <img src={item.image} alt={item.title} className='w-full rounded-lg h-68' />
                  <h3>{item.title}</h3>
                  <p>Details : {item.description.length >= 200 ? item.description.slice(0, 200) : item.description}</p>
                  <p>Category : {item.category}</p>
                  <p>Available Stock : {item.quantity}</p>
                  <p>Rating : {item.rating}</p>
                  <p>Price: ${item.price}</p>
                  <button className='w-full border border-red-600 p-2 rounded'
                    onClick={() => dispatch(addToCart({
                      id: item._id,
                      name: item.title,
                      quantity: 1,
                      price: item.price,
                      image: item.image,
                      categorie: item.category
                    }))}
                  >
                    Add to cart
                  </button>
                  <br />
                  <Link to={`/product/${item._id}`}
                    className='border border-red-600 p-2 rounded block mt-2 text-center'
                  >View Details</Link>
                </div>)
              }
            </div>
        }
      </div>

      {/* Image Gallery */}
      <div className="image-tiles py-4">
        <Gallery images={tilesImages} />
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default Home
