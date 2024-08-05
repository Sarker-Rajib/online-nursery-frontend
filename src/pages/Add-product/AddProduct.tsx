import { ChangeEvent, useState } from "react";
import { FileInput, FormInput, FormSelects, TextAreaInput } from "../../components/inputs/inputs";
import axios from 'axios';

const AddProduct = () => {
    const [imgData, setImgData] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imgFile = e.target.files ? e.target.files[0] : null;
        setImgData(imgFile);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const title = form.title.value;


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

                const res = await axios.post('https://online-nursery-backend-five.vercel.app/api/v1/products/create-product', dataToSave);
                console.log(res.data);

                if (res.data.err) {
                    alert(res.data.err.message);
                    console.log(res.data.err.message);
                } else {
                    alert('Data saved successfully!');
                    form.reset();
                    setImgData(null);
                }

            } catch (error) {
                console.error('Error uploading image or saving data:', error);
                setError('Failed to upload image or save data. Please try again.');
            }
        } else {
            setError('Please select an image to upload.');
        }

        setLoading(false);
    };


    const categories = [
        'Flowers Plants',
        'Fruit Plants',
        'Indoor Plants',
        'Cactus',
        'Fertilizers',
        'Soil',
        'Gardening Tools',
        'Pebbles',
        'Tob'
    ];

    const ratingNumbers: Array<number> = [
        1,
        2,
        3,
        4,
        5,
    ]

    return (
        <div className="p-4 flex items-center justify-center">
            <div className="w-full max-w-[800px] border border-green-300 shadow-md p-3 px-4 rounded">
                <h2 className="text-center text-2xl py-4 font-bold">
                    Create a Product
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormInput label='Input your Product Title' name='title' type='text' placeholder='Product Title' required />
                        <FormSelects label='Select your Category' name='category' required options={categories} />
                        <FormInput label='Input your Price' name='price' type='number' placeholder='Price' required />
                        <FormInput label='Input your Quantity' name='quantity' type='number' placeholder='Quantity' required />
                        <FormSelects label='Select your Rating' name='rating' required options={ratingNumbers} />
                    </div>
                    <TextAreaInput label='Input your Description' name='description' required />
                    <FileInput label='Upload Product Image' name='image' type='file' onChange={handleChange} placeholder='Product Title' accept="image/*" required />

                    <input type="submit" value='Add Product' className="bg-green-500 my-3 w-full p-2 rounded text-white cursor-pointer" disabled={loading} />
                    {loading && <p>Please Wait...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                </form>

            </div>
        </div>
    );
};

export default AddProduct;
