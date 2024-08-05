import axios from "axios";
import { useEffect, useState } from "react";
import { TProduct } from "../../App";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [deletePop, setDeletePop] = useState<string | null>(null);

    useEffect(() => {
        axios.get('https://online-nursery-backend-five.vercel.app/api/v1/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [deletePop]);

    const handleDelete = async (id: string) => {
        const res = await axios.delete(`https://online-nursery-backend-five.vercel.app/api/v1/products/delete-product/${id}`)
        console.log(res.data);
        setDeletePop(null)
    }

    return (
        <>
            <div>
                <Link to={'/dashboard/add-product'} className="border p-2 px-6 inline-block bg-cyan-500 text-white rounded-lg mb-2">Add a New Product</Link>

                <h4 className="text-xl"> # Product list</h4>
                <table className="w-full border bg-white rounded-lg overflow-hidden border-indigo-500">
                    <thead className="bg-slate-500 text-white">
                        <tr>
                            <td className="p-1">Image</td>
                            <td className="p-1">Title</td>
                            <td className="p-1">Price</td>
                            <td className="p-1">Category</td>
                            <td className="p-1">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr key={i}>
                                <td className="p-1">
                                    <img width={50} height={50} src={product.image} alt={product?.title} className="rounded-lg" />
                                </td>
                                <td className="p-1">{product?.title}</td>
                                <td className="p-1">${product?.price}</td>
                                <td className="p-1">{product?.category}</td>
                                <td className="p-1">
                                    <button
                                        className='border border-red-600 p-2 rounded inline-block ms-2 mt-2 text-center'
                                    >
                                        Update
                                    </button>
                                    <button
                                        className='border border-red-600 p-2 rounded inline-block ms-2 mt-2 text-center'
                                        onClick={() => setDeletePop(product._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


            {/* pop up */}
            {deletePop &&
                <div className="min-h-screen bg-white bg-opacity-5 backdrop-blur-sm flex items-center justify-center fixed left-0 top-0 w-full">
                    <div className="min-w-[375px] text-center p-4 py-6 rounded-lg text-white bg-purple-700">
                        <p className="mb-2">Do you want to delete This item ?</p>
                        <button
                            className='border border-red-600 p-2 px-6 rounded inline-block ms-2 mt-2 text-center'
                            onClick={() => handleDelete(deletePop)}
                        >
                            Yes
                        </button>
                        <button
                            className='border border-red-600 p-2 px-6 rounded inline-block ms-2 mt-2 text-center'
                            onClick={() => setDeletePop(null)}
                        >
                            No
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default Products;