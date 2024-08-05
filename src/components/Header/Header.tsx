import logo from '/logo.png';

const Header = () => {
    return (
        <div className="bg-teal-500 p-2">
            <div className="flex items-center justify-between max-w-[1280px] px-3 mx-auto">
                <img src={logo} alt="logo" width={60} title='Online Nursery' />

                <ul className="flex items-center">
                    <li>
                        <a href="/" className='border rounded p-1 px-3 mr-2 text-white'>Home</a>
                    </li>
                    <li>
                        <a href="/products" className='border rounded p-1 px-3 mr-2 text-white'>Products</a>
                    </li>
                    <li>
                        <a href="/dashboard" className='border rounded p-1 px-3 text-white'>Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;