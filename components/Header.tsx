import Link from "next/link"

export default function Header(){
    return (
        <header className="text-white bg-amber-500 flex flex-row items-center justify-between text-3xl px-4 py-12">
            <div><Link href="/">Home</Link></div>
            <div>
                <Link className="lg:hover:opacity-50 transition-opacity ease-in duration-300" href="/btw">I also code btw</Link>
            </div>
        </header>
    )
}