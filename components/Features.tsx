export default function Features(){
    return (
        <section className="p-4 flex md:flex-row flex-col items-center  justify-evenly gap-2 my-[200px] text-3xl">
            <div className="balls flex flex-col justify-center items-center lg:hover:bg-amber-500 transition-bg ease-in-out duration-500 rounded-full lg:w-[400px] lg:h-[400px] w-[280px] h-[280px] bg-slate-200">
                <h3 className="ball-1-title">Experienced</h3>
                <p>20 years of teaching experience</p>
                </div>
            <div className="balls flex flex-col justify-center items-center lg:hover:bg-amber-500 transition-bg ease-in-out duration-500 rounded-full lg:w-[400px] lg:h-[400px] w-[280px] h-[280px] bg-slate-200">
                <h3 className="ball-2-title">Student Focused</h3>
                <p>Learn the music that inpires you</p>
                </div>
            <div className="balls flex flex-col justify-center items-center lg:hover:bg-amber-500 transition-bg ease-in-out duration-500 rounded-full lg:w-[400px] lg:h-[400px] w-[280px] h-[280px] bg-slate-200">
                <h3 className="ball-3-title">Goal Oriented</h3>
                <p>Lets plan your first gig!</p>
                </div>
        </section>
    )
}