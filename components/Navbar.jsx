import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Navbar = () => {

    return (
        <nav className="flex w-full justify-around h-16 bg-white fixed top-0 left-0 z-10">
            <Image
                alt="app-logo"
                src="/assets/images/goindiastocks_logo.jpeg"
                width={200}
                height={10}
                className="w-fit h-16 hover:cursor-pointer"
            />
            <div className="flex items-center px-4 md:w-5/12 sm:max-md:w-1/3 w-2/3">
                <button className="flex items-center px-1.5 h-10 w-full border-solid border-2 border-slate-300 bg-neutral-200">
                    <input
                        type="text"
                        className="text-base text-slate-500 p-2 w-full outline-none leading-tight bg-neutral-200"
                        placeholder="Search for a stock"
                    />
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-6 inline-block" />
                </button>
            </div>
            <div className="max-sm:hidden flex justify-around items-center text-sm">
                <button className="mx-4">Contact Us</button>
                <button className="border-solid border-2 border-slate-300 hover:border-slate-700 py-2 px-4 mx-4">SIGN UP</button>
                <button className="border-solid border-2 border-slate-300 hover:border-slate-700 py-2 px-4 mx-4">SIGN IN</button>
            </div>
            <div className="sm:hidden flex justify-center items-center w-8 h-8 rounded-full items-center my-auto mx-0">
                <FontAwesomeIcon icon={faUser} className="inline-block w-4 h-6 hover:cursor-pointer" />
            </div>
        </nav>
    )
}

export default Navbar;
