import { PT_Mono } from "next/font/google";

const ptMono = PT_Mono({ subsets: ["latin"], weight: "400" });

export default function Btw() {
  return (
    <section
      id="btw-page"
      className={`bg-black h-[650px] text-xl flex justify-center items-center ${ptMono.className}`}
    >
      <div>
        <h1>secret page</h1>
        <input type="text" />
      </div>
    </section>
  );
}
