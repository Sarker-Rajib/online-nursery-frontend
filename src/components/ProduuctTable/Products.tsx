import axios from "axios";
import { useEffect, useState, ChangeEvent } from "react";
import { TProduct } from "../../App";
import { Link } from "react-router-dom";
import { FileInput, FormInput, FormSelects, TextAreaInput } from "../../components/inputs/inputs";
import { categories, ratingNumbers } from "../../pages/Add-product/AddProduct";


const Products = () => {
    const [imgData, setImgData] = useState<File | null>(null);
    const [products, setProducts] = useState<TProduct[]>([]);
    const [deletePop, setDeletePop] = useState<string | null>(null);
    const [updatePop, setUpdatePop] = useState<TProduct | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('https://online-nursery-backend-five.vercel.app/api/v1/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [deletePop, updatePop]);

    const handleDelete = async (id: string) => {
        const res = await axios.delete(`https://online-nursery-backend-five.vercel.app/api/v1/products/delete-product/${id}`)
        console.log(res.data);
        setDeletePop(null)
    }



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imgFile = e.target.files ? e.target.files[0] : null;
        setImgData(imgFile);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const title = form.productTitle.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;


        if (imgData) {
            const formDataImage = new FormData();
            formDataImage.append('image', imgData);

            try {
                const response = await axios.post('https://api.imgbb.com/1/upload?key=c487e61e860be5a8a1177f433952b5ea', formDataImage);
                const imageUrl = response.data.data.url;

                const dataToSave = {
                    title,
                    category,
                    price,
                    quantity,
                    description,
                    rating,
                    image: imageUrl,
                };

                const res = await axios.put(`https://online-nursery-backend-five.vercel.app/api/v1/products/update-product/${updatePop?._id}`, dataToSave);
                console.log(res.data);

                if (res.data.err) {
                    alert(res.data.err.message);
                    console.log(res.data.err.message);
                } else {
                    alert('Data saved successfully!');
                    form.reset();
                    setImgData(null);
                    setUpdatePop(null)
                }

            } catch (error) {
                console.error('Error uploading image or saving data:', error);
                setError('Failed to upload image or save data. Please try again.');
            }
        } else {
            try {
                const dataToSave = {
                    title,
                    category,
                    price,
                    quantity,
                    description,
                    rating,
                };

                const res = await axios.put(`https://online-nursery-backend-five.vercel.app/api/v1/products/update-product/${updatePop?._id}`, dataToSave);
                console.log(res.data);

                if (res.data.err) {
                    alert(res.data.err.message);
                    console.log(res.data.err.message);
                } else {
                    alert('Data saved successfully!');
                    form.reset();
                    setUpdatePop(null)
                }

            } catch (error) {
                console.error('Error uploading image or saving data:', error);
                setError('Failed to upload image or save data. Please try again.');
            }
        }

        setLoading(false);
    };

    return (
        <>
            <div>
                <Link to={'/dashboard/add-product'} className="border p-2 px-6 inline-block bg-cyan-500 text-white rounded-lg mb-2">Add a New Product</Link>

                <h4 className="text-xl"> # Product list</h4>
                <table className="w-full border bg-white rounded-lg overflow-hidden border-indigo-500">
                    <thead className="bg-slate-500 text-white">
                        <tr>
                            <td className="p-1">Image</td>
                            <td className="p-1">productTitle</td>
                            <td className="p-1">Price</td>
                            <td className="p-1">Category</td>
                            <td className="p-1">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr key={i}>
                                <td className="p-1 border-b">
                                    <span className="inline-block w-7 h-7 overflow-hidden">
                                        <img src={product.image} alt={product?.title} className="rounded-lg" />
                                    </span>
                                </td>
                                <td className="p-1 border-b">{product?.title}</td>
                                <td className="p-1 border-b">${product?.price}</td>
                                <td className="p-1 border-b">{product?.category}</td>
                                <td className="p-1 border-b">
                                    <button
                                        className='border border-red-600 p-2 rounded inline-block ms-2 mt-2 text-center'
                                        onClick={() => setUpdatePop(product)}
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

            {updatePop &&
                <div className="min-h-screen bg-white bg-opacity-5 backdrop-blur-sm flex items-center justify-center fixed left-0 top-0 w-full">
                    <div className="min-w-[375px] lg:min-w-[600px] text-center p-4 py-6 rounded-lg bg-teal-700">
                        <h2 className="pb-2 text-white">Update Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <FormInput label='Input your Product title' value={updatePop?.title} name='productTitle' type='text' placeholder='Product title' required />
                                <FormSelects label='Select your Category' value={updatePop?.category} name='category' required options={categories} />
                                <FormInput label='Input your Price' value={updatePop?.price} name='price' type='number' placeholder='Price' required />
                                <FormInput label='Input your Quantity' value={updatePop?.quantity} name='quantity' type='number' placeholder='Quantity' required />
                                <FormSelects label='Select your Rating' value={updatePop?.rating} name='rating' required options={ratingNumbers} />
                            </div>
                            <TextAreaInput value={updatePop.description} label='Input your Description' name='description' required />
                            <FileInput label='Upload Product Image' name='image' type='file' onChange={handleChange} placeholder='Product productTitle' accept="image/*" />

                            <input type="submit" value={`${loading ? 'Please Wait' : 'Update Product'}`} className={`${loading ? 'bg-cyan-500' : 'bg-slate-500'}  my-3 w-full p-2 rounded text-white cursor-pointer`} disabled={loading} />
                            {error && <p className="text-red-500">{error}</p>}
                        </form>
                        <button
                            className='border border-red-600 p-2 px-6 rounded inline-block ms-2 mt-2 text-center'
                            onClick={() => setUpdatePop(null)}
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