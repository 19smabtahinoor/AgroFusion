import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font border-t border-secondary">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src={icons.brandLogo} alt="brand" />
                </a>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-primary font-semibold">© 2024 AgroFusion 
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <span>Email: agrofusion24@gmail.com</span>
                    <a className="text-primary">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );
}
