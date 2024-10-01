import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative -z-10 mt-[100px]">
            <div className="w-full lg:w-5/6 mx-auto relative">

                <div className="lg:absolute">
                    <div className="text-4xl font-bold flex">
                        <h1 className="text-primary">Agro</h1>
                        <span>Fusion</span>
                    </div>
                    <div className="text-slate-700">
                        Empowering farmers with real-time insights to protect crops, manage resources, and thrive in any condition
                    </div>
                </div>

                <section
                    className="mt-5"
                    style={{
                        aspectRatio: '1213/667',
                        backgroundColor: 'tomato',
                        maskImage:
                            "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                        WebkitMaskImage:
                            "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                    }}
                >
                    <Image src={icons.riceFarming} alt="farming" className="w-full" />
                </section>
            </div>


        </div>
    );
}
