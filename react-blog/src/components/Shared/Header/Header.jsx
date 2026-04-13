import logo from "../../../assets/logo.jpg";
import {PiTelegramLogoLight} from "react-icons/pi";
import {GoSearch} from "react-icons/go";
import {CiMenuBurger} from "react-icons/ci";
import {IoCartOutline} from "react-icons/io5";

const Header = () => {
    return (
        <div className="shadow-2xl ">
            <div className="flex justify-between items-center container mx-auto py-3 px-24">
                <img className="w-36" src={logo} alt="Brand Logo"/>
                <div className="flex items-center gap-12">
                    <div className="flex gap-6">
                        <p>Home</p>
                        <p>Success Story</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-2 items-center bg-[#FB5875] text-white justify-center px-3 py-1 rounded-md">
                            <PiTelegramLogoLight/>
                            <p>Join Now</p>
                        </div>
                        <div className="flex gap-3 text-xl">
                            <GoSearch />
                            <IoCartOutline />
                            <CiMenuBurger />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;