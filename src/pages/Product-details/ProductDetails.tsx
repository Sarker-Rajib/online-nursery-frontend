import { useEffect, useState } from "react";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import axios from "axios";
import { TProduct } from "../../App";
import { useLocation } from "react-router";
import Header from "../../components/Header/Header";

const ProductDetails = () => {
    const [data, setData] = useState<TProduct>();

    const dispatch = useAppDispatch();

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    console.log(data);

    useEffect(() => {
        axios.get(`https://online-nursery-backend-five.vercel.app/api/v1/products/${id}`)
            .then(response => setData(response.data[0]))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            {/* Header */}
            <Header />

            <div>
                {
                    data ?
                        <div
                            className='rounded-lg p-2 overflow-hidden'
                        >
                            <div className="p-2 rounded gap-2 grid shadow-lg lg:grid-cols-2 max-w-[600px] mx-auto">
                                <div className="">
                                    <img src={data.image} alt={data.title} className='w-full rounded-lg h-68' />
                                </div>
                                <div>
                                    <h3>Name : {data.title}</h3>
                                    <p>Details : {data?.description}</p>
                                    <p>Category : {data.category}</p>
                                    <p>Available Stock : {data.quantity}</p>
                                    <p>Rating : {data.rating}</p>
                                    <p>Price: ${data.price}</p>
                                    <button className='border border-red-600 p-2 rounded'
                                        onClick={() => dispatch(addToCart({
                                            id: data._id,
                                            name: data.title,
                                            quantity: 1,
                                            price: data.price,
                                            image: data.image,
                                            categorie: data.category
                                        }))}
                                    >
                                        Add to cart
                                    </button>

                                </div>
                            </div>
                        </div>
                        :
                        <p>Loading</p>
                }
            </div>
        </>
    );
};

export default ProductDetails;