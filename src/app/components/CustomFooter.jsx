import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function CustomFooter() {
    return (
        <div className="w-full bg-salmon h-[400px] text-white relative flex items-center">
            <div className="grid grid-cols-3 w-full text-center items-center">
                <div className="flex flex-col items-end space-y-6 pr-10">
                    <div className="flex flex-col space-y-4">
                        <a
                            href="https://www.tiktok.com"
                            className="hover:text-gray-800 transition duration-300 flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-8 h-8 mr-2" />
                            Kursulina 12, Belgrade, Serbia
                        </a>
                        <a
                            href="https://www.tiktok.com"
                            className="hover:text-gray-800 transition duration-300 flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faMobile} className="w-8 h-8 mr-2" />
                            063/18-81-677
                        </a>
                        <div className="flex flex-row justify-start space-x-4">
                        <a
                            href="https://www.facebook.com"
                            className="hover:text-blue-800 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            className="hover:text-pink-800 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                        </a>
                        <a
                            href="https://www.tiktok.com"
                            className="hover:text-gray-800 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
                        </a>
                    </div>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={"/images/logo6.png"}
                        width={150}
                        height={70}
                        alt="Logo"
                    />
                    <p className="text-sm text-center mt-4 w-2/3">
                        © Ego Aesthetics Injectables Ltd 2024 | Ltd Registration Number 12240918 Vat Number 341384414
                    </p>
                </div>
                <div className="flex flex-col items-start space-y-2 pl-10">
                    <p className="cursor-pointer hover:text-black">POČETNA</p>
                    <p className="cursor-pointer hover:text-black">TRETMANI</p>
                    <p className="cursor-pointer hover:text-black">O NAMA</p>
                    <p className="cursor-pointer hover:text-black">CENOVNIK</p>
                </div>
            </div>
        </div>
    );
}
