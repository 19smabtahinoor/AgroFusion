import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Hero() {
    return (
        <header>
            <div className="w-5/6 mx-auto mt-[50px] mb-[200px] relative">
                <div className="lg:absolute top-20 flex flex-col gap-y-16">
                    <div className="text-5xl font-bold flex">
                        <h1 className="text-primary">Agro</h1>
                        <span>Fusion</span>
                    </div>
                    <div className="text-slate-700 w-4/6">
                        Empowering farmers with real-time insights to protect crops, manage resources, and thrive in any condition
                    </div>
                </div>
                <Image src={icons.headerFrame} alt="headerFrame" />
            </div>
        </header>
    );
}
