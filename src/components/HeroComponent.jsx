import deskheroimg from "/illustration-working.svg";

const HeroComponent = () => {
  return (
    <main className='container  overflow-hidden'>
        <section className="my-15 relative flex flex-col-reverse md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-start max-w-full md:max-w-120 lg:max-w-150 xl:max-w-170">
                <h1 className="text-[40px] lg:text-[75px] xl:text-[80px]  font-extrabold tracking-tighter text-black mb-4">More than just shorter links</h1>
                <p className="md:max-w-90 lg:max-w-110 xl:max-w-125.5 text-xl md:text-2xl text-gray mb-8">Build your brand's recognition and get detailed insights on how your links are performing</p>
                <button className='bg-blue hover:opacity-90 cursor-pointer text-white py-4 px-10 rounded-4xl text-xl font-bold'>Get Started</button>
            </div>
            <div className="static md:absolute md:right-0 md:translate-x-1/4">
                <img className="w-full max-w-150 md:max-w-120 lg:max-w-175"  src={deskheroimg} alt="background image" />
            </div>
        </section>
    </main>
  )
}

export default HeroComponent