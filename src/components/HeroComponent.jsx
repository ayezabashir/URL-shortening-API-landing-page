import deskheroimg from "/illustration-working.svg";

const HeroComponent = () => {
  return (
    <main className='container'>
        <section className="flex justify-between items-center gap-10">
            <div className="max-w-125">
                <h1 className="text-6xl leading-16 font-bold text-black mb-4">More than just short links</h1>
                <p className="text-xl text-gray mb-8">Build your brand's recognition and get detailed insights on how your links are performing</p>
                <button className='bg-blue text-white py-2 px-5 rounded-3xl font-bold'>Get Started</button>
            </div>
            <div>
                <img src={deskheroimg} alt="background image" />
            </div>
        </section>
    </main>
  )
}

export default HeroComponent