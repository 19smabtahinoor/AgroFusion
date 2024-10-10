import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font border-t border-secondary">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row justify-between flex-col">
                <div className="flex items-center">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={icons.brandLogo} alt="brand" />
                    </a>
                    <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-primary font-semibold">© 2024 AgroFusion
                    </p>
                </div>
                <p className="text-primary font-semibold">agrofusion24@gmail.com</p>
            </div>
        </footer>
    );
}
