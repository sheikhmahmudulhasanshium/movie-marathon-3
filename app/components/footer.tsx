import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowBigUpIcon } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/logo-full.png";
import Link from "next/link";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        setIsVisible(window.scrollY > window.innerHeight * 0.3);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className="bg-muted-foreground flex flex-col justify-center items-center w-full py-8 border-t border-gray-700 relative">
            <div className="flex flex-col justify-center items-center w-full text-center text-white">
                <div className="flex justify-center w-10/12 gap-8 items-start">
                    <div className="w-6/12 flex">
                        <Image 
                            src={Logo} 
                            alt="Logo" 
                            height={300} 
                            width={300} 
                            className="w-full"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // Adjust sizes based on your layout
                        />
                    </div>
                    <Separator orientation="vertical" className="border opacity-30 min-h-40 h-60 max-h-full mx-1 flex w-1" />
                    <h6 className="flex w-6/12 text-sm text-accent justify-start text-justify">
                    Movie Marathon is the ultimate app for movie enthusiasts who love to binge-watch their favorite films and TV shows. Whether you&apos;re planning a cozy night in or an epic weekend of non-stop entertainment, Movie Marathon helps you organize and enhance your viewing experience. With a vast library of movies and TV series across various genres, personalized recommendations, and seamless streaming options, you can easily discover new favorites and revisit classics.
                    </h6>
                </div>
            </div>
            <nav className="flex flex-wrap justify-center items-center gap-4 pt-8 text-xl space-x-2 px-6">
                <div className="hover:underline hover:opacity-85">
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </div>
                <div className="hover:underline hover:opacity-85">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </div>
                <div className="hover:underline hover:opacity-85">
                    <Link href="/sitemap.xml">Sitemap</Link>
                </div>
                <div className="hover:underline hover:opacity-85">
                    <Link href="mailto:officials.shium@gmail.com">Contact</Link>
                </div>
            </nav>
            <div className="flex flex-col justify-center items-center my-0">
                {isVisible && (
                    <Button 
                        onClick={scrollToTop} 
                        variant={"outline"} 
                        size={"lg"} 
                        className="rounded-full p-3 m-2 bg-gray-600 hover:bg-gray-500 transition-colors duration-200 shadow-lg"
                    >
                        <ArrowBigUpIcon className="text-white w-8 h-8" />
                    </Button>
                )}
            </div>
            <Separator className="my-4 border-gray-600" /> 
            <div className="mt-2 mb-1 text-center flex justify-center items-center w-full text-secondary">
                <p className="text-base">
                    &copy; 2024 Movie Marathon. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
