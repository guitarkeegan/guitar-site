import Image from "next/image";
import selfie from "@/public/profile_selfie.jpg";

export default function AboutMe(){
    return (
        <section className="bg-amber-500 px-4 py-12 md:grid md:grid-cols-2 flex flex-col md:gap-4 mt-[300px]">
            <div id="headshot-wrapper" className="flex items-center justify-center">
                <Image
                 src={selfie}
                 width={600}
                 height={600}
                 alt="selfie"
                 className="border-black border-2 border-solid"
                 />
            </div>
            <div id="about-me-wrapper" className="lg:text-3xl md:text-2xl text-xl flex items-center">
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    )
}