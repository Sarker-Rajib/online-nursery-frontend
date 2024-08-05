import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hook';
import { TProduct } from '../../App';
import axios from 'axios';
import { addToCart } from '../../redux/features/cartSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AllProducts = () => {
    const [data, setData] = useState<TProduct[] | null>(null);

    const dispatch = useAppDispatch();
    useEffect(() => {
        axios.get('https://online-nursery-backend-five.vercel.app/api/v1/products')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Header />

            <div>
                <div className="max-w-[1280px] mx-auto px-2 py-6">
                    <h2 className='text-2xl mb-6 underline'>Products Gallery:</h2>

                    <div className='grid grid-cols-4'>
                        {
                            data?.map((item, i) => <div key={i}
                                className='border shadow rounded-lg p-2 overflow-hidden'
                            >
                                <div className='rounded-lg h-44 overflow-hidden'>
                                    <img src={item.image} alt={item.title} className='w-full h-full' />
                                </div>
                                <h3>{item.title}</h3>
                                <p>Details : {item.description.length >= 20 ? item.description.slice(0, 20) + ' ...' : item.description}</p>
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

                </div>
            </div>

            <Footer />
        </>
    );
};

export default AllProducts;