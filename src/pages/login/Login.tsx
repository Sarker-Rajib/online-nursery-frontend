import { ChangeEvent, useState } from "react";
import { FileInput, FormInput } from "../../components/inputs/inputs";
import axios from 'axios';


const Login = () => {
    const [imgData, setImgData] = useState<File | null>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // const { value, files } = e.target;
        const imgFile = e.target.files ? e.target.files[0] : null;
        setImgData(imgFile)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target
        const title = form.title.value
        const category = form.category.value
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const rating = form.rating.value


        if (imgData) {
            const formDataImage = new FormData();
            formDataImage.append('image', imgData);

            try {
                const response = await axios.post('https://api.imgbb.com/1/upload?key=e5fe86c2b9c3074e070a8d5e7c52cd2f', formDataImage);
                const imageUrl = response.data.data.url;

                const dataToSave = {
                    title,
                    category,
                    price,
                    quantity,
                    description,
                    rating,
                    image: imageUrl,
                }

                const res = await axios.post('https://online-nursery-backend-five.vercel.app/api/v1/products/create-product', dataToSave);
                console.log(res);
                alert('Data saved successfully!');


                form.reset()
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-96 border border-green-300 shadow-md p-3 px-4 rounded">
                <h2 className="text-center text-2xl py-4 font-bold">
                    Create a Product
                </h2>


                <form onSubmit={handleSubmit}>
                    <FormInput label='Input your Product Title' name='title' type='text' placeholder='Product Title' required={true} />
                    <FormInput label='Input your Category' name='category' type='text' placeholder='Category' required={true} />
                    <FormInput label='Input your Price' name='price' type='number' placeholder='Price' required={true} />
                    <FormInput label='Input your Quantity' name='quantity' type='number' placeholder='Quantity' required={true} />
                    <FormInput label='Input your Description' name='description' type='text' placeholder='Description' required={true} />
                    <FormInput label='Input your Rating' name='rating' type='number' placeholder='Rating' required={true} />
                    <FileInput label='Upload Product Image' name='image' type='file' onChange={handleChange} placeholder='Product Title' accept="image/*" required={true} />

                    <input type="submit" value={'Submit'} className="bg-green-500 my-3 w-full p-2 rounded text-white cursor-pointer" />
                </form>

            </div>
        </div>
    );
};

export default Login;