import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 lg:w-5/6 mx-auto">
            <div className="lg:relative lg:border-r lg:border-slate-300 flex flex-col gap-y-10">
                <div className="flex flex-col lg:flex-row items-center z-10">
                    <Image src={icons.agriculturalRobot} className="w-full lg:w-[200px] lg:mr-5" alt="robot" />
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2 text-center lg:text-left">About Us</h1>
                        <p className="text-sm w-full text-justify lg:w-5/6">Our team, &apos;Team AgroFusion,&apos; created &apos;AgroFusion,&apos; a groundbreaking blend of cutting-edge software and hardware, designed to be the ultimate all-in-one agricultural solution. This powerful web app equips farmers with real-time field data, expert farming advice driven by detection systems and NASA datasets, predictive insights for the future, critical alerts, and AI-powered advisory and support. By delivering precise and actionable information, AgroFusion tackles key challenges like water management, disaster prevention, crop protection, and yield optimization. The goal is clear: to revolutionize farming, slash crop losses, boost production, and protect livelihoods, ultimately curbing agricultural economic crises and reducing global food insecurity.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:absolute lg:top-[95%] items-center lg:left-[15%] lg:-z-10">
                    <Image src={icons.hardware} className="w-full lg:w-[200px] mr-5" alt="robot" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2 text-center lg:text-left mt-3 lg:mt-0">Used Hardware</h1>
                        <p className="text-sm w-full text-justify lg:w-5/6">We developed <span className="text-primary font-bold">AgroFusion</span> to empower farmers with real-time data and actionable insights, helping them navigate unpredictable weather, manage water resources, and protect their crops. By integrating NASA’s datasets with advanced sensor technology, our app provides a comprehensive overview of field conditions, enabling farmers to make informed decisions and ensure a sustainable future for their farms</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">Our Mission</h1>
                <p className="w-5/6 mx-auto text-justify">is to help farmers protect crops, optimize yields, and ensure <span className="text-primary">sustainable farming</span> using cutting-edge sensors and NASA’s datasets</p>
            </div>
        </div>
    );
}

