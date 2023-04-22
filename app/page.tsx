import AboutMe from "@/components/AboutMe";
import Features from "@/components/Features";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main>
      {/* main title */}
      <section id="title" className="cursor-default flex justify-center items-center flex-col lg:h-[700px] md:h-[600px] h-[600px]">
        <h1 className="md:text-8xl sm:text-6xl text-4xl">Keegan Anglim</h1>
        <h2 className="md:text-4xl sm:text-3xl text-2xl">Guitar</h2>
      </section>
      <Welcome />
      <AboutMe />
      <Features />
    </main>
  )
}
