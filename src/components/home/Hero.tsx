import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Hero() {
    return (
        <header>
            <div className="w-5/6 mx-auto flex flex-col space-y-8 md:flex-row items-center mt-[50px] mb-[120px]">

                <div className="relative">
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <div className="text-3xl lg:text-5xl font-bold">
                            <h1 className="text-black text-center lg:text-left leading-[32px] lg:leading-[55px]"><span className="text-primary">AgroFusion:</span> Sustainable Farming  Powered by <br /> Technology
                            </h1>
                        </div>
                        <p className="text-slate-500 w-2/3 text-center lg:text-left text-base">Empowering farmers with real-time insights to protect crops, manage resources, and thrive in any condition</p>
                    </div>
                    <div className="hidden lg:block w-[600px] h-[600px] bg-primary absolute filter opacity-10 -top-[400px] rotate-45 -left-[200px] blur-3xl"></div>
                </div>

                <div>
                    <Image src={icons.farmer_2} alt="frame" />
                </div>

            </div>
        </header>
    );
}