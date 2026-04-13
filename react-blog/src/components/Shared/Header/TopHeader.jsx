import {FaFacebookF, FaInstagram, FaTelegram, FaYoutube} from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className="bg-linear-to-r from-[#5885FD] to-[#FE5672] py-1 text-white">
            <div className="flex justify-center lg:justify-between items-center container mx-auto px-24">
                <div className="flex gap-6">
                    <FaFacebookF/>
                    <FaYoutube/>
                    <FaInstagram/>
                    <FaTelegram/>
                </div>
                <div className="hidden lg:block">
                    <div className="flex gap-6">
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Success Story</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;