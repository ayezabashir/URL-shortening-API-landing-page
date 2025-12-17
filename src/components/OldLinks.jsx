const OldLinks = () => {
    const handleCopy = () => {

    }
    return (
        <section className='container py-1'>
            <div className="flex flex-col md:flex-row justify-between items-center rounded-md bg-white">
                <p className="text-black font-semibold wrap-anywhere w-full md:w-auto py-2.5 px-4 border-b-2 md:border-0 border-light-gray">https://frontendmentor.com</p>
                <div className="py-2.5 px-4 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-blue font-semibold wrap-anywhere">https://rel/k4uy</p>
                    <button onClick={handleCopy} type='button' className='bg-blue hover:opacity-90 cursor-pointer text-white py-1.5 px-5 rounded-md font-semibold '>
                        Copy
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OldLinks