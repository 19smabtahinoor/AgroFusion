import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Hero() {
    return (
        <header>
            <div className="w-full lg:w-5/6 mx-auto mt-[50px] mb-[200px] relative">
                <div className="lg:absolute top-20 lg:left-14 flex flex-col">
                    <div className="text-5xl font-bold flex mb-[8%]">
                        <h1 className="text-primary">Agro</h1>
                        <span>Fusion</span>
                    </div>
                    <div className="text-slate-700 w-4/6">
                        Empowering farmers with real-time insights to protect crops, manage resources, and thrive in any condition
                    </div>
                </div>
                <Image src={icons.headerFrame} alt="headerFrame" className="lg:pl-[60px] hidden md:block" />
            </div>
        </header>
    );
}
