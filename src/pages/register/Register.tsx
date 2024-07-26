import { FormInput } from "../../components/inputs/inputs";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-96 border border-green-300 shadow-md p-3 px-4 rounded">
                <h2 className="text-center text-2xl py-4 font-bold">
                    Register
                </h2>

                <form>
                    <FormInput label='Input your Name' type='type' placeholder='Your Name' required={true} />
                    <FormInput label='Input your Password' type='password' placeholder='Password' required={true} />
                    <FormInput label='Repeat your Password' type='password' placeholder='Confirm password' required={true} />

                    <input type="submit" value={'Submit'} className="bg-green-500 my-3 w-full p-2 rounded text-white cursor-pointer" />
                </form>
                <br />
                <p className="text-center">Have an account ? <a className="text-teal-400" href="/login">Login</a></p>
                <br />
            </div>
        </div>
    );
};

export default Register;