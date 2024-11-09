import About from "@/components/home/About";
import FutureGoals from "@/components/home/FutureGoals";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Team from "@/components/home/Team";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar";

export default function page() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Hero />
                <About />
            </div>
            <HowItWorks />
            <FutureGoals />
            <Team />
            <Footer />
        </div>
    );
}
