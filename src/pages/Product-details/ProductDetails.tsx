import { useEffect, useState } from "react";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import axios from "axios";
import { TProduct } from "../../App";
import { useLocation } from "react-router";

const ProductDetails = () => {
    const [data, setData] = useState<TProduct>();
    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    console.log(data);

    useEffect(() => {
        axios.get(`https://online-nursery-backend-five.vercel.app/api/v1/products/${id}`)
            .then(response => setData(response.data[0]))
            .catch(error => console.error('Error fetching data:', error));
        setLoading(false)
    }, []);

    return (
        <div>
            {
                data &&
                <div
                    className='border shadow rounded-lg p-2 overflow-hidden'
                >
                    <>
                        <img src={data.image} alt={data.title} className='w-full rounded-lg h-68' />
                        <h3>Name : {data.title}</h3>
                        <p>Details : {data?.description?.length >= 200 ? data?.description.slice(0, 200) : data?.description}</p>
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
                        <br />
                        <button className='border border-red-600 p-2 rounded'
                        >View Details</button>
                    </>
                </div>
            }
        </div>
    );
};

export default ProductDetails;